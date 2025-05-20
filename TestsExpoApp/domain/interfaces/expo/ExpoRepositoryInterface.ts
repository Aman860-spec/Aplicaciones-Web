import { ITodo } from "@/domain/types/ITodo";

export default interface ExpoRepositoryInterface {
    getTodos(): Promise<ITodo[]>;
    addTodo(todo: ITodo): Promise<ITodo>;
}