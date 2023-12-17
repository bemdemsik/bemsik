import { FC, useEffect } from 'react';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoList } from '../TodoList/TodoList';
import { getTodos } from '../../../redux/Actions';
import { useDispatch } from 'react-redux';
import './styles.css'
export const ShowTodos: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodos())
  }, )
  return(
    <div className="ttt">
      <TodoForm />
      <TodoList />
    </div>
  )
}