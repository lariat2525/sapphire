"use client";
import { useRecoilState } from "recoil";
import { templateState } from "@/state/template";

/* TSX */

export default function Template() {
  const [template, setTemplate] = useRecoilState(templateState);
  return <main>{template}</main>;
}
