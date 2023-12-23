import { ITodo, ITodoState } from '../types/types';
import $api from './index';

export class TodoApi {
  static async getTodos(): Promise<ITodoState[]> {
    const res = await $api.get('/todos');
    return res.data;
  }
  static async createTodo(todo: Partial<ITodo>): Promise<ITodoState[]> {
    const res = await $api.post('/todos', todo);
    return res.data;
  }
  static async deleteTodo(id: string): Promise<void> {
    await $api.delete(`/todos/${id}`);
  }
  static async completeTodo(todo: Partial<ITodo>): Promise<void> {
    await $api.patch(`/todos/${todo.id}`, todo);
  }
  static async editTodo(todo: Partial<ITodo>): Promise<ITodo> {
    const res = await $api.patch(`/todos/${todo.id}`, todo);
    return res.data[1][0];
  }
}