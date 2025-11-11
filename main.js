/* Masih belajar bang jadi code nya masih kurang optimal**/
function pesan(){
    const input = document.getElementById("inputMinuman").value.trim().toLowerCase() // Buat input text dengan Id
    const status = document.getElementById("status") // status untuk setTimeout


    // Fungsinya untuk menampil kan status pesanan dan delay waktu penyajian
    function dapur(nama, waktu){
        status.textContent = `Pesanan ${nama} sedang di proses...`
        setTimeout (() => status.textContent = `Pesanan ${nama} sudah selesai ✅`, waktu)
    }

    // logika dapur :V
    if (input === 'kopi'){
        dapur('Kopi', 5000)
        document.getElementById("image").src = "Image-Menu-js/Kopi.png"
    }
    else if (input === 'esteh'){
        dapur('Esteh', 3800)
        document.getElementById("image").src = "Image-Menu-js/esteh.png"
    }
    else if (input === 'boba'){
        dapur('Boba', 3800)
        document.getElementById("image").src = "Image-Menu-js/boba.png"
    }
    else if (input === 'matcha'){
        dapur('Matcha', 3800)
        document.getElementById("image").src = "Image-Menu-js/matcha.png"
    }
    else {
        status.textContent = 'Minuman tidak tersedia'
    }
}


