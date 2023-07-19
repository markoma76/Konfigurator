/* let procesor,kuler,maticna,graficka,memorija,hdd1,ssd1,hdd2,ssd2,kuciste,napajanje,optika,monitor,tastatura,mis,zvucnici,slusalice; */
let konfiguracija;
let komponente = ['procesor','kuler','maticna','graficka','memorija','hdd1','ssd1','hdd2','ssd2','kuciste','napajanje','optika','monitor','tastatura','mis','zvucnici','slusalice'];
let baza = ['ime','oznaka','prodavac','cena'];
let nazivFajla = 'default';
let pro_q,kul_q,mat_q,grf_q,mem_q,hd1_q,sd1_q,hd2_q,sd2_q,kuc_q,nap_q,opt_q,mon_q,tas_q,mis_q,zvu_q,alu_q

pdfMake.fonts = {
    Merriweather : {
      normal : 'Merriweather-Light.ttf',
      bold : 'Merriweather-Bold.ttf',
      italics : 'Merriweather-Black.ttf'
    },
    Roboto: {
      normal: 'Roboto-Regular.ttf',
      bold: 'Roboto-Bold.ttf',
      italics: 'Roboto-Italic.ttf',
      bolditalics: 'Roboto-BlackItalic.ttf'
    },
    Tackasti:{
      normal : 'Diskoteque.ttf'
    },
    Naslov : {
      normal : 'Montserrat-ExtraBold.ttf'
    },
    Thead : {
      normal : 'good timing bd.otf'
    },
    Tside : {
      normal : 'Race Sport.ttf'
    },
    Kolone : {
      normal : 'Rajdhani-Bold.ttf'
    }
  };

function nazoviPDF(){
    document.querySelector('#upit').style.display = 'inline';
    };

    function prelet(){
        document.querySelector('#upit').style.display = 'none';
        nazivFajla = document.querySelector('#naziv').value ;
        reakcija();
      };

