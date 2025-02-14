'use client';

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

const page = () => {
    const [userId, setUserId] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid);
            } else {
                setUserId(null);
            }
        });
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-md">
                <h2 className="text-xl font-semibold mb-4">📢 Share Your Message Link</h2>

                {userId ? (
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm mb-3">Share this link with others to receive messages:</p>
                        <div className="bg-gray-700 p-2 rounded-lg text-sm">
                            <code>{`http://localhost:3000/send-messages/${userId}`}</code>
                        </div>
                        <button
                            className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
                            onClick={() => navigator.clipboard.writeText(`http://localhost:3000/send-messages/${userId}`)}
                        >
                            📋 Copy Link
                        </button>
                        <button
                            className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
                            onClick={() => router.push('receive-message')}
                        >
                            📋 Go to responses
                        </button>
                    </div>
                ) : (
                    <p className="text-red-400">Please log in to generate your link.</p>
                )}
            </div>
        </div>
    );
};

export default page;
