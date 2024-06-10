"use client";

// TODO: childrenのtype
type Props = { children: any; href?: string };

/* TSX */
export default function SimpleTag({ children, href }: Props) {
  return (
    <a
      href={`/article/${href}`}
      className="Tag min-w-24 h-6 mx-2 px-1 utl-flex-center border-2 border-tertiary-color  rounded-full"
    >
      <div className="mx-2 flex">
        <p className="h-2 w-2 mr-1.5 mt-1 rounded-full bg-tertiary-color" />
        <p className="text-xs">{children}</p>
      </div>
    </a>
  );
}
