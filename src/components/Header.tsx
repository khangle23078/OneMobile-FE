import { Link, NavLink } from 'react-router-dom';
import Logo from './../assets/OneMobile.png'
import { ShoppingCartOutlined } from '@ant-design/icons'

const Header: React.FC = () => {
  return <header className='h-[80px] shadow-md'>
    <div className='h-screen mx-auto max-w-7xl'>
      <div className='flex items-center justify-between'>
        <Link to={'/'}>
          <img src={Logo} width={100} height={100} />
        </Link>
        <nav>
          <ul className='flex items-center gap-3'>
            <li className='list-none'>
              <NavLink to="" className='text-black no-underline'>Trang chủ</NavLink>
            </li>
            <li className='list-none'>
              <NavLink to="" className='text-black no-underline'>Sản phẩm</NavLink>
            </li>
          </ul>
        </nav>
        <ShoppingCartOutlined className='text-3xl' />
      </div>
    </div>
  </header>;
};

export default Header;
