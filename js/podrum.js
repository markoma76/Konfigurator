let smesti_ime,total_s,dodaj_div,indeks,tekstualna,original,datum,zamena

let brisan = document.getElementById('divovi');





document.querySelector('#podrum').addEventListener('click',Aktiva);

function Aktiva(){
    document.querySelector('#ram').style.display = 'inline-block';
    document.querySelector('#linija2').addEventListener('click',OkvirS);
    document.querySelector('#linija3').addEventListener('click',Pozovi);
    document.querySelector('#linija4').addEventListener('click',Obrisi);
    document.querySelector('#linija5').addEventListener('click',Zatvori);


};

function OkvirS(){
    document.querySelector('#upit_kon').style.display = 'inline';
};

function Smesti(){
    datum = new Date().toLocaleDateString('de-DE',{year: 'numeric', month: 'numeric', day: 'numeric' });
    smesti_ime = document.querySelector('#naziv_kon').value + ' ' + '('+ datum + ')';
    document.querySelector('#naziv_kon').value = null;
    document.querySelector('#upit_kon').style.display = 'none';
    document.querySelector('#ram').style.display = 'none';

    konfiguracija =   {
        procesor : {
            ime : document.getElementById('crc').value,
            oznaka : document.getElementById('pr_oznaka').value,
            prodavac : document.getElementById('pr_prodavac').value,
            cena : Number(document.getElementById('pr_cena').value),
        },
    
        kuler : {
            ime : document.getElementById('cool').value,
            oznaka : document.getElementById('mm_oznaka').value,
            prodavac : document.getElementById('mm_prodavac').value,
            cena : Number(document.getElementById('mm_cena').value),
        },
    
        maticna : {
            ime : document.getElementById('ploca').value,
            oznaka : document.getElementById('mp_oznaka').value,
            prodavac : document.getElementById('mp_prodavac').value,
            cena : Number(document.getElementById('mp_cena').value),
        },
    
        graficka : {
            ime : document.getElementById('grafika').value,
            oznaka : document.getElementById('gk_oznaka').value,
            prodavac : document.getElementById('gk_prodavac').value,
            cena : Number(document.getElementById('gk_cena').value),
        },
    
        memorija : {
            ime : document.getElementById('mems').value,
            oznaka : document.getElementById('mm_oznaka').value,
            prodavac : document.getElementById('mm_prodavac').value,
            cena : Number(document.getElementById('mm_cena').value),
        },
    
        hdd1 : {
            ime : document.getElementById('hard1').value,
            oznaka : document.getElementById('hd1_oznaka').value,
            prodavac : document.getElementById('hd1_prodavac').value,
            cena : Number(document.getElementById('hd1_cena').value),
        },
    
        ssd1 : {
            ime : document.getElementById('solid1').value,
            oznaka : document.getElementById('sd1_oznaka').value,
            prodavac : document.getElementById('sd1_prodavac').value,
            cena : Number(document.getElementById('sd1_cena').value),
        },
    
        hdd2 : {
            ime : document.getElementById('hard2').value,
            oznaka : document.getElementById('hd2_oznaka').value,
            prodavac : document.getElementById('hd2_prodavac').value,
            cena : Number(document.getElementById('hd2_cena').value),
        },
    
        ssd2 : {
            ime : document.getElementById('solid2').value,
            oznaka : document.getElementById('sd2_oznaka').value,
            prodavac : document.getElementById('sd2_prodavac').value,
            cena : Number(document.getElementById('sd2_cena').value),
        },
    
        kuciste : {
            ime : document.getElementById('tower').value,
            oznaka : document.getElementById('tw_oznaka').value,
            prodavac : document.getElementById('tw_prodavac').value,
            cena : Number(document.getElementById('tw_cena').value),
        },
    
        napajanje : {
            ime : document.getElementById('pow').value,
            oznaka : document.getElementById('pw_oznaka').value,
            prodavac : document.getElementById('pw_prodavac').value,
            cena : Number(document.getElementById('pw_cena').value),
        },
    
        optika : {
            ime : document.getElementById('cd').value,
            oznaka : document.getElementById('cd_oznaka').value,
            prodavac : document.getElementById('cd_prodavac').value,
            cena : Number(document.getElementById('cd_cena').value),
        },
    
        monitor : {
            ime : document.getElementById('mon').value,
            oznaka : document.getElementById('mn_oznaka').value,
            prodavac : document.getElementById('mn_prodavac').value,
            cena : Number(document.getElementById('mn_cena').value),
        },
    
        tastatura : {
            ime : document.getElementById('kybrd').value,
            oznaka : document.getElementById('kb_oznaka').value,
            prodavac : document.getElementById('kb_prodavac').value,
            cena : Number(document.getElementById('kb_cena').value),
        },
    
        mis : {
            ime : document.getElementById('mose').value,
            oznaka : document.getElementById('mi_oznaka').value,
            prodavac : document.getElementById('mi_prodavac').value,
            cena : Number(document.getElementById('mi_cena').value),
        },
    
        zvucnici : {
            ime : document.getElementById('sound').value,
            oznaka : document.getElementById('zv_oznaka').value,
            prodavac : document.getElementById('zv_prodavac').value,
            cena : Number(document.getElementById('zv_cena').value),
        },
    
        slusalice : {
            ime : document.getElementById('slusa').value,
            oznaka : document.getElementById('sl_oznaka').value,
            prodavac : document.getElementById('sl_prodavac').value,
            cena : Number(document.getElementById('sl_cena').value),
        },

        cena : zbir,
        
                            };
localStorage.setItem(smesti_ime,JSON.stringify(konfiguracija)) ;                           

};

