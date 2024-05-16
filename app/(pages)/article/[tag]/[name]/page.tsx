"use client";
import Image from "next/image";
import DotLine from "@/components/elements/shapes/DotLine";
import LineDotCenter from "@/components/elements/shapes/LineDotCenter";
// http://localhost:3000/article/UMA/2

export default function Article() {
  return (
    <div className="Content flex justify-center">
      <div className="Left mx-4 w-2/3">
        <div className="Info">
          <div className="Image bg-secondary-color">
            <img src="" alt="image" className="utl-article-image-size" />
          </div>
          {/* TODO: 後で"h-screen"消してね👍 */}
          <div className="Detail bg-white h-screen">
            <div className="Profile">
              <div className="Labels">
                <div className="Label">
                  <h3 className="p-2 mt-0.5 text-2xl">プロフィール</h3>
                </div>
                <div className="Line flex">
                  <DotLine></DotLine>
                </div>
              </div>
              <div className="Names p-5">
                <div className="Name flex justify-center">
                  <div className="EN text-5xl">
                    <p>GOBLIN</p>
                  </div>
                  <div className="JP flex items-end">
                    <p className="inline-block">ゴブリン</p>
                  </div>
                </div>
                <div className="Tags flex justify-end">
                  <div className="Tag flex px-2">
                    <div>Dot</div>
                    <div>Fantasy</div>
                  </div>
                  <div className="Tag flex px-2">
                    <div>Dot</div>
                    <div>God</div>
                  </div>
                </div>
              </div>
              <div className="Text">
                <p className="px-8 my-0.5 leading-9 text-base tracking-widest">
                  アンスプラッシュとは、大量の写真が保管されているストックフォトの一つです。そのため、わざわざアンスプラッシュからダウンロードして取り込まなくても、Figmaアプリなら直接かつ簡単に写真をUIデザインに追加できるので、時間短縮になり著しく業務が改善されます。また、写真の挿入にはアンスプラッシュだけでなくペクセルというプラグインも利用可能です。
                </p>
              </div>
            </div>
            <div className="Root">
              <div className="Labels">
                <div className="Label">
                  <h3 className="p-2 my-0.5 text-2xl">由来</h3>
                </div>
                <div className="Line flex">
                  <DotLine></DotLine>
                </div>
              </div>
              <div className="Text">
                <p className="inline-block px-8 my-0.5 leading-9 text-base tracking-widest">
                  写真の背景を取り除くためだけに、写真編集ソフトに時間を費やしていませんか？そういう時は、FigmaアプリにRemoveBGのプラグインをインストールすれば解決できます。わざわざ他のツールを使わなくても、RemoveBGでデザインファイル内にある写真の背景を簡単に取り除けます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Right mx-4 w-1/3">
        <div className="Graphs bg-tertiary-color text-white utl-size-h-600 mb-6 border-2 rounded">
          <div className="Graph h-80">
            <div className="Label flex justify-center">
              <h2 className="inline-block m-2 utl-flex-center border-2 rounded-full w-1/5">
                グラフ
              </h2>
            </div>
            <div></div>
          </div>
          <div className="Datas h-64">
            <div className="Label flex justify-center">
              <h2 className="mt-2 mb-4 flex justify-center border-2 rounded-full  w-4/5">
                基本情報
              </h2>
            </div>
            <div className="Data">
              <div className="Size my-2 mx-5 p-2 flex border-b">
                <div className="Name mx-2 px-2">
                  <p className="inline-block">大きさ</p>
                </div>
                <div className="Value">
                  <p className="ml-24 px-2">約130㎝</p>
                </div>
              </div>
              <div className="Weight my-2 mx-5 p-2 flex border-b">
                <div className="Name mx-2 px-2">
                  <p className="">体重</p>
                </div>
                <div className="value">
                  <p className="utl-ml-104 px-2">約60kg</p>
                </div>
              </div>
              <div className="Habitat my-2 mx-5 flex">
                <div className="Name mx-2 px-2">
                  <p className="">生息地</p>
                </div>
                <div className="Value">
                  <p className="ml-24 px-2">オランダ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Advertisement bg-white my-4 h-48">広告</div>
        {/* TODO: 後で"h-screen"消してね👍 */}
        <div className="Category bg-secondary-color mt-6 h-screen">
          <div className="Labels">
            <div className="Label p-2 mt-0.5 text-2xl">
              <p>カテゴリー</p>
            </div>
            <div className="LineDotCenter flex">
              <LineDotCenter></LineDotCenter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
