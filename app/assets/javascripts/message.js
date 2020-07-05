$(function(){
  function buildHTML(message){
    if (message.image){
      let html = 
      `<div class="message-box">
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
      `<div class="message-box">
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

  $(".Form").on("submit", function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.message-list').append(html);
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight})
      $('.Form')[0].reset();
      $('.submitBtn').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  })
});