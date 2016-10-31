# mobile
about mobile

# shopping介绍

### 主要是用来实验ionic实现的webapp在android和ios两个平台的展现形式，以及发现一些问题

#### ionic实现的app打包环境配置（以安卓为例）
* 需要安装cordova，利用npm安装
* 安装java jdk,配置环境变量
* 安装安卓sdk
    * 点击SDK Mannager.exe
    * 实现安装的过程，需要访问google官网，需要翻墙
    * 安卓sdk环境变量配置
        *  ANDROID_HOME --> 安卓sdk安装目录
        *  Path --> ;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools
android sdk的platform-tools和tools
        * 在命令行中进入之前创建的项目目录，执行命令：ionic platform add android --> 添加android平台；
* 安装eclipse
* 安装adt插件
* 利用eclipse运行文件，实现打包的过程（cordova也可以打包）
    * 点击Import导入app文件，点击Android，选择Existing Android Code Into Workspace
    * 点击next，点击Root Directory后面的Browse，选择app文件;勾选project import下面的两个选项，不要勾选copy project into workspace这项；
点击finish;
    * 此时会有两个文件
        * cordovalib -->  cordova库文件，不要管
        * mainActivity --> app文件，前端文件在assets-->www目录下
        * 生成的apk格式的app文件在bin文件夹下
    * 修改配置文件config.xml可以配置，app的图标、入场动画等；


# headline介绍
* 仿制今日头条的移动端布局及ajax的应用
* welcomePage
    * 入场动画页面，利用css3的一些特性，animation、transform、transition等，实现一些动效；
    * 主页利用选项卡的原理，切换不同的频道；
    * 利用zepto方便操作DOM
