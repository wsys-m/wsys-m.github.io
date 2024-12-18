    var usename=document.getElementById('usename');
    var password=document.getElementById('password');
    var usename_info=document.getElementById('usename_info');
    var password_info=document.getElementById('password_info');
    //onblur事件，表示光标离开文本框，即可执行里面的逻辑
    //替换下一句：document.onblur=function(){
    document.getElementById('usename').onblur=function(){
        if(usename.value.length<3 ||usename.value.length>10  ){
    usename_info.innerText='用户名长度为3-10位!';
    }else{
        usename_info.innerText=''
    }
}
document.getElementById('password').onblur=function(){
        if( password.value.length<6 ||password.value.length>10  ){
            password_info.innerText='密码长度为6-10位!';
    }else{
        password_info.innerText=''
    }
}
document.getElementById('login').onclick=function(){
    if(( password.value.length<6 ||password.value.length>10) || 
    (usename.value.length<3 ||usename.value.length>10  ) ){
            alert('请输入正确登录格式！');
}else{                               
        window.location.href='../pages/index .html';
  
}
}  