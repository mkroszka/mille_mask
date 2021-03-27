$(document).ready(function () {
  const offers = [{
    title: 'At your service:',
    listItems: [
      'strategic communications campaigns and consulting',
      'press-office services',
      'media relations for NGOs',
      'advanced public relations & public affairs projects',
      'media and public speaking training'],
    backgroundImageUrl: 'adres obrazka'
  },{
    title: 'Support in',
    listItems: [
      'social-media campaigns',
      'content marketing',
      'multimedia & web-design',
      'isual identity creation'],
    backgroundImageUrl: 'adres obrazka'
  },{
    title: 'Our Research &amp; Intel Team is ready for:',
    listItems: [
       'media analytics &amp; social research (based on quantity and quality methodologies)',
       'desk-research &amp; OSINT',
       'data science',
       'strategic insights &amp; issue papers (evidence based)']
  },{
    title: 'Sectors of expertise | Projects realized or in progress',
    listItems: [
        'security & defense',
        'energy',
        'public sector',
        'smart city',
        'creative industries',
        'education',
        'NGOs campaigns'],
    backgroundImageUrl: 'adres obrazka'
  }]

  function renderOffer(offer) {
    $('.offer-bg').css('background-image', offer.backgroundImageUrl);
    $('#slider').empty();
    $('#slider').append(`<h3>${offer.title}</h3>`);
    $('#slider').append(`<ul class="offer-list"></ul>`);
    
    offer.listItems.forEach(function(item) {
      $('.offer-list').append(`<li>${item}</li>`);
    });
  }
  
  $('#offer_btn').click(function () {
    renderOffer(offers[0]);
  });

  $('#offer_button_one').click(function () {
    renderOffer(offers[0]);
  });

  $('#offer_button_two').click(function () {
    renderOffer(offers[1]);
  });

  $('#offer_button_three').click(function () {
    renderOffer(offers[2]);
  });

  $('#offer_button_four').click(function () {
    renderOffer(offers[3]);
  });

  $('.slider-button').click(function () {
    $('.slider-button').removeClass('active');
    $(this).addClass('active');
  });
});