function Pozovi(){
    while (brisan.firstChild) { brisan.removeChild(brisan.firstChild)};
  document.querySelector('#ram').style.display = 'none';
  document.querySelector('#ostava_kon').style.display = 'inline';
 

  for(indeks =0 ; indeks < localStorage.length ; indeks++){

    dodaj_div =document.createElement('div');
    dodaj_div.innerHTML = localStorage.key(indeks);
    dodaj_div.setAttribute('id',indeks);
    dodaj_div.setAttribute('class','kanta');
    dodaj_div.setAttribute('onClick','BazaLocal(this.id)')
    document.getElementById('divovi').appendChild(dodaj_div);

  }

};

function BazaLocal(numa){
    
    while (brisan.firstChild) {
        brisan.removeChild(brisan.firstChild);
      }
    
    
    tekstualna = localStorage.getItem(localStorage.key(numa));
    original = JSON.parse(tekstualna);
    document.querySelector('#ostava_kon').style.display = 'none';

document.getElementById('crc').value = original.procesor.ime;
document.getElementById('pr_oznaka').value = original.procesor.oznaka;
document.getElementById('pr_prodavac').value = original.procesor.prodavac;
document.getElementById('pr_cena').value = original.procesor.cena;

document.getElementById('cool').value = original.kuler.ime;
document.getElementById('hl_oznaka').value = original.kuler.oznaka;
document.getElementById('hl_prodavac').value = original.kuler.prodavac;
document.getElementById('hl_cena').value = original.kuler.cena;

document.getElementById('ploca').value = original.maticna.ime;
document.getElementById('mp_oznaka').value = original.maticna.oznaka;
document.getElementById('mp_prodavac').value = original.maticna.prodavac;
document.getElementById('mp_cena').value = original.maticna.cena;

document.getElementById('grafika').value = original.graficka.ime;
document.getElementById('gk_oznaka').value = original.graficka.oznaka;
document.getElementById('gk_prodavac').value = original.graficka.prodavac;
document.getElementById('gk_cena').value = original.graficka.cena;

document.getElementById('mems').value = original.memorija.ime;
document.getElementById('mm_oznaka').value = original.memorija.oznaka;
document.getElementById('mm_prodavac').value = original.memorija.prodavac;
document.getElementById('mm_cena').value = original.memorija.cena;

document.getElementById('hard1').value = original.hdd1.ime;
document.getElementById('hd1_oznaka').value = original.hdd1.oznaka;
document.getElementById('hd1_prodavac').value = original.hdd1.prodavac;
document.getElementById('hd1_cena').value = original.hdd1.cena;

document.getElementById('solid1').value = original.ssd1.ime;
document.getElementById('sd1_oznaka').value = original.ssd1.oznaka;
document.getElementById('sd1_prodavac').value = original.ssd1.prodavac;
document.getElementById('sd1_cena').value = original.ssd1.cena;

document.getElementById('hard2').value = original.hdd2.ime;
document.getElementById('hd2_oznaka').value = original.hdd2.oznaka;
document.getElementById('hd2_prodavac').value = original.hdd2.prodavac;
document.getElementById('hd2_cena').value = original.hdd2.cena;

document.getElementById('solid2').value = original.ssd2.ime;
document.getElementById('sd2_oznaka').value = original.ssd2.oznaka;
document.getElementById('sd2_prodavac').value = original.ssd2.prodavac;
document.getElementById('sd2_cena').value = original.ssd2.cena;

document.getElementById('tower').value = original.kuciste.ime;
document.getElementById('tw_oznaka').value = original.kuciste.oznaka;
document.getElementById('tw_prodavac').value = original.kuciste.prodavac;
document.getElementById('tw_cena').value = original.kuciste.cena;

document.getElementById('pow').value = original.napajanje.ime;
document.getElementById('pw_oznaka').value = original.napajanje.oznaka;
document.getElementById('pw_prodavac').value = original.napajanje.prodavac;
document.getElementById('pw_cena').value = original.napajanje.cena;

document.getElementById('cd').value = original.optika.ime;
document.getElementById('cd_oznaka').value = original.optika.oznaka;
document.getElementById('cd_prodavac').value = original.optika.prodavac;
document.getElementById('cd_cena').value = original.optika.cena;

document.getElementById('mon').value = original.monitor.ime;
document.getElementById('mn_oznaka').value = original.monitor.oznaka;
document.getElementById('mn_prodavac').value = original.monitor.prodavac;
document.getElementById('mn_cena').value = original.monitor.cena;

document.getElementById('kybrd').value = original.tastatura.ime;
document.getElementById('kb_oznaka').value = original.tastatura.oznaka;
document.getElementById('kb_prodavac').value = original.tastatura.prodavac;
document.getElementById('kb_cena').value = original.tastatura.cena;

document.getElementById('mose').value = original.mis.ime;
document.getElementById('mi_oznaka').value = original.mis.oznaka;
document.getElementById('mi_prodavac').value = original.mis.prodavac;
document.getElementById('mi_cena').value = original.mis.cena;

document.getElementById('sound').value = original.zvucnici.ime;
document.getElementById('zv_oznaka').value = original.zvucnici.oznaka;
document.getElementById('zv_prodavac').value = original.zvucnici.prodavac;
document.getElementById('zv_cena').value = original.zvucnici.cena;

document.getElementById('slusa').value = original.slusalice.ime;
document.getElementById('sl_oznaka').value = original.slusalice.oznaka;
document.getElementById('sl_prodavac').value = original.slusalice.prodavac;
document.getElementById('sl_cena').value = original.slusalice.cena;

document.querySelector('#ukupno_cena').innerHTML = original.cena;

}

