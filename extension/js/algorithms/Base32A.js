const BASE32_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

// 将字符串编码为 Base32 格式
function base32Encode(str) {
  let bits = "";
  let result = "";
  
  // 将字符串转换为二进制位序列
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    let bitsStr = code.toString(2).padStart(8, "0");
    bits += bitsStr;
  }
  
  // 如果输入长度不是 5 的倍数，用 0 补齐
  while (bits.length % 5 !== 0) {
    bits += "0";
  }
  
  // 将每 5 个二进制位转换为 Base32 字符
  for (let i = 0; i < bits.length; i += 5) {
    let chunk = bits.substr(i, 5);
    let index = parseInt(chunk, 2);
    result += BASE32_CHARS.charAt(index);
  }
  
  return result;
}

// 将 Base32 格式的字符串解码为原始字符串
function base32Decode(str) {
  let bits = "";
  let result = "";
  
  // 将 Base32 字符转换为二进制位序列
  for (let i = 0; i < str.length; i++) {
    let index = BASE32_CHARS.indexOf(str.charAt(i));
    let bitsStr = index.toString(2).padStart(5, "0");
    bits += bitsStr;
  }
  
  // 如果输入长度不是 8 的倍数，用 0 补齐
  while (bits.length % 8 !== 0) {
    bits += "0";
  }
  
  // 将每 8 个二进制位转换为字符
  for (let i = 0; i < bits.length; i += 8) {
    let chunk = bits.substr(i, 8);
    let code = parseInt(chunk, 2);
    result += String.fromCharCode(code);
  }
  
  return result;
}




/**
 * Base32编码
 */
 const Base32A = new AlgorithmInterface();
 Base32A.encode = (content) => {
     return base32Encode(content)
 }
 Base32A.decode = (content) => {
     return base32Decode(content)
 }
 