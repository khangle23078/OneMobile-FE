import { Typography } from 'antd'
import React from 'react'

const { Title } = Typography

const Footer: React.FC = () => {
  return (
    <footer>
      <Title
        level={5}
        className='py-5 text-center'
      > @Copy right - OneMobie
      </Title >
    </footer >
  )
}

export default Footer