$(document).ready(function () {
  var end_about = document.getElementById('about-btn'),
    start_about = document.getElementById('about_dot'),
    end_contact = document.getElementById('contact-btn'),
    start_contact = document.getElementById('contact_dot'),
    start_offer = document.getElementById('offer_dot'),
    end_offer = document.getElementById('offer_btn');

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
  var lineOffer = new LeaderLine(start_offer, end_offer, {
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
  $('#contact_dot, #about_dot, #offer_dot').hide();

  $('#logotyp').on('click', function () {
    if ($('.tip').is(':hidden')) {
      $('.tip').fadeIn();
      lineAbout.show('draw', { duration: 600, timing: 'linear' }),
        lineOffer.show('draw', { duration: 600, timing: 'linear' }),
        lineContact.show('draw', { duration: 600, timing: 'linear' }),
        $('.circle-animated').fadeIn();
    } else {
      $('.tip').fadeOut();
      lineAbout.hide();
      lineContact.hide();
      lineOffer.hide();
      $('.circle-animated').fadeOut();
    }
    $('.arrows-container').fadeToggle();
    $('.animation_quote_container').hide();
  });

  $('.navigation-button').click(function () {
    $('.section, .tip').hide();
    $('.tip').hide();
    $('.circle-animated').hide();
    lineAbout.hide();
    lineContact.hide();
    lineOffer.hide();
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
  $('.animation_quote_container').hide();

  $(function () {
    var options = {
      strings: [
        'When Napoleon said, "Circumstance? I make circumstance"‚ he expressed very nearly the spirit of the public relations. <span class= "quote_heading-mini id="quote_heading-mini"> E.Bernays, Crystallizing Public Opinion, 1923</span>',
      ],
      typeSpeed: 0,
      backType: 0,
      loop: false,
      showCursor: true,
      cursorChar: '|',
      callback: function () {
        var x = $('.animation_quote').html();
        $('#animation_quote_container').html('');
        $('#animation_quote_container').append(
          '<span class="animation_quote">' + x + '</span>'
        );
      },
    };
    $('.animation_trigger').click(function () {
      $('.tip').hide();
      lineAbout.hide();
      lineContact.hide();
      lineOffer.hide();
      $('.animation_quote').text('');
      $('.animation_quote').typed(options);
      $('.animation_quote_container').toggle();
    });
  });
});
