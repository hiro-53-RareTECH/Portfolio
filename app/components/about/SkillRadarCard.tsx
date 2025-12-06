"use client";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import React from "react";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type RadarData = {
  labels: string[];
  values: number[];
  title: string;
  color: string;
};

const SkillRadarCard = ({ labels, values, title, color }: RadarData) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: values,
        backgroundColor: `${color}40`,
        borderColor: color,
        borderWidth: 1,
        pointBackgroundColor: `${color}40`,
        pointBorderColor: color,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 5,
        grid: {
          color: "#4b5563",
            },
            ticks: {
                stepSize: 1,
                showLabelBackdrop: false,
                color: "#ffffff",
                font: {
                    size:12,
                },
            },
        pointLabels: {
          color: "#ffffff",
          font: {
            size: 12,
          },
        },
        angleLines: {
          color: "#4b5563",
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };
  return (
    <div className="bg-gray-800 rounded-xl p-4 text-center border border-gray-600 w-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:opacity-90">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="w-full h-64">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default SkillRadarCard;
