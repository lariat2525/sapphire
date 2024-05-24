"use client";

import { useRecoilValue } from "recoil";
import ProfileSingle from "./ProfileSingle";
import { articlesState } from "../state/article";

// TODO: childrenのtype
type Props = { title?: string };

/* TSX */
export default function Profiles({ title }: Props) {
  const { monsters, tags } = useRecoilValue(articlesState);

  return (
    <div className="Datas h-64">
      <div className="Label flex justify-center">
        <h2 className="w-4/5 mt-2 mb-4 flex justify-center border-2 rounded-full">
          {title}
        </h2>
      </div>
      <div className="Data">
        <div>
          <ProfileSingle title="大きさ">
            <p className="flex justify-center px-2">{monsters.size}</p>
          </ProfileSingle>
        </div>
        <div>
          <ProfileSingle title="重さ">
            <p className="flex justify-center px-2">{monsters.weight}</p>
          </ProfileSingle>
        </div>
        <div>
          <ProfileSingle title="登場作品">
            {tags?.map(({ name, jp_name }, index) => {
              return (
                <a
                  key={index}
                  href={`/article/${name}`}
                  className="inline-block flex justify-center px-2"
                >
                  {jp_name}
                </a>
              );
            })}
          </ProfileSingle>
        </div>
      </div>
    </div>
  );
}
