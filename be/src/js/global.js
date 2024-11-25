$(document).ready(function () {
    $("#togglePassword").click(function () {
        const passwordInput = $("#password");
        const passwordIcon = $("#togglePasswordIcon");
        if (passwordInput.attr("type") === "password") {
            passwordInput.attr("type", "text");
            passwordIcon.removeClass("bi-eye-slash").addClass("bi-eye");
        } else {
            passwordInput.attr("type", "password");
            passwordIcon.removeClass("bi-eye").addClass("bi-eye-slash");
        }
    });
});