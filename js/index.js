/**
 * 乐购商城首页js
 * 2021-10-26 权
 */
//当页面加载完毕
$(function() {
    /*首页大图轮播*/
    $('#banner').tyslide({
            boxh: 420, //盒子的高度
            w: 1000, //盒子的宽度
            h: 390, //图片的高度
            isShow: true, //是否显示控制器
            isShowBtn: true, //是否显示左右按钮
            controltop: 40, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 20, //控制按钮宽度
            controlsH: 20, //控制按钮高度
            radius: 10, //控制按钮圆角度数
            controlsColor: "#d7d7d7", //普通控制按钮的颜色
            controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
            isShowNum: true //是否显示数字
        })
        //---------------------图书电子书------------------------
        // 图书电子书小轮播
    $('#ebooks-banner').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    })

    /* 电子书 table切换 */
    $('.ebooks-nav > li').mouseenter(function() {
        //导航高亮颜色切换
        $(this).addClass('active').siblings('li').removeClass('active');
        //获取索引
        var index = $(this).index();
        //内容切换
        $('.ebooks-list').eq(index).show().siblings('.ebooks-list').hide();
    })

    // 新书列表手风琴效果
    $('.ebooks .right-box ul > li').mouseenter(function() {
        // 所有兄弟:隐藏详情 显示标题
        $(this).siblings().find('.desc').hide();
        $(this).siblings().find('.ebooks-title').show();

        // 当前：隐藏标题 显示详情
        $(this).find('.ebooks-title').hide(); //隐藏标题
        $(this).find('.desc').show(); //显示详情

    })

    //---------------------服装------------------------
    // 服装小轮播
    $('#clothes-banner').tyslide({
        boxh: 330, //盒子的高度
        w: 426, //盒子的宽度
        h: 330, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    })

    //服装table切换
    var $lis = $('.clothes .top-box ul li');
    $lis.mouseenter(function() {
        //给自己添加激活类active 把兄弟都干掉
        $(this).addClass('active').siblings().removeClass('active');
        //获取index
        var index = $(this).index;
        //选中内容
        var $ebookslist = $('clothes-content');
        //显示索引等于当前index
        $ebookslist.eq(index).show().siblings('.content').hide();
    })

    //---------------------户外运动------------------------
    // 户外运动小轮播
    $('#sports-banner').tyslide({
        boxh: 330, //盒子的高度
        w: 426, //盒子的宽度
        h: 330, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    })

    // 户外运动table切换
    var $lis = $('.sports .top-box ul li');
    $lis.mouseenter(function() {
        //给自己添加激活类active 把兄弟都干掉
        $(this).addClass('active').siblings().removeClass('active');
        //获取index
        var index = $(this).index;
        //选中内容
        var $ebookslist = $('content');
        //显示索引等于当前index
        $ebookslist.eq(index).show().siblings('.content').hide();
    })

    //---------------------童装------------------------
    // 童装小轮播
    $('#children-banner').tyslide({
        boxh: 330, //盒子的高度
        w: 426, //盒子的宽度
        h: 330, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    })

    // 童装table切换
    var $lis = $('.children-clothes .top-box ul li');
    $lis.mouseenter(function() {
        //给自己添加激活类active 把兄弟都干掉
        $(this).addClass('active').siblings().removeClass('active');
        //获取index
        var index = $(this).index;
        //选中内容
        var $ebookslist = $('content');
        //显示索引等于当前index
        $ebookslist.eq(index).show().siblings('.content').hide();
    })


    //---------------------推广商品------------------------
    // 推广商品页面切换
    $('.promotion .promotion-title ul li').mouseenter(function() {
        // 导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')

        // 内容切换
        // 获取对应的索引
        var index = $(this).index(); //0 => left: 0 * 1170 , 1 => left: -1 * 1170 , 3 => left: -2 * 1170
        //console.log(index)
        //左右移动
        $('.promotion .promotion-content .inner-box').animate({
            'left': -index * 1170
        }, 300)
    })

})