document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/bitcoin')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
           // console.log(data.month_year)
            

            for (let i = 0; i < 5; i++){
                
              console.log(data.month_year)
                // month_year1 = data.month_year; // either dot notation   i.month_year   or bracket   i["month_year"]
                // closing_price1 = data.closing_price;
                // volume1 = data.volume;

                // month_year.push(month_year1);
                // closing_price.push(closing_price1);
                // volume.push(volume1); 

            }
            // console.log(month_year);
        }
        )
    } 
)


            

            
            









// let goldVotes = 0;
// let silverVotes = 0;
// let bitcoinVotes = 0;

// const goldVoteButton = document.getElementById('goldVote');
// const silverVoteButton = document.getElementById('silverVote');
// const bitcoinVoteButton = document.getElementById('bitcoinVote');

// const goldCountSpan = document.getElementById('goldCount');
// const silverCountSpan = document.getElementById('silverCount');
// const bitcoinCountSpan = document.getElementById('bitcoinCount');

// goldVoteButton.addEventListener('click', () => {
//     goldVotes++;
//     goldCountSpan.textContent = goldVotes;
// });

// silverVoteButton.addEventListener('click', () => {
//     silverVotes++;
//     silverCountSpan.textContent = silverVotes;
// });

// bitcoinVoteButton.addEventListener('click', () => {
//     bitcoinVotes++;
//     bitcoinCountSpan.textContent = bitcoinVotes;

