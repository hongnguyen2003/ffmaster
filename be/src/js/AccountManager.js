$(document).ready(function () {
    let readOnly = false;
    let IMGARR = [];
    Dropzone.autoDiscover = false;

    const myDropzone = new Dropzone("#image-dropzone", {
        url: "/api/upload",
        method: "post",
        paramName: "file",
        maxFilesize: 10, // MB
        acceptedFiles: "image/*",
        addRemoveLinks: !readOnly,
        clickable: !readOnly,
        init: function () {
            this.on("success", function (file, response) {
                IMGARR.push('/src/imgs/' + response.fileNames[0]);
                file.name = response.fileNames[0];
                this.emit("complete", file);
            });
            this.on("removedfile", function (file) {
                IMGARR = IMGARR.filter((imageUrl) => imageUrl !== file.name);
                console.log(IMGARR);
                
            });
        }
    });

    function updateDropzoneImages(readOnly, imm) {
        myDropzone.options.addRemoveLinks = !readOnly;
        myDropzone.options.clickable = !readOnly;
        myDropzone.removeAllFiles(true);
        imm.forEach((imageUrl) => {
            IMGARR.push(imageUrl);
            const mockFile = { name: imageUrl, size: 12345, status: Dropzone.SUCCESS, accepted: true };
            myDropzone.emit("addedfile", mockFile);
            myDropzone.emit("thumbnail", mockFile, imageUrl);
            myDropzone.emit("complete", mockFile);
            myDropzone.files.push(mockFile);
        });
    }
    let id = 0;
    $('#infoModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const userInfo = button.data('user');
        const modal = $(this);
        const mode = button.data('mode');
        id = userInfo?.id || 0;
        readOnly = (mode === 'view');
        modal.find('.modal-body input,.modal-body textarea, .modal-body select').attr('disabled', readOnly);
        modal.find('.modal-footer #save-btn').toggle(mode !== 'view');
        modal.find('.modal-body #controlImage').toggle(mode !== 'view');

        if (mode === 'new') {
            modal.find('.modal-body input, .modal-body select').val("");
            modal.find('.modal-footer #save-btn').data('mode', 'new').text('Thêm');
            modal.find('.modal-title').text('Thêm sản phẩm mới');
        } else {
            IMGARR = userInfo.hinhanh;
            modal.find('.modal-body #ten').val(userInfo.ten);
            modal.find('.modal-body #price').val(userInfo.gia);
            modal.find('.modal-body #mota').val(userInfo.mota);
            modal.find('.modal-body #the-vo-cu').val(userInfo.thevocuc ? "true" : "false");
            modal.find('.modal-body #reg').val(userInfo.dangky);
            modal.find('.modal-footer #save-btn').data('mode', mode).text(mode === 'edit' ? 'Lưu' : '');
            modal.find('.modal-title').text((mode === 'view' ? 'Xem' : 'Sửa') + ' thông tin của ' + userInfo.ten);
        }
        updateDropzoneImages(readOnly, mode === 'new' ? [] : userInfo.hinhanh); // Ensure this runs every time
    });

    $('#delModel').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const userId = button.data('id');
        const modal = $(this);
        modal.find('.modal-footer #save-btn').data('id', userId);
        modal.find('.modal-body').text(`Bạn có chắc chắn muốn xóa ${userId} không?`);
    });

    $('#infoModal #save-btn').click(async function (e) {
        const button = $(e.target);
        const mode = button.data('mode');
        const user = {
            ten: $('#infoModal #ten').val(),
            gia: $('#infoModal #price').val(),
            mota: $('#infoModal #mota').val(),
            thevocuc: $('#infoModal #the-vo-cu').val() === 'true' ? 1 : 0,
            dangky: $('#infoModal #reg').val(),
            hinhanh: IMGARR,
            id: id
        };

        const url = mode === 'new' ? '/api/createItem' : '/api/updateItem';
        const method = mode === 'new' ? 'POST' : 'PUT';
        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });

        if (response.status === 200) {
            alert(mode === 'new' ? 'Thêm thành công' : 'Sửa thành công');
            IMGARR = [];

            location.reload();
        } else {
            const message = await response.json();
            alert(message.message === 'USER_DUPLICATE' ? 'Trùng ten' : message.message === 'EMAIL_DUPLICATE' ? 'Trùng email' : mode === 'new' ? 'Thêm thất bại' : 'Sửa thất bại');
        }
    });

    $('#delModel .modal-footer #save-btn').click(async function (e) {
        const button = $(e.target);
        button.prop('disabled', true);
        const response = await fetch('/api/deleteItem', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: button.data('id') })
        });
        if (response.status === 200) {
            alert('Xóa thành công');
            location.reload();
        } else {
            alert('Xóa thất bại');
        }
        button.prop('disabled', false);
    });
});