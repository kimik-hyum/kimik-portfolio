import { css } from "@emotion/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <div
        css={css`
          font-size: 20px;
        `}
      >
        안녕하세요
      </div>
    </div>
  );
};

export default Home;
