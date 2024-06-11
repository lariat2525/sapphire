"use client";

// TODO: childrenのtype
type Props = { children: any; href?: string };

/* TSX */
export default function AppearanceTag({ children, href }: Props) {
  return (
    <div className="Appearances max-w-96 h-12 flex flex-wrap">
      <a
        href={`/article/${href}`}
        className="Appearance m-1 h-5 min-w-24 flex justify-center  border-2 
        border-sub-color rounded-xl"
      >
        <p className="mx-2 h-5 flex justify-center text-xs">#{children}</p>
      </a>
    </div>
  );
}
