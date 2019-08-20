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
  //获取导航栏下拉列表元素
  var nav_down=document.getElementById("nav-down");
  // 获取导航栏菜单元素
  var nav_memu=document.getElementById("nav-memu");
  var nav_a = document.querySelector("#nav-memu a");
  console.log(nav_a);
  //发送ajax请求获取数据
  var products= "";
  ajax("/product/products?pclass=products", "get", function(result) {
    // 遍历请求回来的对象将字符串拼接到str中
    for (var elem of result) {
      str += `<li><a href="">${elem.classname}</a></li>`;
    }
    // 将str写入导航菜单中
    // nav_down.innerHTML = str;
  });

  // 发送请求  请求数据表umbra_shift数据
  var umbra_shift="";
  ajax("/product/products?pclass=umbra_shift", "get", function(result) {
    // 遍历请求回来的对象将字符串拼接到str中
    for (var elem of result) {
      str += `<li><a href="">${elem.classname}</a></li>`;
    }
    // 将str写入导航菜单中
    // nav_down.innerHTML = str;
  });

  // 给导航栏菜单元素绑定点击事件
  nav_a.getAttribute("data-down")
 	nav_a.addEventListener("focus", function(e) {
      // var a = event.target;
        // 如果点击的是a元素则会向服务器发送ajax请求
        nav_down.innerHTML = products;
        nav_down.style.display="block";
    });
    // 给导航片段绑定一个失去焦点事件
	nav_a.addEventListener("blur",function (event) {
    var a=event.target;
    if(a.nodeName=="A"){
      	nav_down.style.display = "none";
    }
		// nav_down.style.display="none";
  });

})();
