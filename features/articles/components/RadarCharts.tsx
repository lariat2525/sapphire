"use client";

import { useRecoilValue } from "recoil";
import RadarChartArea from "./RadarChartArea";
import { articlesState } from "@/features/articles/state/article";

// TODO: childrenのtype
type Props = {};

/* TSX */
export default function RadarCharts({}: Props) {
  const { monsters } = useRecoilValue(articlesState);

  return (
    <div className="Graph h-80">
      <div className="Label flex justify-center">
        <h2 className="inline-block m-2 mt-4 utl-flex-center border-2 rounded-full w-1/3">
          グラフ
        </h2>
      </div>
      <div className="RadarChart flex justify-center">
        <RadarChartArea
          rarity_value={monsters?.rarity_value || 0}
          strength_value={monsters?.strength_value || 0}
          intelligence_value={monsters?.intelligence_value || 0}
          risk_value={monsters?.risk_value || 0}
          magic_power_value={monsters?.magic_power_value || 0}
        ></RadarChartArea>
      </div>
    </div>
  );
}
