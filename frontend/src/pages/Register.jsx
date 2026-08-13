import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-hot-toast";

function Register() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

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
        setLoading(true);

        try {
            await api.post(
                "/auth/register",
                userData
            );

            toast.success(
                "Registration Successful!"
            );

            navigate("/");
        } catch (error) {
            toast.error(
                "Registration Failed"
            );

            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">

            <div className="w-full max-w-md bg-slate-800 p-8 rounded-xl shadow-xl">

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
                        disabled={loading}
                        className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white p-3 rounded flex items-center justify-center gap-3 font-semibold"
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Creating Account...
                            </>
                        ) : (
                            "Register"
                        )}
                    </button>

                    <p className="text-center text-gray-400">
                        Already have an account?{" "}
                        <Link
                            to="/"
                            className="text-blue-400 hover:underline"
                        >
                            Login
                        </Link>
                    </p>

                </div>

            </div>
        </div>
    );
}

export default Register;