function Zatvori(){
    document.querySelector('#ram').style.display = 'none';

};

function Obrisi(){
    while (brisan.firstChild) { brisan.removeChild(brisan.firstChild)};
    document.querySelector('#ram').style.display = 'none';
    document.querySelector('#ostava_kon').style.display = 'inline';
  
    for(indeks = 0 ; indeks < localStorage.length ; indeks++){

      dodaj_div =document.createElement('div');
      dodaj_div.innerHTML = localStorage.key(indeks);
      dodaj_div.setAttribute('id',indeks);
      dodaj_div.setAttribute('class','kanta');
      dodaj_div.setAttribute('onClick','Obrisati(this.id)')
      document.getElementById('divovi').appendChild(dodaj_div);
  
    }
  
  };

  function Obrisati(ruta){

    zamena = Number(ruta);
    document.querySelector('#ostava_kon').style.display = 'none';
    document.querySelector('#brisanje_kon').style.display = 'inline';
    document.querySelector('#da').addEventListener('click',DefDa);
    document.querySelector('#ne').addEventListener('click',DefNe);
   
    
    
  };

  function DefDa() {
    localStorage.removeItem(localStorage.key(zamena));
    document.querySelector('#brisanje_kon').style.display = 'none';
  }

  function DefNe(){ document.querySelector('#brisanje_kon').style.display = 'none'}

  

document.querySelector('#snimi_kon').addEventListener('click',Smesti);
document.querySelector('#zatvori').addEventListener('click',() => {
    document.querySelector('#ostava_kon').style.display = 'none';
    while (brisan.firstChild) { brisan.removeChild(brisan.firstChild)}
    });

document.querySelector('#naziv_kon').addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        document.querySelector('#snimi_kon').click();
    }
});