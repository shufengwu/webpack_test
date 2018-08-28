const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());

window.onload = function () {
    var city = this.document.getElementById('search_textview');
    var submit = document.getElementById('search_submit_button');
    var xmlHttpRequest;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlHttpRequest = new XMLHttpRequest();
    } else {
        // IE6, IE5 浏览器执行代码
        xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var url;
    submit.onclick = function () {
        if (city.value === "") {
            alert('城市名不能为空');
        } else {
            // url = '/open/api/weather/json.shtml?city=' + city.value;
            // xmlHttpRequest.onreadystatechange = function () {
            //     if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            //         console.log(xmlHttpRequest.url);
            //         var xmlDoc = xmlHttpRequest.responseXML;
            //         console.log(xmlDoc);
            //     }
            // }
            // xmlHttpRequest.open("GET", url, true);
            // xmlHttpRequest.send();
            $.ajax({
                type: 'GET',
                url: 'https://free-api.heweather.com/s6/weather/forecast',
                data: {
                    location: city.value,
                    key:'00bdd8bea75d4644ad602a9345442853'
                },
                dataType: 'json',
                beforeSend: function () {},
                success: function (data) {
                    console.log('success');
                    var s = JSON.stringify(data);
                    console.log(s);
                },
                error: function (error) {
                    console.log('fail');
                    console.log(error);
                }
            });
        }

    }
}