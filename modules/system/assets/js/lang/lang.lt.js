/*
 * This file has been compiled from: /modules/system/lang/lt/client.php
 */
if ($.oc === undefined) $.oc = {}
if ($.oc.langMessages === undefined) $.oc.langMessages = {}
$.oc.langMessages['lt'] = $.extend(
    $.oc.langMessages['lt'] || {},
    {"markdowneditor":{"formatting":"Formatavimas","quote":"Citata","code":"Kodas","header1":"Antra\u0161t\u0117 1","header2":"Antra\u0161t\u0117 2","header3":"Antra\u0161t\u0117 3","header4":"Antra\u0161t\u0117 4","header5":"Antra\u0161t\u0117 5","header6":"Antra\u0161t\u0117 6","bold":"Ry\u0161kus","italic":"Pasvir\u0119s","unorderedlist":"Ner\u016b\u0161iuotas S\u0105ra\u0161as","orderedlist":"R\u016b\u0161iuotas S\u0105ra\u0161as","video":"Video","image":"Paviksliukas","link":"Nuoroda","horizontalrule":"\u012eterpti Horizontali\u0105 Linij\u0105","fullscreen":"Visas Ekrano Dydis","preview":"Per\u017ei\u016br\u0117ti"},"mediamanager":{"insert_link":"\u012eterpti medijos nuorod\u0105","insert_image":"\u012eterpti Paveiksliuk\u0105","insert_video":"\u012eterpti Video","insert_audio":"\u012eterpti Audio","invalid_file_empty_insert":"Pasirinkite fail\u0105 \u012f kur\u012f norite \u012fterpti nuorod\u0105.","invalid_file_single_insert":"Pasirinkite vien\u0105 fail\u0105.","invalid_image_empty_insert":"Pasirinkite pavaiksliuk\u0105(us) \u012fterpimui.","invalid_video_empty_insert":"Pasirinkite video fail\u0105 \u012fterpimui.","invalid_audio_empty_insert":"Pasirinkite audio fail\u0105 \u012fterpimui."},"alert":{"confirm_button_text":"GERAI","cancel_button_text":"At\u0161aukti","widget_remove_confirm":"Pa\u0161alinti \u0161\u012f valdikl\u012f?"},"datepicker":{"previousMonth":"Ankstenis m\u0117nuo","nextMonth":"Sekantis M\u0117nuo","months":["Sausis","Vasaris","Kovas","Balandis","Gegu\u017e\u0117","Bir\u017eelis","Liepa","Rugpj\u016btis","Rugs\u0117jis","Spalis","Lapkritis","Gruodis"],"weekdays":["Sekmadienis","Pirmadienis","Antradienis","Tre\u010diadienis","Ketvirtadienis","Penktadienis","\u0160e\u0161tadienis"],"weekdaysShort":["Sek","Pir","Ant","Tre","Ket","Pen","\u0161e\u0161"]},"colorpicker":{"choose":"Ok"},"filter":{"group":{"all":"visos"},"dates":{"all":"visos","filter_button_text":"Filtruoti","reset_button_text":"Atstatyti","date_placeholder":"Data","after_placeholder":"Po","before_placeholder":"Prie\u0161"},"numbers":{"all":"all","filter_button_text":"Filter","reset_button_text":"Reset","min_placeholder":"Min","max_placeholder":"Max"}},"eventlog":{"show_stacktrace":"Rodyti i\u0161klotin\u0119","hide_stacktrace":"Sl\u0117pti i\u0161klotin\u0119","tabs":{"formatted":"Formatuota","raw":"Nepadorotas"},"editor":{"title":"\u0160altinio kodo redaktorius","description":"J\u016bs\u0173 operacin\u0117 sistema tur\u0117t\u0173 b\u016bti suderinta vienai i\u0161 \u0161i\u0173 URL schem\u0173 nuskaitymui.","openWith":"Atidaryti su","remember_choice":"Atsiminti pasirinkt\u0105 parinkt\u012f \u0161iai sesijai","open":"Atidaryti","cancel":"At\u0161aukti"}}}
);

//! moment.js locale configuration
//! locale : Lithuanian (lt)
//! author : Mindaugas Moz??ras : https://github.com/mmozuras

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var units = {
        'm' : 'minut??_minut??s_minut??',
        'mm': 'minut??s_minu??i??_minutes',
        'h' : 'valanda_valandos_valand??',
        'hh': 'valandos_valand??_valandas',
        'd' : 'diena_dienos_dien??',
        'dd': 'dienos_dien??_dienas',
        'M' : 'm??nuo_m??nesio_m??nes??',
        'MM': 'm??nesiai_m??nesi??_m??nesius',
        'y' : 'metai_met??_metus',
        'yy': 'metai_met??_metus'
    };
    function translateSeconds(number, withoutSuffix, key, isFuture) {
        if (withoutSuffix) {
            return 'kelios sekund??s';
        } else {
            return isFuture ? 'keli?? sekund??i??' : 'kelias sekundes';
        }
    }
    function translateSingular(number, withoutSuffix, key, isFuture) {
        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
    }
    function special(number) {
        return number % 10 === 0 || (number > 10 && number < 20);
    }
    function forms(key) {
        return units[key].split('_');
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        if (number === 1) {
            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
        } else if (withoutSuffix) {
            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
        } else {
            if (isFuture) {
                return result + forms(key)[1];
            } else {
                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
            }
        }
    }
    var lt = moment.defineLocale('lt', {
        months : {
            format: 'sausio_vasario_kovo_baland??io_gegu????s_bir??elio_liepos_rugpj????io_rugs??jo_spalio_lapkri??io_gruod??io'.split('_'),
            standalone: 'sausis_vasaris_kovas_balandis_gegu????_bir??elis_liepa_rugpj??tis_rugs??jis_spalis_lapkritis_gruodis'.split('_')
        },
        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays : {
            format: 'sekmadien??_pirmadien??_antradien??_tre??iadien??_ketvirtadien??_penktadien??_??e??tadien??'.split('_'),
            standalone: 'sekmadienis_pirmadienis_antradienis_tre??iadienis_ketvirtadienis_penktadienis_??e??tadienis'.split('_'),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_??e??'.split('_'),
        weekdaysMin : 'S_P_A_T_K_Pn_??'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY [m.] MMMM D [d.]',
            LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l : 'YYYY-MM-DD',
            ll : 'YYYY [m.] MMMM D [d.]',
            lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
        },
        calendar : {
            sameDay : '[??iandien] LT',
            nextDay : '[Rytoj] LT',
            nextWeek : 'dddd LT',
            lastDay : '[Vakar] LT',
            lastWeek : '[Pra??jus??] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'po %s',
            past : 'prie?? %s',
            s : translateSeconds,
            m : translateSingular,
            mm : translate,
            h : translateSingular,
            hh : translate,
            d : translateSingular,
            dd : translate,
            M : translateSingular,
            MM : translate,
            y : translateSingular,
            yy : translate
        },
        ordinalParse: /\d{1,2}-oji/,
        ordinal : function (number) {
            return number + '-oji';
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return lt;

}));
