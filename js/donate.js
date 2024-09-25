//Donate for flood 

document.getElementById('donate-aid-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAmountFlood = document.getElementById('input-amount-flood').value;
    console.log(inputAmountFlood);

    if (isNaN(inputAmountFlood) || inputAmountFlood < 0) {
        alert('Please input a valid amount');
        document.getElementById('my_modal_3').close();
        return;

    }
    document.getElementById('my_modal_3').showModal();

    const actualBalanceElement = document.getElementById('actual-balance');
    const actualBalance = parseFloat(actualBalanceElement.innerText);

    const donateAid = document.getElementById('donate-aid').innerText;


    const balance = actualBalance - inputAmountFlood;

    actualBalanceElement.innerText = balance.toFixed(2);

    const totalDonate = (inputAmountFlood + donateAid);

    document.getElementById('donate-aid').innerText = totalDonate;





})