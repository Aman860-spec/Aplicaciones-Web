import { ITodo } from "@/domain/types/ITodo";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialState = {
    todos: ITodo[];
}
const initialState: initialState = {
    todos: [],
};

export const expoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        setTodos: (state, action: PayloadAction<ITodo[]>) => {
            state.todos = action.payload;
        },
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload);
        }
    }
});
export const { setTodos, addTodo } = expoSlice.actions;
export default expoSlice.reducer;