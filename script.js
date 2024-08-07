function calculateAggregate() {
    const username = document.getElementById('username').value;
    const matricObtained = getValidMarks('matricObtained', 'matricTotal');
    const matricTotal = parseFloat(document.getElementById('matricTotal').value);
    const fscObtained = getValidMarks('fscObtained', 'fscTotal');
    const fscTotal = parseFloat(document.getElementById('fscTotal').value);
    const entryTestObtained = getValidMarks('entryTestObtained', 'entryTestTotal');
    const entryTestTotal = parseFloat(document.getElementById('entryTestTotal').value);

    const matricAggregate = (matricObtained / matricTotal) * 10;
    const fscAggregate = (fscObtained / fscTotal) * 15;
    const entryTestAggregate = (entryTestObtained / entryTestTotal) * 75;

    const totalAggregate = matricAggregate + fscAggregate + entryTestAggregate;

    document.getElementById('result').textContent = `${username}, you have got ${totalAggregate.toFixed(2)} aggregate.`;
}

function getValidMarks(obtainedId, totalId) {
    let obtained = parseFloat(document.getElementById(obtainedId).value);
    const total = parseFloat(document.getElementById(totalId).value);
    while (obtained < 0 || obtained > total) {
        obtained = parseFloat(prompt(`Invalid input. Please re-enter your marks for ${document.getElementById(obtainedId).previousElementSibling.textContent}`));
    }
    return obtained;
}
