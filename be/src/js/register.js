$(document).ready(function () {
    $('#re-password').on('input', function () {
        const password = $('#password').val();
        const rePassword = $(this).val();
        if (password !== rePassword) {
            $('#re-password').next('#re-password-feedback').css('opacity', '1');
        } else {
            $('#re-password').next('#re-password-feedback').css('opacity', '0');
        }
        if (rePassword === '') $('#re-password').next('#re-password-feedback').css('opacity', '0');

    });
    $('#register-form').submit(async function (e) {
        e.preventDefault();
        let clearPayload = {};
        const formData = $(this).serializeArray();
        $.map(formData, function (n, i) {
            clearPayload[n['name']] = n['value'];
        });
        if (clearPayload.password !== $('#re-password').val())
            return $('#re-password').next('#re-password-feedback').css('opacity', '1');
        if (!clearPayload.username) {
            $('#username-feedback').html('Tên đăng nhập không được để trống');
            return $('#username-feedback').css('opacity', '1');
        }
        const fetchData = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clearPayload)
        });
        if (fetchData.ok) {
            alert('Đăng ký thành công');
            window.location.href = '/login';
        }
        else {
            const message = await fetchData.json();
            switch (message.message) {
                case 'USER_DUPLICATE':
                    return $('#username-feedback').css('opacity', '1');
                case 'EMAIL_DUPLICATE':
                    return $('#email-feedback').css('opacity', '1');
                default:
                    return alert('Thêm thất bại');
            }
        }

    });
});
