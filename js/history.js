const donationBtn = document.getElementById('donation_btn');
const historyBtn = document.getElementById('history_btn');

historyBtn.addEventListener('click', function () {
    historyBtn.classList.add(
        'bg-[#B4F461]'
    );

    donationBtn.classList.remove(
        'bg-[#B4F461]'
    );
    document.getElementById('donation_part').classList.add('hidden');
    document.getElementById('history_part').classList.remove('hidden');
})

donationBtn.addEventListener('click', function () {
    donationBtn.classList.add(
        'bg-[#B4F461]'
    );
    historyBtn.classList.remove(
        'bg-[#B4F461]'
    );
    document.getElementById('history_part').classList.add('hidden');
    document.getElementById('donation_part').classList.remove('hidden');
})