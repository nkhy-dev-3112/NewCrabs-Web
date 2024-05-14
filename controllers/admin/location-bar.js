var ctx3 = document.getElementById("chart-bar").getContext("2d");

var location_data = {
    labels: ["District 1", "District 3", "District 5", "District 8", "District 10"],
    datasets: [{
        data: [65, 59, 80, 81, 56],
        backgroundColor: [

            'rgba(153, 102, 255, 0.2)' // Purple
        ],
        borderColor: [

            'rgba(153, 102, 255, 1)' // Purple
        ],
        borderWidth: 1,
        borderRadius: 12,
        borderSkipped: false,

    }
    ],
}
var location_option = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        }
    },
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5]
            },
            ticks: {
                display: true,
                color: '#b2b9bf',
                padding: 20,
                font: {
                    size: 11,
                    family: "Open Sans",
                    style: 'normal',
                    lineHeight: 2
                },
            }
        }
    }
}
