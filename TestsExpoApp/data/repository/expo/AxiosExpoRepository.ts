import { API_BASE_URL } from "@/data/configRepository";
import ExpoRepositoryInterface from "@/domain/interfaces/expo/ExpoRepositoryInterface";
import { ITodo } from "@/domain/types/ITodo";
import axios from "axios";

export default class AxiosExpoRepository implements ExpoRepositoryInterface {
    private apiUrl: string;

    constructor() {
        this.apiUrl = API_BASE_URL;
    }

    async getTodos(): Promise<ITodo[]> {
        try {
            const response = await axios.get<ITodo[]>(`${this.apiUrl}/todo`);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching todos: ${error}`);
        }
    }

    async addTodo(todo: ITodo): Promise<ITodo> {
        try {
            console.log("Adding todo:", todo);
            console.log("Typeof todo:", typeof todo);
            console.log("API URL:", this.apiUrl);
            console.log("Full URL:", `${this.apiUrl}/todo`);
            const response = await axios.post<ITodo>(`${this.apiUrl}/todo`, todo);
            return response.data;
        } catch (error) {
            throw new Error(`Error adding todo: ${error}`);
        }
    }
}