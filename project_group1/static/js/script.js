
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
})


document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/bitcoin')
        .then(response => response.json())
        .then(data => {
            var data = JSON.parse(data);

            month_year = [];
            closing_price = [];
            volume = [];

            for (let i = 0; i < data.length; i++){

                m_y = data[i]["month_year"];
                c_p = data[i]["closing_price"];
                v = data[i]["volume"]

                month_year.push(m_y);
                closing_price.push(c_p);
                volume.push(v);
        }
            console.log(month_year);
            console.log(closing_price);
            console.log(volume);

            var trace1 = {
                type: 'line',
                x: month_year,
                y: closing_price,
                mode: 'lines+markers',
                name: 'Bitcoin Closing Price'
            };
            var trace2 = {
                type: 'line',
                x: month_year,
                y: volume,
                mode: 'lines+markers',
                name: 'Bitcoin Volume'
            };
            var layout = {
                title: 'Bitcoin Closing Price & Volume',
                xaxis: {title: 'Month & Year'},
                yaxis1: {title: 'Closing Price'},
                yaxis2: {title: 'Volume'}
            };
            Plotly.newPlot('')
    });
    }
);

document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/gold')
        .then(response => response.json())
        .then(data => {
            var data = JSON.parse(data);

            month_year = [];
            closing_price = [];
            volume = [];

            for (let i = 0; i < data.length; i++){

                m_y = data[i]["month_year"];
                c_p = data[i]["closing_price"];
                v = data[i]["volume"]

                month_year.push(m_y);
                closing_price.push(c_p);
                volume.push(v);
        }
        console.log(month_year);
        console.log(closing_price);
        console.log(volume);

        var trace1 = {
            type: 'line',
            x: month_year,
            y: closing_price,
            mode: 'lines+markers',
            name: 'Gold Closing Price'
        };
        var trace2 = {
            type: 'line',
            x: month_year,
            y: volume,
            mode: 'lines+markers',
            name: 'Gold Volume'
        };
        var layout = {
            title: 'Gold Closing Price & Volume',
            xaxis: {title: 'Month & Year'},
            yaxis1: {title: 'Closing Price'},
            yaxis2: {title: 'Volume'}
        };
        Plotly.newPlot('')
    }
        )
    }
);

document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/silver')
        .then(response => response.json())
        .then(data => {
            var data = JSON.parse(data);

            month_year = [];
            closing_price = [];
            volume = [];

            for (let i = 0; i < data.length; i++){

                m_y = data[i]["month_year"];
                c_p = data[i]["closing_price"];
                v = data[i]["volume"]

                month_year.push(m_y);
                closing_price.push(c_p);
                volume.push(v);
        }
        console.log(month_year);
        console.log(closing_price);
        console.log(volume);

        var trace1 = {
            type: 'line',
            x: month_year,
            y: closing_price,
            mode: 'lines+markers',
            name: 'Silver Closing Price'
        };
        var trace2 = {
            type: 'line',
            x: month_year,
            y: volume,
            mode: 'lines+markers',
            name: 'Silver Volume'
        };
        var layout = {
            title: 'Silver Closing Price & Volume',
            xaxis: {title: 'Month & Year'},
            yaxis1: {title: 'Closing Price'},
            yaxis2: {title: 'Volume'}
        };
        Plotly.newPlot()
    }
        )
    }
);
