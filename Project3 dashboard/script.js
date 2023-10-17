let goldVotes = 0;
let silverVotes = 0;
let bitcoinVotes = 0;

const goldVoteButton = document.getElementById('goldVote');
const silverVoteButton = document.getElementById('silverVote');
const bitcoinVoteButton = document.getElementById('bitcoinVote');

const goldCountSpan = document.getElementById('goldCount');
const silverCountSpan = document.getElementById('silverCount');
const bitcoinCountSpan = document.getElementById('bitcoinCount');

goldVoteButton.addEventListener('click', () => {
    goldVotes++;
    goldCountSpan.textContent = goldVotes;
});

silverVoteButton.addEventListener('click', () => {
    silverVotes++;
    silverCountSpan.textContent = silverVotes;
});

bitcoinVoteButton.addEventListener('click', () => {
    bitcoinVotes++;
    bitcoinCountSpan.textContent = bitcoinVotes;
});
