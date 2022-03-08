import { css } from '@emotion/react'

const wrapStyle = css`
  display: flex;
  flex: 1;
`

const sideStyle = css`
  position: absolute;
  height: 100%;
`

const containerStyle = css`
  width: 100%;
  display: flex;
`

const contentStyle = css`
  width: 100%;
  display: flex;
  padding-left: 150px;
`
const nextBasic = css`
  position: fixed;
  display: flex;
  right: 0;
  top: calc(100% - 300px);
  height: 300px;
  width: 300px;
  transform: rotate(45deg) translate(225px, 0px) scale(1);
  z-index: 10;
  /* transition: 1s transform; */
  &:after {
    content: '';
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
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
  }
`

const nextStyle = css`
  transform: rotate(45deg) translate(225px, 0px) scale(1);

  &:hover {
    animation: none;
  }
  a {
    color: #fff;
  }
  /* @keyframes scale {
    0% {
      transform: rotate(45deg) translate(225px, 0px) scale(1);
    }
    50% {
      transform: rotate(45deg) translate(225px, 0px) scale(0.9);
    }
    100% {
      transform: rotate(45deg) translate(225px, 0px) scale(1);
    }
  } */
`
const prevStyle = css`
  transform: rotate(45deg) translate(225px, 0px) scale(20);
  &:hover {
    animation: none;
  }
  a {
    color: #fff;
  }
`
const anime = css`
  @keyframes scale {
    0% {
      transform: rotate(45deg) translate(225px, 0px) scale(20);
    }
    100% {
      transform: rotate(45deg) translate(225px, 0px) scale(1);
    }
  }
`

const onRotateStyle = css`
  animation: res 1s;
  /* transform: rotate(45deg) translate(225px, 0px) scale(13);
  @media (min-width: 1024px) {
    transform: rotate(45deg) translate(225px, 0px) scale(20);
  }
  a {
    right: calc(100vw + 250px);
  } */
  @keyframes res {
    0% {
      transform: rotate(45deg) translate(225px, 0px) scale(1);
    }
    100% {
      transform: rotate(45deg) translate(225px, 0px) scale(20);
    }
  }
`

const offRotateStyle = css`
  animation: scale 1s;
  /* transform: rotate(45deg) translate(225px, 0px) scale(1);

  @media (min-width: 1024px) {
    transform: rotate(45deg) translate(225px, 0px) scale(1);
  }
  a {
    right: calc(100vw + 250px);
  } */
  ${anime}
`

export {
  sideStyle,
  wrapStyle,
  containerStyle,
  contentStyle,
  nextStyle,
  onRotateStyle,
  nextBasic,
  offRotateStyle,
  prevStyle,
}
