$(function(){
  function buildHTML(message){
    if (message.image){
      let html = 
      `<div class="message-box" data-message-id="${message.id}">
        <div class="message-info">
          <div class="name">
            ${message.user_name}
          </div>
          <div class="created-at">
            ${message.created_at}
          </div>
        </div>
        <p>
        ${message.content}
        </p>
        <img class="message__image" src="${message.image}">
      </div>`
      return html;
    } else {
      let html = 
      `<div class="message-box" data-message-id="${message.id}">
        <div class="message-info">
          <div class="name">
            ${message.user_name}
          </div>
          <div class="created-at">
            ${message.created_at}
          </div>
        </div>
        <p>
        ${message.content}
        </p>
      </div>`
      return html;
    };
  }

  let reloadMessages = function(){
    let last_message_id = $('.message-box:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages){
     
      if (messages.length !== 0){
        let insertHTML = '';
        $.each(messages, function(i, message){
          insertHTML += buildHTML(message)
        });
        $(".message-list").append(insertHTML);
        $(".message-list").animate({ scrollTop: $(".message-list")[0].scrollHeight});
      }
    })
    .fail(function(){
      alert("error");
    });
  };
  setInterval(reloadMessages, 7000);
});