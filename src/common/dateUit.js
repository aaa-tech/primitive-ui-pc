var SIGN_REGEXP = /([yMdhsm])(\1*)/g
var DEFAULT_PATTERN = 'yyyy-MM-dd'

function padding(s, len) {
    let l = len - (s + '').length
    for (var i = 0; i < l; i++) { s = '0' + s }
    return s
};

export default {
    formatDate: {
        format: function (date, pattern) {
            pattern = pattern || DEFAULT_PATTERN
            return pattern.replace(SIGN_REGEXP, function ($0) {
                switch ($0.charAt(0)) {
                    case 'y': return padding(date.getFullYear(), $0.length)
                    case 'M': return padding(date.getMonth() + 1, $0.length)
                    case 'd': return padding(date.getDate(), $0.length)
                    case 'w': return date.getDay() + 1
                    case 'h': return padding(date.getHours(), $0.length)
                    case 'm': return padding(date.getMinutes(), $0.length)
                    case 's': return padding(date.getSeconds(), $0.length)
                }
            })
        },
        parse: function (dateString, pattern) {
            var matchs1 = pattern.match(SIGN_REGEXP)
            var matchs2 = dateString.match(/(\d)+/g)
            if (matchs1.length === matchs2.length) {
                var _date = new Date(1970, 0, 1)
                for (var i = 0; i < matchs1.length; i++) {
                    var _int = parseInt(matchs2[i])
                    var sign = matchs1[i]
                    switch (sign.charAt(0)) {
                        case 'y': _date.setFullYear(_int); break
                        case 'M': _date.setMonth(_int - 1); break
                        case 'd': _date.setDate(_int); break
                        case 'h': _date.setHours(_int); break
                        case 'm': _date.setMinutes(_int); break
                        case 's': _date.setSeconds(_int); break
                    }
                }
                return _date
            }
            return null
        },
    },
    //获得两个日期之间相差的天数
    dateDiff:function(date1 , date2){  
        var date1Str = date1.split("-");//将日期字符串分隔为数组,数组元素分别为年.月.日
        var date1Obj = new Date(date1Str[0],(date1Str[1]-1),date1Str[2]);
        var date2Str = date2.split("-");
        var date2Obj = new Date(date2Str[0],(date2Str[1]-1),date2Str[2]);
        var t1 = date1Obj.getTime();
        var t2 = date2Obj.getTime();
        var dateTime = 1000*60*60*24; //每一天的毫秒数
        var minusDays = Math.floor(((t2-t1)/dateTime));//计算出两个日期的天数差
        var days = Math.abs(minusDays);//取绝对值
        return days;
    }
}
