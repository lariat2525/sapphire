"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO: childrenのtype
type Props = { children: any; title: string; icon: any; borderStyle?: string };

/* TSX */
export default function ProfileSingle({
  children,
  title,
  icon,
  borderStyle = "border-b",
}: Props) {
  return (
    <div className={`Size my-2 mx-4 flex ${borderStyle}`}>
      <div className="Name mx-2 px-2 gap-x-2 flex">
        <div className="relative top-0">
          <FontAwesomeIcon icon={icon} />
        </div>
        <p className="min-w-20 font-sans">{title}</p>
      </div>
      <div className="Value font-sans">{children}</div>
    </div>
  );
}
