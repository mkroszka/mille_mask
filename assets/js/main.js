$(window).on('load', function () {
  $('#coverScreen').hide();
});

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

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  $('.navmobile').hide();

  // mobile function
  if (isMobile.any()) {
    $('.navmobile').show();
    console.log('this is mobile');
  }

  $('#coverScreen').hide();
  $('.section').hide();
  $('.tip').hide();
  $('#contact_dot, #about_dot, #offer_dot').hide();
  $('#offer-two, #offer-three, #offer-four').hide();

  $('.logotyp_trigger, .logo-M, .navmobile').on('click', function () {
    if ($('.tip').is(':hidden')) {
      $('.tip').fadeIn();
      lineAbout.show('draw', { duration: 600, timing: 'linear' }),
        lineOffer.show('draw', { duration: 600, timing: 'linear' }),
        lineContact.show('draw', { duration: 600, timing: 'linear' }),
        $('.circle-animated').fadeIn();
      $('.navmobile').fadeOut();
    } else {
      $('.tip').fadeOut();
      lineAbout.hide();
      lineContact.hide();
      lineOffer.hide();
      $('.circle-animated').fadeOut();
      $('.navmobile').fadeIn();
    }
    $('.arrows-container').fadeToggle();
    $('.animation_quote_container').hide();
  });

  $('.navigation-button').click(function () {
    $('.section, .tip').hide();
    $('.navmobile').hide();
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

  // offer section fade navigation
  $('.s_button').click(function () {
    $('.slider').hide();
    $('#' + $(this).data('id')).fadeIn(1000);
  });

  $('#offer_button_one').click(function () {
    $('#grey').removeClass().addClass('offer_one grey');
  });

  $('#offer_button_two').click(function () {
    $('#grey').removeClass().addClass('offer_two grey');
  });

  $('#offer_button_three').click(function () {
    $('#grey').removeClass().addClass('offer_three grey');
  });
  $('#offer_button_four').click(function () {
    $('#grey').removeClass().addClass('offer_four grey');
  });

  $('.close').click(function () {
    $('.section').fadeOut(700);
    $('.arrows-container').fadeIn();
    $('.circle-animated').hide();
    $('.logotyp svg').show();
    if (isMobile.any()) {
      $('.navmobile').show();
    }
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

    $('.slider-button').click(function () {
      $('.slider-button').removeClass('active');
      $(this).addClass('active');
    });
  });
});
