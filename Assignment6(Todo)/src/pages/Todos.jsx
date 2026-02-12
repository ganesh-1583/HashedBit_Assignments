import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
            const fetchTodos = async () => {
                const token = localStorage.getItem("token");
                try {
                const response = await fetch("http://localhost:3000/api/todos/all", {
                    method: "GET",
                    headers: {
                        'Content-Type': "application/json",
                        "token": token,
                    },
                    });
        
                const data = await response.json();
                if (response.ok) {
                    setTodos(data.todos);
                } else {
                    console.error(data.error || "Failed to fetch todos");
                }
        
                } catch (err) {
                    console.error("Error fetching todos:", err); // typo fix: use `err`
                }
            };
            fetchTodos();
        }, []);
      

    const handleAddTodo = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        try {
            const response = await fetch("http://localhost:3000/api/todos/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "token": token,
                },
                body: JSON.stringify({title: newTodo}),
            });

            const data = await response.json();

            if(response.ok && data.success) {
                setTodos(prev => [...prev, data.todo]);
                setNewTodo("");
            } else {
                alert(data.error || "Failed to add todo");
            }
        } catch(e) {
            console.log("Error while adding todo " + e);
            alert("Error while adding todo : " + e);
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        navigate("../login");
    }

    const changeStatus = async (todoId, currentStatus) => {
        const token = localStorage.getItem("token");

        try {
            const response = await fetch(`http://localhost:3000/api/todos/updatestatus/${todoId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "token": token,
                },
                body: JSON.stringify({status: !currentStatus}),
            });

            const data = await response.json();

            if(response.ok && data.todo) {
                setTodos((prev) => 
                    prev.map((todo) => todo.todoId === todoId ? {...todo, completed: data.todo.completed} : todo)
                )
            } else {
                alert(data.error || "Failed to change status");
            }

        } catch(e) {
            console.error("Error while updating status : " + e);
            alert("Error while updating status : " + e);
        }
    }

    const deleteTodo = async (todoId) => {
        const token = localStorage.getItem("token");
        try {
            const response = await fetch(`http://localhost:3000/api/todos/${todoId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type" : "application/json",
                    "token": token,
                }
            });

            const data = await response.json();
            
            if(response.ok && data.success) {
                setTodos((prev) => prev.filter(todo => todo.todoId !== todoId));
            } else {
                console.error("Error while deleting todo (inside else): " + e);
            }

        } catch(err) {
            console.error("Error while deleting todo : " + err);
            alert("Error while deleting todo : " + err);
        }     
    }

    return (
        <div>
            <h2>Your Todos</h2> 
            <div>
                <button onClick={logout}>Logout</button>
            </div>
            <form onSubmit={handleAddTodo}>
                <input type="text" placeholder="Enter a todo" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
                <button type="submit">Add Todo</button>
            </form>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.todoId}>
                        <span style={{textDecoration: todo.completed ? "Line-through" : "none"}}>
                            {todo.title} 
                        </span>
                        <button onClick={()=>changeStatus(todo.todoId, todo.completed)} style={{padding: "5px 10px"}} >
                            {todo.completed ? "(Done)" : "!Done"}
                        </button> 
                        <button onClick={()=>deleteTodo(todo.todoId)} style={{padding: "5px 10px"}} >
                            Delete
                        </button>   
                    </li>
                ))}
            </ul>
        </div>
    )
}