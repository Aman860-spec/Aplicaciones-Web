import AxiosExpoRepository from "@/data/repository/expo/AxiosExpoRepository";
import ExpoRepositoryInterface from "@/domain/interfaces/expo/ExpoRepositoryInterface";
import { ITodo } from "@/domain/types/ITodo";

export default class ExpoRepository implements ExpoRepositoryInterface {
    async addTodo(todo: ITodo): Promise<ITodo> {
        try {
            const axiosExpoRepository = new AxiosExpoRepository();
            const response = await axiosExpoRepository.addTodo(todo);
            return response;
        } catch (error) {
            throw new Error(`Error adding todo: ${error}`);
        }
    }
    async getTodos(): Promise<ITodo[]> {
        try {
            const axiosExpoRepository = new AxiosExpoRepository();
            const response = await axiosExpoRepository.getTodos();
            return response;

        } catch (error) {
            throw new Error(`Error fetching todos: ${error}`);
        }
    }
}