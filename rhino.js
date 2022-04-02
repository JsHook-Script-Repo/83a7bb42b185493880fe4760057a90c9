common.hookMethod('android.content.res.AssetManager', 'open', ['java.lang.String'], function (param) {
    //判断apk中assets文件夹中的文件
    if (param.args[0] == 'home_tab_image/home/img_1.png' || param.args[0] == 'home_tab_image/home/img_2.png') {
        //获取存储根目录下test.png的完成路径
        var imgpath = android.os.Environment.getExternalStorageDirectory().getPath() + '/test.png';
        //返回替换后的文件实例
        param.setResult(new java.io.FileInputStream(imgpath));
        common.log('replace : ' + param.args[0] + ' -> ' + imgpath + ' ok!');
    }
});
