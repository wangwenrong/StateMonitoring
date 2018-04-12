var BASEURL = 'http://gis.cloud.rtzltech.cn:8010/monitoringserver/';
project: 'http://app.test.cloud.rtzltech.cn/monitoringserver/',

function getData(url, params, callback, errorCallBack) {
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
            if (errorCallBack) {
                if (error.message === 'Network Error') {
                    alert('网络错误');
                } else {
                    alert(error.message);
                }
                return errorCallBack(error);
            }
        }
    })
}
function login(params, callback) {
    getData('login', params, callback);
}
function getmap(params, callback, errorCallBack) {
    getData('track/posDevDataQuery.action', params, callback, errorCallBack);
}