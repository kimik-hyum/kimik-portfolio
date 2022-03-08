import { css } from '@emotion/react'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { pageAnime } from 'src/store/recoil/page/atom'

const Home: NextPage = () => {
  // const [anime, setAnime] = useRecoilState(pageAnime)
  // useEffect(() => {
  //   console.log('index', anime)
  //   setAnime('prev')
  // }, [])
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
  )
}
export default Home
