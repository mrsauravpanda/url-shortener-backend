# URL Shortener Backend

A production-ready **URL Shortener backend service** built using **Node.js, Restify, and MongoDB**.  
The application follows a clean, scalable architecture with clear separation of concerns and is designed for easy frontend integration (React or any SPA).

---

## Features

- Create shortened URLs from long URLs
- Optional expiry for shortened URLs
- Redirect short URLs to original destinations
- Click tracking for each shortened URL
- Input validation and error handling
- MongoDB indexing for fast lookups
- Clean service–repository architecture
- Environment-based configuration

---

## Tech Stack

- **Node.js**
- **Restify** – REST API framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **dotenv** – Environment variable management
- **UUID** – Short code generation

---

## Project Structure

```
backend/
├── src/
│   ├── app.js                  # Restify app setup
│   ├── server.js               # Server bootstrap
│
│   ├── config/
│   │   ├── env.js              # Environment variables
│   │   └── mongo.js            # MongoDB connection
│
│   ├── models/
│   │   └── Url.model.js        # Mongoose schema
│
│   ├── repositories/
│   │   └── url.repository.js   # Database access layer
│
│   ├── services/
│   │   └── url.service.js      # Business logic
│
│   ├── controllers/
│   │   ├── shorten.controller.js
│   │   └── redirect.controller.js
│
│   ├── routes/
│   │   └── index.js            # API routes
│
│   ├── utils/
│   │   ├── validator.js        # URL validation
│   │   └── codeGenerator.js    # Short code generator
│
│   └── middlewares/
│       └── errorHandler.js     # (Future) Centralized error handling
│
├── .env
├── package.json
└── README.md
```

---

## API Endpoints

### Create Short URL
**POST** `/api/shorten`

**Request Body**
```json
{
  "url": "https://example.com/very/long/url",
  "expiryDays": 7
}
```

**Response**
```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

---

### Redirect Short URL
**GET** `/:shortCode`

**Example**
```
GET /abc123
```

**Behavior**
- Redirects to the original URL
- Increments click count
- Returns error if URL is expired or not found

---

## Architecture Overview

This project follows a **layered architecture**:

- **Controllers** – Handle HTTP requests and responses  
- **Services** – Business logic (validation, expiry, clicks)  
- **Repositories** – MongoDB access via Mongoose  
- **Models** – MongoDB schemas and indexes  

This design ensures maintainability, scalability, and testability.

---

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/url-shortener
BASE_URL=http://localhost:3000
```

---

## Running the Application

```bash
npm install
npm run dev
```

Server will start at:
```
http://localhost:3000
```

---

## Testing (Planned)

The structure supports:
- Unit tests
- Integration tests
- In-memory MongoDB testing

Recommended tools:
Mocha, Chai, Sinon, Supertest, mongodb-memory-server

---

## Future Enhancements

- URL analytics API
- Rate limiting
- Authentication
- Custom short codes
- Request logging
- Docker support

---

## License

MIT
