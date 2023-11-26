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
 * URL编码  (All char)
 */
const URLALLA = new AlgorithmInterface();


function getAsciiHex(i) {
    var asciiCode = i.charCodeAt(0);
    var hexValue = asciiCode.toString(16).toUpperCase(); // 转换为大写字母的十六进制格式
    return hexValue;
}




// 自定义编码算法
function encode(content) {
    result = '';

    for (let i = 0; i < content.length; i++) {
        if (encodeURIComponent(content[i]) === content[i]) {
            result += ('%' + getAsciiHex(content[i]));
        } else {
            result += encodeURIComponent(content[i]);
        }
    }

    return result;
}



URLALLA.encode = encode;
URLALLA.decode = (content) => {
    return decodeURIComponent(content)
}