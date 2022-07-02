// 点击编码
$('#encode').click(() => {
    execute($('#content').val(), $('#algorithm').val(), 'encode')
})


// 点击解码
$('#decode').click(() => {
    execute($('#content').val(), $('#algorithm').val(), 'decode')
})

// 点击复制
$('#copy').click(() => {
    let clipboard = new ClipboardJS('#copy', {
        text: function () {
            return $("#result").val();
        }
    });
    Toast.success('复制成功');

})




/**
 * 
 * @param content 内容
 * @param algorithm 加密/解密算法
 * @param method 加密/解密
 */
function execute(content, algorithm, method) {

    let Al = null;
    let result = '';

    switch (parseInt(algorithm)) {
        case 1:
            Al = Base64;
            break
        case 2:
            Al = URLA;
            break
        case 3:
            Al = MD5;
            break
    }

    if (method == 'encode') {
        result = Al.encode(content)
    } else {
        result = Al.decode(content)
    }

    $('#result').val(result);

}