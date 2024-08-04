import express, { Express, Request, Response } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import "dotenv/config"

import Server from "./server"

const app: Express = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// start server
Server.startServer(app)

/**
 *  ======================================================================
 *  ======================================================================
 */

// imports
import jwt from "jsonwebtoken"
import crypto from "node:crypto"

// models
import { User } from "./models/User"

// ============= API Routes =============

/**
 * GET /
 *
 * This route handles the root URL of the application.
 * When a GET request is made to this endpoint, it responds with a simple greeting message.
 *
 * Response:
 * - 200: Sends a plain text message "Hello, TypeScript Express!" to the client.
 */
app.get("/", (req: Request, res: Response) => {
	res.send("Hello, TypeScript Express!")
})

/**
 * POST /login
 *
 * This route handles the /login endpoint.
 * When a POST request is made to this endpoint, it expects a JSON body with "email" and "password" fields.
 * It validates the received credentials and returns a success or error response.
 *
 * Request Body:
 * - email: A string containing the user's email.
 * - password: A string containing the user's password.
 *
 * Response:
 * - 200: Sends a success message if the credentials are valid.
 * - 400: Sends an error message if the email or password field is missing.
 * - 500: Sends an error message for any other server error.
 */
app.post("/login", (req: Request, res: Response) => {
	const { email, password } = req.body

	if (!email || !password) {
		return res
			.status(400)
			.json({ error: "Email and password are required" })
	}

	// Here you would add your validation and authentication logic

	try {
		// If validation is successful, send a success response
		return res
			.status(200)
			.json({ message: "Login successful", status: "Success" })
	} catch (error) {
		// If there is any server error, send a 500 response
		return res.status(500).json({ error: "Internal server error" })
	}
})
