
$(document).ready(function(){

})
$(function(){
    $ ('ul.call > li').hover(function(){
     $(this).find('ul.child').show(100);
    }, function(){
    	$(this).find('ul.child').hide(900);
  });
});
