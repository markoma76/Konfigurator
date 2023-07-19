
 let zbir = 0;

 let procesor_z,hladnjak_z,maticna_z,graficka_z,memorija_z,hard1_z,hard2_z,solid1_z,solid2_z,kuciste_z,napajanje_z,optika_z,monitor_z,tastatura_z,mis_z,zvucnici_z,slusalice_z;

 function Izmeni(){
     procesor_z = Number(document.getElementById('pr_cena').value);
       if (isNaN(procesor_z)) {procesor_z = 0 ; Upozorenje();
        document.getElementById('pr_cena').value = null;};
     hladnjak_z = Number(document.getElementById('hl_cena').value);
     if (isNaN(hladnjak_z)) {hladnjak_z = 0 ; Upozorenje();
        document.getElementById('hl_cena').value = null;};
     maticna_z = Number(document.getElementById('mp_cena').value);
     if (isNaN(maticna_z)) {maticna_z = 0 ; Upozorenje();
        document.getElementById('mp_cena').value = null;};
     graficka_z = Number(document.getElementById('gk_cena').value);
     if (isNaN(graficka_z)) {graficka_z = 0 ; Upozorenje();
        document.getElementById('gk_cena').value = null;};
     memorija_z = Number(document.getElementById('mm_cena').value);
     if (isNaN(memorija_z)) {memorija_z = 0 ; Upozorenje();
        document.getElementById('mm_cena').value = null;};
     hard1_z = Number(document.getElementById('hd1_cena').value);
     if (isNaN(hard1_z)) {hard1_z = 0 ; Upozorenje();
        document.getElementById('hd1_cena').value = null;};
     hard2_z = Number(document.getElementById('hd2_cena').value);
     if (isNaN(hard2_z)) {hard2_z = 0 ; Upozorenje();
        document.getElementById('hd2_cena').value = null;};
     solid1_z = Number(document.getElementById('sd1_cena').value);
     if (isNaN(solid1_z)) {solid1_z = 0 ; Upozorenje();
        document.getElementById('sd1_cena').value = null;};
     solid2_z = Number(document.getElementById('sd2_cena').value);
     if (isNaN(solid2_z)) {solid2_z = 0 ; Upozorenje();
        document.getElementById('sd2_cena').value = null;};
     kuciste_z = Number(document.getElementById('tw_cena').value);
     if (isNaN(kuciste_z)) {kuciste_z = 0 ; Upozorenje();
        document.getElementById('tw_cena').value = null;};
     napajanje_z = Number(document.getElementById('pw_cena').value);
     if (isNaN(napajanje_z)) {napajanje_z = 0 ; Upozorenje();
        document.getElementById('pw_cena').value = null;};
     optika_z = Number(document.getElementById('cd_cena').value);
     if (isNaN(optika_z)) {optika_z = 0 ; Upozorenje();
        document.getElementById('cd_cena').value = null;};
     monitor_z = Number(document.getElementById('mn_cena').value);
     if (isNaN(monitor_z)) {monitor_z = 0 ; Upozorenje();
        document.getElementById('mn_cena').value = null;};
     tastatura_z = Number(document.getElementById('kb_cena').value);
     if (isNaN(tastatura_z)) {tastatura_z = 0 ; Upozorenje();
        document.getElementById('kb_cena').value = null;};
     mis_z = Number(document.getElementById('mi_cena').value);
     if (isNaN(mis_z)) {mis_z = 0 ; Upozorenje();
        document.getElementById('mi_cena').value = null;};
     zvucnici_z = Number(document.getElementById('zv_cena').value);
     if (isNaN(zvucnici_z)) {zvucnici_z = 0 ; Upozorenje();
        document.getElementById('zv_cena').value = null;};
     slusalice_z = Number(document.getElementById('sl_cena').value);
     if (isNaN(slusalice_z)) {slusalice_z = 0 ; Upozorenje();
        document.getElementById('sl_cena').value = null;};

zbir = procesor_z+hladnjak_z+maticna_z+graficka_z+memorija_z+hard1_z+hard2_z+solid1_z+solid2_z+kuciste_z+napajanje_z+optika_z+monitor_z+tastatura_z+mis_z+zvucnici_z+slusalice_z;
    
        document.querySelector('#ukupno_cena').innerHTML = zbir;
    };

function Upozorenje(){
    alert (' Cena mora biti izražena u brojnoj vrednosti !!!')
    return
};    

document.querySelector('#pr_cena').addEventListener('change',Izmeni);
document.querySelector('#hl_cena').addEventListener('change',Izmeni);
document.querySelector('#mp_cena').addEventListener('change',Izmeni);
document.querySelector('#gk_cena').addEventListener('change',Izmeni);
document.querySelector('#mm_cena').addEventListener('change',Izmeni);
document.querySelector('#hd1_cena').addEventListener('change',Izmeni);
document.querySelector('#hd2_cena').addEventListener('change',Izmeni);
document.querySelector('#sd1_cena').addEventListener('change',Izmeni);
document.querySelector('#sd2_cena').addEventListener('change',Izmeni);
document.querySelector('#tw_cena').addEventListener('change',Izmeni);
document.querySelector('#pw_cena').addEventListener('change',Izmeni);
document.querySelector('#cd_cena').addEventListener('change',Izmeni);
document.querySelector('#mn_cena').addEventListener('change',Izmeni);
document.querySelector('#kb_cena').addEventListener('change',Izmeni);
document.querySelector('#mi_cena').addEventListener('change',Izmeni);
document.querySelector('#zv_cena').addEventListener('change',Izmeni);
document.querySelector('#sl_cena').addEventListener('change',Izmeni);


