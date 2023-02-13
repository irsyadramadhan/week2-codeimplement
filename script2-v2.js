let potongan, biayaPajak;
let biayaAntar = 0;

function pijarfood(harga, voucher, jarak, pajak){
    // voucher
    if(voucher === 'PIJARFOOD5'){
        if(harga >= 50000){
            if(harga * 0.5 >= 50000){
                potongan = 50000;
            }else{
                potongan = harga * 0.5;
            }
        }else{
            potongan = 0;
        }
    }else if(voucher === 'DITRAKTIRPIJAR'){
        if(harga >= 25000){
            if(harga * 0.6 >= 30000){
                potongan = 30000;
            }else{
                potongan = harga * 0.6;
            }
        }else{
            potongan = 0;
        }
    }else{
        potongan = 0;
    }
    // jarak
    if(jarak <= 2){
        biayaAntar += 5000;
    }else{
        for(let i = 0; i < (jarak - 2); i++){
            biayaAntar += 3000;
        }
        biayaAntar += 5000;
    }
    // pajak
    if(pajak === true){
        biayaPajak = harga * 0.05;
    }else{
        biayaPajak = 0;
    }
    // cetak ke console
    console.log(`Harga: ${harga}`);
    console.log(`Potongan: ${potongan}`);
    console.log(`Biaya Antar: ${biayaAntar}`);
    console.log(`Pajak: ${biayaPajak}`);
    console.log(`Sub Total: ${harga - potongan + biayaAntar + biayaPajak}`);
}

// invoke function
pijarfood(75000, 'PIJARFOOD5', 5, true);