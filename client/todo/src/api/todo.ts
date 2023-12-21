import { ITodo, ITodoState } from '../types/types';
import axios from './index';

export class TodoApi {
  static async getTodos(): Promise<ITodoState[]> {
    const res = await axios.get('/todos');
    return res.data;
  }
  static async createTodo(todo: Partial<ITodo>): Promise<ITodoState[]> {
    const res = await axios.post('/todos', todo);
    return res.data;
  }
  static async deleteTodo(id: string): Promise<void> {
    await axios.delete(`/todos/${id}`);
  }
  static async completeTodo(todo: Partial<ITodo>): Promise<void> {
    await axios.patch(`/todos/${todo.id}`, todo);
  }
  static async editTodo(todo: Partial<ITodo>): Promise<ITodo> {
    const res = await axios.patch(`/todos/${todo.id}`, todo);
    return res.data[1][0];
  }
}