function reakcija(){
 konfiguracija =   {
    procesor : {
        ime : document.getElementById('crc').value,
        oznaka : document.getElementById('pr_oznaka').value,
        prodavac : document.getElementById('pr_prodavac').value,
        cena : Number(document.getElementById('pr_cena').value),
    },

    kuler : {
        ime : document.getElementById('cool').value,
        oznaka : document.getElementById('hl_oznaka').value,
        prodavac : document.getElementById('hl_prodavac').value,
        cena : Number(document.getElementById('hl_cena').value),
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
                        }
   
  /* ****************ELEMENTI KONFIGURACIJE KRAJ************************* */




    pretvoriPDF();
};

function pretvoriPDF(){

 if ((k_proc.value).toUpperCase() == 'KUPLJENO') {
   pro_q = ['kolone', 'marka' , 'kupljeno']
}else{pro_q = ['kolone' , 'marka']};
    if ((k_hlad.value).toUpperCase() == 'KUPLJENO') {
      kul_q = ['kolone', 'marka' , 'kupljeno']
}else{kul_q = ['kolone' , 'marka']};
    if ((k_ploc.value).toUpperCase() == 'KUPLJENO') {
      mat_q = ['kolone', 'marka' , 'kupljeno']
}else{mat_q = ['kolone' , 'marka']};
    if ((k_kart.value).toUpperCase() == 'KUPLJENO') {
      grf_q = ['kolone', 'marka' , 'kupljeno']
}else{grf_q = ['kolone' , 'marka']};
    if ((k_memo.value).toUpperCase() == 'KUPLJENO') {
      mem_q = ['kolone', 'marka' , 'kupljeno']
}else{mem_q = ['kolone' , 'marka']};
    if ((k_hdd1.value).toUpperCase() == 'KUPLJENO') {
      hd1_q = ['kolone', 'marka' , 'kupljeno']
}else{hd1_q = ['kolone' , 'marka']};
    if ((k_hdd2.value).toUpperCase() == 'KUPLJENO') {
      hd2_q = ['kolone', 'marka' , 'kupljeno']
}else{hd2_q = ['kolone' , 'marka']};
    if ((k_ssd1.value).toUpperCase() == 'KUPLJENO') {
      sd1_q = ['kolone', 'marka' , 'kupljeno']
}else{sd1_q = ['kolone' , 'marka']};
    if ((k_ssd2.value).toUpperCase() == 'KUPLJENO') {
      sd2_q = ['kolone', 'marka' , 'kupljeno']
}else{sd2_q = ['kolone' , 'marka']};
    if ((k_tove.value).toUpperCase() == 'KUPLJENO') {
      kuc_q = ['kolone', 'marka' , 'kupljeno']
}else{kuc_q = ['kolone' , 'marka']};
    if ((k_napa.value).toUpperCase() == 'KUPLJENO') {
      nap_q = ['kolone', 'marka' , 'kupljeno']
}else{nap_q = ['kolone' , 'marka']};
    if ((k_opti.value).toUpperCase() == 'KUPLJENO') {
      opt_q = ['kolone', 'marka' , 'kupljeno']
}else{opt_q = ['kolone' , 'marka']};
    if ((k_moni.value).toUpperCase() == 'KUPLJENO') {
      mon_q = ['kolone', 'marka' , 'kupljeno']
}else{mon_q = ['kolone' , 'marka']};
    if ((k_tast.value).toUpperCase() == 'KUPLJENO') {
      tas_q = ['kolone', 'marka' , 'kupljeno']
}else{tas_q = ['kolone' , 'marka']};
    if ((k_miso.value).toUpperCase() == 'KUPLJENO') {
      mis_q = ['kolone', 'marka' , 'kupljeno']
}else{mis_q = ['kolone' , 'marka']};
    if ((k_zvuk.value).toUpperCase() == 'KUPLJENO') {
      zvu_q = ['kolone', 'marka' , 'kupljeno']
}else{zvu_q = ['kolone' , 'marka']};
    if ((k_slus.value).toUpperCase() == 'KUPLJENO') {
      alu_q = ['kolone', 'marka' , 'kupljeno']
}else{alu_q = ['kolone' , 'marka']};

    

    var docDefinition = {

            pageSize: 'A4',
            pageOrientation: 'landscape',
content: [
          { text : 'konfiguracija',
            fontSize:45,
            color: 'red',
            alignment:'center',
            font:'Naslov',
            margin : [0,-32,0,0]
          },

          {
            layout: 'lightHorizontalLines', // optional
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows:1,
              widths: [ '22%','22%','20%','20%','16%'],
      
              body: [
            [ {text : 'KOMPONENTA' , style : 'naslov'},
              {text : 'PROIZVODJAC' , style : 'naslov'},
              {text : 'OZNAKA' , style : 'naslov'},
              {text : 'PRODAVAC' , style : 'naslov'},
              {text : 'CENA' , style : 'naslov'}],

            [  { text : komponente[0] , style : 'tside', margin : [0,5,0,0]},
            {text : konfiguracija[komponente[0]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[0]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[0]][baza[2]],style : pro_q},
            {text : konfiguracija[komponente[0]][baza[3]],style : 'kolone'}],
            
            [  { text : komponente[1] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[1]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[1]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[1]][baza[2]],style : kul_q},
            {text : konfiguracija[komponente[1]][baza[3]],style : 'kolone'}],  
            
            [  { text : komponente[2] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[2]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[2]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[2]][baza[2]],style : mat_q},
            {text : konfiguracija[komponente[2]][baza[3]],style : 'kolone'}],  

            [  { text : komponente[3] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[3]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[3]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[3]][baza[2]],style : grf_q},
            {text : konfiguracija[komponente[3]][baza[3]],style : 'kolone'}],

            [  { text : komponente[4] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[4]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[4]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[4]][baza[2]],style : mem_q},
            {text : konfiguracija[komponente[4]][baza[3]],style : 'kolone'}],

            [  { text : komponente[5] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[5]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[5]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[5]][baza[2]],style : hd1_q},
            {text : konfiguracija[komponente[5]][baza[3]],style : 'kolone'}],

            [  { text : komponente[6] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[6]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[6]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[6]][baza[2]],style : sd1_q},
            {text : konfiguracija[komponente[6]][baza[3]],style : 'kolone'}],

            [  { text : komponente[7] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[7]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[7]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[7]][baza[2]],style : hd2_q},
            {text : konfiguracija[komponente[7]][baza[3]],style : 'kolone'}],

            [  { text : komponente[8] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[8]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[8]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[8]][baza[2]],style : sd2_q},
            {text : konfiguracija[komponente[8]][baza[3]],style : 'kolone'}], 
            
            [  { text : komponente[9] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[9]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[9]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[9]][baza[2]],style : kuc_q},
            {text : konfiguracija[komponente[9]][baza[3]],style : 'kolone'}],

            [  { text : komponente[10] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[10]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[10]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[10]][baza[2]],style : nap_q},
            {text : konfiguracija[komponente[10]][baza[3]],style : 'kolone'}],

            [  { text : komponente[11] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[11]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[11]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[11]][baza[2]],style : opt_q},
            {text : konfiguracija[komponente[11]][baza[3]],style : 'kolone'}],

            [  { text : komponente[12] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[12]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[12]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[12]][baza[2]],style : mon_q},
            {text : konfiguracija[komponente[12]][baza[3]],style : 'kolone'}],

            [  { text : komponente[13] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[13]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[13]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[13]][baza[2]],style : tas_q},
            {text : konfiguracija[komponente[13]][baza[3]],style : 'kolone'}],

            [  { text : komponente[14] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[14]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[14]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[14]][baza[2]],style : mis_q},
            {text : konfiguracija[komponente[14]][baza[3]],style : 'kolone'}],

            [  { text : komponente[15] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[15]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[15]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[15]][baza[2]],style : zvu_q},
            {text : konfiguracija[komponente[15]][baza[3]],style : 'kolone'}],

            [  { text : komponente[16] , style : 'tside' , margin : [0,5,0,0]},
            {text : konfiguracija[komponente[16]][baza[0]],style : ['kolone' , 'marka']},
            {text : konfiguracija[komponente[16]][baza[1]],style : 'kolone'},
            {text : konfiguracija[komponente[16]][baza[2]],style : alu_q},
            {text : konfiguracija[komponente[16]][baza[3]],style : 'kolone'}],

            [ {},{},{},{text : 'U K U P N O :' ,style : 'ukupno'},{ text : zbir , style : 'ukupno'},

            ]
              
              ]
            }
          }
        ],

        styles : {
            naslov : {
                font : 'Thead',
                color : 'white',
                fillColor : '#0D0C2B',
                alignment : 'center',
                fontSize : 16 ,
                    },
            tside : {
                font : 'Tside',
                color : 'white',
                fillColor : 'blue',
                alignment : 'center',
                fontSize :14,
            } ,
            kolone : {
                font : 'Kolone',
                fontSize : 16,
                alignment : 'center',
            },
            marka : {
              fillColor : '#E1E1E1',
            },
            kupljeno : {
                color : '#DE0A0A'
            },
            ukupno : {
              fillColor : 'red',
              font : 'Tackasti',
              alignment : 'center',
              fontSize : 22,
              color : 'whitesmoke',
            }


           }
      };
   
      pdfMake.createPdf(docDefinition).download(nazivFajla);
}

document.querySelector('#yoopaa').addEventListener('click',nazoviPDF);
document.querySelector('#snimi').addEventListener('click',prelet);
document.querySelector('#naziv').addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        document.querySelector('#snimi').click();
    }
})

