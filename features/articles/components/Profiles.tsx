"use client";

import { faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons/faFilm";
import { faRuler } from "@fortawesome/free-solid-svg-icons/faRuler";
import { useRecoilValue } from "recoil";
import ProfileSingle from "./ProfileSingle";
import { articlesState } from "../state/article";

// TODO: childrenのtype
type Props = { title?: string };

/* TSX */
export default function Profiles({ title }: Props) {
  const { monsters, tags } = useRecoilValue(articlesState);

  return (
    <div className="Datas mb-6 min-h-44">
      <div className="Label flex justify-center">
        <h2 className="w-11/12 mt-2 mb-4 flex justify-center border-2 rounded-full">
          {title}
        </h2>
      </div>
      <div className="Data">
        <div>
          <ProfileSingle title="大きさ" icon={faRuler}>
            <p className="flex justify-center px-2">{monsters?.size}</p>
          </ProfileSingle>
        </div>
        <div>
          <ProfileSingle title="重さ" icon={faWeightHanging}>
            <p className="flex justify-center px-2">{monsters?.weight}</p>
          </ProfileSingle>
        </div>
        <div>
          <ProfileSingle title="代表作品" icon={faFilm} borderStyle="">
            {tags?.map(({ name, jp_name }, index) => {
              return (
                <a
                  key={index}
                  href={`/article/${name}`}
                  className="inline-block flex justify-start px-2"
                >
                  <p>＃{jp_name}</p>
                </a>
              );
            })}
          </ProfileSingle>
        </div>
      </div>
    </div>
  );
}
