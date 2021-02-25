$(document).ready(function () {
  var end_about = document.getElementById('about-btn'),
    start_about = document.getElementById('about_dot'),
    end_contact = document.getElementById('contact-btn'),
    start_contact = document.getElementById('contact_dot');

  var lineAbout = new LeaderLine(start_about, end_about, {
    color: 'rgb(196, 196, 196)',
    size: 1,
    path: 'grid',
    startPlug: 'behind',
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
    startPlug: 'behind',
    endPlug: 'disc',
    startPlugSize: 2,
    startPlugOutlineSize: 2.5,
    endPlugOutlineSize: 1,
    hide: true,
  });

  $('.section').hide();
  $('.tip').hide();
  $('#contact_dot, #about_dot').hide();

  $('#logotyp').on('click', function () {
    if ($('.tip').is(':hidden')) {
      $('.tip').fadeIn();
      lineAbout.show('draw', { duration: 600, timing: 'linear' }),
        lineContact.show('draw', { duration: 600, timing: 'linear' });
      $('.circle-animated').fadeIn();
    } else {
      $('.tip').fadeOut();
      lineAbout.hide();
      lineContact.hide();
      $('.circle-animated').fadeOut();
    }
    $('.arrows-container').fadeToggle();
  });

  $('.navigation-button').click(function () {
    $('.section, .tip').hide();
    $('.tip').hide();
    $('.circle-animated').hide();
    lineAbout.hide();
    lineContact.hide();
    $('.logotyp svg').hide();
    if ($(this).is('[class*="contact"]')) {
      $('#contact').fadeIn(1000);
    } else {
      $('#' + $(this).data('id')).fadeIn(1000);
    }
  });

  $('.close').click(function () {
    $('.section').fadeOut(700);
    $('.arrows-container').fadeIn();
    $('.circle-animated').hide();
    $('.logotyp svg').show();
  });
});
