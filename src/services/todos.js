import {Api} from "../api";

export class Todos {
  static async getTodos() {
    const response = await Api.get("todos");
    return response.json();
  }

  static async addTodo(todo) {
    const response = await Api.post("todos", todo);
    return response.json();
  }

  static async deleteTodo(id) {
    const response = await Api.delete(`todos/${id}`);
    return response.json();
  }

  static async deleteAllTodos() {
    const response = await Api.delete("todos");
    return response.json()
  }

   static async editTodo(todo) {
    const response = await Api.put("todos", todo);
    return response.json();
  }
}

export default new Todos();
