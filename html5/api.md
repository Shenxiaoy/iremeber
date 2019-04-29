
## 监听屏幕的旋转 orientation

window.orientationchange 事件对屏幕旋转变化进行监听；

screen.orientation 则是屏幕旋转的属性；

|orientation.angle 值|屏幕方向|
|---|---|
|0|竖屏|
|90|向左横屏|
|-90/270|向右横屏|
|180|倒屏|

#### exam: 监听屏幕旋转变化
```javascript
function screenOrientation() {
  const orientation = screen.orientation || screen.mozOrientation || screen.msOrientation
  let angle = null
  window.addEventListener('orientation' in window ? 'orientation' : 'resize', function() {
    angle = orientation.angle
  })
}
```

#### exam: 媒体查询监听旋转状态，可以进行样式调整
```javascript
/* 竖屏 */
@media screen and (orientation: portrait) {
  // some code
}

/* 横屏 */
@media screen and (orientation: landscape) {
  // some code
}
```

-----------------------

## 电池状态：navigator.getBattery()

|key|描述|备注|
|---|---|---|
|charging|是否在充电|可读属性|
|chargingTime|若在充电还需充电时间|可读属性|
|dischargingTime|剩余电量|可读属性|
|level|剩余电量百分数|可读属性|
|onchargingchange|监听充电状态的改变|可监听事件|
|onchargingtimechange|监听充电时间的改变|可监听事件|
|ondischargingtimechange|监听电池可用时间的改变|可监听事件|
|onlevelchange|监听剩余电量百分数的改变|可监听事件|

##### use
```javascript
if(navigator.getBattery) {
  navigator.getBattery().then(battery) {
    var batteryInfo = battery.charging ? '在充电' : '没充电'
    battery.addEventListener('chargingchange', function() {
      
    })
  }
}
```

-----------------

## 手机震动  window.navigator.vibrate(200)

##### exam:
```javascript
if(navigator.vibrate) {
  navigator.vibrate([500, 500, 500, 500, 500, 500])
} else {
  alert('您的设备不支持震动！')
}

//清除震动
navigtor.vibrate(0);

// 持续震动
setInterval(function() {
  navigator.vibrate(200)
}, 500)


```
----------------------------

## 联网状态 navigator.onLine

> 注意：navigator.onLine 只会在机器未连接到局域网或路由器时返回 false，其他情况下均返回 true。也就是说，机器连接上路由器后，即使这个路由器没联通网络， navigator.onLine 仍然返回 true

------------

## 全屏 

> Element.requestFullscreen() 方法用于发出异步请求使元素进入全屏模式。
> Element.fullscreenEnabled: 标记 fullscreen 当前是否可用
> Element.exitFullscreen(): 退出全屏
> window.fullscreenchange 监听允许进入全屏模式，window.fullscreenerror 不被允许进入全屏模式

-----------------------------


