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