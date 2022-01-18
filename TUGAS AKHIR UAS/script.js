// Tambah Kurang Kuantitas Hotel
function incNumber1(){
    var value1 = parseInt(document.getElementById('kuantitas-hotel').value,10);
    value1=isNaN(value1) ? 0 : value1;
    value1++;
    document.getElementById("kuantitas-hotel").value = value1;
}
function decNumber1(){
    var value1 = parseInt(document.getElementById('kuantitas-hotel').value,10);
    value1=isNaN(value1) ? 0 : value1;
    value1--;
    document.getElementById("kuantitas-hotel").value = value1;
}

// Tambah Kurang Kuantitas Pesawat
function incNumber2(){
    var value2 = parseInt(document.getElementById('kuantitas-pesawat').value,10);
    value2=isNaN(value2) ? 0 : value2;
    value2++;
    document.getElementById("kuantitas-pesawat").value = value2;
}
function decNumber2(){
    var value2 = parseInt(document.getElementById('kuantitas-pesawat').value,10);
    value2=isNaN(value2) ? 0 : value2;
    value2--;
    document.getElementById("kuantitas-pesawat").value = value2;
}

// Tambah Kurang Kuantitas Wisata
function incNumber3(){
    var value3 = parseInt(document.getElementById('kuantitas-wisata').value,10);
    value3=isNaN(value3) ? 0 : value3;
    value3++;
    document.getElementById("kuantitas-wisata").value = value3;
}
function decNumber3(){
    var value3 = parseInt(document.getElementById('kuantitas-wisata').value,10);
    value3=isNaN(value3) ? 0 : value3;
    value3--;
    document.getElementById("kuantitas-wisata").value = value3;
}

// Validasi data lengkap login
function validasi_lengkap_login(){
    let user = document.forms["form-login"]["username-email-login"].value;
    let pass = document.forms["form-login"]["password-login"].value;
    if(user!="" && pass!=""){
        return true;
    }else{
        alert("Data Tidak Lengkap!");
    }
    }
// Validasi data lengkap login
function validasi_lengkap_registrasi(){
    let user2 = document.forms["form-reg"]["username-reg"].value;
    let email2 = document.forms["form-reg"]["email-reg"].value;
    let pass2 = document.forms["form-reg"]["password-reg"].value;
    if(user2!="" && email2!="" && pass2!=""){
        return true;
     }else{
        alert("Data Tidak Lengkap!");
     }
    }