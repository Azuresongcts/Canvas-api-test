window.onload = function () {
    var canvas = document.getElementById("app");
    var context2D = canvas.getContext("2d");
    var stage = new DisplayObjectContainer();
    //处理图片
    //context2D.drawImage(image, 0, 0);//未加载完成，无法显示图片
    setInterval(function () {
        context2D.clearRect(0, 0, canvas.width, canvas.height); //在显示图片之前先清屏，将之前帧的图片去掉,清屏范围最好设置成画布的宽与高
        stage.draw(context2D);
    }, 30); //每30毫秒刷新一次
    //局部渲染：仅渲染整个场景中改变的一部分，但是需要更大的内存空间来计算
    var tf1 = new TextField();
    tf1.text = "This is";
    tf1.x = 80;
    tf1.y = 20;
    tf1.size = 20;
    var tf2 = new TextField();
    tf2.text = "CTS";
    tf2.x = 130;
    tf2.y = 20;
    tf2.size = 20;
    var image = document.createElement("img"); //创建空壳
    image.src = "IMG_0515.JPG"; //指定图片
    var bitmap = new Bitmap();
    bitmap.image = image;
    bitmap.y = 40;
    bitmap.x = 50;
    bitmap.scaleX = 0.5;
    bitmap.scaleY = 0.5;
    image.onload = function () {
        stage.addChild(tf1);
        //console.log("1");
        stage.addChild(tf2);
        stage.addChild(bitmap);
        //stage.removeChild(tf1);
    };
    canvas.onmousedown = function (e) {
        var x = e.offsetX;
        var y = e.offsetY;
        var target = stage.hitTest(x, y);
        var result = target;
        //list
        //  |-itemRenderer
        //      |--TextField    点TextField可以拖动，点button弹出Alert不能拖动
        //      |--Button
        if (result) {
            alert("1");
            while (result.parent) {
                var type = "mousedown"; //mouseup mousemove mousemove
                var currentTarget = result.parent;
                var e_1 = { type: type, target: target, currentTarget: currentTarget };
                result = result.parent;
            }
        }
    };
};
//# sourceMappingURL=main.js.map