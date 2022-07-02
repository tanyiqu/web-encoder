// 定义算法接口
class AlgorithmInterface {
    encode() {
        console.log('encode');
    }

    decode() {
        console.log('decode');
    }
}



const Base64 = new AlgorithmInterface();
Base64.encode = (content) => {
    return btoa(content)
}
Base64.decode = (content) => {
    return atob(content)
}


const URLA = new AlgorithmInterface();
URLA.encode = (content) => {
    return encodeURIComponent(content)
}
URLA.decode = (content) => {
    return decodeURIComponent(content)
}


const MD5 = new AlgorithmInterface();
MD5.encode = (content) => {
    return md5(content)
}
MD5.decode = (content) => {
    return '我没那么厉害，解不出来！'
}
