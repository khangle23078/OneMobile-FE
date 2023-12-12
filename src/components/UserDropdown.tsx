import { useAppDispatch, useAppSelector } from '@/hooks/hook'
import { Dropdown, MenuProps } from 'antd'
import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import { logout } from '@/features/authSlice'

const UserDropdown: React.FC = () => {
  const { email } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const items: MenuProps['items'] = [
    {
      key: 'logout',
      label: <p onClick={() => dispatch(logout())}>Đăng xuất</p>
    }
  ]

  return (
    <Dropdown menu={{ items }} trigger={['click']} className='cursor-pointer'>
      <p>Xin chào {email} <DownOutlined /></p>
    </Dropdown>
  )
}

export default UserDropdown