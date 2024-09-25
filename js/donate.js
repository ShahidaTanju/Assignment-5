//Donate for flood 01

document.getElementById('donate-aid-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAmountFlood = parseFloat(document.getElementById('input-amount-flood').value);
    console.log(inputAmountFlood);

    if (isNaN(inputAmountFlood) || inputAmountFlood < 0) {
        alert('Please input a valid amount');
        document.getElementById('my_modal').close();
        return;
    }
    document.getElementById('my_modal').showModal();

    const actualBalanceElement = document.getElementById('actual-balance');
    const actualBalance = parseFloat(actualBalanceElement.innerText);

    const donateAid = parseFloat(document.getElementById('donate-aid').innerText);

    const balance = actualBalance - inputAmountFlood;

    actualBalanceElement.innerText = balance.toFixed(2);

    const totalDonate = (inputAmountFlood + donateAid);

    document.getElementById('donate-aid').innerText = totalDonate;
});

// Donate for flood 02 :

document.getElementById('donate-aid-btn-2').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAmountFlood2 = parseFloat(document.getElementById('input-amount-flood-2').value);
    console.log(inputAmountFlood2);

    if (isNaN(inputAmountFlood2) || inputAmountFlood2 < 0) {
        alert('Please input a valid amount');
        document.getElementById('my_modal').close();
        return;
    }
    document.getElementById('my_modal').showModal();

    const actualBalanceElement2 = document.getElementById('actual-balance');
    const actualBalance = parseFloat(actualBalanceElement2.innerText);

    const donateAid2 = parseFloat(document.getElementById('donate-aid-2').innerText);

    const balance2 = actualBalance - inputAmountFlood2;

    actualBalanceElement2.innerText = balance2.toFixed(2);

    const totalDonate2 = (inputAmountFlood2 + donateAid2);

    document.getElementById('donate-aid-2').innerText = totalDonate2;
});

// Donate for Quota :

document.getElementById('donate-aid-btn-3').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAmountQuota = parseFloat(document.getElementById('input-amount-quota').value);
    console.log(inputAmountQuota);

    if (isNaN(inputAmountQuota) || inputAmountQuota < 0) {
        alert('Please input a valid amount');
        document.getElementById('my_modal').close();
        return;
    }
    document.getElementById('my_modal').showModal();

    const actualBalanceElement3 = document.getElementById('actual-balance');
    const actualBalance = parseFloat(actualBalanceElement3.innerText);

    const donateAid3 = parseFloat(document.getElementById('donate-aid-3').innerText);

    const balance3 = actualBalance - inputAmountQuota;

    actualBalanceElement3.innerText = balance3.toFixed(2);

    const totalDonate3 = (inputAmountQuota + donateAid3);

    document.getElementById('donate-aid-3').innerText = totalDonate3;
});

