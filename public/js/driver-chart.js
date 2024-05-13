var data = {
    labels: ["Active", "Pending", "Blocked"],
    datasets: [{
        data: [80, 15, 5], // Example data
        backgroundColor: [
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(255, 99, 132, 0.5)'
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
};

var options = {
    responsive: true,
    maintainAspectRatio: false
};

// Get the context of the canvas element
var ctx = document.getElementById('driver-pie-chart').getContext('2d');