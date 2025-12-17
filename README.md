# Serverless Products API (AWS)

A real, deployed serverless REST API built using AWS Lambda, API Gateway, and Amazon RDS (MySQL).  
The API fetches product data from a MySQL database and returns it as JSON.  
This project focuses on practical backend cloud integration, debugging, and observability using AWS CloudWatch.

---

## Tech Stack

- AWS Lambda (Node.js 20)
- Amazon API Gateway (HTTP API)
- Amazon RDS (MySQL)
- AWS CloudWatch Logs
- mysql2 (promise-based MySQL client)

---

## What This Project Does

- Exposes a public HTTP endpoint using API Gateway
- API Gateway triggers a Lambda function
- Lambda connects to an RDS MySQL database
- Executes a SQL query on the `products` table
- Returns database records as JSON
- Logs execution details to CloudWatch

---

## API Endpoint

- **GET** `/prod/products`

### Example Response

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
````

---

## Lambda Configuration

* Runtime: Node.js 20
* Single Lambda function handling product retrieval
* Database connectivity handled via environment variables
* No credentials hardcoded in source code

---

## Environment Variables

* `DB_HOST` – Amazon RDS endpoint
* `DB_USER` – MySQL database username
* `DB_PASSWORD` – MySQL database password

Configured directly in the AWS Lambda console.

---

## CloudWatch Logging

* All Lambda executions are logged to AWS CloudWatch
* Logs capture:

  * Function invocation start and end
  * Successful SQL query execution
  * Errors and stack traces when failures occur
* Used extensively to debug DNS, networking, and database connection issues

---

## Project Files

* `index.mjs` – Lambda function code
* `package.json` – Node.js dependency definition
* `screenshots/`

  * `api-response.png` – Successful API response
  * `cloudwatch-logs.png` – Lambda execution logs
  * `rds-details.png` – RDS database endpoint and status
* `README.md`

---

## Screenshots

The screenshots included in this repository prove that the project is:

* Deployed on AWS
* Successfully returning live data from RDS
* Logging execution details to CloudWatch

---

## Key Learnings

* Building a serverless backend using AWS managed services
* Connecting AWS Lambda to an RDS MySQL database
* Correct usage of API Gateway routes and stages
* Secure configuration using environment variables
* Debugging real AWS issues using CloudWatch logs
* Understanding Lambda execution and networking behavior

---

## Project Status

* Deployed
* Tested via browser and API Gateway
* CloudWatch logging verified
* End-to-end functionality confirmed
