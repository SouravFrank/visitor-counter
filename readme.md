# 🚦 Visitor Counter

A blazing-fast, privacy-friendly **unique visitor counter** for your apps, powered by Firebase Cloud Functions & Realtime Database.

---

## ✨ Features

- 🔥 **Serverless**: Runs on Firebase Cloud Functions, no server management.
- 👤 **Unique Counting**: Tracks unique visitors per app using IP addresses.
- ⚡ **Fast & Lightweight**: Minimal overhead, instant updates.
- 🔒 **Privacy-Respecting**: No cookies, no tracking beyond unique count.
- 📊 **Multi-App Support**: Count visitors for multiple apps/sites.

---

## 🚀 Getting Started

### 1. Clone & Install

```sh
git clone https://github.com/yourusername/visitor-counter.git
cd visitor-counter/functions
npm install
```

### 2. Configure Firebase

- Set up a Firebase project.
- Update `.firebaserc` with your project ID.
- Make sure you have the Firebase CLI installed and authenticated.

### 3. Develop Locally

```sh
npm run serve
```

- Functions run at: `http://localhost:5001/<your-project-id>/us-central1/trackVisitor`

### 4. Deploy

```sh
npm run deploy
```

---

## 🛠️ Usage

Send a GET or POST request to the endpoint:

```
POST /trackVisitor?appId=YOUR_APP_ID
```

**Parameters:**

- `appId` (string, required): Identifier for your app/site.

**Response:**

```json
{
  "appId": "YOUR_APP_ID",
  "count": 42,
  "status": "success"
}
```

---

## 🧩 Example

```sh
curl "http://localhost:5001/visitorcounter-7f1ac/us-central1/trackVisitor?appId=mywebsite"
```

---

## 🗂️ Project Structure

```
visitor-counter/
├── functions/
│   ├── src/
│   │   ├── index.ts      # Main Cloud Function
│   │   └── types.ts      # TypeScript types
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
├── firebase.json
└── .firebaserc
```

---

## 📄 License

MIT

---

> Made with ❤️ using Firebase & TypeScript.
