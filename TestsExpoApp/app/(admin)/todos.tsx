import { ITodo } from "@/domain/types/ITodo";
import useAddTodos from "@/hooks/useAddTodos";
import useGetTodos from "@/hooks/useGetTodos";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
export default function Todos() {

    const [title, setTitle] = useState("");

    const todos = useSelector((state: any) => state.todos.todos);

    const { addTodoHandler } = useAddTodos();
    const { getTodos } = useGetTodos();

    useEffect(() => {
        getTodos();
    }, []);

    const renderTodoItem = ({item}: {item: ITodo}) => (
        <View>
            <Text>{item.id}</Text>
            <Text>{item.title} </Text>
            <Text>{item.completed ? "Completed" : "Not Completed"} : WHY BRO</Text>
            <Text>
                Created: {new Date(item.createdAt).toLocaleDateString()}
            </Text>
        </View>
    );

    return (
        <SafeAreaView 
        style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}
        >
            <Formik
                initialValues={{ title: "" }}
                onSubmit={async (values, {resetForm}) => {
                    setTitle(values.title);
                    await addTodoHandler({ title: values.title } as ITodo);
                    resetForm();
                    // await getTodos();
                }}
            >
                {({ handleChange, handleBlur, submitForm, values }) => (

                    <View>
                        <TextInput
                            placeholder="Todo Title"
                            onChangeText={handleChange("title")}
                            onBlur={handleBlur("title")}
                            value={values.title}
                        />
                       <Button
                            title="Add Todo"
                            onPress={() => submitForm()}
                        />
                    </View>
                )}
            </Formik>

            <FlatList
                data={todos}
                renderItem={renderTodoItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20 }}
                ListEmptyComponent={
                    <View>
                        <Text>No todos found</Text>
                    </View>
                }
                />
        </SafeAreaView>
    )
}