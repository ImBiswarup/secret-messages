🚀 Features

✅ Anonymous Messaging – Send and receive secret messages without revealing the sender.✅ User Authentication – Sign up, log in, and manage your account securely.✅ Google Sign-In – One-click login with Google authentication.✅ Real-time Database – Messages are stored in Firebase Firestore and updated in real time.✅ Secure & Private – Your messages are stored securely, and no personal data is shared.✅ Responsive UI – Clean, mobile-friendly UI built with Tailwind CSS.

🎥 Live Demo

🌍 Try the App (Replace with your deployed app URL)

🛠 Tech Stack

Next.js – React framework for server-side rendering and optimized performance.

Firebase – Authentication, Firestore Database, and Hosting.

Tailwind CSS – Modern, utility-first styling framework.

Framer Motion – Smooth animations for an engaging UI.

📦 Installation

1️⃣ Clone the repository

git clone https://github.com/ImBiswarup/secret-messages
cd secret-message-app

2️⃣ Install dependencies

npm install
# or
yarn install

3️⃣ Set up Firebase

Create a Firebase Project in Firebase Console.

Enable Authentication (Email/Password & Google Sign-In).

Enable Firestore Database in test mode.

4️⃣ Configure ****.env.localCreate a .env.local file in the root folder and add:

NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

5️⃣ Run the development server

npm run dev
# or
yarn dev

Open http://localhost:3000 in your browser.

📜 Usage

1️⃣ Sign Up / Login

Register using email & password or Google Sign-In.

Get a unique Secret Message link to share with others.

2️⃣ Receive Secret Messages

Friends can send you anonymous messages using your link.

Messages appear in your dashboard in real time.

3️⃣ Logout & Security

Securely log out anytime.

Your messages remain private in Firestore.

🚀 Deployment

Deploy the app easily on Vercel:

vercel

Or, connect your GitHub repo and deploy automatically.

🛡 Security & Privacy

🔐 User authentication is handled using Firebase Auth.📁 Messages are stored securely in Firestore.🚫 No personal data is shared with other users.

🤝 Contributing

Fork the repository 🍴

Create a new branch (git checkout -b feature-name)

Make changes & commit (git commit -m "Add feature")

Push to your branch (git push origin feature-name)

Submit a Pull Request ✅

📧 Contact & Support

If you have any questions, feel free to reach out:

📩 Email: your-email@example.com🐦 Twitter: @yourhandle💼 LinkedIn: Your Profile

🎉 Credits & Thanks

🚀 Built with Next.js, Firebase, and Tailwind CSS by Your Name.🌟 Give this repo a ⭐ if you like it!