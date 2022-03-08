import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { findArrayInObjIndex, getArrayValue } from 'src/lib/helper'
import { useMediaQuery } from 'src/store/hook/useMediaQuery'
import { pageAnime } from 'src/store/recoil/page/atom'

const variants = {
  prev: {
    scale: [20, 0],
    transitionEnd: {
      display: 'none',
    },
  },
  next: {
    scale: [1, 20],
    transitionEnd: {
      display: 'none',
      scale: 1,
    },
  },
}

const variantsMobile = {
  prev: {
    scale: [13, 0],
    transitionEnd: {
      display: 'none',
    },
  },
  next: {
    scale: [1, 13],
    transitionEnd: {
      display: 'none',
      scale: 1,
    },
  },
}
export default function NextComponent() {
  const [anime, setAnime] = useRecoilState(pageAnime)
  const [endAnime, setEndAnime] = useState(false)
  const [href, setHref] = useState('')
  const router = useRouter()
  const isDesktop = useMediaQuery()
  useEffect(() => {
    setHref(router.asPath)
    setEndAnime(false)
    if (!!href && href !== router.asPath) {
      if (
        href === pageList[pageList.length - 1].href &&
        router.asPath === pageList[0].href
      ) {
        setAnime('next')
      } else if (
        href === pageList[0].href &&
        router.asPath === pageList[pageList.length - 1].href
      ) {
        setAnime('prev')
      } else {
        setAnime(
          findArrayInObjIndex({ arr: pageList, key: 'href', value: router.asPath }) >
            findArrayInObjIndex({ arr: pageList, key: 'href', value: href })
            ? 'next'
            : 'prev'
        )
      }
    } else if (!anime) {
      setAnime('prev')
    }
  }, [router.asPath])

  const setColor = (index: number) => {
    return css`
      &:before {
        background: ${getArrayValue({
          arr: pageList,
          index:
            findArrayInObjIndex({ arr: pageList, key: 'href', value: router.asPath }) +
            index,
        }).bg};
      }
    `
  }
  return (
    <div css={S}>
      {endAnime ? (
        <Link
          passHref
          href={
            getArrayValue({
              arr: pageList,
              index:
                findArrayInObjIndex({
                  arr: pageList,
                  key: 'href',
                  value: router.asPath,
                }) + 1,
            }).href
          }
        >
          <motion.a
            className="next"
            initial={{ x: 150, y: 150, rotate: '45deg', display: 'block' }}
            animate={{
              scale: [0, 1],
            }}
            transition={{ duration: 0.8 }}
            css={css`
              ${setColor(1)}
            `}
          ></motion.a>
        </Link>
      ) : (
        <>
          <motion.div
            onClick={() => setAnime('next')}
            onAnimationComplete={() => {
              setEndAnime(true)
            }}
            onAnimationStart={() => {
              setEndAnime(false)
            }}
            initial={{ x: 150, y: 150, rotate: '45deg', display: 'block' }}
            className="next"
            css={css`
              ${setColor(anime === 'prev' ? 1 : 0)};
              ${!endAnime && 'display: block !important'}
            `}
            variants={isDesktop ? variants : variantsMobile}
            transition={{ duration: 0.8 }}
            animate={anime}
          />
          <div
            className="bg"
            css={css`
              position: fixed;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background: ${getArrayValue({
                arr: pageList,
                index:
                  findArrayInObjIndex({
                    arr: pageList,
                    key: 'href',
                    value: router.asPath,
                  }) + (anime === 'next' ? -1 : 0),
              }).bg};
            `}
          />
        </>
      )}
    </div>
  )
}

const S = css`
  .next {
    position: fixed;
    display: block;
    right: 0;
    top: calc(100% - 300px);
    height: 300px;
    width: 300px;
    transform: translate(150px, 150px) scale(1) rotate(45deg);
    z-index: 10;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: rotate(135deg) translate(63px, 63px);
      border: 1px solid #ddd;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(212, 212, 212, 1) 100%
      );
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
    }
  }
`
const pageList = [
  { href: '/', bg: '#fff' },
  { href: '/portfolio', bg: '#ff5f45' },
  { href: '/project', bg: '#0798ec' },
]
