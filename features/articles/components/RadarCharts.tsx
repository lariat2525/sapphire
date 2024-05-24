"use client";

import RadarChartArea from "./RadarChartArea";

// TODO: childrenのtype
type Props = {};

/* TSX */
export default function RadarCharts({}: Props) {
  return (
    <div className="Graph h-80">
      <div className="Label flex justify-center">
        <h2 className="inline-block m-2 mt-4 utl-flex-center border-2 rounded-full w-1/3">
          グラフ
        </h2>
      </div>
      <div>
        <RadarChartArea></RadarChartArea>
      </div>
    </div>
  );
}
