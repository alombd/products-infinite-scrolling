import AddTodo from "@/components/AddTodo";
import Todos from "@/containers/Todos";
import TodoProvider from "@/context/todoContext";
import Image from "next/image";

export default function Home() {
    return (
        <TodoProvider>
            <main className="App">
                <h1>My Todos</h1>
                <AddTodo />
                <Todos />
            </main>
        </TodoProvider>
    );
}
