"use client";
import "chart.js/auto";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  rarity_value?: number;
  strength_value: number;
  intelligence_value: number;
  risk_value: number;
  magic_power_value: number;
};

export default function RadarChartArea({
  rarity_value,
  strength_value,
  intelligence_value,
  risk_value,
  magic_power_value,
}: Props) {
  const data = {
    labels: ["レア度", "力", "知能", "危険度", "魔力"],
    datasets: [
      {
        label: "",
        data: [
          rarity_value,
          strength_value,
          intelligence_value,
          risk_value,
          magic_power_value,
        ],
        fill: true,
        backgroundColor: "rgba(0, 180, 100, 0.5)",
        borderColor: "rgb(0, 230, 110)",
        borderWidth: 2,
        hoverBackgroundColor: "rgb(0, 0, 0)",
        pointBackgroundColor: "rgb(20, 150, 250)",
        pointBorderColor: "rgb(20, 150, 250)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 255, 132)",
        pointRadius: 2.5,
      },
    ],
  };

  return (
    <>
      <div className="const-radarcharts-size">
        <Radar
          data={data}
          options={{
            maintainAspectRatio: true,
            plugins: {
              legend: {
                display: false, // 凡例を非表示にする
              },
            },
            scales: {
              r: {
                min: 0,
                max: 100,
                angleLines: { color: "rgb(255, 255, 255)", lineWidth: 1 },
                grid: { color: "rgb(255, 255, 255)", lineWidth: 0.5 },
                ticks: {
                  display: false,
                  count: 6,
                  stepSize: 20,
                  backdropColor: "rgba(255, 255, 255, 0.75)",
                },
                pointLabels: {
                  color: "#fff",
                  font: { size: 12 },
                },
              },
            },
          }}
        />
      </div>
    </>
  );
}
