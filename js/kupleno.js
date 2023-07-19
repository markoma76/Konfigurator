document.querySelector('#pr_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#hl_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#mp_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#gk_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#mm_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#hd1_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#hd2_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#sd1_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#sd2_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#tw_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#pw_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#cd_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#mn_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#kb_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#mi_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#zv_prodavac').addEventListener('change',IzmeniBoju);
document.querySelector('#sl_prodavac').addEventListener('change',IzmeniBoju);

let k_proc = document.querySelector('#pr_prodavac');
let k_hlad = document.querySelector('#hl_prodavac');
let k_ploc = document.querySelector('#mp_prodavac');
let k_kart = document.querySelector('#gk_prodavac');
let k_memo = document.querySelector('#mm_prodavac');
let k_hdd1 = document.querySelector('#hd1_prodavac');
let k_hdd2 = document.querySelector('#hd2_prodavac');
let k_ssd1 = document.querySelector('#sd1_prodavac');
let k_ssd2 = document.querySelector('#sd2_prodavac');
let k_tove = document.querySelector('#tw_prodavac');
let k_napa = document.querySelector('#pw_prodavac');
let k_opti = document.querySelector('#cd_prodavac');
let k_moni = document.querySelector('#mn_prodavac');
let k_tast = document.querySelector('#kb_prodavac');
let k_miso = document.querySelector('#mi_prodavac');
let k_zvuk = document.querySelector('#zv_prodavac');
let k_slus = document.querySelector('#sl_prodavac');

function IzmeniBoju(){
    if ((k_proc.value).toUpperCase() == 'KUPLJENO') {
        k_proc.style.color = 'rgb(7, 248, 7)'
    }else{k_proc.style.color = 'white'};

    if ((k_hlad.value).toUpperCase() == 'KUPLJENO') {
        k_hlad.style.color = 'rgb(7, 248, 7)'
    }else{k_hlad.style.color = 'white'};

    if ((k_ploc.value).toUpperCase() == 'KUPLJENO') {
        k_ploc.style.color = 'rgb(7, 248, 7)'
    }else{k_ploc.style.color = 'white'};

    if ((k_kart.value).toUpperCase() == 'KUPLJENO') {
        k_kart.style.color = 'rgb(7, 248, 7)'
    }else{k_kart.style.color = 'white'};

    if ((k_memo.value).toUpperCase() == 'KUPLJENO') {
        k_memo.style.color = 'rgb(7, 248, 7)'
    }else{k_memo.style.color = 'white'};

    if ((k_hdd1.value).toUpperCase() == 'KUPLJENO') {
        k_hdd1.style.color = 'rgb(7, 248, 7)'
    }else{k_hdd1.style.color = 'white'};

    if ((k_hdd2.value).toUpperCase() == 'KUPLJENO') {
        k_hdd2.style.color = 'rgb(7, 248, 7)'
    }else{k_hdd2.style.color = 'white'};

    if ((k_ssd1.value).toUpperCase() == 'KUPLJENO') {
        k_ssd1.style.color = 'rgb(7, 248, 7)'
    }else{k_ssd1.style.color = 'white'};

    if ((k_ssd2.value).toUpperCase() == 'KUPLJENO') {
        k_ssd2.style.color = 'rgb(7, 248, 7)'
    }else{k_ssd2.style.color = 'white'};

    if ((k_tove.value).toUpperCase() == 'KUPLJENO') {
        k_tove.style.color = 'rgb(7, 248, 7)'
    }else{k_tove.style.color = 'white'};

    if ((k_napa.value).toUpperCase() == 'KUPLJENO') {
        k_napa.style.color = 'rgb(7, 248, 7)'
    }else{k_napa.style.color = 'white'};

    if ((k_opti.value).toUpperCase() == 'KUPLJENO') {
        k_opti.style.color = 'rgb(7, 248, 7)'
    }else{k_opti.style.color = 'white'};

    if ((k_moni.value).toUpperCase() == 'KUPLJENO') {
        k_moni.style.color = 'rgb(7, 248, 7)'
    }else{k_moni.style.color = 'white'};

    if ((k_tast.value).toUpperCase() == 'KUPLJENO') {
        k_tast.style.color = 'rgb(7, 248, 7)'
    }else{k_tast.style.color = 'white'};

    if ((k_miso.value).toUpperCase() == 'KUPLJENO') {
        k_miso.style.color = 'rgb(7, 248, 7)'
    }else{k_miso.style.color = 'white'};

    if ((k_zvuk.value).toUpperCase() == 'KUPLJENO') {
        k_zvuk.style.color = 'rgb(7, 248, 7)'
    }else{k_zvuk.style.color = 'white'};

    if ((k_slus.value).toUpperCase() == 'KUPLJENO') {
        k_slus.style.color = 'rgb(7, 248, 7)'
    }else{k_slus.style.color = 'white'};
};