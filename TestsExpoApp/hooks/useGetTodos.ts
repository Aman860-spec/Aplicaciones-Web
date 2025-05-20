import ExpoRepository from "@/domain/usecases/expo/ExpoRepository";
import { setTodos } from "@/redux/slices/expoSlices";
import { useDispatch } from "react-redux";

// export default async function useGetTodos() {
//     const dispatch = useDispatch();
//     try {
//         const expoRepository = new ExpoRepository();
//         const response = await expoRepository.getTodos();
//         console.log("response", response);
//         dispatch(setTodos(response));
//     } catch (error) {
//         console.error("Error fetching todos:", error);
//     }
// }

export default function useGetTodos() {
    const dispatch = useDispatch();
    
    const getTodos = async () => {
        try {
            const expoRepository = new ExpoRepository();
            const response = await expoRepository.getTodos();
            console.log("response", response);
            dispatch(setTodos(response));
            // dispatch(getTodosSuccess(response));
        } catch (error) {
            console.error("Error fetching todos:", error);
            // dispatch(getTodosFailure(error));
        }
    };

    return { getTodos };
} 