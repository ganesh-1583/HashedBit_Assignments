import { React } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({username, password}),
            })
            const data = await response.json();

            if(response.ok && data.token) {
                localStorage.setItem("token",data.token);
                navigate('/todos');
            } else {
                alert(data.error || "Login Failed");
            }

        } catch(e) {
            console.error("Login error " + e);
            alert("Something went wrong while logging in :  " + e);
        }
    }

    return (
        <div className="h-screen w-screen">
            <div className="w-screen p-3 flex justify-center bg-[#3f51b5] shadow-2xl absolute text-[#ffffff]">
                <h2>Login</h2> 
            </div>
            <div className="h-[100%] w-screen flex justify-center items-center bg-[#f0f4f8]">
                <div className="rounded-4xl w-[40%] h-[50%] bg-[#ffffff] 0px 4px 20px rgba(0,0,0,0.1) p-6">
                    <form onSubmit={handleLogin}>
                        <input className="border-1 w-[100%] p-2 rounded-xl mt-4 bg-[#f5f7fa] text-[#333]" type="text" placeholder="username" value={username} onChange={(e)=> setUsername(e.target.value)} />
                        <br />
                        <input className="border-1 w-[100%] p-2 rounded-xl mt-2 bg-[#f5f7fa] text-[#333]" type="text" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                        <br />
                        <div className="flex justify-center p-5 mt-16 bg-[#3f51b5] rounded-4xl w-[50%] m-[25%] text-[#fff] hover:scale-[105%] transition duration-400 hover:shadow-2xl">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

