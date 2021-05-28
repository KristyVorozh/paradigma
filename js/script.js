var swiper1 = new Swiper('.swiper1', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    slidesPerView:3,
    loop: true,
        spaceBetween:-25,
        breakpoints: {
            220: {
                slidesPerView: 1,
                
            },
            
            
            480: {
                slidesPerView: 2,
                spaceBetween:-25,
            },
            683: {
                slidesPerView: 3,
                spaceBetween:-25,
            }
        }
});

var modal=document.getElementById("mymodal");
var btn=document.getElementById("button_map");

btn.onclick=function(){
    modal.style.display="block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal1=document.getElementById("mymodal_swiper");
var btn1=document.getElementById("button_swiper");

btn1.onclick=function(){
    modal1.style.display="block";
}

window.addEventListener("click", function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
});

var bigsize = "600";
var smallsize = "550";
function changeSizeImage(im) {
    if(im.height == bigsize) im.height = smallsize;
    else im.height = bigsize;
}

var arrLang={
    'en':{
        'logo':'Professional installation of flues of any complexity on the territory of Kiev and Kiev Region.',
        'map':'Ukraine, Kiev, Vasylkivska 30',
        'Consultation':'Engineer consultation',
        'link1':'consultation',
        'link2':'reviews',
        'link3':'our news',
        'link4':'Services',
        'link5':'Calculator',
        'link6':'advantages',
        'link7':'production',
        'link8':'question answer',
        'link9':'contacts',
        'h1':'Installation of stainless steel chimneys for private houses and businesses',
        'numberSubt':'for years we have been installing chimneys for individuals and organizations',
        'Subt1':'Free departure of the engineer within 30 km. from Kiev',
        'Subt2':'Turnkey installation from 1 day, all permits are available',
        'sale':'Calculate the cost of installing your chimney in 1 minute and get a 15% discount',
        'salebutton':'Calculate the cost of installation and get a discount',
        'lisentionlang':'Licenses and certificates available',
    },
    'rus':{
        'logo':'Профессиональный монтаж дымоходов любой сложности на территории Киева и Киевской обл.',
        'map':'Украина, Киев, Васильковская 30',
        'Consultation':'Консультация инженера',
        'link1':'консультация',
        'link2':'отзывы',
        'link3':'наши новости',
        'link4':'Услуги',
        'link5':'Калькулятор',
        'link6':'преимущества',
        'link7':'производство',
        'link8':'вопрос-ответ',
        'link9':'контакты',
        'h1':'Монтаж дымоходов из нержавеющей стали для частных домов и предприятий',
        'numberSubt':'лет устанавливаем дымоходы для частных лиц и организаций',
        'Subt1':'Бесплатный выезд инженера в пределах 30 км. от Киева',
        'Subt2':'Монтаж под ключ от 1 дня, в наличии все разрешительные документы',
        'sale':'Рассчитайте стоимость монтажа вашего дымохода за 1 минуту и получите скидку 15%',
        'salebutton':'Рассчитать стоимость монтажа и получить скидку',
        'lisentionlang':'Лицензии и сертификаты в наличии',
    }
}
$(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });