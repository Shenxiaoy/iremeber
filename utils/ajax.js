// export default function (request) {
//   return new Promise((res, rej) = > {
//     var xhr = new XMLHttpRequest(request.data)
//     xhr.open(request.method, request.url, true)
//   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
//   xhr.onreadystatechange = function () {
//     if ((xhr.readyState == 4) && (xhr.status == 200)) {
//       try {
//         res(JSON.parse(xhr.responseText))
//       } catch (e) {
//         rej(e)
//       }
//     } else {
//       // rej(xhr.responseText)
//     }
//   }
//   xhr.send(request.data)
// })
// }

~function(){
  return new Promise(function(res, rej) {
    var xhr = new XMLHttpRequest(request.data)
    xhr.open(request.method, request.url, true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.onreadystatechange = function () {
      if ((xhr.readyState == 4) && (xhr.status == 200)) {
        try {
          res(JSON.parse(xhr.responseText))
        } catch (e) {
        rej(e)
        }
      } else {
      // rej(xhr.responseText)
      }
    }
  xhr.send(request.data)
})
}()


