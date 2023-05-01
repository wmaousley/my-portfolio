import React, { useEffect } from 'react';
import { Chart } from 'chart.js';

const MainDashboard = () => {
  useEffect(() => {
    const ctx = document.getElementById('bar-chart').getContext('2d');

    const data = {
      labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
      datasets: [{
        label: 'Sample Data',
        data: [10, 20, 30, 15, 25],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    const barChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  }, []);

  return (
    <section className="main-dashboard">
      <div className="chart-container">
        <canvas id="bar-chart"></canvas>
      </div>
      {/* Add more data visualization cards here */}
    </section>
  );
};

export default MainDashboard;

