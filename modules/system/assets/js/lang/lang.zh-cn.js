/*
 * This file has been compiled from: /modules/system/lang/zh-cn/client.php
 */
if ($.oc === undefined) $.oc = {}
if ($.oc.langMessages === undefined) $.oc.langMessages = {}
$.oc.langMessages['zh-cn'] = $.extend(
    $.oc.langMessages['zh-cn'] || {},
    {"markdowneditor":{"formatting":"\u683c\u5f0f\u5316","quote":"\u5f15\u7528","code":"\u4ee3\u7801","header1":"\u6807\u9898 1","header2":"\u6807\u9898 2","header3":"\u6807\u9898 3","header4":"\u6807\u9898 4","header5":"\u6807\u9898 5","header6":"\u6807\u9898 6","bold":"\u7c97\u4f53","italic":"\u659c\u4f53","unorderedlist":"\u65e0\u5e8f\u5217\u8868","orderedlist":"\u6709\u5e8f\u5217\u8868","video":"\u89c6\u9891","image":"\u56fe\u7247","link":"\u94fe\u63a5","horizontalrule":"\u63d2\u5165\u5206\u5272\u7ebf","fullscreen":"\u5168\u5c4f","preview":"\u9884\u89c8"},"mediamanager":{"insert_link":"\u63d2\u5165\u94fe\u63a5","insert_image":"\u63d2\u5165\u56fe\u7247","insert_video":"\u63d2\u5165\u89c6\u9891","insert_audio":"\u63d2\u5165\u97f3\u9891","invalid_file_empty_insert":"\u8bf7\u9009\u62e9\u8981\u63d2\u5165\u7684\u6587\u4ef6\u3002","invalid_file_single_insert":"\u8bf7\u9009\u62e9\u8981\u63d2\u5165\u7684\u6587\u4ef6\u3002","invalid_image_empty_insert":"\u8bf7\u9009\u62e9\u8981\u63d2\u5165\u7684\u56fe\u7247\u6587\u4ef6\u3002","invalid_video_empty_insert":"\u8bf7\u9009\u62e9\u8981\u63d2\u5165\u7684\u89c6\u9891\u6587\u4ef6\u3002","invalid_audio_empty_insert":"\u8bf7\u9009\u62e9\u8981\u63d2\u5165\u7684\u97f3\u9891\u6587\u4ef6\u3002"},"alert":{"confirm_button_text":"\u786e\u5b9a","cancel_button_text":"\u53d6\u6d88","widget_remove_confirm":"Remove this widget?"},"datepicker":{"previousMonth":"\u4e0a\u4e00\u4e2a\u6708","nextMonth":"\u4e0b\u4e00\u4e2a\u6708","months":["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"],"weekdays":["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"],"weekdaysShort":["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"]},"colorpicker":{"choose":"Ok"},"filter":{"group":{"all":"\u5168\u90e8"},"dates":{"all":"\u5168\u90e8","filter_button_text":"\u7b5b\u9009","reset_button_text":"\u91cd\u7f6e","date_placeholder":"\u65e5\u671f","after_placeholder":"After","before_placeholder":"Before"},"numbers":{"all":"all","filter_button_text":"Filter","reset_button_text":"Reset","min_placeholder":"Min","max_placeholder":"Max"}},"eventlog":{"show_stacktrace":"\u663e\u793a\u5806\u6808","hide_stacktrace":"\u9690\u85cf\u5806\u6808","tabs":{"formatted":"\u683c\u5f0f\u5316\u7684","raw":"\u539f\u59cb"},"editor":{"title":"\u6e90\u4ee3\u7801\u7f16\u8f91\u5668","description":"Your operating system should be configured to listen to one of these URL schemes.","openWith":"Open with","remember_choice":"\u8bb0\u4f4f\u9009\u62e9","open":"\u6253\u5f00","cancel":"\u53d6\u6d88"}}}
);

//! moment.js locale configuration
//! locale : chinese (zh-cn)
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var zh_cn = moment.defineLocale('zh-cn', {
        months : '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????'.split('_'),
        monthsShort : '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split('_'),
        weekdays : '?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
        weekdaysShort : '??????_??????_??????_??????_??????_??????_??????'.split('_'),
        weekdaysMin : '???_???_???_???_???_???_???'.split('_'),
        longDateFormat : {
            LT : 'Ah???mm???',
            LTS : 'Ah???m???s???',
            L : 'YYYY-MM-DD',
            LL : 'YYYY???MMMD???',
            LLL : 'YYYY???MMMD???Ah???mm???',
            LLLL : 'YYYY???MMMD???ddddAh???mm???',
            l : 'YYYY-MM-DD',
            ll : 'YYYY???MMMD???',
            lll : 'YYYY???MMMD???Ah???mm???',
            llll : 'YYYY???MMMD???ddddAh???mm???'
        },
        meridiemParse: /??????|??????|??????|??????|??????|??????/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '??????' || meridiem === '??????' ||
                    meridiem === '??????') {
                return hour;
            } else if (meridiem === '??????' || meridiem === '??????') {
                return hour + 12;
            } else {
                // '??????'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '??????';
            } else if (hm < 900) {
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
            sameDay : function () {
                return this.minutes() === 0 ? '[??????]Ah[??????]' : '[??????]LT';
            },
            nextDay : function () {
                return this.minutes() === 0 ? '[??????]Ah[??????]' : '[??????]LT';
            },
            lastDay : function () {
                return this.minutes() === 0 ? '[??????]Ah[??????]' : '[??????]LT';
            },
            nextWeek : function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.diff(startOfWeek, 'days') >= 7 ? '[???]' : '[???]';
                return this.minutes() === 0 ? prefix + 'dddAh??????' : prefix + 'dddAh???mm';
            },
            lastWeek : function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.unix() < startOfWeek.unix()  ? '[???]' : '[???]';
                return this.minutes() === 0 ? prefix + 'dddAh??????' : prefix + 'dddAh???mm';
            },
            sameElse : 'LL'
        },
        ordinalParse: /\d{1,2}(???|???|???)/,
        ordinal : function (number, period) {
            switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + '???';
            case 'M':
                return number + '???';
            case 'w':
            case 'W':
                return number + '???';
            default:
                return number;
            }
        },
        relativeTime : {
            future : '%s???',
            past : '%s???',
            s : '??????',
            m : '1 ??????',
            mm : '%d ??????',
            h : '1 ??????',
            hh : '%d ??????',
            d : '1 ???',
            dd : '%d ???',
            M : '1 ??????',
            MM : '%d ??????',
            y : '1 ???',
            yy : '%d ???'
        },
        week : {
            // GB/T 7408-1994?????????????????????????????????????????????????????????????????????????ISO 8601:1988??????
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return zh_cn;

}));
