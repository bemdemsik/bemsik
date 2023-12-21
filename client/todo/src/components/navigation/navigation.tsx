import { NavLink } from 'react-router-dom';
import './styles.css'
import { setCookie } from 'nookies';
export const Navigation = () => {
  const qwe = () => {
    setCookie(null, "_token", '', {
      path: '/'
    });
    window.location.href = '../'
  }
  return (
    <div className='nav'>
      <div className={'item'}>
        <NavLink to='/users' className={'nav-link'}>Пользователи</NavLink>
      </div>
      <div className={'item'}>
        <NavLink to='/todos' className={'nav-link'}>Список дел</NavLink>
      </div>
      <div className={'item'}>
        <div onClick={qwe} className={'nav-link'}>Выход</div>
      </div>
    </div>
  )
}