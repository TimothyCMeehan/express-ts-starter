# 🚀 Express TypeScript Starter

A boilerplate for building scalable **Express.js APIs with TypeScript**. 
Includes best practices like **Dependency Injection (Inversify), Middleware, Structured Error Handling, and Testing**.

## 📌 Features
✅ **Express.js + TypeScript**  
✅ **Dependency Injection with Inversify**  
✅ **Global Error Handling (like Spring Boot `@ControllerAdvice`)**  
✅ **Middleware for Logging, Authentication, and Error Handling**  
✅ **Environment Configuration (`.env`)**  
✅ **Preconfigured Testing (Jest + Supertest)**  

> _This structure is inspired by proven best practices from enterprise backend frameworks, emphasizing separation of concerns (Controllers, Services, Utilities), centralized dependency management with Dependency Injection, and standardized error handling to ensure maintainability and scalability._

## 📂 Project Structure

```
src/
│── config/           # Dependency Injection, Env Configs
│── controllers/      # Handles HTTP requests and delegates logic to services
│── services/         # Contains business logic and interacts with models
│── errors/           # Standardized error handling
│── middlewares/      # Common middleware (Auth, Logging, Error Handling)
│── routes/           # API routing setup
│── utils/            # Reusable utility functions (Hashing, JWTs, etc.)
│── app.ts            # Express App Configuration
│── server.ts         # Server Entry Point
│── index.ts          # Application Bootstrap (Loads DI Container)
```

### **How Each Component Fits In**
- **Controllers (`src/controllers/`)** → Responsible for handling HTTP requests and sending responses. They delegate business logic to the corresponding service.
- **Services (`src/services/`)** → Contains core application logic and interacts with database models. Helps keep controllers lightweight and focused.
- **Utilities (`src/utils/`)** → Houses reusable helper functions such as encryption, validation, or formatting to prevent code duplication.
- **Middleware (`src/middlewares/`)** → Functions that process requests before they reach controllers (e.g., authentication, logging, error handling).
- **Error Handling (`src/errors/`)** → Custom error classes and a global error handler to standardize error responses.
- **Routes (`src/routes/`)** → Defines Express routing for different parts of the application.

---

## ✅ Automated Testing

This project includes a **fully integrated testing setup** to ensure code reliability.

### **📌 Testing Frameworks**
- **Jest** → For **unit tests** (isolated function and class testing).
- **SuperTest** → For **integration tests** (testing API endpoints).

### **📂 Test Structure**
```
tests/
│── unit/           # Unit tests (e.g., services, utilities)
│── integration/    # Integration tests (e.g., API endpoints)
│── middlewares/    # Tests for middlewares
```

### **🚀 Running Tests**
Run all tests:
```sh
npm test
```

Run **only unit tests**:
```sh
npm run test:unit
```

Run **only integration tests**:
```sh
npm run test:integration
```

### **🛠️ Writing New Tests**
Whenever adding **new features**, the following tests should be written:
1️⃣ **Unit Tests** → For business logic in `services/` and utility functions in `utils/`.  
2️⃣ **Integration Tests** → To ensure API endpoints function correctly (`SuperTest`).  

Example Jest test for a **unit test**:
```typescript
import { someFunction } from "../../src/utils/someUtil";

describe("someFunction", () => {
    it("should return the correct result", () => {
        const result = someFunction("test");
        expect(result).toBe("expectedResult");
    });
});
```

Example **SuperTest integration test**:
```typescript
import request from "supertest";
import app from "../../src/app";

describe("GET /api/users/profile", () => {
    it("should return user profile if authenticated", async () => {
        const res = await request(app)
            .get("/api/users/profile")
            .set("Cookie", "token=valid_jwt_token");

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("email");
    });
});
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/express-ts-starter.git
cd express-ts-starter
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up environment variables
```sh
cp .env.example .env
```
Update `.env` with your own values.

### 4️⃣ Run the development server
```sh
npm run dev
```

### 5️⃣ Run tests
```sh
npm test
```

---

## **📝 Using This Template with AI Assistants**

> **💡 Need AI-powered development help?**  
> This README serves as a reference for developers and AI models (like ChatGPT) when working with this project. By providing this README to an AI assistant, you can:  
> - 🚀 **Quickly get guidance on extending this project** (e.g., adding a new feature, modifying the structure).  
> - 🏗 **Ensure responses align with the existing architecture** (e.g., using Dependency Injection with Inversify, following the Controller-Service pattern).  
> - 🔍 **Debug issues faster** by giving the AI a clear understanding of the project's design principles.  
>   
> **For best results:** When using an AI model to help modify or extend this project, paste this README into the prompt first. This ensures the AI understands the project's structure before providing recommendations.

---

## 📌 License
MIT License. Free to use and modify.


