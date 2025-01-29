# My Backend API

## Description
This project is a simple Express.js API that provides backend details such as email, current date and time, and GitHub URL. It is designed to demonstrate the use of CORS (Cross-Origin Resource Sharing) and environment variables for configuration.

## Setup Instructions

### Prerequisites
- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:direakanbi/backend-dev.git
   cd backend-dev
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

The server will be running at `http://localhost:3000`.

## API Documentation

### Endpoint URL
- **GET** `https://backend-dev-production-3384.up.railway.app/api/mybackend-details`

### Request Format
- **Method**: GET
- **Headers**: 
  - `Content-Type: application/json`

### Response Format
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
      "email": "direakanbi@icloud.com",
      "current_datetime": "2023-10-01T12:00:00.000Z",
      "github_url": "https://github.com/direakanbi/backend-dev"
  }
  ```

### Example Usage
To retrieve the backend details, you can use a tool like `curl` or Postman:
```bash
curl -X GET https://backend-dev-2-qd1u.onrender.com/api/mybackend-details
```

This will return a JSON response similar to the following:

```json
{
     "email": "direakanbi@icloud.com",
      "current_datetime": "2025-01-29T10:00:12.910Z",
      "github_url": "https://github.com/direakanbi/backend-dev"
}
```

For more information on hiring Node.js developers, visit [HNG Tech](https://hng.tech/hire/nodejs-developers).
