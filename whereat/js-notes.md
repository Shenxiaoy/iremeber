
## 获取客户端ip地址

1、使用WebRTC(Web Real-Time Communications),是一项实时通讯技术，可以使用WebRTC获取ip地址。
> WebRTC MDN API 地址 ：https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API。

> IE 浏览器可以通过ActiveObject 运行获取ip地址

```code
function getYourIP(){
  var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
  if (RTCPeerConnection) (function () {
    var rtc = new RTCPeerConnection({iceServers:[]});
    if (1 || window.mozRTCPeerConnection) {
      rtc.createDataChannel('', {reliable:false});
    };

    rtc.onicecandidate = function (evt) {
      if (evt.candidate) grepSDP("a="+evt.candidate.candidate);
    };
    rtc.createOffer(function (offerDesc) {
      grepSDP(offerDesc.sdp);
      rtc.setLocalDescription(offerDesc);
    }, function (e) { console.warn("offer failed", e); });


    var addrs = Object.create(null);
    addrs["0.0.0.0"] = false;
    function updateDisplay(newAddr) {
      if (newAddr in addrs) return;
      else addrs[newAddr] = true;
      var displayAddrs = Object.keys(addrs).filter(function (k) { return addrs[k]; });
      for(var i = 0; i < displayAddrs.length; i++){
        if(displayAddrs[i].length > 16){
          displayAddrs.splice(i, 1);
          i--;
        }
      }
      document.getElementById('list').textContent = displayAddrs[0];
    }

    function grepSDP(sdp) {
      var hosts = [];
      sdp.split('\r\n').forEach(function (line, index, arr) {
        if (~line.indexOf("a=candidate")) {
          var parts = line.split(' '),
            addr = parts[4],
            type = parts[7];
          if (type === 'host') updateDisplay(addr);
        } else if (~line.indexOf("c=")) {
          var parts = line.split(' '),
            addr = parts[2];
          updateDisplay(addr);
        }
      });
    }
  })();
  else{
    document.getElementById('list').textContent = "请使用主流浏览器：chrome,firefox,opera,safari";
  }
}
```

2、上面是js获取客户端ip的方法，下面是通过node获取 客户端ip地址的实现。

```code
var express = require('express')
var app = express();

//发送请求，获取客户端ip
app.get('/', function (req, res) {
    var clientIp = getIp(req)
    console.log('客户端ip',clientIp)
    res.send('Hello World');
})

//通过req的hearers来获取客户端ip
var getIp = function(req) {
    var ip = req.headers['x-real-ip'] ||
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress || '';
    if(ip.split(',').length>0){
        ip = ip.split(',')[0];
    }
    return ip;
};

var server = app.listen(8081, '0.0.0.0',function () {

    var host = server.address().address
    var port = server.address().port

    console.log('服务启动...')

})

```
## --


