$('.main-bannerr p').css('display', 'none');
$('body').addClass('body-bannerr');



    var ban = document.createElement('div'),
        body = document.querySelector('body');
    ban.classList.add('main-bannerr');
    var langs_ar ="لسلامتكم - قمنا بتعقيم جميع شحناتنا";
    var langs_en ="For your and our safety. All our shipments are sterilized";
    let bannerList_ar = '';
    let bannerList_en = '';

         bannerList_ar+="<p style='direction: rtl !important;'><b>"+langs_ar+"</b></p>";
         bannerList_en+="<p style='direction: ltr !important;'><b>"+langs_en+"</b></p>";
    

    ban.innerHTML = '<div class="fixed-ell" style="width: 1px; height: 1px; opacity: 0; position: fixed; top: 0; left: 0;"></div><img src="https://affectionate-offer.com/banner/ar/banner-icon-1.png" alt="icon">'+bannerList_ar+'<br><br>'+bannerList_en+'';
    body.appendChild(ban);



function addBannerStyle() {
    var cont = document.createElement('style'),
        head = document.querySelector('head');
    cont.innerHTML = '.main-bannerr img{max-width:61px;max-height:49px;margin:0;margin-left: 20px;}.main-bannerr{box-sizing:border-box;position:fixed;top:0;left:0;width:100vw;display:flex;justify-content:center;align-items:center;padding:0;background-color:#e30c0c;background-image:url(https://affectionate-offer.com/banner/ar/banner-bg.png);background-repeat:no-repeat;background-size:cover;background-position:center;z-index:100;padding:10px}.main-bannerr.banner-bottom{top:auto;bottom:0}.main-bannerr p{margin-top:0!important;margin-bottom:0!important;font-family:Roboto,sans-serif;color:#fff!important;margin-left:20px;text-align:center}.main-bannerr p b{color:#fff;display:block;font-size:24px;font-weight:700;margin-bottom:5px}.main-bannerr p .ban-small{color:#fff;display:block;font-size:17px;line-height:1.2;font-weight:400}@media screen and (max-width:1219px){.main-bannerr p .ban-small {font-size: 15px;}.main-bannerr p b {font-size: 17px;}.main-bannerr img{max-width:50px;max-height:40px}.main-bannerr p{max-width:920px}}@media screen and (max-width:1023px){.main-bannerr .delete_mob{display:none}.main-bannerr p{max-width:500px}.main-bannerr p b{font-size:16px}.main-bannerr p .ban-small{font-size:15px}}@media screen and (max-width:767px){.main-bannerr p{max-width:420px}.main-bannerr p b{font-size:15px}.main-bannerr p .ban-small{font-size:14px}}@media screen and (max-width:639px){.main-bannerr img{max-width:35px;max-height:30px}.main-bannerr p{margin-left:10px}}@media screen and (max-width:479px){.main-bannerr img{max-width:50px;max-height:100%}.main-bannerr p{max-width:250px;line-height:1.1}.main-bannerr p b{line-height:18px;font-size:20px;margin-bottom:2px}.main-bannerr p .ban-small{line-height:17px;font-size:12px}}@media screen and (max-width:370px){.main-bannerr img{max-width:35px}}.main-bannerr p span{color:#fff!important}.main-bannerr *{box-sizing:border-box}';
    head.appendChild(cont);
}
addBannerStyle();

let counter = 0;

$(document).on('scroll', function () {

    if (($('.fixed-ell').offset().top > 100) && counter===0) {
        $('.main-bannerr').addClass('banner-bottom');
        counter = 1;
    } else if ($('.fixed-ell').offset().top <= 100){
        $('.main-bannerr').removeClass('banner-bottom');
        counter = 0; 
    }  
    
});

function resizeHeight() {
    let mainHeight = $('.main-bannerr').css('height'),
    mTop = mainHeight + '!important',
    mBottom = mainHeight + '!important';

    $('body.body-bannerr').attr('style', 'margin-top: ' + mTop + '; margin-bottom: ' + mBottom);
}

$(document).ready(resizeHeight);
window.addEventListener('resize', resizeHeight);


/*ПХОНЕ МАСК*/

/*var formAction = $("form").attr("action");
console.log(formAction);

if (formAction == "submit-myland.php") {
    var urlString = location.pathname;
    urlString.indexOf(1);
    urlString.toLowerCase();
    urlString = urlString.split("/")[1];
    console.log(urlString);

    $(document.querySelectorAll('input[name="phone"]')).css("direction", "ltr");

    let geoMask = {
        ksa: "\\9\\66[9]{15}",
        kw: "\\9\\65[9]{15}",
        om: "\\9\\68[9]{15}",
        ae: "\\9\\71[9]{15}",
        bh: "\\9\\73[9]{15}",
    };

    let phones = [{
        "mask": geoMask[urlString]
    }];
    $(document.querySelectorAll('input[name="phone"]')).inputmask({
        mask: phones,
        greedy: false,
        definitions: {
            '_': {
                validator: "[0-9]"
            }
        }
    });
}*/

/*ПХОНЕ МАСК*/
