import { Input } from 'antd'
import { SearchProps } from 'antd/es/input'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const { Search } = Input

const SearchBar: React.FC = () => {
  const navigate = useNavigate()
  const navigateToSearchPage: SearchProps['onSearch'] = (value: string) => {
    navigate(`/search?q=${value}`)
  }

  return (
    <div>
      <Search placeholder='nhập tên sản phẩm' enterButton className='w-[600px]' onSearch={navigateToSearchPage} />
    </div>
  )
}

export default SearchBar