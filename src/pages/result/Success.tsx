import { Button, Result } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'


const Success: React.FC = () => {
  return (
    <Result
      status="success"
      title="Chúc mừng bạn đã đạt hàng thành công!"
      extra={[
        <Button type="primary" key="console">
          Xem đơn hàng
        </Button>,
        <Link to={'/'}>
          <Button key="buy">Tiếp tục mua hàng</Button>
        </Link>
      ]}
    />
  )
}

export default Success