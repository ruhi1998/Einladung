let choices = {
    activity: '',
    date: ''
};

function nextStep(current, next) {
    document.getElementById('step' + current).classList.add('hidden');
    document.getElementById('step' + next).classList.remove('hidden');
}

function selectActivity(activity) {
    choices.activity = activity;
    nextStep(2, 3);
}

function finishProposal() {
    const dropdown = document.getElementById('dateDropdown');
    let selectedDate = dropdown.options[dropdown.selectedIndex].text.split('(')[0].trim();
    choices.date = selectedDate;
    
    document.getElementById('summaryText').innerHTML = `Abgemacht! Wir gehen für <strong>${choices.activity}</strong> aus.<br>Geplantes Timing: <strong>${choices.date}</strong>.<br><br>Ich schreibe dir gleich! 🥰`;
    
    nextStep(3, 4);

    const myPhoneNumber = "004915172472358"; 
    
    const whatsappMessage = `Hey! Ich habe das Date-Formular ausgefüllt: \n\n` +
                            `🎈 Was: ${choices.activity}\n` +
                            `📅 Wann: ${choices.date}\n\n` +
                            `Ich freue mich! 🥰`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    setTimeout(() => {
        window.open(`https://api.whatsapp.com/send?phone=${myPhoneNumber}&text=${encodedMessage}`, '_blank');
    }, 1500);
}