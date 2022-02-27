import { css } from "@emotion/react";

const wrapStyle = css`
  display: flex;
  flex: 1;
  background: #0798ec;
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
  width: 300px;
  background: #000;
  transform: rotate(45deg) translate(225px, 0px) scale(1);
  animation: scale 3s 0s infinite;
  transition: 1s transform;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(135deg) translate(55px, 55px);
    border: 1px solid #ddd;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(212, 212, 212, 1) 100%
    );
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background: #ff5f45;
    width: 100%;
    height: 100%;
  }
  &:hover {
    animation: none;
  }
  a {
    color: #fff;
  }
  @keyframes scale {
    0% {
      transform: rotate(45deg) translate(225px, 0px) scale(1);
    }
    50% {
      transform: rotate(45deg) translate(225px, 0px) scale(0.9);
    }
    100% {
      transform: rotate(45deg) translate(225px, 0px) scale(1);
    }
  }
`;

const onRotateStyle = css`
  animation: none;
  transform: rotate(45deg) translate(225px, 0px) scale(13);

  @media (min-width: 1024px) {
    transform: rotate(45deg) translate(225px, 0px) scale(20);
  }
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
