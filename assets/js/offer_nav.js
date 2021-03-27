$(document).ready(function () {
  var offer_one = `
                    <h3>At your service:</h3>
                    <ul>
                        <li>strategic communications campaigns and consulting</li>
                        <li>press-office services</li>
                        <li>media relations for NGOs</li>
                        <li>advanced public relations & public affairs projects</li>
                        <li>media and public speaking training</li>
                    </ul>`;

  var offer_two = ` <h3>Support in</h3>
                    <ul>
                        <li>social-media campaigns</li>
                        <li>content marketing</li>
                        <li>multimedia & web-design</li>
                        <li>visual identity creation</li>

                    </ul>`;

  var offer_three = ` 
              

                    <h3>Our Research &amp; Intel Team is ready for:</h3>
                    <ul>
                        <li>media analytics &amp; social research (based on quantity and quality methodologies)</li>
                        <li>desk-research &amp; OSINT</li>
                        <li>data science</li>
                        <li>strategic insights &amp; issue papers (evidence based)</li>

                    </ul>
               `;

  var offer_four = `

              

                    <h3> Sectors of expertise | Projects realized or in progress</h3>
                    <ul>
                        <li>security & defense</li>
                        <li>energy</li>
                        <li>public sector</li>
                        <li>smart city</li>
                        <li>creative industries</li>
                        <li>education</li>
                        <li>NGOs campaigns</li>

                    </ul>`;
  var classes = ['offer_one', 'offer_two', 'offer_three', 'offer_four'];

  $.fn.switchClass = function (pFromClass, pToClass) {
    return this.removeClass(pFromClass).addClass(pToClass);
  };

  $('#offer_btn').click(function () {
    $('#slider').html(offer_one);
    $('.grey').switchClass(classes, 'offer_one');
  });

  $('#offer_button_one').click(function () {
    $('#slider').html(offer_one);
    $('.grey').switchClass(classes, 'offer_one');
  });

  $('#offer_button_two').click(function () {
    $('#slider').html(offer_two);
    $('#grey').switchClass(classes, 'offer_two');
  });

  $('#offer_button_three').click(function () {
    $('#slider').html(offer_three);
    $('#grey').switchClass(classes, 'offer_three');
  });

  $('#offer_button_four').click(function () {
    $('#slider').html(offer_four);
    $('#grey').switchClass(classes, 'offer_four');
  });

  $('.slider-button').click(function () {
    $('.slider-button').removeClass('active');
    $(this).addClass('active');
  });
});


