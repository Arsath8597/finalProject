
import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  // Sample data (replace with your actual data)
  const data = {
    labels: ["May 1", "May 2", "May 3", "May 4", "May 5"],
    datasets: [
      {
        label: "User Registration Count",
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.7)",
        hoverBorderColor: "rgba(54, 162, 235, 1)",
        data: [10, 15, 20, 18, 25],
      },
    ],
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <Bar
        data={data}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;// DoughnutChart.js
