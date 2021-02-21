$(document).ready(function () {
  var start_about = document.getElementById('about-btn'),
    end_about = document.getElementById('about_dot'),
    start_contact = document.getElementById('contact-btn'),
    end_contact = document.getElementById('contact_dot');

  var lineAbout = new LeaderLine(start_about, end_about, {
    color: 'rgb(196, 196, 196)',
    size: 1,
    path: 'grid',
    startPlug: 'disc',
    endPlug: 'disc',
    startPlugSize: 2,
    startPlugOutlineSize: 2.5,
    endPlugOutlineSize: 1,
    hide: true,
  });
  var lineContact = new LeaderLine(start_contact, end_contact, {
    color: 'rgb(196, 196, 196)',
    size: 1,
    path: 'grid',
    startPlug: 'disc',
    endPlug: 'disc',
    startPlugSize: 2,
    startPlugOutlineSize: 2.5,
    endPlugOutlineSize: 1,
    hide: true,
  });

  $('.tip').hide();
  // $('.leader-line').hide();

  // $('#logotyp').on('click', function () {
  //   $('.tip').fadeIn(1000);
  //   lineAbout.show('draw', { duration: 300, timing: 'linear' });

  $('#logotyp').on('click', function () {
    // lineAbout.show('draw', { duration: 300, timing: 'linear' });
    // $('.leader-line').fadeToggle(1000),
    lineAbout.show('draw', { duration: 300, timing: 'linear' }),
      lineContact.show('draw', { duration: 300, timing: 'linear' }),
      $('.tip').fadeToggle(1000, function () {
        if ($('.tip').is(':hidden')) {
          // lineAbout.hide('draw', { duration: 400, timing: 'linear' });
          lineAbout.hide();
          lineContact.hide();
        } else {
          lineAbout.show('draw', { duration: 300, timing: 'linear' });
          lineContact.show('draw', { duration: 300, timing: 'linear' });
        }
      });
  });

  $('.section').hide();

  $('.navigation-button').click(function () {
    $('.section, .tip, .leader-line').hide();
    $('.tip').hide();
    console.log($('#' + $(this).data('id')));
    $('#' + $(this).data('id')).fadeIn(1000);
  });
  $('.close').click(function () {
    $('.section').fadeOut(1000);
  });

  // var vid = document.getElementById('video_bg');
  // vid.playbackRate = 0.5;
});
