import { NavLink } from 'react-router-dom';
import './styles.css'
export const Navigation = () => {
  return (
    <div className='nav'>
      <div className={'item'}>
        <NavLink to='/users' className={'nav-link'}>Пользователи</NavLink>
      </div>
      <div className={'item'}>
        <NavLink to='/todos' className={'nav-link'}>Список дел</NavLink>
      </div>
    </div>
  )
}