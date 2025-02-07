# **Number Classification API**

This API classifies numbers based on various mathematical properties and returns an interesting fun fact.

## Features
- Checks if a number is **prime**, **perfect**, or **Armstrong**
- Identifies **odd/even** numbers
- Calculates the **digit sum**
- Fetches a **fun fact** from Numbers API
- Handles **CORS** and returns **JSON responses**

## API Endpoint

    https://number-classification-api-xvzn.onrender.com
    
## **GET** `/api/classify-number?number={number}`

## **Example Request**

    https://number-classification-api-xvzn.onrender.com/api/classify-number?number=371

## Example Response

                   {
                        "number": 371,
                        "is_prime": false,
                        "is_perfect": false,
                        "properties": ["armstrong", "odd"],
                        "digit_sum": 11,
                        "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
                    }

## Deployment

The API is deployed on Render

Hosted at: http:            
                                
    https://number-classification-api-xvzn.onrender.com

## Running Locally

### Clone the repository:

    git clone https://github.com/Princewilliamske/number-classification-api
    
### Install dependencies:

    npm install
    
### Start the server:

    node server.js
    
### Test the API:

    http://localhost:3000/api/classify-number?number=371

Let me know if you need help with anything! 🚀
