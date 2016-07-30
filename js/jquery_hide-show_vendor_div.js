 <script type="text/javascript">
   jQuery(function($){
    $('[id^=vendor]').not('[id*=description]').click(function(){
      
      var vendorlist = $('[id^=vendor]').not('[id*=description]');

      for (var i = 0; i < vendorlist.length; i++) {
        var vendor = $(vendorlist[i]).prop('id');
        if ($(vendorlist[i]).hasClass('active')) {
          $(vendorlist[i]).removeClass('active');
          $('#' + vendor + '-description').removeClass('active');
          $('#' + vendor + '-description').slideToggle();

          if (vendorlist[i] == this) {
            return;
          }
        }
      }
      
      var vendor = $(this).prop('id');
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('#' + vendor + '-description').addClass('active');
      } else {
        $(this).removeClass('active');
        $('#' + vendor + '-description').removeClass('active');
      }
      $('#' + vendor + '-description').slideToggle();
      
    })
  })
 </script>