
$(document).ready();

$(function(){
  $(".activepic").show(function(){
    if ($(".activepic").click(function(){
        $(".secondpic").show(function(){
          if ($(".secondpic").show(function(){
            $(".activepic").hide()
        }));
        })
    }));
});
  if ($(".secondpic").click(function(){
      $(".thirdpic").show(function(){
        if ($(".thirdpic").show(function(){
          $(".secondpic").hide()
      }));
      })
  }));

  if ($(".thirdpic").click(function(){
    $(".activepic").show(function(){
      if ($(".activepic").show(function(){
        $(".thirdpic").hide()
    }));
    })
}));

if ($("#wednesday").click(function(){
  $(".div_wen").show(function(){
    if ($(".div_wen").show(function(){
      $(".div_tues").hide(),$(".div_mon").hide()
  }));
  })
}));

if ($("#tuesday").click(function(){
  $(".div_tues").show(function(){
    if ($(".div_tues").show(function(){
      $(".div_mon").hide(), $(".div_wen").hide()
  }));
  })
}));

if ($("#monday").click(function(){
  $(".div_mon").show(function(){
    if ($(".div_mon").show(function(){
      $(".div_tues").hide(), $(".div_wen").hide()
  }));
  })
}));
});

$(function(){
$('.btn').click(function(){
  $(this).show('https://youtube.com')
});
});

$(function(){
    $ ('ul.call > li').hover(function(){
     $(this).find('ul.child').show(100);
    }, function(){
    	$(this).find('ul.child').hide(10);
  });
});
