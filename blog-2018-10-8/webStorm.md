# 入职软件安装
## 1. webStorm安装
    首先，去官网下载webStorm，然后进行配置（配置按自己需求），最后登录webstorm。
    然后发现webstorm需要进行破解，我就上网搜了博客。我用的方法如下：
    
   ### 1. 首先添加文件
    
    linux在/etc/hosts中添加 0.0.0.0 account.jetbrains.com就好，
    windows的话没记错应该在C:\Windows\System32\drivers\etc\hosts
   ### 2.获取注册码
    [链接](http://idea.lanyus.com/)
   ### 破解成功！
 ## 2. npm node 版本更新
    版本查询命令
 `npm -v`
 
 `node -v`
    更新命令
 `npm install -g npm`
 
 ` npm -g install n`
 
 ` n stable `（更新至最新稳定版本）
 
 `n latest` （更新至最新版本）
 
 但是我更新node没成功，报错了。
 
 解决办法：重新官网下载，覆盖安装。成功，完事！