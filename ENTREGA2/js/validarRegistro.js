$(document).ready(function() {
    $("#signup").validate({
      rules: {
        name : {
          required: true,
          minlength: 3
        },
        new_email: {
          required: true,
          email: true
        },
        last_name: {
            required: true,
            minlength: 3
        },
        birthdate: {
            required: true,
            date: true
        },
        new_password:{
            required: true
        },
        new_password_again: {
            required: true,
            equalTo: "#new_password"
        }
      },
      messages : {
        name: {
          minlength: "El nombre debe ser más largo",
          required: "Este campo es obligatorio"
        },
        new_email: {
            email: "Debe tener sintaxis de email",
            required: "Este campo es obligatorio"
        },
        last_name: {
          minlength: "El apellido debe ser más largo",
          required: "Este campo es obligatorio"
        },
        birthdate: {
            date: "Debe ser una fecha válida",
            required: "Este campo es obligatorio"
        },
        new_password_again: {
            equalTo: "Las contraseñas no coinciden",
            required: "Este campo es obligatorio"
        },
        new_password: {
            required: "Este campo es obligatorio"
        }
      }
    });
  });