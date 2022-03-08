import { atom } from 'recoil'

export type AnimeType = 'prev' | 'next' | undefined

export const pageAnime = atom<AnimeType>({
  key: 'page/motion',
  default: undefined,
})
