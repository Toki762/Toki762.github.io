  $(function(){
      // ▼マウスが載ったらサブメニューを表示
      $("ul.header-right li").mouseenter(function(){
         $(this).children().slideDown(150);     // 自分のサブメニューを表示する。
      });
      $('html').click(function() {
       $('ul.header-right ul').slideUp(150);
    });

   });
   $(function() {
       $('.navToggle').click(function() {
           $(this).toggleClass('active');

           if ($(this).hasClass('active')) {
               $('.globalMenuSp').addClass('active');
           } else {
               $('.globalMenuSp').removeClass('active');
           }
       });
   });
