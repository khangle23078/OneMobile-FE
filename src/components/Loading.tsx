import { Spin } from 'antd'
import React from 'react'


const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spin />
    </div>
  )
}

export default Loading