// Attendance Chart
new Chart(document.getElementById("attendanceChart"), {
  type: 'doughnut',
  data: {
    labels: ["Present", "Absent"],
    datasets: [{
      data: [80, 20],
      backgroundColor: ["#1e90ff", "#ff4d4f"]
    }]
  },
  options: {
    cutout: "70%",
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          }
        }
      }
    }
  }
});

// Test Scores Chart
new Chart(document.getElementById("testChart"), {
  type: 'bar',
  data: {
    labels: ["Maths", "Science", "English", "History"],
    datasets: [{
      data: [20, 40, 60, 25],
      backgroundColor: "#1e90ff",
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Recent Test Scores'
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return 'Score: ' + tooltipItem.raw + '%';
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});