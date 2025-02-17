"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const NotSignedInPage = () => {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-black text-white">
            <motion.div
                className="w-full max-w-md p-8 rounded-xl bg-gray-900 bg-opacity-75 backdrop-blur-lg border border-gray-700 shadow-xl text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-4">🔒 Access Restricted</h2>
                <p className="text-gray-400 mb-6">You need an account to receive and read secret messages.</p>
                
                <motion.button
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push("/auth")}
                >
                    🚀 Create an Account
                </motion.button>
            </motion.div>
        </div>
    );
};

export default NotSignedInPage;
