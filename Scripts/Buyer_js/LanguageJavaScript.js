
   
        var arrLang = {
            'ma': {
                'My Account': 'माझे खाते',
                'Our location': 'आमचे स्थान',
                'Contact Us': 'आमच्याशी संपर्क साधा',
                'SHOP': 'दुकान',
                ' About Us': 'आमच्याबद्दल',
                'Gallery':'गॅलरी',
                'Home': 'मुख्यपृष्ठ',
                'ABOUT US': 'आमच्याबद्दल',
            },
            'hi': {
                'My Account': 'मेरा खाता',
                'Our location': 'हमारा स्थान ',
                'Contact Us': 'संपर्क करें',
                'SHOP': 'दुकान',
                ' About Us ': 'हमारे बारे में',
                'Gallery': 'गेलरी ',
                'Home': 'घर',
                'ABOUT US': 'हमारे बारे में',
            }
        };
        $(function () {

            $('.translate').click(function () {
                var lang = $(this).attr('id');

                $('.lang').each(function (index, element) {
                    $(this).text(arrLang[lang][$(this).attr('key')]);

                });
            });
        });
  
