$(document).ready(function() {
    $("#login").validate({
      rules: {
        email : {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 3
        }
      },
      messages : {
        password: {
          minlength: "El nombre debe ser más largo",
          required: "Este campo es obligatorio"
        },
        email: {
            email: "Debe tener sintaxis de email",
            required: "Este campo es obligatorio"
        }
      }
    });
  });