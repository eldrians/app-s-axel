"use client";
import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const BarChart = ({ labels, data }: { labels: String[]; data: Number[] }) => {
  const dataBarChart = {
    labels: labels,
    datasets: [
      {
        label: "Prestasi Mahasiswa",
        data: data,
        backgroundColor: "#fff",
        borderColor: "darkGreen",
        borderWidth: 1,
      },
    ],
  };
  return <Bar data={dataBarChart} options={{}} />;
};

export default BarChart;
