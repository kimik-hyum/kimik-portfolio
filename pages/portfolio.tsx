import { css } from '@emotion/react'
import { contentStyle } from '../src/style/layout'

export default function Portfolio() {
  return <div css={[S, contentStyle]}>123</div>
}

const S = css`
  flex: 1;
  height: 100%;
  background-size: cover;
`
