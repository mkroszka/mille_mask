$(document).ready(function () {
  const offers = [{
    title: 'At your service:',
    listItems: [
      'strategic communications campaigns and consulting',
      'press-office services',
      'media relations for NGOs',
      'advanced public relations & public affairs projects',
      'media and public speaking training']
  },{
    title: 'Support in',
    listItems: [
      'social-media campaigns',
      'content marketing',
      'multimedia & web-design',
      'isual identity creation']
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
        'NGOs campaigns']
  }]

  $.fn.switchClass = function (pFromClass, pToClass) {
    return this.removeClass(pFromClass).addClass(pToClass);
  };

  function renderOffer(offer) {
    $('#slider').clear();
    $('#slider').append(`<h3>{offer.title}</h3>`);
    $('#slider').append(`<ul></ul>`);
    
    offer.listItems.forEach(function(item) {
      $('#slider > ul).append(`<li>{item</li>`);
    });
  }
  
  $('#offer_btn').click(function () {
    renderOffer(0);
    $('.grey').switchClass(classes, 'offer_one');
  });

  $('#offer_button_one').click(function () {
    renderOffer(0);
    $('.grey').switchClass(classes, 'offer_one');
  });

  $('#offer_button_two').click(function () {
    renderOffer(1);
    $('#grey').switchClass(classes, 'offer_two');
  });

  $('#offer_button_three').click(function () {
    renderOffer(2);
    $('#grey').switchClass(classes, 'offer_three');
  });

  $('#offer_button_four').click(function () {
    renderOffer(3);
    $('#grey').switchClass(classes, 'offer_four');
  });

  $('.slider-button').click(function () {
    $('#slider').removeClass('active');
    $(this).addClass('active');
  });
});


