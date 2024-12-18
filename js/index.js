        //1.实现轮播图效果
        var imgarr=['../images/轮播图2.png','../images/轮播图3.jpg','../images/轮播图4.jpg'];//存放图片列表
        var index=0;
        //声明显示下一图片的函数
        function next(){
            if(index<imgarr.length-1){
                index++;//小于图片数组长度-1时，允许++
            }else{
                index=0;//index=2时，需要设置index=0
            }
            document.getElementById('swiperimg').src=imgarr[index]
        }
        //显示前一张图片
        function pre(){
            if(index>0){
                index--;
            }else{
                index=imgarr.length-1;
            }
            document.getElementById('swiperimg').src=imgarr[index];
        }
            //document.getelementbyid('swiperimg')表示通过id方法获取id为swiperimg的对象
            //获取该对象之后，对src属性进行赋值，通过index获取图片地址
            