import { ITodo } from "@/domain/types/ITodo";
import ExpoRepository from "@/domain/usecases/expo/ExpoRepository";
import { addTodo } from "@/redux/slices/expoSlices";
import { useDispatch } from "react-redux";

export default function useAddTodos() {
    const dispatch = useDispatch();
    const addTodoHandler = async (todo: ITodo) => {
        try {
            const expoRepository = new ExpoRepository();
            const response = await expoRepository.addTodo(todo);
            console.log(response);
            dispatch(addTodo(response));
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };
    return { addTodoHandler };
}
