/*
 * This file has been compiled from: /modules/system/lang/nl/client.php
 */
if ($.oc === undefined) $.oc = {}
if ($.oc.langMessages === undefined) $.oc.langMessages = {}
$.oc.langMessages['nl'] = $.extend(
    $.oc.langMessages['nl'] || {},
    {"markdowneditor":{"formatting":"Opmaak","quote":"Quote","code":"Code","header1":"Koptekst 1","header2":"Koptekst 2","header3":"Koptekst 3","header4":"Koptekst 4","header5":"Koptekst 5","header6":"Koptekst 6","bold":"Vet","italic":"Cursief","unorderedlist":"Ongeordende lijst","orderedlist":"Gerangschikte lijst","video":"Video","image":"Afbeelding","link":"Hyperlink","horizontalrule":"Invoegen horizontale lijn","fullscreen":"Volledig scherm","preview":"Voorbeeldweergave"},"mediamanager":{"insert_link":"Invoegen Media Link","insert_image":"Invoegen Media Afbeelding","insert_video":"Invoegen Media Video","insert_audio":"Invoegen Media Audio","invalid_file_empty_insert":"Selecteer bestand om een link naar te maken.","invalid_file_single_insert":"Selecteer \u00e9\u00e9n bestand.","invalid_image_empty_insert":"Selecteer afbeelding(en) om in te voegen.","invalid_video_empty_insert":"Selecteer een video bestand om in te voegen.","invalid_audio_empty_insert":"Selecteer een audio bestand om in te voegen."},"alert":{"confirm_button_text":"OK","cancel_button_text":"Annuleren","widget_remove_confirm":"Deze widget verwijderen?"},"datepicker":{"previousMonth":"Vorige maand","nextMonth":"Volgende maan","months":["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],"weekdays":["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"],"weekdaysShort":["Zo","Ma","Di","Wo","Do","Vr","Za"]},"colorpicker":{"choose":"Ok"},"filter":{"group":{"all":"alle"},"dates":{"all":"alle","filter_button_text":"Filteren","reset_button_text":"Resetten","date_placeholder":"Datum","after_placeholder":"Na","before_placeholder":"Voor"},"numbers":{"all":"all","filter_button_text":"Filter","reset_button_text":"Reset","min_placeholder":"Min","max_placeholder":"Max"}},"eventlog":{"show_stacktrace":"Toon stacktrace","hide_stacktrace":"Verberg stacktrace","tabs":{"formatted":"Geformatteerd","raw":"Bronversie"},"editor":{"title":"Broncode editor","description":"Je besturingssysteem moet in staat zijn om met deze URL-schema's om te kunnen gaan.","openWith":"Openen met","remember_choice":"Onthoudt de geselecteerde optie voor deze browser-sessie","open":"Openen","cancel":"Annuleren"}}}
);

//! moment.js locale configuration
//! locale : dutch (nl)
//! author : Joris R??ling : https://github.com/jjupiter

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

    var nl = moment.defineLocale('nl', {
        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort : function (m, format) {
            if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
            } else {
                return monthsShortWithDots[m.month()];
            }
        },
        monthsParseExact : true,
        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'over %s',
            past : '%s geleden',
            s : 'een paar seconden',
            m : '????n minuut',
            mm : '%d minuten',
            h : '????n uur',
            hh : '%d uur',
            d : '????n dag',
            dd : '%d dagen',
            M : '????n maand',
            MM : '%d maanden',
            y : '????n jaar',
            yy : '%d jaar'
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return nl;

}));
