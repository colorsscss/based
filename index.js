function resize() {
    $('#chat-size').attr('style', "width:"+(window.innerWidth/100)*70+"px; height:"+(window.innerHeight/100)*94.5+"px;");
    $('#chat-left-size').attr('style', "width:"+(window.innerWidth/100)*30+"px; height:"+(window.innerHeight/100)*94.5+"px;");

    $('.chat-container').animate({
        scrollTop: 999999999
    }, 1);
}

$(window).on("load", resize);
$(window).on("resize", resize);
resize();

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', (event) => {
  var name = event.key;
  var code = event.code;
  if (name == "Enter") {
    $(".chat-container").html($(".chat-container").html() + '<div class="chat-message" aria-current="true"> <div class="d-flex align-items-center justify-content-between"> <strong class="mb-1"></strong> </div> <div class="mb-1 small"><small style="cursor: default;">12/12/12 14:55 •</small>&nbsp;'+document.getElementById('chat-value').value+'</div> </div>');
  }

  var lastMessage = document.querySelectorAll(".chat-message")[document.querySelectorAll(".chat-message").length-1];

  if(lastMessage.innerHTML.includes("@clown")) {
      for (var i = 0; lastMessage.innerHTML.includes("@clown"); i++) {
        lastMessage.innerHTML = lastMessage.innerHTML.replace('@clown', '<img src="https://cdn.7tv.app/emote/639a1f14ecaced3528b6960a/4x.webp" class="tw_header_profile" width="36" height="36">');
      }
  }

  $('.chat-container').animate({
      scrollTop: 999999999
  }, 1);
}, false);
