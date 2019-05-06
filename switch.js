// I'll use the Modern Mode

'use strict'


// Rewrite "switch" into an "if... else"

if (browser == 'Edge') {
  alert( "You've got the Edge!" );
} else if (browser == 'Chrome'
  || browser == 'Firefox'
  || browser == 'Safari'
  || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else () {
  alert( 'We hope that this page looks ok!' );


// Rewrite "if" into a "switch"

let a = +prompt('a?', '');
switch(a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert ('2 or 3');
    break;
  default:
    alert('Unkown numer');
}
