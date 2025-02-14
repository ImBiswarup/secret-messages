'use client';

import React, { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const AuthPage = () => {
    const { signUp, signIn, signInWithGoogle, logout, user } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    console.log(user?.displayName ? `${user?.displayName}` : `${user?.uid}`);

    const handleSignUp = async () => {
        try {
            await signUp(email, password);
            router.push("/dashboard");
        } catch (error) {
            console.error("Signup Error:", error);
        }
    };

    const handleSignIn = async () => {
        try {
            await signIn(email, password);
            router.push("/dashboard");
        } catch (error) {
            console.error("Login Error:", error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            router.push("/dashboard");
        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
            <motion.div
                className="w-full max-w-md p-8 rounded-xl bg-gray-800 bg-opacity-60 backdrop-blur-lg border border-gray-700 shadow-xl text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {user ? (
                    <motion.div
                        className="flex flex-col gap-y-3 justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold mb-3"> Welcome, {user?.displayName || "Anonymous User"} 🎉 </h2>
                        <motion.button
                            className="px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={logout}
                        >
                            🚪 Logout
                        </motion.button>
                        <motion.button
                            className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { router.push('/dashboard') }}
                        >
                            🚀 Dashboard
                        </motion.button>
                    </motion.div>
                ) : (
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-4">🔑 Sign In / Register</h2>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />

                        <motion.button
                            className="w-full px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSignUp}
                        >
                            ✨ Sign Up
                        </motion.button>

                        <motion.button
                            className="w-full px-6 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-500 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSignIn}
                        >
                            🔐 Login
                        </motion.button>

                        <motion.button
                            className="w-full px-6 py-2 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleGoogleSignIn}
                        >
                            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
                            <span>Sign in with Google</span>
                        </motion.button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default AuthPage;
