import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { globalState } from "@/state/global";

type Props = {
  pathname: string;
};

const GlobalInitializer = ({ pathname }: Props) => {
  const setGlobal = useSetRecoilState(globalState);

  useEffect(() => {
    setGlobal({ path: pathname });
  }, [pathname, setGlobal]);

  return null;
};

export default GlobalInitializer;
