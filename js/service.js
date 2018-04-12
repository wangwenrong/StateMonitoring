var BASEURL = 'http://gis.cloud.rtzltech.cn:8010/monitoringserver/';

function getData(url, params, callback, errorCallBack) {
    $.ajax({
        type: 'POST',
        data: params,
        url: BASEURL + url,
        dataType: json,
        timeout: 30000,
        success: function (data) {
            plus.nativeUI.closeWaiting();
            if (data && '99' == data.retcode) {
                alert(data.retmsg);
                return;
            }
            return callback(data);
        },
        error: function (xhr, type, errorThrown) {
            if (errorCallBack) {
                if (error.message === 'Network Error') {
                    alert('网络错误');
                } else {
                    alert(error.message);
                }
                errorCallBack(error);
            }
        }
    })
}
function getmap(params, callback, errorCallBack) {
    getData('track/posDevDataQuery.action', params, callback, errorCallBack);
}