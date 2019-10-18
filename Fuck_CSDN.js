// ==UserScript==
// @name                CSND���� - by Tampermonkey scripts
// @description         ʹ��������������º�����ʱ��������CSND������ʵ�ã�

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

    //��ȡ GET ����ֵ�ĺ���
    function getUrlParam(k) {
        var regExp = new RegExp('([?]|&)' + k + '=([^&]*)(&|$)');
        var result = window.location.href.match(regExp);
        if (result) {
            return result[2];
        } else {
            return null;
        }
    }

    //�ж���������
    var domain = document.domain;

    //��ȡURL����
    var href = location.search;


        //ƥ���Ӧ��������Ĳ�������Ӹ߼������﷨
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