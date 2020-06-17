
// Translation  
var arrLang = {
    'en' : {
        'home' : 'Home',
        'about' : 'About',
        'products' : 'Products',
        'gallery' : 'Gallery',
        'contact' : 'Contact Us',
        'go-shop' : 'Go to shop',
        'main-1-1' : 'Welcome to my website!',
        'main-1-2' : 'You will find here handmade products',
        'main-2' : 'Every handicraft is made with passion',
        'main-3' : 'See unique products which are not available in ordinary shop',
        'quote' : 'Style is a way to say who you are without having to speak.',
        'about-me' : 'About Me',
        'products' : 'Products',
        'gallery' : 'Gallery',
        'contact' : 'Contact',
        'about-paragraph-1' : 'Handicraft accompanies me since I was a child',
        'about-paragraph-2' : 'My great grandmother was knitting, after my grandmother, mother and now it is my turn to continue this tradition, heritage',
        'about-paragraph-3' : 'If you have any idea for knitting product, let me know and I will create special one only for you',
        'contact' : 'Contact',
        'contact-me' : 'Contact me',
        'phone' : 'ph. 123-456-789',
        'btn-send' : 'Submit',
        'btn-contact' : 'Contact Me',
        'shopping' : 'If you want see available products, please click the button below. However, if you have any idea for unique product, contact me. I will appreciate new challenges!',
        'gallery-descr' : 'Below I represent my sample handicrafts, which I have made',
        'back' : 'Back',
        'products-list' : 'My Products'
    },
    'pl' : {
        'home' : 'Strona Główna',
        'about' : 'O mnie',
        'products' : 'Produkty',
        'gallery' : 'Galeria',
        'contact' : 'Kontakt',
        'go-shop' : 'Przejdź do sklepu',
        'main-1-1' : 'Witaj na mojej stronie!',
        'main-1-2' : 'Znajdziesz tu ręcznie wykonane produkty',
        'main-2' : 'Każde rękodzieło jest robione z pasją',
        'main-3' : 'Zobacz unikatowe produkty, których nie nabędziesz w zwykłym sklepie',
        'quote' : 'Styl to sposób w jaki bez słów ukazujesz siebie.',
        'about-me' : 'O Mnie',
        'products' : 'Produkty',
        'gallery' : 'Galeria',
        'contact' : 'Kontakt',
        'about-paragraph-1' : 'Robótki ręczne towarzyszą mi od dzieciństwa.',
        'about-paragraph-2' : 'Dziergała moja prababcia, potem babcia, mama i teraz to moja kolej, by kontynuować tą tradycję, dziedzictwo. Dzierganie przerodziło się w pasję. Z tej pasji powstały oferowane produkty i wciąż powstają nowe.',
        'about-paragraph-3' : 'Jeśli masz jakiś pomysł na wyrób dziergany - napisz, wykreuję go z wełny lub sznurka.',
        'contact' : 'Kontakt',
        'contact-me' : 'Skontaktuj się ze mną',
        'phone' : 'tel. 123-456-789',
        'btn-send' : 'Wyślij',
        'btn-contact' : 'Skontaktuj się ze mną',
        'shopping' : 'Jeśli chcesz obejrzeć dostępne produkty, kliknij w przycisk poniżej. Jednakże, jak masz jakiś pomysł na unikalny produkt napisz do mnie, chętnie go zrealizuje.',
        'gallery-descr' : 'Poniżej przedstawiam przykładowe rękodzieła, które wykonałam',
        'back' : 'Wróć',
        'products-list' : 'Moje produkty'
    }
};

$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function (index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});