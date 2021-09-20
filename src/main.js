
function Registro() {
    const userV = {
        email: document.getElementById('inputEmail4').value,
        password: document.getElementById('inputPassword4').value,
        confirmPassword: document.getElementById('inputPassword4_1').value,
        address: document.getElementById('inputAddress').value,
        // address2: document.getElementById('inputAddress2').value,
        city: document.getElementById('inputCity').value,
        state: document.getElementById('inputState').value,
        zip: document.getElementById('inputZip').value
    }
    if(userV.email.length == 0 || userV.password.length == 0 || userV.confirmPassword.length == 0 || userV.address.length == 0 || userV.city.length == 0 || userV.state.length == 0 || userV.zip.length == 0){
        alert("Llene todos los campos");
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

}