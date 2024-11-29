// Reveal Answer Button
document.getElementById('reveal-answer').addEventListener('click', function () {
    const response = document.getElementById('response');
    const resetButton = document.getElementById('reset-proposal');
    response.classList.remove('hidden');
    this.style.display = 'none'; // Hide the reveal button
    resetButton.classList.remove('hidden'); // Show the reset button
});

// Reset Proposal Button
document.getElementById('reset-proposal').addEventListener('click', function () {
    const response = document.getElementById('response');
    const revealButton = document.getElementById('reveal-answer');
    const surpriseContainer = document.getElementById('surprise-container');
    response.classList.add('hidden');
    revealButton.style.display = 'inline-block'; // Show the reveal button again
    this.classList.add('hidden'); // Hide the reset button
    surpriseContainer.classList.add('hidden'); // Hide the surprise container
});

// Show Surprise Button
document.getElementById('show-surprise').addEventListener('click', function () {
    const surpriseContainer = document.getElementById('surprise-container');
    surpriseContainer.classList.remove('hidden'); // Show the surprise
});

