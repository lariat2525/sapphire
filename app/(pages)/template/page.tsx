"use client";
import { css } from "@emotion/react";
import { useRecoilState } from "recoil";
import { templateState } from "@/state/template";

/* TSX */
export default function Template() {
  const [template, setTemplate] = useRecoilState(templateState);
  return <main css={tempStyle}>{template}</main>;
}

/* CSS */
const tempStyle = css`
  color: blue;
  font-size: 16px;
`;
