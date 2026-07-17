import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async () => {

        try {

            const response = await api.post("/auth/login", loginData);

            localStorage.setItem("token", response.data.token);

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            alert("Invalid Email or Password");

            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">

            <div className="bg-slate-800 w-96 rounded-2xl shadow-xl p-8">

                <h1 className="text-4xl font-bold text-blue-400 text-center">
                    TradeSense AI
                </h1>

                <p className="text-gray-400 text-center mt-2">
                    Smart Trading Platform
                </p>

                <div className="mt-8">

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={loginData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-slate-700 text-white mb-4 outline-none"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-slate-700 text-white mb-6 outline-none"
                    />

                    <button
                        onClick={handleLogin}
                        className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg text-white font-semibold"
                    >
                        Login
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Login;