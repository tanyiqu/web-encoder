// 定义算法接口
class AlgorithmInterface {
    encode() {
        console.log('encode');
    }

    decode() {
        console.log('decode');
    }
}


/**
 * Base64编码
 */
const Base64A = new AlgorithmInterface();
Base64A.encode = (content) => {
    return Base64.encode(content)
    // return btoa(content)
}
Base64A.decode = (content) => {
    return Base64.decode(content)
}


/**
 * URL编码
 */
const URLA = new AlgorithmInterface();
URLA.encode = (content) => {
    return encodeURIComponent(content)
}
URLA.decode = (content) => {
    return decodeURIComponent(content)
}


/**
 * MD5
 */
const MD5 = new AlgorithmInterface();
MD5.encode = (content) => {
    return md5(content)
}
MD5.decode = (content) => {
    return '我没那么厉害，解不出来！'
}




/**
 * Unicode
 */
const Unicode = new AlgorithmInterface();
Unicode.encode = (content) => {
    let res = [];
    let str = content;
    for (let i = 0; i < str.length; i++)
        res[i] = "\\u" + ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    return res.join("");
}
Unicode.decode = (content) => {
    var result = [];
    var strArr = content.split('\\u'); //根据 \u 分割
    var len = strArr.length;
    for (var i = 0; i < len; i++) {
        if (strArr[i]) {
            result.push(String.fromCharCode(parseInt(strArr[i], 16))); //16 转 10
        }
    }
    return result.join('');
}





/**
 * HTML实体
 */
const HTML = new AlgorithmInterface();
HTML.encode = (content) => {
    var res = [];
    var str = content;
    for (var i = 0; i < str.length; i++) res[i] = str.charCodeAt(i);
    return "&#" + res.join(";&#") + ";";
}
HTML.decode = (content) => {
    return content.replace(/&#(x)?([^&]{1,5});?/g, function ($, $1, $2) {
        return String.fromCharCode(parseInt($2, $1 ? 16 : 10));
    });
}