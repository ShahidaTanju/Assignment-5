document.getElementById('btn-donate-1').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('donate button clicked')

    const amountInput1 = document.getElementById('amount-input-1').innerText;
    console.log(amountInput1);

    if (isNaN.Number(amountInput1) || amountInput1 < 0) {
        alert('Please enter a valid amount');
    }
    else {
        document.getElementById('my_modal_3').style.display = 'block';
    }

})