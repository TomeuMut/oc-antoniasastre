/*
 * This file has been compiled from: /modules/system/lang/hu/client.php
 */
if ($.oc === undefined) $.oc = {}
if ($.oc.langMessages === undefined) $.oc.langMessages = {}
$.oc.langMessages['hu'] = $.extend(
    $.oc.langMessages['hu'] || {},
    {"markdowneditor":{"formatting":"Forr\u00e1sk\u00f3d","quote":"Id\u00e9zet","code":"K\u00f3d","header1":"C\u00edmsor 1","header2":"C\u00edmsor 2","header3":"C\u00edmsor 3","header4":"C\u00edmsor 4","header5":"C\u00edmsor 5","header6":"C\u00edmsor 6","bold":"F\u00e9lk\u00f6v\u00e9r","italic":"D\u00f6lt","unorderedlist":"Rendezett lista","orderedlist":"Sz\u00e1mozott lista","video":"Vide\u00f3","image":"K\u00e9p","link":"Hivatkoz\u00e1s","horizontalrule":"Vonal besz\u00far\u00e1sa","fullscreen":"Teljes k\u00e9perny\u0151","preview":"El\u0151n\u00e9zet"},"mediamanager":{"insert_link":"Hivatkoz\u00e1s besz\u00far\u00e1sa","insert_image":"K\u00e9p besz\u00far\u00e1sa","insert_video":"Vide\u00f3 besz\u00far\u00e1sa","insert_audio":"Audi\u00f3 besz\u00far\u00e1sa","invalid_file_empty_insert":"Hivatkoz\u00e1s k\u00e9sz\u00edt\u00e9s\u00e9hez jel\u00f6lj\u00f6n ki egy sz\u00f6vegr\u00e9szt.","invalid_file_single_insert":"K\u00e9rj\u00fck jel\u00f6lj\u00f6n ki egy f\u00e1jlt.","invalid_image_empty_insert":"V\u00e1lasszon ki legal\u00e1bb egy k\u00e9pet a besz\u00far\u00e1shoz.","invalid_video_empty_insert":"V\u00e1lasszon ki legal\u00e1bb egy vide\u00f3t a besz\u00far\u00e1shoz.","invalid_audio_empty_insert":"V\u00e1lasszon ki legal\u00e1bb egy audi\u00f3t a besz\u00far\u00e1shoz."},"alert":{"confirm_button_text":"OK","cancel_button_text":"M\u00e9gsem","widget_remove_confirm":"Val\u00f3ban t\u00f6r\u00f6lni akarja?"},"datepicker":{"previousMonth":"El\u0151z\u0151 h\u00f3nap","nextMonth":"K\u00f6vetkez\u0151 h\u00f3nap","months":["janu\u00e1r","febru\u00e1r","m\u00e1rcius","\u00e1prilis","m\u00e1jus","j\u00fanius","j\u00falius","augusztus","szeptember","okt\u00f3ber","november","december"],"weekdays":["vas\u00e1rnap","h\u00e9tf\u0151","kedd","szerda","cs\u00fct\u00f6rt\u00f6k","p\u00e9ntek","szombat"],"weekdaysShort":["va","h\u00e9","ke","sze","cs","p\u00e9","szo"]},"colorpicker":{"choose":"Ok"},"filter":{"group":{"all":"\u00f6sszes"},"dates":{"all":"\u00f6sszes","filter_button_text":"Sz\u0171r\u00e9s","reset_button_text":"Alaphelyzet","date_placeholder":"D\u00e1tum","after_placeholder":"Kezdete","before_placeholder":"V\u00e9ge"},"numbers":{"all":"\u00f6sszes","filter_button_text":"Sz\u0171r\u00e9s","reset_button_text":"Alaphelyzet","min_placeholder":"Minimum","max_placeholder":"Maximum"}},"eventlog":{"show_stacktrace":"R\u00e9szletek","hide_stacktrace":"Rejt\u00e9s","tabs":{"formatted":"Form\u00e1zott","raw":"T\u00f6m\u00f6r\u00edtett"},"editor":{"title":"Forr\u00e1sk\u00f3d szerkeszt\u0151","description":"Az oper\u00e1ci\u00f3s rendszert \u00fagy kell be\u00e1ll\u00edtani, hogy figyelembe vegye az URL s\u00e9m\u00e1t.","openWith":"Megnyit\u00e1s mint","remember_choice":"Kiv\u00e1lasztott be\u00e1ll\u00edt\u00e1sok megjegyz\u00e9se ebben a munkamenetben","open":"Megnyit\u00e1s","cancel":"M\u00e9gsem"}}}
);

//! moment.js locale configuration
//! locale : hungarian (hu)
//! author : Adam Brunner : https://github.com/adambrunner

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var weekEndings = 'vas??rnap h??tf??n kedden szerd??n cs??t??rt??k??n p??nteken szombaton'.split(' ');
    function translate(number, withoutSuffix, key, isFuture) {
        var num = number,
            suffix;
        switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'n??h??ny m??sodperc' : 'n??h??ny m??sodperce';
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' ??ra' : ' ??r??ja');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' ??ra' : ' ??r??ja');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' h??nap' : ' h??napja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' h??nap' : ' h??napja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' ??v' : ' ??ve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' ??v' : ' ??ve');
        }
        return '';
    }
    function week(isFuture) {
        return (isFuture ? '' : '[m??lt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
    }

    var hu = moment.defineLocale('hu', {
        months : 'janu??r_febru??r_m??rcius_??prilis_m??jus_j??nius_j??lius_augusztus_szeptember_okt??ber_november_december'.split('_'),
        monthsShort : 'jan_feb_m??rc_??pr_m??j_j??n_j??l_aug_szept_okt_nov_dec'.split('_'),
        weekdays : 'vas??rnap_h??tf??_kedd_szerda_cs??t??rt??k_p??ntek_szombat'.split('_'),
        weekdaysShort : 'vas_h??t_kedd_sze_cs??t_p??n_szo'.split('_'),
        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'YYYY.MM.DD.',
            LL : 'YYYY. MMMM D.',
            LLL : 'YYYY. MMMM D. H:mm',
            LLLL : 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: function (input) {
            return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower === true ? 'de' : 'DE';
            } else {
                return isLower === true ? 'du' : 'DU';
            }
        },
        calendar : {
            sameDay : '[ma] LT[-kor]',
            nextDay : '[holnap] LT[-kor]',
            nextWeek : function () {
                return week.call(this, true);
            },
            lastDay : '[tegnap] LT[-kor]',
            lastWeek : function () {
                return week.call(this, false);
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s m??lva',
            past : '%s',
            s : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return hu;

}));
