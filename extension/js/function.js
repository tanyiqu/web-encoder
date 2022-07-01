
/**
 * 封装toast提示
 */
 function Toast() {
    this.position = 'toast-top-right';
    this.timeOut = '1500';
}
initToast();
function initToast() {
    Toast.success = function (msg, position, timeOut) {
        if (!position) {
            position = this.position;
        }
        if (!timeOut) {
            timeOut = this.timeOut;
        }
        toastr.options.positionClass = position;
        toastr.options.timeOut = timeOut;
        toastr.success(msg);
    };
    Toast.error = function (msg, position, timeOut) {
        if (!position) {
            position = this.position;
        }
        if (!timeOut) {
            timeOut = this.timeOut;
        }
        toastr.options.positionClass = position;
        toastr.options.timeOut = timeOut;
        toastr.error(msg);
    };
    Toast.info = function (msg, position, timeOut) {
        if (!position) {
            position = this.position;
        }
        if (!timeOut) {
            timeOut = this.timeOut;
        }
        toastr.options.positionClass = position;
        toastr.options.timeOut = timeOut;
        toastr.info(msg);
    };
}


// 点击编码
$('#encode').click(()=>{
    alert('en')
})


// 点击解码
$('#decode').click(()=>{
    // alert('de')
    
})

// 点击复制
$('#copy').click(()=>{
    Toast.success('复制成功','toast-top-full-width');
})
