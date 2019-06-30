$('.minus-btn').on('click', function() {
  // e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);
});

$('.plus-btn').on('click', function() {
  // e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());
  var $total = $this.find('total-price');

  if (value < 10) {
    value = value + 1;
  } else {
    value =10;
  }

  $input.val(value);
});

// $(document).ready(function(){
//     $("select.cart__qty-input").change(function(){
//       	var $this = $(this);
//         var selectedVal = $(this).children("option:selected").val();
//         alert("You have selected - " + selectedVal);
//       	$this.val(selectedVal);
//     });
// });

// function get_sum(){
//   var sum = 0;
//   var num = $('.cart__qty-input');
//   for(var i=0; i<num.length;i++){
//     sum = sum + parseInt(num[i].value) * parseInt(num[i].getAttribute("data-unit-price"));
//     // alert(num[i].value);
//   }
// //   var span = document.getElementById('sum_total');
//   var div = document.getElementsByClassName('sum_total');

//   while( div[0].firstChild) {
//     div[0].removeChild( span.firstChild );
//   }
//   div[0].appendChild(document.createTextNode('$'+ sum));

//   // $('#sum_total').val(sum);
// }