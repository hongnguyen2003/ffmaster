$(document).ready(function () {

    $('#infoModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const userInfo = button.data('user');
        const modal = $(this);

        const mode = button.data('mode');

        modal.find('.modal-footer #save-btn').text('Lưu');

        modal.find('.modal-body #username').val(userInfo.username);
        modal.find('.modal-body #password').val(userInfo.password);
        modal.find('.modal-body #fullname').val(userInfo.fullname);
        modal.find('.modal-body #address').val(userInfo.address);
        modal.find('.modal-body #email').val(userInfo.email);
        modal.find('.modal-body #sex').val(userInfo.sex);

        if (mode === 'view') {
            modal.find('.modal-title').text('Xem thông tin của ' + userInfo.username);
            modal.find('.modal-body input').attr('disabled', true);
            modal.find('.modal-body select').attr('disabled', true);

            modal.find('.modal-footer #save-btn').hide();

        }


    });



    let mode = '';
    $('#delModel').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const userId = button.data('id');
        mode = button.data('mode');
        const modal = $(this);
        modal.find('.modal-footer #save-btn').data('id', userId);

        modal.find('.modal-body').text(`Bạn có chắc chắn muốn ban ${userId} không?`);


    });



    $('#delModel .modal-footer #save-btn').click(async function (e) {
        const button = $(event.target);
        button.prop('disabled', true);


        const fetchData = await fetch('/api/ban', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: button.data('id'), status: mode == "unban" ? 0 : 1 })
        });
        if (fetchData.status === 200) {
            alert('Cập nhật thành công');
            location.reload();
        } else {
            alert('Cập nhật thất bại');
        }
        button.prop('disabled', false);
    });
});