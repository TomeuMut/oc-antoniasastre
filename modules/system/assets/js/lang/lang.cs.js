/*
 * This file has been compiled from: /modules/system/lang/cs/client.php
 */
if ($.oc === undefined) $.oc = {}
if ($.oc.langMessages === undefined) $.oc.langMessages = {}
$.oc.langMessages['cs'] = $.extend(
    $.oc.langMessages['cs'] || {},
    {"markdowneditor":{"formatting":"Form\u00e1tov\u00e1n\u00ed","quote":"Citace","code":"K\u00f3d","header1":"Nadpis 1","header2":"Nadpis 2","header3":"Nadpis 3","header4":"Nadpis 4","header5":"Nadpis 5","header6":"Nadpis 6","bold":"Tu\u010dn\u011b","italic":"Kurz\u00edvou","unorderedlist":"Ne\u010d\u00edslovan\u00fd seznam","orderedlist":"\u010c\u00edslovan\u00fd seznam","video":"Video","image":"Obr\u00e1zek","link":"Odkaz","horizontalrule":"Vlo\u017eit horizont\u00e1ln\u00ed linku","fullscreen":"Cel\u00e1 obrazovka","preview":"N\u00e1hled"},"mediamanager":{"insert_link":"Vlo\u017eit odkaz","insert_image":"Vlo\u017eit obr\u00e1zek","insert_video":"Vlo\u017eit video","insert_audio":"Vlo\u017eit zvuk","invalid_file_empty_insert":"Pros\u00edm vyberte soubor, na kter\u00fd se vlo\u017e\u00ed odkaz.","invalid_file_single_insert":"Vyberte jeden soubor.","invalid_image_empty_insert":"Vyberte soubor(y) pro vlo\u017een\u00ed.","invalid_video_empty_insert":"Vyberte video soubor pro vlo\u017een\u00ed.","invalid_audio_empty_insert":"Vyberte audio soubor pro vlo\u017een\u00ed."},"alert":{"confirm_button_text":"OK","cancel_button_text":"Zru\u0161it","widget_remove_confirm":"Odstranit widget?"},"datepicker":{"previousMonth":"P\u0159edchoz\u00ed m\u011bs\u00edc","nextMonth":"N\u00e1sleduj\u00edc\u00ed m\u011bs\u00edc","months":["Leden","\u00danor","B\u0159ezen","Duben","Kv\u011bten","\u010cerven","\u010cervenec","Srpen","Z\u00e1\u0159\u00ed","\u0158\u00edjen","Listopad","Prosinec"],"weekdays":["Ned\u011ble","Pond\u011bl\u00ed","\u00dater\u00fd","St\u0159eda","\u010ctvrtek","P\u00e1tek","Sobota"],"weekdaysShort":["Ne","Po","\u00dat","St","\u010ct","P\u00e1","So"]},"colorpicker":{"choose":"Ok"},"filter":{"group":{"all":"V\u0161e"},"dates":{"all":"V\u0161e","filter_button_text":"Filtrovat","reset_button_text":"Zru\u0161it","date_placeholder":"Datum","after_placeholder":"Po","before_placeholder":"P\u0159ed"},"numbers":{"all":"all","filter_button_text":"Filter","reset_button_text":"Reset","min_placeholder":"Min","max_placeholder":"Max"}},"eventlog":{"show_stacktrace":"Zobrazit stacktrace","hide_stacktrace":"Skr\u00fdt stacktrace","tabs":{"formatted":"Form\u00e1tov\u00e1no","raw":"P\u016fvodn\u00ed (raw)"},"editor":{"title":"Editor zdrojov\u00e9ho k\u00f3du","description":"V\u00e1\u0161 opera\u010dn\u00ed syst\u00e9m by m\u011bl b\u00fdt konfigurov\u00e1n tak, aby naslouchal jednomu z t\u011bchto sch\u00e9mat adres URL.","openWith":"Otev\u0159\u00edt v","remember_choice":"Zapamatovat si vybranou volbu pro tuto relaci","open":"Otev\u0159\u00edt","cancel":"Zru\u0161it"}}}
);

//! moment.js locale configuration
//! locale : czech (cs)
//! author : petrbela : https://github.com/petrbela

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var months = 'leden_??nor_b??ezen_duben_kv??ten_??erven_??ervenec_srpen_z??????_????jen_listopad_prosinec'.split('_'),
        monthsShort = 'led_??no_b??e_dub_kv??_??vn_??vc_srp_z????_????j_lis_pro'.split('_');
    function plural(n) {
        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
        case 's':  // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'p??r sekund' : 'p??r sekundami';
        case 'm':  // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'minuty' : 'minut');
            } else {
                return result + 'minutami';
            }
            break;
        case 'h':  // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'hodiny' : 'hodin');
            } else {
                return result + 'hodinami';
            }
            break;
        case 'd':  // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'dny' : 'dn??');
            } else {
                return result + 'dny';
            }
            break;
        case 'M':  // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'm??s??c' : 'm??s??cem';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'm??s??ce' : 'm??s??c??');
            } else {
                return result + 'm??s??ci';
            }
            break;
        case 'y':  // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'roky' : 'let');
            } else {
                return result + 'lety';
            }
            break;
        }
    }

    var cs = moment.defineLocale('cs', {
        months : months,
        monthsShort : monthsShort,
        monthsParse : (function (months, monthsShort) {
            var i, _monthsParse = [];
            for (i = 0; i < 12; i++) {
                // use custom parser to solve problem with July (??ervenec)
                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
            }
            return _monthsParse;
        }(months, monthsShort)),
        shortMonthsParse : (function (monthsShort) {
            var i, _shortMonthsParse = [];
            for (i = 0; i < 12; i++) {
                _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
            }
            return _shortMonthsParse;
        }(monthsShort)),
        longMonthsParse : (function (months) {
            var i, _longMonthsParse = [];
            for (i = 0; i < 12; i++) {
                _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
            }
            return _longMonthsParse;
        }(months)),
        weekdays : 'ned??le_pond??l??_??ter??_st??eda_??tvrtek_p??tek_sobota'.split('_'),
        weekdaysShort : 'ne_po_??t_st_??t_p??_so'.split('_'),
        weekdaysMin : 'ne_po_??t_st_??t_p??_so'.split('_'),
        longDateFormat : {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[dnes v] LT',
            nextDay: '[z??tra v] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[v ned??li v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve st??edu v] LT';
                case 4:
                    return '[ve ??tvrtek v] LT';
                case 5:
                    return '[v p??tek v] LT';
                case 6:
                    return '[v sobotu v] LT';
                }
            },
            lastDay: '[v??era v] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[minulou ned??li v] LT';
                case 1:
                case 2:
                    return '[minul??] dddd [v] LT';
                case 3:
                    return '[minulou st??edu v] LT';
                case 4:
                case 5:
                    return '[minul??] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'p??ed %s',
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
        ordinalParse : /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return cs;

}));
