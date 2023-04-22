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