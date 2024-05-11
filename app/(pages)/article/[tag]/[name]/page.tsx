"use client";
import Image from "next/image";
import DotLine from "@/components/elements/shapes/DotLine";
// http://localhost:3000/article/UMA/2

export default function Article() {
  return (
    <div className="Content bg-white">
      <DotLine></DotLine>
      <div className="Info">
        <div className="Image">
          <img src="" alt="image" />
        </div>
        <div className="Detail">
          <div className="Profile">
            <div className="Labels">
              <div className="Label">
                <h3>プロフィール</h3>
              </div>
              <div className="Line flex">
                <DotLine></DotLine>
              </div>
            </div>
            <div className="Names">
              <div className="Name flex">
                <div className="EN">
                  <p>GOBLIN</p>
                </div>
                <div className="JP">
                  <p>ゴブリン</p>
                </div>
              </div>
              <div className="Tags">
                <div className="Tag flex">
                  <div>Dot</div>
                  <div>Fantasy</div>
                </div>
                <div className="Tag flex">
                  <div>Dot</div>
                  <div>God</div>
                </div>
              </div>
            </div>
            <div className="Text">
              <p>
                アンスプラッシュとは、大量の写真が保管されているストックフォトの一つです。そのため、わざわざアンスプラッシュからダウンロードして取り込まなくても、Figmaアプリなら直接かつ簡単に写真をUIデザインに追加できるので、時間短縮になり著しく業務が改善されます。また、写真の挿入にはアンスプラッシュだけでなくペクセルというプラグインも利用可能です。
              </p>
            </div>
          </div>
          <div className="Root">
            <div className="Labels">
              <div className="Label">
                <h3>由来</h3>
              </div>
              <div className="Line flex">
                <div>Dot</div>
                <div>Line</div>
              </div>
            </div>
            <div className="Text">
              <p>
                写真の背景を取り除くためだけに、写真編集ソフトに時間を費やしていませんか？そういう時は、FigmaアプリにRemoveBGのプラグインをインストールすれば解決できます。わざわざ他のツールを使わなくても、RemoveBGでデザインファイル内にある写真の背景を簡単に取り除けます。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Graphs">
        <div className="Graph">
          <div className="Label">
            <h4>グラフ</h4>
          </div>
          <div></div>
        </div>
        <div className="Datas">
          <div className="Label"></div>
          <div className="Data">
            <div className="Size"></div>
            <div className="Weight"></div>
            <div className="Habitat"></div>
          </div>
        </div>
      </div>
      <div className="Advertisement"></div>
      <div className="Category">
        <div className="Labels">
          <div className="Label">
            <p>カテゴリー</p>
          </div>
          <div className="LineDotCenter flex">
            <div>Line</div>
            <div>Dot</div>
            <div>Line</div>
          </div>
        </div>
      </div>
    </div>
  );
}
