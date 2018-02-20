$(document).ready(function () {

    //STOCKHOLM
    $.simpleWeather({
        zipcode: '',
        woeid: '59.334591, 18.063240',
        location: 'Stockholm',
        unit: 'c',
        success: function (weather) {

            html = '<h2>' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<ul><li>' + weather.city + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.alt.temp + '&deg;F</li></ul>';
            $("#stockholm").html(html);


            $("#stockholm").html(html);
        },
        error: function (error) {
            $("#stockholm").html('<p>' + error + '</p>');
        }
    });

    //LONDON
    $.simpleWeather({
        zipcode: '',
        woeid: '51.509865, 0.118092',
        location: 'London',
        unit: 'c',
        success: function (weather) {
            html = '<h2>' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<ul><li>' + weather.city + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.alt.temp + '&deg;F</li></ul>';
            $("#london").html(html);



            $("#london").html(html);
        },
        error: function (error) {
            $("#london").html('<p>' + error + '</p>');
        }
    });

    //PARIS
    $.simpleWeather({
        zipcode: '',
        woeid: '48.864716, 2.349014',
        location: 'Paris',
        unit: 'c',
        success: function (weather) {

            html = '<h2>' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<ul><li>' + weather.city + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.alt.temp + '&deg;F</li></ul>';
            $("#paris").html(html);



            $("#paris").html(html);
        },
        error: function (error) {
            $("#paris").html('<p>' + error + '</p>');
        }
    });

    //BERLIN
    $.simpleWeather({
        zipcode: '',
        woeid: '52.520008, 13.404954',
        location: 'Berlin',
        unit: 'c',
        success: function (weather) {
            html = '<h2>' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<ul><li>' + weather.city + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.alt.temp + '&deg;F</li></ul>';
            $("#berlin").html(html);


            $("#berlin").html(html);
        },
        error: function (error) {
            $("#berlin").html('<p>' + error + '</p>');
        }
    });

    //KAPSTADEN
    $.simpleWeather({
        zipcode: '',
        woeid: '33.918861, 18.423300',
        location: 'Kapstaden',
        unit: 'c',
        success: function (weather) {
            html = '<h2>' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<ul><li>' + weather.city + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.alt.temp + '&deg;F</li></ul>';
            $("#kapstaden").html(html);



            $("#kapstaden").html(html);
        },
        error: function (error) {
            $("#kapstaden").html('<p>' + error + '</p>');
        }
    });

    //NAIROBI
    $.simpleWeather({
        zipcode: '',
        woeid: '1.291514, 36.874260',
        location: 'Nairobi',
        unit: 'c',
        success: function (weather) {
            html = '<h2>' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<ul><li>' + weather.city + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.alt.temp + '&deg;F</li></ul>';
            $("#nairobi").html(html);



            $("#nairobi").html(html);
        },
        error: function (error) {
            $("#nairobi").html('<p>' + error + '</p>');
        }
    });

    //LAGOS
    $.simpleWeather({
        zipcode: '',
        woeid: '6.465422, 3.406448',
        location: 'Lagos',
        unit: 'c',
        success: function (weather) {
            html = '<h2>' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<ul><li>' + weather.city + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.alt.temp + '&deg;F</li></ul>';
            $("#lagos").html(html);



            $("#lagos").html(html);
        },
        error: function (error) {
            $("#lagos").html('<p>' + error + '</p>');
        }
    });

    //KAIRO
    $.simpleWeather({
        zipcode: '',
        woeid: '30.045916, 31.224291',
        location: 'Kairo',
        unit: 'c',
        success: function (weather) {
            html = '<h2>' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<ul><li>' + weather.city + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.alt.temp + '&deg;F</li></ul>';
            $("#kairo").html(html);



            $("#kairo").html(html);
        },
        error: function (error) {
            $("#kairo").html('<p>' + error + '</p>');
        }
    });

    //Beijing
    $.simpleWeather({
        zipcode: '',
        woeid: '22.302219, 114.174637',
        location: 'Beijing',
        unit: 'c',
        success: function (weather) {
            html = '<h2>' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<ul><li>' + weather.city + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.alt.temp + '&deg;F</li></ul>';
            $("#beijing").html(html);



            $("#beijing").html(html);
        },
        error: function (error) {
            $("#beijing").html('<p>' + error + '</p>');
        }
    });

    //TOKYO
    $.simpleWeather({
        zipcode: '',
        woeid: '35.652832, 139.839478',
        location: 'Tokyo',
        unit: 'c',
        success: function (weather) {
            html = '<h2>' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<ul><li>' + weather.city + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.alt.temp + '&deg;F</li></ul>';
            $("#tokyo").html(html);



            $("#tokyo").html(html);
        },
        error: function (error) {
            $("#tokyo").html('<p>' + error + '</p>');
        }
    });

    //Bangkok
    $.simpleWeather({
        zipcode: '',
        woeid: '13.736717, 100.523186',
        location: 'Bangkok',
        unit: 'c',
        success: function (weather) {
            html = '<h2>' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<ul><li>' + weather.city + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.alt.temp + '&deg;F</li></ul>';
            $("#bangkok").html(html);



            $("#bangkok").html(html);
        },
        error: function (error) {
            $("#bangkok").html('<p>' + error + '</p>');
        }
    });

    //NEW DELHI
    $.simpleWeather({
        zipcode: '',
        woeid: '13.736717, 100.523186',
        location: 'Newdelhi',
        unit: 'c',
        success: function (weather) {
            html = '<h2>' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<ul><li>' + weather.city + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.alt.temp + '&deg;F</li></ul>';
            $("#new_delhi").html(html);



            $("#new_delhi").html(html);
        },
        error: function (error) {
            $("#new_delhi").html('<p>' + error + '</p>');
        }
    });

    //GEOLOCATION
    if ("geolocation" in navigator) {
        $('.geolocation').show();
    } else {
        $('.geolocation').hide();
    }

    /* Var i världen är du? */
    $('.geolocation').on('click', function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            loadWeather(position.coords.latitude + ',' + position.coords.longitude); //laddar vädret genom att använda dina  lat/lng koordinater
        });
    });


    $(document).ready(function () {

    });

    function loadWeather(location, woeid) {
        $.simpleWeather({
            location: location,
            woeid: woeid,
            unit: 'C',
            success: function (weather) {
                html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
                html += '<ul><li>' + weather.city
                html += '<li class="currently">' + weather.currently + '</li>';
                html += '<li>' + weather.alt.temp + '&deg;F</li></ul>';

                $("#geo").html(html);
            },
            error: function (error) {
                $("#geo").html('<p>' + error + '</p>');
            }
        });
    }




});
