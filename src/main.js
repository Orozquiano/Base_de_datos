
function Registro() {
    const userV = {
        email: document.getElementById('inputEmail4').value,
        password: document.getElementById('inputPassword4').value,
        confirmPassword: document.getElementById('inputPassword4_1').value,
        address: document.getElementById('inputAddress').value,
        // address2: document.getElementById('inputAddress2').value,
        city: document.getElementById('inputCity').value,
        state: document.getElementById('inputState').value,
        zip: document.getElementById('inputZip').value,
        img: document.getElementById('formFile').files
    }
    if(userV.email.length == 0 || userV.password.length == 0 || userV.confirmPassword.length == 0 || userV.address.length == 0 || userV.city.length == 0 || userV.state.length == 0 || userV.zip.length == 0 || userV.img.length == 0){
        // if(userV.file.length==0){
            alert("Llene todos los campos");
        // }else{
        //     alert("Hay una imagen")
        // }
    }else{
        if(userV.password == userV.confirmPassword){
            validation(userV.email,userV.password);
        }else{
            alert("Su contraseña no es igual")
        }
    }
}

function validation(email,password){
    //email
    var expEmail= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expEmail.test(email);
    if(esValido==true){
        alert('El correo es valido');
    }else{
        alert('El correo no es valido');
    }
    //password
    var expPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
    var esvalidoP = expPass.test(password);
    if(esvalidoP == true){
        alert('Contraseña segura');
    }else{
        alert('Tu contraseña no es segura');
    }
    //IMG
//     var uploadFile = obj.files[0];

//     if (!window.FileReader) {
//         alert('El navegador no soporta la lectura de archivos');
//         return;
//     }

//     if (!(/\.(jpg|png|gif)$/i).test(uploadFile.name)) {
//         alert('El archivo a adjuntar no es una imagen');
//     }
//     else {
//         var img = new Image();
//         img.onload = function () {
//             if (this.width.toFixed(0) != 200 && this.height.toFixed(0) != 200) {
//                 alert('Las medidas deben ser: 200 * 200');
//             }
//             else if (uploadFile.size > 20000)
//             {
//                 alert('El peso de la imagen no puede exceder los 200kb')
//             }
//             else {
//                 alert('Imagen correcta :)')                
//             }
//         };
//         img.src = URL.createObjectURL(uploadFile);
//     }                 
}