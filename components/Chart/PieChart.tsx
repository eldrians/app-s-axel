"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ChartDataLabels
);

const PieChart = ({ labels, data }: { labels: String[]; data: Number[] }) => {
  const dataPieChart = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: ["#ffee65", "#beb9db", "#fdcce5"],
      },
    ],
  };
  return (
    <Pie
      data={dataPieChart}
      options={{
        plugins: {
          datalabels: {
            color: "black",
          },
        },
      }}
    />
  );
};

export default PieChart;
