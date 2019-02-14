## history

> history 是对浏览器历史记录的访问 API。

在history中向后跳转，也就是浏览器点击后退箭头的操作。
```javascript
window.history.back()
```

在history中向前跳转，也就是浏览器点击向前箭头的操作。
```javascript
window.history.forward()
```

使用`history.go` API 跳转到历史访问记录某个点
```javascript
//向后移动一个页面
window.history.go(-1)

//向前移动一个页面
window.history.go(1)

```

------------

html5 history 新增 

- history.pushState() 可以添加历史记录条目
- history.replaceState()  可以修改历史记录条目

#### pushState() 例子

```javascript
//假设在 http://mozilla.org/foo.html 中执行了以下 JavaScript 代码:
var stateObj = {foo: 'bar'}
history.pushState(stateObj, 'page2', 'bar.html')
```
上面例子会使地址栏显示为http://mozilla.org/bar.html，但并不会导致浏览器去加载bar.html；<br/>
当用户访问了新页面，点击了回退按钮，那么地址栏会显示http://mozilla.org/bar.html，并进行加载bar.html;<br/>
当再次点击回退按钮，地址栏地址会变为http://mozilla.org/foo.html，但内容不会变化，就是知识url变化了，但内容还保持着bar.html内容。

- pushState 第一个参数是一个对象，状态对象，history.state会记录这个参数
- 第二个参数：大概意思是标题，未来可能有用，给传递的state传递一个短标题
- 第三个参数：该参数定义了新的历史URL记录。

#### replaceState() 例子

```javascript
history.replaceState(stateObj, "page 3", "bar2.html");
```

对pushState添加的历史记录进行修改

#### popstate

每当活动的历史记录项发生变化时， popstate 事件都会被传递给window对象。如果当前活动的历史记录项是被 pushState 创建的，
或者是由 replaceState 改变的，那么 popstate 事件的状态属性 state 会包含一个当前历史记录状态对象的拷贝。

#### 获取当前状态

```javascript
var currentState = history.state;
```

没有进行pushState 或replace的历史记录，默认state为null







































