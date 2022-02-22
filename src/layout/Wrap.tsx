import Link from "next/link";
import { FC, useState } from "react";
import {
  containerStyle,
  nextStyle,
  onRotateStyle,
  wrapStyle,
} from "../style/layout";
import Side from "./Side";

const Wrap: FC = ({ children }) => {
  const [rotate, setRotate] = useState(false);
  return (
    <div css={wrapStyle}>
      <Side />
      <div css={containerStyle}>{children}</div>
      <div
        css={[nextStyle, rotate && onRotateStyle]}
        onClick={() => setRotate(!rotate)}
      >
        <Link href="/portfolio">Next</Link>
      </div>
    </div>
  );
};

export default Wrap;
