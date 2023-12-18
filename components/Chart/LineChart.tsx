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
import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const LineChart = ({ labels, data }: { labels: String[]; data: Number[] }) => {
  const dataLineChart = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: "darkGreen",
      },
    ],
  };
  return <Line data={dataLineChart} options={{}} />;
};

export default LineChart;
