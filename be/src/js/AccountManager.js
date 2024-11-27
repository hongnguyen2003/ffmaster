$(document).ready(function () {

    const readOnly = false; // Add this variable to control read-only mode
    const IMGARR = [];
    Dropzone.autoDiscover = false;
    const myDropzone = new Dropzone("#image-dropzone", {
        url: "/api/upload",
        method: "post",
        paramName: "file",
        maxFilesize: 10, // MB
        acceptedFiles: "image/*",
        addRemoveLinks: !readOnly, // Disable remove links if read-only
        clickable: !readOnly, // Disable clickable if read-only
        init: function () {
            const existingImages = IMGARR;
            existingImages.forEach((imageUrl) => {
                const mockFile = {
                    name: imageUrl,
                    size: 12345,
                    status: Dropzone.SUCCESS,
                    accepted: true,
                };
                this.emit("addedfile", mockFile);
                this.emit("thumbnail", mockFile, imageUrl);
                this.emit("complete", mockFile);
                this.files.push(mockFile);
            });
        },
        success: function (file, response) {
            IMGARR.push(response.fileNames[0]);
            file.name = response.fileNames[0]; // Set the file name as returned from the server
            this.emit("complete", file);
        }
    });
    function getUploadedImages() {
        return myDropzone.files.map(file => file);
    }
    if (!readOnly) {
        myDropzone.on("addedfile", (file) => {
            console.log(`File added: ${file.name}`);
        });

        myDropzone.on("removedfile", (file) => {
            // if (file.status === "success") {
            //     fetch("/api/delete", {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify({ filePath: file.name }),
            //     });
            // }
        });
    }


   
    $('#infoModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const userInfo = button.data('user');
        const modal = $(this);
        const mode = button.data('mode');
        if (mode === 'new') {

            modal.find('.modal-body input').attr('disabled', false);
            modal.find('.modal-body select').attr('disabled', false);
            modal.find('.modal-body #username').val("");
            modal.find('.modal-body #password').val("");
            modal.find('.modal-body #fullname').val("");
            modal.find('.modal-body #address').val("");
            modal.find('.modal-body #email').val("");
            modal.find('.modal-body #sex').val("Nam");
            console.log(modal.find('.modal-footer #save-btn'));
            modal.find('.modal-footer #save-btn').data('mode', 'new');

            modal.find('.modal-footer #save-btn').text('Thêm');
            modal.find('.modal-footer #save-btn').show();

            return $('#infoModal .modal-title').text('Thêm người dùng');
        }

        modal.find('.modal-footer #save-btn').text('Lưu');

        modal.find('.modal-body #username').val(userInfo.username);
        modal.find('.modal-body #password').val(userInfo.password);
        modal.find('.modal-body #fullname').val(userInfo.fullname);
        modal.find('.modal-body #address').val(userInfo.address);
        modal.find('.modal-body #email').val(userInfo.email);
        modal.find('.modal-body #sex').val(userInfo.sex);

        if (mode === 'view') {
            modal.find('.modal-title').text('Xem thông tin của ' + userInfo.ten);
            modal.find('.modal-body input').attr('disabled', true);
            modal.find('.modal-body select').attr('disabled', true);
            modal.find('.modal-body #controlImage').hide();
            modal.find('.modal-footer #save-btn').hide();

        } else if (mode === 'edit') {
            modal.find('.modal-footer #save-btn').data('mode', 'edit');

            modal.find('.modal-title').text('Sửa thông tin của ' + userInfo.username);
            modal.find('.modal-body #controlImage').show();

            modal.find('.modal-body input').attr('disabled', false);
            modal.find('.modal-body select').attr('disabled', false);
            modal.find('.modal-body #username').attr('disabled', true);

            modal.find('.modal-footer #save-btn').show();

        }


    });




    $('#delModel').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const userId = button.data('id');

        const modal = $(this);
        modal.find('.modal-footer #save-btn').data('id', userId);

        modal.find('.modal-body').text(`Bạn có chắc chắn muốn xóa ${userId} không?`);

    });


    $('#infoModal #save-btn').click(async function (e) {
        console.log(getUploadedImages() );
        
        const button = $(e.target);
        const mode = button.data('mode');

        const username = $('#infoModal #username').val();
        const password = $('#infoModal #password').val();
        const fullname = $('#infoModal #fullname').val();
        const address = $('#infoModal #address').val();
        const email = $('#infoModal #email').val();
        const sex = $('#infoModal #sex').val();
        const user = {
            username,
            password,
            fullname,
            address,
            email,
            sex
        }
        if (mode === 'new') {
            const newUserFetch = await fetch('/api/addUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (newUserFetch.status === 200) {
                alert('Thêm thành công');
                location.reload();
            } else {
                const message = await newUserFetch.json();
                switch (message.message) {
                    case 'USER_DUPLICATE':
                        return alert('Trùng username');
                    case 'EMAIL_DUPLICATE':
                        return alert('Trùng email');
                    default:
                        return alert('Thêm thất bại');
                }
            }
        } else if (mode === 'edit') {
            const editUserFetch = await fetch('/api/updateUser', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (editUserFetch.status === 200) {
                alert('Sửa thành công');
                return location.reload();
            } else {
                return alert('Sửa thất bại');
            }
        }
    });
    $('#delModel .modal-footer #save-btn').click(async function (e) {
        const button = $(event.target);
        button.prop('disabled', true);
        const fetchData = await fetch('/api/delUser', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: button.data('id') })
        });
        if (fetchData.status === 200) {
            alert('Xóa thành công');
            location.reload();
        } else {
            alert('Xóa thất bại');
        }
        button.prop('disabled', false);

    });
});