$(document).ready(function () {
    $('#profileform').submit(async function (e) {
        e.preventDefault();
        let clearPayload = {};
        const formData = $(this).serializeArray();
        $.map(formData, function (n, i) {
            clearPayload[n['name']] = n['value'];
        });


        const editUserFetch = await fetch('/api/updateUser', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clearPayload)
        });

        if (editUserFetch.status === 200) {
            alert('Sửa thành công');
            location.reload();
        } else {
            alert('Sửa thất bại');
        }

    });

    $('#deleteUser').click(async function (e) {
        e.preventDefault();

        const userActice = confirm('Bạn có chắc chắn muốn xóa?');
        if (!userActice) {
            return;
        }
        $(this).prop('disabled', true);
        const username = $('#username').val();
        const fetchData = await fetch('/api/delUser', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: username })
        });
        if (fetchData.status === 200) {
            alert('Xóa thành công');
            location.reload();
        } else {
            alert('Xóa thất bại');
        }
        $(this).prop('disabled', false);
    });
});

