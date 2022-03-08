import { css } from '@emotion/react'
import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { pageAnime } from 'src/store/recoil/page/atom'
import { contentStyle } from '../src/style/layout'

export default function Project() {
  // const [anime, setAnime] = useRecoilState(pageAnime)
  // useEffect(() => {
  //   if (!anime) setAnime('prev')
  // }, [])
  return <div css={[S, contentStyle]}>123</div>
}

const S = css`
  flex: 1;
  height: 100%;
  background-size: cover;
  background-color: #0798ec;
`
