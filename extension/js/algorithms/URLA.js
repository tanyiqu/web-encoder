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
URLALLA.encode = (content) => {
    console.log(content);
    console.log(content.length);
    return encodeURIComponent(content) + ' all'
}
URLALLA.decode = (content) => {
    return decodeURIComponent(content) + ' all'
}