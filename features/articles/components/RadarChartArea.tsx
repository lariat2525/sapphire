"use client";
import "chart.js/auto";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";
import styles from "./chart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RadarChartArea() {
  const data = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 90, 81, 56],
        fill: true,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderColor: "rgb(0, 0, 0)",
        hoverBackgroundColor: "rgb(0, 0, 0)",
        pointBackgroundColor: "rgb(255, 255, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 255, 132)",
      },
    ],
  };

  return (
    <>
      <div className={styles.radarchart}>
        <Radar
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              r: {
                angleLines: { color: "rgb(255, 255, 255)" },
                grid: { color: "rgb(255, 255, 255)" },
                ticks: {
                  display: false,
                },
                pointLabels: {
                  color: "#fff", // 項目ラベルの文字色を変更
                },
              },
            },
          }}
        />
      </div>
    </>
  );
}
