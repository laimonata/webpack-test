import '../scss/app.scss';

/* Your JS Code goes here */

/* Demo JS */
import './demo.js';
import $ from 'jquery';

import 'slick-carousel';

// alert('labas');

$(document).ready(function() {
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

// alert("labas");
