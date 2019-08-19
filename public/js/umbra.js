(function() {
  function ajax(url, type, callback, data) {
    var xhr = new XMLHttpRequest(); //不变！
    //如果发送get请求时，带参数
    if (type == "get" && data !== undefined) {
      //则需要将参数用?连接到url地址结尾
      url += "?" + data;
    }
    xhr.open(type, url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var result = JSON.parse(xhr.responseText);
        //缺少一段自定义的代码来对result执行不同的操作
        //今后，只要一段代码不确定时，也可以用形参变量解决
        //只不过，这个形参变量将来传入的不是一个值，而是一个函数！
        callback(result);
      }
    };
    if (type == "post") {
      //只有发送的是post请求时，才需要添加请求头
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (type == "post") {
      //只有post请求，才会将参数放在send()中发送
      xhr.send(data);
    } else {
      //而如果是get请求，send()中什么都没有
      xhr.send();
    }
	}
	var nav_down=document.getElementById("nav-down");
	var nav_memu=document.getElementById("nav-memu");
 	nav_memu.addEventListener("click", function(event) {
      var a = event.target;
      event.preventDefault();
      if (a.nodeName == "A") {
        ajax("/product/products", "get", function(result) {
          var str = "";
          for (var elem of result) {
            str += `<li><a href="">${elem.classname}</a></li>`;
          }
          nav_down.innerHTML = str;
        });
      }
		});
	nav_memu.addEventListener("focus",function (event) {
		console.log(1);
		nav_down.style.display="none";
	});
})();
