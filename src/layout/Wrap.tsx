import { FC, useState } from 'react'
import { containerStyle, wrapStyle } from '../style/layout'
import NextPage from './NextPage'
import Side from './Side'

const Wrap: FC = ({ children }) => {
  return (
    <div css={wrapStyle}>
      <Side />
      <div css={containerStyle}>{children}</div>
    </div>
  )
}

export default Wrap
