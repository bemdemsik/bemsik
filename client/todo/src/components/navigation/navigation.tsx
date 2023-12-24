import { NavLink } from 'react-router-dom';
import { AuthApi } from '../../api/auth';
import './styles.css'
import { setCookie } from 'nookies';
export const Navigation = () => {
  const logout = async () => {
    console.log("oisdfhiusgfnosdfgihnisgubngsd")
    await AuthApi.logout();
    setCookie(null, '_token', '')
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
        <div onClick={logout} className={'nav-link'}>Выход</div>
      </div>
    </div>
  )
}