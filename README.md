
# Fetch Receipt Processor

This is the take home assessment for Fetch Rewards. This project is implemented in **Node.js** with **Express.js** and adheres to structured schema validation for data integrity.

---

## Features

- **Receipt Validation**: Ensures receipt data conforms to predefined schemas.
- **Points Calculation**: Assigns points based on retailer name, total, items, and purchase details.
- **API-First Design**: Exposes endpoints for receipt operations.
- **Modular Codebase**: Organized for scalability and maintainability.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DigitalWatergun/fetch-receipt-processor.git
   cd fetch-receipt-processor
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the application**:
   ```bash
   npm start
   ```

   By default, the app runs on `http://localhost:3000`.

4. **Run in development mode**:
   ```bash
   npm run start-dev
   ```

---

## Usage

### Endpoints

#### 1. **Process a Receipt**

**POST** `/receipts/process`

- **Description**: Accepts receipt data and processes it for validation and points calculation.
- **Request Body**:
  ```json
  {
    "retailer": "M&M Corner Market",
    "purchaseDate": "2022-01-01",
    "purchaseTime": "13:01",
    "items": [
      { "shortDescription": "Mountain Dew 12PK", "price": "6.49" }
    ],
    "total": "6.49"
  }
  ```
- **Response**:
  ```json
  {
    "id": "a56ab511-264c-44d3-a2c0-04206a6f652f",
  }
  ```

#### 2. **Get Points**

**GET** `/receipts/:id/points`

- **Description**: Retrieves the calculated points for a specific receipt.
- **Response**:
  ```json
  {
    "points": 28
  }
  ```

---

## Development

### Code Structure

- **`/src`**: Contains the application logic and helper functions.
- **`/routes`**: API route definitions.
- **`/helpers`**: Utility functions, such as `validateReceipt` and `calculatePoints`.

### Linting and Formatting

- Run ESLint to analyze code for issues:
  ```bash
  npm run lint
  ```

---

## Running with Docker

You can build and run the application using Docker. Follow these steps:

1. **Build the Docker Image**:
   ```bash
   docker build -t fetch-receipt-processor .

2. **Run the Docker Container**: 
    ```bash
    docker run -p 3000:3000 fetch-receipt-processor
    ```

3. **Stop the Container**:
    Find the running container's ID:
    ```bash
    docker ps 
    ```

    Stop the container:
    ```bash
    docker stop <container-id>
    ```
