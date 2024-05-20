"use client";

// TODO: childrenのtype
type Props = { children: any; href?: string };

/* TSX */
export default function Tag({ children, href }: Props) {
  return (
    <a
      href={href}
      className="Tag flex bg-tertiary-color text-white px-1 utl-flex-center border-2 rounded-full min-w-16"
    >
      <div className="h-2 w-2 mr-1.5 rounded-full bg-white" />
      <div className="mx-2">{children}</div>
    </a>
  );
}
