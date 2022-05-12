function redirpayment() {
  alert('Your Total Bill : R 84.99');
  location.replace("payment.html")
}


let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let billAmount = document.getElementById('bill-amount').value=69.99;
    let tipPercentage = document.getElementById('vat-percentage').value=15;

    document.getElementById('total-bill').value = parseFloat(billAmount) + parseFloat(tipPercentage);

})

