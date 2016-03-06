# React Native配置和使用（OS X）

个人比较喜欢react的函数式编程方式，native采用同样的方式写原生app，所以也开始学习react native，首先是环境配置以及跑起来第一个ios和android应用。

## 环境配置

1. 操作系统使用mac os x进行开发。官方也是将os x作为最高优先级来支持，不过windows和linux可以进行Android开发。
2. 推荐使用[Homebrew](http://brew.sh/)来安装基本环境。
3. 安装[Nodejs](https://nodejs.org/en/)
   - 直接官网下载安装包
   - 或者使用[nvm](https://github.com/creationix/nvm)命令行来安装
4. 使用Homebrew安装watchman，命令行输入：`brew install watchman`
5. 使用Homebrew安装flow，命令行输入：`brew install flow`
6. 如果是使用homebrew进行的配置，命令行输入：`brew update && brew upgrade` 命令保持最新版环境。

## ios开发环境
ios只需要从Appstore下载安装xcode7即可。

## android开发环境
安装开发环境相比较要麻烦一些。
1. 安装[git](https://git-scm.com/),命令行输入`brew install git`。如果已经安装了xcode，则不需要安装。
2. 安装最新的[JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
3. 使用Homebrew安装android-sdk，命令行输入：`brew install android-sdk`
4. 配置ANDROID_HOME环境变量：采用上述命令安装android-sdk，安装路径是`/usr/local/opt/android-sdk`，如果是别的方式安装的，则需要找到对应的安装目录。编辑`~/.bashrc`或者 `~/.bash_profile`文件，添加以下代码：

        export ANDROID_HOME=/usr/local/opt/android-sdk
5. 配置android sdk
   - 打开Android SDK Manager，命令行输入`android` 即可打开。根据官方网站的要求勾选需要的包：
      - Android SDK Build-tools version 23.0.1
      - Android 6.0 (API 23)
      - Android Support Repository
   - 选择需要安装的包，如下图：   
    ![SDK Manager window](AndroidSDK1.png)    
    ![SDK Manager window](AndroidSDK2.png)   
    点击"Install Packages"即可。
   - **注意**，可能会遇到一些坑   
      - 要根据官网所要求的包进行安装，例如目前Android SDK Build-tools官网文档中要求版本是23.0.1，最新版本是23.0.2，要看清楚版本号进行安装。
      - Android Support Repository现在的名字变成Local Maven repository for Support Libraries

6. 配置安卓模拟器
官方建议使用[Genymotion](https://www.genymotion.com/)来安装配置模拟器。需要注册账号，下载个人免费版，然后启动程序需要安装VirtualBox等。   
个人觉得直接利用Android SDK Manager下载相应的包，启动谷歌自带模拟器更简单一点。配置过程如下：
   - 勾选安装包：
      - Intel x86 Atom System Image
      - Intel x86 Emulator Accelerator (HAXM installer)    
      点击"Install Packages"   
   - 配置[HAXM](http://developer.android.com/tools/devices/emulator.html#vm-mac)
   - 创建一个模拟器（ Android Virtual Device，AVD）
   - 命令行输入`android avd`,打开avd管理器，点击`Create...`新建一个模拟器，填写配置即可。
   - 选择已经建好的模拟器，点击`Start...`。   
     ![SDK Manager window](AndroidSDK3.png)    
     ![SDK Manager window](AndroidSDK4.png)
   
   **注意：**
   前面使用Android SDK Manager下载的HAXM其实并没有安装，只是下载到本地了，还需要手动安装一下，文件下载到了android-sdk目录下的extras文件夹中`/usr/local/opt/android-sdk/extras/intel/Hardware_Accelerated_Execution_Manager`

## 启动第一个应用

#### 使用React Native命令行工具来创建应用
- 安装React Native命令行工具，命令行输入:`npm install -g react-native-cli`。
- 创建React Native项目，命令行输入:`react-native init MyReactNativeApp`。

#### 运行ios app
- 进入到初始化安装目录`$ cd MyReactNativeApp`。
- 使用`open .`命令打开该目录，点击`ios/MyReactNativeApp.xcodeproj`项目文件，使用xcode打开该项目。
- xcode中运行该项目，即可打开模拟器，看到初始化的ios app的效果。
- 修改index.ios.js，然后在模拟器中使用`command+r`重新加载app。

#### 运行android app
- 运行之前设置好的安卓模拟器。
- 进入到初始化安装目录`$ cd MyReactNativeApp`。
- 命令行输入`$ react-native run-android`，运行该命令React Native会下载并使用[gradle](https://docs.gradle.org/)编译该项目。编译成功后，app即可在安卓模拟器中打开。(过程中会下载gradle，有时候命令行可能会卡住，多尝试几次即可)
- 修改index.android.js，然后在模拟器中使用`F2`重新加载app。
- 命令行中输入`adb logcat *:S ReactNative:V ReactNativeJS:V`，即可在命令行终端看到app运行的日志。
- **注意:**如果初始化的项目编译不通过，请检查Android SDK Manager中是否存在没有安装好或者版本不正确的package。   
   ![SDK Manager window](AndroidSDK5.png)

我主要是参考[官方文档](http://facebook.github.io/react-native/)进行的配置，在配置android环境过程中遇到了一些麻烦。

后续会继续更新。。。