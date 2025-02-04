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
express-ts-starter/
│── logs/                 # Logs directory (error.log, combined.log)
│── src/                  # Source code
│   │── config/           # Dependency Injection, Env Configs
│   │── controllers/      # Handles HTTP requests and delegates logic to services
│   │── errors/           # Standardized error handling
│   │── interfaces/       # TypeScript interfaces for strong typing
│   │── middlewares/      # Common middleware (Auth, Logging, Error Handling)  
│   │── models/           # Defines data models and database schemas
│   │── services/         # Contains business logic and interacts with models
│   │── tests/            # Unit and integration tests
│   │── utils/            # Reusable utility functions (Hashing, JWTs, etc.)
│   │── app.ts            # Express App Configuration
│   │── server.ts         # Server Entry Point
│── .env.example          # Environment variables template
│── .gitignore            # files and file types to be ignored by git
│── package.json          # Dependencies & scripts
│── README.md             # Documentation
│── tsconfig.json         # TypeScript configuration
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
## **📜 Logging**

This project uses **Winston** for structured logging and **Morgan** for HTTP request logging. Logs are stored in JSON format and are automatically rotated to prevent excessive file growth.

### **🔹 Logging Features**
✅ **Structured JSON Logs** → Ensures consistency and makes logs machine-readable.  
✅ **Daily Log Rotation** → Automatically archives old logs and compresses them.  
✅ **Separate Error & Request Logs** → Errors are stored separately for better debugging.  
✅ **Console & File Logging** → Logs are output to both the terminal (for development) and files (for persistence).  
✅ **Performance Tracking** → HTTP request response times are logged.

### **📂 Log File Locations**
| Log Type  | File Path |
|-----------|----------|
| **All Logs**  | `logs/combined-YYYY-MM-DD.log` |
| **Error Logs**  | `logs/error-YYYY-MM-DD.log` |
| **Audit Logs**  | `logs/.audit.json` _(Tracks log rotation history)_ |

### **📌 How It Works**
- **Application Logs:** Stored in `logs/combined-YYYY-MM-DD.log`
- **Error Logs:** Stored separately in `logs/error-YYYY-MM-DD.log`
- **HTTP Request Logs:** Managed by Morgan and formatted as JSON
- **Log Rotation:** Log files are rotated **daily**, compressed, and deleted after:
  - **14 days** for general logs
  - **30 days** for error logs
  - **Max size of 10MB per file**
  
### **🚀 Logging in Action**
- Logs when the server starts:
  ```json
  {"level":"info","message":"🚀 Server is running on PORT 5000","timestamp":"2025-02-04T15:15:20.545Z"}
  ```
- Logs an incoming HTTP request:
  ```json
  {
    "level": "info",
    "message": {
      "method": "GET",
      "url": "/api/v1/health/",
      "status": 200,
      "responseTime": "2.611 ms",
      "timestamp": "2025-02-04T15:15:34.818Z"
    },
    "timestamp": "2025-02-04T15:15:34.818Z"
  }
  ```
- Logs an error:
  ```json
  {
    "level": "error",
    "message": "Database connection failed",
    "stack": "Error: Database connection failed at src/services/db.ts:22:15",
    "timestamp": "2025-02-04T15:16:02.123Z"
  }
  ```
### **🔧 Configuring Logging**
Logging levels and configurations can be modified in:  
	•	src/utils/logger.ts (Application logging setup)  
	•	src/middlewares/logger.middleware.ts (HTTP request logging setup)  
	•	**Log Level:** Configurable via .env → LOG_LEVEL=info | debug | warn | error  
      

---
## **📌 Testing**
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


