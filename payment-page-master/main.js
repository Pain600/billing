let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let billAmount = document.getElementById('bill-amount').value;
    let tipPercentage = document.getElementById('vat-percentage').value;

    
    /*let tipAmount = document.getElementById('total-bill').value = billAmount / tipPercentage;*/
    document.getElementById('total-bill').value = parseFloat(billAmount) + parseFloat(tipPercentage);

})

