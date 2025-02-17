'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { db } from '../../../firebase/firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { motion } from "framer-motion";

const page = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    const { userId } = useParams();

    // console.log(userId);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return alert("Message cannot be empty!");

        try {
            console.log(name, message);
            const addedMsg = await addDoc(collection(db, "AnonymousMessages", userId as string, "userMessages"), {
                name: name || "Anonymous",
                message,
                createdAt: Timestamp.now(),
            });
            console.log(addedMsg);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                router.push("/route-to-auth");
            }, 3000);

            setName("");
            setMessage("");
        } catch (error) {
            console.error("Error submitting message:", error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
            <motion.div
                className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-md w-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-xl font-semibold text-center mb-4">💬 Send an Anonymous Message</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Enter your name (optional)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    <textarea
                        placeholder="Write your anonymous message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none h-24"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg font-semibold text-white transition-all"
                    >
                        Submit Message
                    </button>
                </form>
                {success && (
                    <motion.p
                        className="text-green-400 text-sm text-center mt-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        ✅ Message sent successfully!
                    </motion.p>
                )}
            </motion.div>
        </div>
    );
};

export default page;
