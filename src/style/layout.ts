import { css } from "@emotion/react";

const wrapStyle = css`
  display: flex;
  flex: 1;
`;

const sideStyle = css`
  position: absolute;
  height: 100%;
`;

const containerStyle = css`
  width: 100%;
  display: flex;
`;

const contentStyle = css`
  width: 100%;
  display: flex;
  padding-left: 150px;
`;

const nextStyle = css`
  position: fixed;
  display: flex;
  right: 0;
  top: calc(100% - 300px);
  height: 300px;
  width: 500px;
  transform-origin: 100% 0%;
  transform: rotate(-50deg) translate(40px, 50px);
  background: #000;

  a {
    color: #fff;
  }
`;

const onRotateStyle = css`
  width: 200vw;
  height: 100vh;
  max-width: inherit;
  transform: rotate(0deg) translate(100vw, calc(-100vh + 300px));
  transition: 0.6s transform;

  a {
    right: calc(100vw + 250px);
  }
`;

export {
  sideStyle,
  wrapStyle,
  containerStyle,
  contentStyle,
  nextStyle,
  onRotateStyle,
};
