/*
 * This file has been compiled from: /modules/system/lang/zh-tw/client.php
 */
if ($.oc === undefined) $.oc = {}
if ($.oc.langMessages === undefined) $.oc.langMessages = {}
$.oc.langMessages['zh-tw'] = $.extend(
    $.oc.langMessages['zh-tw'] || {},
    {"markdowneditor":{"formatting":"Formatting","quote":"Quote","code":"Code","header1":"Header 1","header2":"Header 2","header3":"Header 3","header4":"Header 4","header5":"Header 5","header6":"Header 6","bold":"Bold","italic":"Italic","unorderedlist":"Unordered List","orderedlist":"Ordered List","video":"Video","image":"Image","link":"Link","horizontalrule":"Insert Horizontal Rule","fullscreen":"Full screen","preview":"Preview"},"mediamanager":{"insert_link":"Insert Media Link","insert_image":"Insert Media Image","insert_video":"Insert Media Video","insert_audio":"Insert Media Audio","invalid_file_empty_insert":"Please select file to insert a links to.","invalid_file_single_insert":"Please select a single file.","invalid_image_empty_insert":"Please select image(s) to insert.","invalid_video_empty_insert":"Please select a video file to insert.","invalid_audio_empty_insert":"Please select an audio file to insert."},"alert":{"confirm_button_text":"OK","cancel_button_text":"Cancel","widget_remove_confirm":"Remove this widget?"},"datepicker":{"previousMonth":"Previous Month","nextMonth":"Next Month","months":["January","February","March","April","May","June","July","August","September","October","November","December"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekdaysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},"colorpicker":{"choose":"Ok"},"filter":{"group":{"all":"all"},"dates":{"all":"all","filter_button_text":"Filter","reset_button_text":"Reset","date_placeholder":"Date","after_placeholder":"After","before_placeholder":"Before"},"numbers":{"all":"all","filter_button_text":"Filter","reset_button_text":"Reset","min_placeholder":"Min","max_placeholder":"Max"}},"eventlog":{"show_stacktrace":"Show the stacktrace","hide_stacktrace":"Hide the stacktrace","tabs":{"formatted":"Formatted","raw":"Raw"},"editor":{"title":"Source code editor","description":"Your operating system should be configured to listen to one of these URL schemes.","openWith":"Open with","remember_choice":"Remember selected option for this session","open":"Open","cancel":"Cancel"}}}
);

//! moment.js locale configuration
//! locale : traditional chinese (zh-tw)
//! author : Ben : https://github.com/ben-lin

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var zh_tw = moment.defineLocale('zh-tw', {
        months : '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????'.split('_'),
        monthsShort : '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split('_'),
        weekdays : '?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
        weekdaysShort : '??????_??????_??????_??????_??????_??????_??????'.split('_'),
        weekdaysMin : '???_???_???_???_???_???_???'.split('_'),
        longDateFormat : {
            LT : 'Ah???mm???',
            LTS : 'Ah???m???s???',
            L : 'YYYY???MMMD???',
            LL : 'YYYY???MMMD???',
            LLL : 'YYYY???MMMD???Ah???mm???',
            LLLL : 'YYYY???MMMD???ddddAh???mm???',
            l : 'YYYY???MMMD???',
            ll : 'YYYY???MMMD???',
            lll : 'YYYY???MMMD???Ah???mm???',
            llll : 'YYYY???MMMD???ddddAh???mm???'
        },
        meridiemParse: /??????|??????|??????|??????|??????/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '??????' || meridiem === '??????') {
                return hour;
            } else if (meridiem === '??????') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === '??????' || meridiem === '??????') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 900) {
                return '??????';
            } else if (hm < 1130) {
                return '??????';
            } else if (hm < 1230) {
                return '??????';
            } else if (hm < 1800) {
                return '??????';
            } else {
                return '??????';
            }
        },
        calendar : {
            sameDay : '[??????]LT',
            nextDay : '[??????]LT',
            nextWeek : '[???]ddddLT',
            lastDay : '[??????]LT',
            lastWeek : '[???]ddddLT',
            sameElse : 'L'
        },
        ordinalParse: /\d{1,2}(???|???|???)/,
        ordinal : function (number, period) {
            switch (period) {
            case 'd' :
            case 'D' :
            case 'DDD' :
                return number + '???';
            case 'M' :
                return number + '???';
            case 'w' :
            case 'W' :
                return number + '???';
            default :
                return number;
            }
        },
        relativeTime : {
            future : '%s???',
            past : '%s???',
            s : '??????',
            m : '1??????',
            mm : '%d??????',
            h : '1??????',
            hh : '%d??????',
            d : '1???',
            dd : '%d???',
            M : '1??????',
            MM : '%d??????',
            y : '1???',
            yy : '%d???'
        }
    });

    return zh_tw;

}));
