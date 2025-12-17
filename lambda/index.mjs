import mysql from "mysql2/promise";

export const handler = async (event, context) => {
  const requestId = context.awsRequestId;
  const startTime = Date.now();

  console.log(JSON.stringify({
    level: "INFO",
    msg: "Request received",
    requestId,
    path: event.rawPath,
    method: event.requestContext?.http?.method
  }));

  let connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: "products",
    });

    const [rows] = await connection.execute("SELECT * FROM products");

    console.log(JSON.stringify({
      level: "INFO",
      msg: "Query successful",
      requestId,
      rowCount: rows.length,
      durationMs: Date.now() - startTime
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(rows),
    };

  } catch (error) {
    console.error(JSON.stringify({
      level: "ERROR",
      msg: "Request failed",
      requestId,
      errorMessage: error.message,
      stack: error.stack
    }));

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };

  } finally {
    if (connection) {
      await connection.end();
    }
  }
};