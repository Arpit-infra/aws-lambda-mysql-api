# AWS Serverless Products API (Lambda + RDS)

A production-ready **serverless REST API** built using **AWS Lambda**, **API Gateway**, and **Amazon RDS (MySQL)**.  
The API fetches product data from a MySQL database and returns it as JSON, with full logging via **CloudWatch**.



## 🚀 Tech Stack

- **AWS Lambda** (Node.js 20)
- **Amazon API Gateway** (HTTP API)
- **Amazon RDS** (MySQL Community)
- **AWS CloudWatch** (Logs & Monitoring)
- **mysql2** (Promise-based MySQL client)



## 📌 API Endpoint



GET /prod/products


### Sample Response
```json
[
  {
    "id": 1,
    "name": "Test Product",
    "price": "199.99",
    "stock": 10,
    "created_at": "2025-12-17T21:34:41.000Z"
  }
]


## 🧠 Architecture Overview

1. Client sends a request to **API Gateway**
2. API Gateway invokes an **AWS Lambda** function
3. Lambda connects to **Amazon RDS (MySQL)**
4. Data is queried and returned as JSON
5. Logs and execution metrics are recorded in **CloudWatch**


## 🔐 Environment Variables (Lambda)

The Lambda function uses environment variables for secure configuration:

| Variable      | Description    |
| ------------- | -------------- |
| `DB_HOST`     | RDS endpoint   |
| `DB_USER`     | MySQL username |
| `DB_PASSWORD` | MySQL password |


## 📊 Logging & Monitoring

* CloudWatch Logs enabled for the Lambda function
* Logs include:

  * Invocation start & end
  * Query execution status
  * Execution duration & memory usage


## 📁 Project Structure

aws-lambda-mysql-api/
│
├── lambda/
│   └── getProducts/
│       ├── index.mjs
│       ├── package.json
│       └── README.md
│
├── screenshots/
│   ├── api-response.png
│   ├── cloudwatch-logs.png
│   ├── lambda-config.png
│   └── rds-endpoint.png
│
├── .gitignore
└── README.md


## 📸 Screenshots

The `screenshots/` directory contains:

* Successful API response
* CloudWatch execution logs
* Lambda configuration
* RDS connectivity details


## ✅ What This Project Demonstrates

* Serverless backend design on AWS
* Secure MySQL connectivity from Lambda
* Environment-based configuration
* API Gateway routing and stages
* CloudWatch logging and monitoring
* End-to-end API deployment


## 🏁 Status

✔️ Deployed
✔️ Fully functional
✔️ End-to-end tested



