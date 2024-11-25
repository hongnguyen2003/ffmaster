$(document).ready(function () {
    $('#loginform').submit(async function (e) {
        e.preventDefault();
        let clearPayload = {};
        const formData = $(this).serializeArray();
        $.map(formData, function (n, i) {
            clearPayload[n['name']] = n['value'];
        });

        const fetchData = await fetch('/api/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(clearPayload)
        });
        if (fetchData.ok)
         {
            const decoded = await fetchData.json();
            localStorage.setItem('access_token', decoded.access_token);
            localStorage.setItem('refresh_token', decoded.refresh_token);
            location.reload();
         }
        else
            alert('Đăng nhập thất bại');

        });
    });
