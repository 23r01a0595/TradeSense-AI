import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-hot-toast";

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
        localStorage.setItem("userId", response.data.userId);

        // Supports both "name" and "fullName"
        localStorage.setItem(
            "fullName",
            response.data.fullName || response.data.name
        );

        localStorage.setItem("email", response.data.email);

        toast.success(
            `Welcome back, ${response.data.fullName || response.data.name}!`
        );

        navigate("/dashboard");

    } catch (error) {

        toast.error("Invalid Email or Password");
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

                    <p className="text-center text-gray-400 mt-6">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-blue-400 hover:underline font-medium"
                        >
                            Register
                        </Link>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Login;