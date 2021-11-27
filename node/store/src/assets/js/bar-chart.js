// Bar chart
new Chart(document.getElementById("myBarChart"), {
    type: 'bar',
    data: {
      labels: ["Lun", "Mar", "Mié", "Jue", "Vie"],
      datasets: [
        {
          label: "Usuarios inscritos",
          borderColor: "#39aa36",
          borderWidth: 2,
          backgroundColor: "rgba(57, 170, 54, 0.2)",
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      legend: { display: false },
      title: {
        display: true,
        text: 'Usuarios inscritos, últimos 7 días'
      }
    }
});