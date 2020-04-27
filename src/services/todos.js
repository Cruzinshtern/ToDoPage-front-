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
}

export default new Todos();
