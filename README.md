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
    * 修改配置文件config.xml可以配置，app的图标、入场动画等；
