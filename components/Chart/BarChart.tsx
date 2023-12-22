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
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  ChartDataLabels
);

const BarChart = ({ labels, data }: { labels: String[]; data: Number[] }) => {
  const dataBarChart = {
    labels: labels,
    datasets: [
      {
        label: "Prestasi Mahasiswa",
        data: data,
        backgroundColor: "white",
        borderColor: "darkGreen",
        borderWidth: 1,
      },
    ],
  };
  return (
    <Bar
      data={dataBarChart}
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

export default BarChart;
