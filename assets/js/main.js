$(document).ready(function () {
  var start_about = document.getElementById('about-btn'),
    end_about = document.getElementById('about_dot'),
    start_contact = document.getElementById('contact-btn'),
    end_contact = document.getElementById('contact_dot'),
    element2 = document.getElementById('two_dot'),
    element3 = document.getElementById('three_dot'),
    element4 = document.getElementById('four_dot'),
    element5 = document.getElementById('five_dot');

  var lineAbout = new LeaderLine(start_about, end_about, {
    color: 'rgb(196, 196, 196)',
    size: 1,
    path: 'grid',
    startPlug: 'disc',
    endPlug: 'behind',
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
    endPlug: 'behind',
    startPlugSize: 2,
    startPlugOutlineSize: 2.5,
    endPlugOutlineSize: 1,
    hide: true,
  });

  // var line1 = new LeaderLine(end_about, element2, {
  //   color: 'rgba(123, 20, 123, 0.5)',
  //   size: 1,
  //   path: 'straight',
  //   startPlug: 'behind',
  //   endPlug: 'behind',
  //   startPlugSize: 2,
  //   startPlugOutlineSize: 2.5,
  //   endPlugOutlineSize: 1,
  //   hide: true,
  // });

  // var line2 = new LeaderLine(end_about, element3, {
  //   color: 'rgba(123, 20, 123, 0.5)',
  //   size: 1,
  //   path: 'straight',
  //   startPlug: 'behind',
  //   endPlug: 'behind',
  //   startPlugSize: 2,
  //   startPlugOutlineSize: 2.5,
  //   endPlugOutlineSize: 1,
  //   hide: true,
  // });

  // var line3 = new LeaderLine(element3, element4, {
  //   color: 'rgba(123, 20, 123, 0.5)',
  //   size: 1,
  //   path: 'straight',
  //   startPlug: 'behind',
  //   endPlug: 'behind',
  //   startPlugSize: 2,
  //   startPlugOutlineSize: 2.5,
  //   endPlugOutlineSize: 1,
  //   hide: true,
  // });

  // var line4 = new LeaderLine(element4, end_contact, {
  //   color: 'rgba(123, 20, 123, 0.5)',
  //   size: 1,
  //   path: 'straight',
  //   startPlug: 'behind',
  //   endPlug: 'behind',
  //   startPlugSize: 2,
  //   startPlugOutlineSize: 2.5,
  //   endPlugOutlineSize: 1,
  //   hide: true,
  // });

  // var line5 = new LeaderLine(element5, end_contact, {
  //   color: 'rgba(123, 20, 123, 0.5)',
  //   size: 1,
  //   path: 'straight',
  //   startPlug: 'behind',
  //   endPlug: 'behind',
  //   startPlugSize: 2,
  //   startPlugOutlineSize: 2.5,
  //   endPlugOutlineSize: 1,
  //   hide: true,
  // });

  $('.tip').hide();

  // line4.show('draw', { duration: 6000, timing: 'linear' });
  // line3.show('draw', { duration: 6000, timing: 'linear' });
  // line1.show('draw', { duration: 6000, timing: 'linear' });
  // line2.show('draw', { duration: 6000, timing: 'linear' });
  // line5.show('draw', { duration: 6000, timing: 'linear' });
  $('#logotyp').on('click', function () {
    lineAbout.show('draw', { duration: 600, timing: 'linear' }),
      lineContact.show('draw', { duration: 600, timing: 'linear' }),
      $('.tip').fadeToggle(1000, function () {
        if ($('.tip').is(':hidden')) {
          lineAbout.hide();
          lineContact.hide();
        } else {
          lineAbout.show('draw', { duration: 600, timing: 'linear' });
          lineContact.show('draw', { duration: 600, timing: 'linear' });
        }
      });
    $('.arrows-container').fadeToggle();
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
});
