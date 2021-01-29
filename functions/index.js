const functions = require("firebase-functions");
const express = require("express");
const stripe = require("stripe")("sk_test_lwbeCZRFEi9xysV7Yc4DipOr00PT77ZqJ9");
const cors = require("cors");

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment request received for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.get("/test", (req, res) => res.status(200).send("This is a test"));

exports.api = functions.https.onRequest(app);

// (http://localhost:5001/v3-f5de1/us-central1/api)
