'use client';

import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // For navigation

interface Message {
    id: string;
    name: string;
    message: string;
    createdAt?: any;
}

const Page = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [userId, setUserId] = useState<string | null>(null);
    const { user } = useAuth();
    const router = useRouter(); // Initialize router for navigation

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUserId(user.uid);
                const q = query(collection(db, "AnonymousMessages", user.uid, "userMessages"), orderBy("createdAt", "desc"));
                const querySnapshot = await getDocs(q);
                const messageList: Message[] = querySnapshot.docs.map(doc => ({
                    ...doc.data() as Message,
                    id: doc.id,
                }));
                setMessages(messageList);
            }
        });
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
            {user ? (
                <motion.div 
                    className="w-full max-w-2xl p-6 rounded-2xl bg-opacity-30 backdrop-blur-lg border border-gray-700 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-6">📨 Your Received Messages</h2>
                    {messages.length > 0 ? (
                        <motion.div className="space-y-4">
                            {messages.map((msg, index) => (
                                <motion.div 
                                    key={msg.id}
                                    className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <p className="text-gray-200 text-lg">💬 {msg.message}</p>
                                    <p className="text-sm text-gray-400 mt-1">— {msg.name || "Anonymous"}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.p 
                            className="text-gray-400 text-center text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            No messages yet. 🕊️
                        </motion.p>
                    )}
                </motion.div>
            ) : (
                <motion.div 
                    className="flex flex-col items-center justify-center text-center space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold">🚀 Create an account</h2>
                    <p className="text-lg text-gray-400">Sign up to receive anonymous messages from others!</p>
                    
                    <motion.button
                        className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push("/auth")} 
                    >
                        🔑 Go to Auth Page
                    </motion.button>
                </motion.div>
            )}
        </div>
    );
};

export default Page;
