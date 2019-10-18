# Fuck_CSDN

---

### 一个简单的适用于浏览器安装了Tampermonkey插件的屏蔽搜索引擎检索结果的CSDN小脚本。

---

### 原理是利用js匹配浏览器当前所使用的搜索引擎，添加特定的搜索语法，剔除检索结果中有关CSND的信息。

---

目前针对当前两大主流的搜索：baidu.com、g**gle.com,如有其他需求按照格式自行添加，较为简单，方便，实用，最关键的是净化眼球！！！！

关键代码如下：

    if(domain === 'www.xxx.com'){
        var google_keyword = getUrlParam('q');
        if(google_keyword && decodeURIComponent(href).indexOf('csdn')<0){
            href = href.replace(google_keyword, google_keyword + ' -xxx -xxblogs' );
       }


效果如下：


使用插件前 :乌78糟图：
![image](img/2.png)


使用插件后 :神清气爽图：
![image](img/1.png)
