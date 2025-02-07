const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to check if a number is prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Helper function to check if a number is an Armstrong number
function isArmstrong(n) {
  const digits = n.toString().split("").map(Number);
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, digits.length), 0);
  return sum === n;
}

// Helper function to get the sum of digits
function digitSum(n) {
  return n.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
}

// API Endpoint
app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  // Validate input
  if (!number || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number);

  // Determine properties
  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");

  try {
    // Fetch fun fact from Numbers API
    const factResponse = await axios.get(`http://numbersapi.com/${num}/math?json`);
    const funFact = factResponse.data.text;

    return res.json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: false, // Not implemented
      properties,
      digit_sum: digitSum(num),
      fun_fact: funFact,
    });
  } catch (error) {
    return res.json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: false,
      properties,
      digit_sum: digitSum(num),
      fun_fact: "Could not fetch fun fact",
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
