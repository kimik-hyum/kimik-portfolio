import Link from 'next/link'
import { useRef, useState } from 'react'
import {
  nextBasic,
  nextStyle,
  offRotateStyle,
  onRotateStyle,
  prevStyle,
} from '@style/layout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { pageAnime } from 'src/store/recoil/page/atom'
import { css } from '@emotion/react'
import { findArrayInObjIndex, getArrayValue } from 'src/lib/helper'

export default function NextPage() {
  const router = useRouter()
  const [href, setHref] = useState('')
  const [completedAnime, setCompletedAnime] = useState(false)
  const [anime, setAnime] = useRecoilState(pageAnime)
  const nextEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHref(router.asPath)
    setCompletedAnime(false)
    if (!!href && href !== router.asPath) {
      setAnime(
        findArrayInObjIndex({ arr: pageList, key: 'href', value: router.asPath }) >
          findArrayInObjIndex({ arr: pageList, key: 'href', value: href })
          ? 'next'
          : 'prev'
      )
    } else if (!anime) {
      setAnime('prev')
    }
  }, [router.asPath])
  useEffect(() => {
    if (nextEl.current) {
      nextEl.current.addEventListener('animationend', (e) => {
        setCompletedAnime(true)
        setAnime('prev')
      })
    }
  }, [])
  const getAnime = () => {
    switch (anime) {
      case 'prev':
        return [offRotateStyle]
      case 'next':
        return [onRotateStyle]
    }
  }
  const setColor = () => {
    return css`
      &:before {
        background: ${getArrayValue({
          arr: pageList,
          index:
            findArrayInObjIndex({ arr: pageList, key: 'href', value: router.asPath }) +
            (anime === 'prev' ? 1 : 0),
        }).bg};
      }
    `
  }
  console.log(
    getArrayValue({
      arr: pageList,
      index:
        findArrayInObjIndex({
          arr: pageList,
          key: 'href',
          value: router.asPath,
        }) + (anime === 'next' ? -1 : 0),
    })
  )

  return (
    <div>
      <div
        css={
          completedAnime &&
          css`
            z-index: -1;
            opacity: 0;
          `
        }
      >
        <div
          className="transition"
          css={[nextBasic, setColor(), !completedAnime && getAnime()]}
          ref={nextEl}
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
      </div>
      <Link
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
        <a>
          <div
            css={[
              nextBasic,
              nextStyle,
              setColor(),
              css`
                display: ${completedAnime ? 'flex' : 'none'};
              `,
            ]}
          />
        </a>
      </Link>
    </div>
  )
}

const pageList = [
  { href: '/', bg: '#fff' },
  { href: '/portfolio', bg: '#ff5f45' },
  { href: '/project', bg: '#0798ec' },
]
