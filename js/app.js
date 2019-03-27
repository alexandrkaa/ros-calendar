getApiData = function (reqParams) {
  // Send a POST request
  return axios({
    method: 'post',
    url: 'api.json',
    params: reqParams
  });
};

$(document).ready(function () {
  $('.events__event-link, .popup-layer, .popup__close').click(function() {
    $('.popup-layer').toggleClass('popup-layer--visible');
  });

  $('.popup').click(function(e) {
    e.stopPropagation();
  });

  $('.apply-form').on('submit', function(e) {
    e.preventDefault();
    // $.ajax({
    //   url: 'api.json',
    //   type: 'get',
    //   dataType: 'json',
    //   cache: false,
    //   contentType: false,
    //   processData: false,
    //   data: {
    //     'meetupName': $('.meetup_name').val() || "123",
    //   },
    //   beforeSend: function() {
    //     $('.meetup_name').attr('disabled', 'disabled');
    //   }
    // })
    // .done(function(msg) {
    //   $('.meetup_name').removeAttr('disabled');
    //   $('.vote__list').prepend('<li class="vote__item">' + $('.meetup_name').val()+' <button class="vote__like-button"><span class="visually-hidden">like</span></button></li>');
    // });
    var reqParams = {
      'meetupName': $('.meetup_name').val() || "123"
    }

    getApiData(reqParams)
      .then(function (response) {
        // console.log(response);
        $('.meetup_name').removeAttr('disabled');
        $('.vote__list').prepend('<li class="vote__item">' + $('.meetup_name').val() + ' <button class="vote__like-button"><span class="visually-hidden">like</span></button></li>');
      })
      .catch(function (err) {
        console.log(err);
      });
  });
});