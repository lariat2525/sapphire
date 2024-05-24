"use client";

// TODO: childrenのtype
type Props = { children: any; title: string };

/* TSX */
export default function ProfileSingle({ children, title }: Props) {
  return (
    <div className="Size my-2 mx-5 flex border-b">
      <div className="Name mx-2 px-2">
        <p className="">{title}</p>
      </div>
      <div className="Value">{children}</div>
    </div>
  );
}
