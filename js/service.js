// var BASEURL = 'http://gis.cloud.rtzltech.cn:8010/monitoringserver/';

function getdata(url, params, callback, errorCallBack) {
    $.ajax({
        type: 'POST',
        url: BASEURL + url,
        data: params,
        dataType: 'json',
        timeout: 30000,
        success: function (data) {
            if (data && '99' == data.retcode) {
                alert(data.retmsg);
                return;
            }
            return callback(data);
        },
        error: function (error) {
            if (error.message === 'Network Error') {
                alert('网络错误');
            } else {
                alert(error.message);
            }
            if (errorCallBack) {
                errorCallBack(error);
            }
        }
    })
}
function login(params, callback, errorCallBack) {
    getdata('login', params, callback, errorCallBack);
}
function getmap(params, callback, errorCallBack) {
    getdata('track/posDevDataQuery.action', params, callback, errorCallBack);
}