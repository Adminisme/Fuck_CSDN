// ==UserScript==
// @name                CSND屏蔽 - by Tampermonkey scripts
// @description         使用浏览器检索文章和内容时，可屏蔽CSND。方便实用！

// @author              Trim
// @license             GPL-3.0

// @match               *://www.baidu.com/*
// @include             *://www.baidu.com/*

// @match               *://www.google.com/*
// @include             *://www.google.com/*

// @grant               none
// @run-at              document-start

// @version             1.0.0
// @modified            02/09/2019
// ==/UserScript==


! function() {

    //获取 GET 参数值的函数
    function getUrlParam(k) {
        var regExp = new RegExp('([?]|&)' + k + '=([^&]*)(&|$)');
        var result = window.location.href.match(regExp);
        if (result) {
            return result[2];
        } else {
            return null;
        }
    }

    //判断搜索引擎
    var domain = document.domain;

    //截取URL链接
    var href = location.search;


        //匹配对应搜索引擎的参数，添加高级检索语法
    if(domain === 'www.baidu.com'){
       var baidu_keyword = getUrlParam('wd');
       if(baidu_keyword && href.indexOf('csdn')<0){
           href = href.replace(baidu_keyword, baidu_keyword + ' -(csdn | cnblogs)' );
       }
    }else if(domain === 'www.google.com'){
        var google_keyword = getUrlParam('q');
        if(google_keyword && decodeURIComponent(href).indexOf('csdn')<0){
            href = href.replace(google_keyword, google_keyword + ' -csdn -cnblogs' );
       }
    }else{
        return {};
    }

    if(location.search != href){
        location.search = href;
    }

}();