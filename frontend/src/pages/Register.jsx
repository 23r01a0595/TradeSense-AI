import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Register() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async () => {
        try {
            await api.post("/auth/register", userData);

            alert("Registration Successful!");

            navigate("/");
        } catch (error) {
            alert("Registration Failed");
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <div className="w-96 bg-slate-800 p-8 rounded-xl shadow-xl">
                <h1 className="text-3xl font-bold text-blue-400 text-center">
                    TradeSense AI
                </h1>

                <p className="text-gray-400 text-center mt-2">
                    Create Your Account
                </p>

                <div className="mt-6 space-y-4">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={userData.fullName}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-slate-700 text-white"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={userData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-slate-700 text-white"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-slate-700 text-white"
                    />

                    <button
                        onClick={handleRegister}
                        className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded"
                    >
                        Register
                    </button>

                    <p className="text-center text-gray-400">
                        Already have an account?{" "}
                        <Link to="/" className="text-blue-400 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;