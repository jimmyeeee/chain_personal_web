// 換圖輪播
function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });

  // 下拉選單
$(function(){
  $(".menu li").on({

    mouseover:function(){
      $(this).children("div").stop().slideDown();
    },
    mouseout:function(){
      $(this).children("div").stop().slideUp();
    }

  });

  $( "#tabs" ).tabs();

});

// $(window).scroll(function () {
//   if ($(this).scrollTop() == 0) {
//     $(' .menu div').css("bottom", "60px");
//     $(' .menu div').css("top", "auto");
//   } else {
//     $(' .menu div').css("top", "60px");
//     $(' .menu div').css("bottom", "auto");
//   }
// });

$('.smoove').smoove({
  min_width:0,
  offset  : '20%',
});

$(function () {


  //移除背景影片
  if ($(window).width() < 769) {
      $("#bg_video").remove();
  }

  //滑動至指定位置
  $(".menu a").click(function () {
      var btn = $(this).attr("href");
      var pos = $(btn).offset();
      $("html,body").animate({ scrollTop: pos.top }, 1000);

  });

  // 滑動置頂
  $("#gotop").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  // 淡出淡入
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          $("#gotop").stop().fadeTo("fast", .7);
      } else {
          $("#gotop").stop().fadeOut("fast");
      }
  });


});