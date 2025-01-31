# 🚀 Express TypeScript Starter

A **production-ready** boilerplate for building **AI-assisted, scalable, maintainable, and well-structured Express.js APIs** with **TypeScript**.  
This template not only follows **industry best practices** including **Dependency Injection, Structured Error Handling, and Middleware-Driven Architecture;** but also provides a **tailored LLM Context**, so you're coding alongside an **AI-powered development companion** that helps you scale your API the right way.

---
## **✨ Key Features**
✅ **TypeScript-Powered** → Enjoy type safety, autocompletion, and improved maintainability.  
✅ **Scalable Architecture** → Follows an enterprise-grade structure (Controllers, Services, Middleware).  
✅ **Dependency Injection (InversifyJS)** → Enables clean, modular, and testable code.  
✅ **Preconfigured Testing Setup** → Supports **Jest** (unit tests) and **SuperTest** (integration tests).  
✅ **Global Error Handling** → Ensures consistent and user-friendly API error responses, making debugging easier and improving reliability.  
✅ **Environment Configuration** → Loads settings securely via `.env` files.  
✅ **Middleware-Driven** → Includes Authentication, Logging, and Request Validation out of the box.  
✅ **Ready for Deployment** → Configured with **Docker, PM2, and CI/CD-friendly practices**.  
✅ **LLM Collaboration-Ready** → Includes **a tailored LLM Context** to help AI assistants give **accurate, project-aware suggestions**.

--- 
## **Tech Stack**    
🔹 **Language**: TypeScript – Strongly typed, modern JavaScript  
🔹 **Framework**: Express.js – Lightweight and flexible Node.js framework  
🔹 **Dependency Injection & Routing**: Inversify + Inversify-Express-Utils – Enables modular, testable code with decorator-based DI and routing  
🔹 **Configuration Management**: dotenv – Manages environment variables  
🔹 **Error Handling**: Custom middleware for structured error responses  
🔹 **Logging**: Winston + Morgan – Structured logging with JSON output and HTTP request logging  
🔹 **Testing**: Jest & Supertest – Unit and integration testing for APIs  
🔹 **LLM Integration**: Tailored LLM Context File for AI-assisted development  
  
---

## 📂 Project Structure

```
src/
│── config/           # Dependency Injection, Env Configs
│── controllers/      # Handles HTTP requests and delegates logic to services
│── errors/           # Standardized error handling
│── interfaces/       # TypeScript interfaces for strong typing
│── middlewares/      # Common middleware (Auth, Logging, Error Handling)  
│── models/           # Defines data models and database schemas
│── services/         # Contains business logic and interacts with models
│── tests/            # Unit and integration tests
│── utils/            # Reusable utility functions (Hashing, JWTs, etc.)
│── app.ts            # Express App Configuration
│── server.ts         # Server Entry Point
```

### **How Each Component Fits In**
- **Config (`src/config/`)** → Handles Dependency Injection bindings, environment configurations, and other global settings.
- **Controllers (`src/controllers/`)** → Responsible for handling HTTP requests and sending responses. They delegate business logic to the corresponding service.
- **Services (`src/services/`)** → Contains core application logic and interacts with database models. Helps keep controllers lightweight and focused.
- **Models (`src/models/`)** → Define application data structures and database schemas.
- **Interfaces (`src/interfaces/`)** → Define TypeScript types and contracts to enforce structure across the codebase.
- **Utilities (`src/utils/`)** → Houses reusable helper functions such as encryption, validation, or formatting to prevent code duplication.
- **Middleware (`src/middlewares/`)** → Functions that process requests before they reach controllers (e.g., authentication, logging, error handling).
- **Error Handling (`src/errors/`)** → Custom error classes and a global error handler to standardize error responses.
- **Tests (`src/tests/`)** → Contains unit and integration tests to ensure reliability.
- **App Entry (`app.ts` & `server.ts`)** → app.ts sets up the Express app, while server.ts starts the application.

---
## 🚀 Getting Started

### 1️⃣ Clone the repository
```sh
git clone https://github.com/TimothyCMeehan/express-ts-starter.git
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


