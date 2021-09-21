const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const stripe = new Stripe(
  "sk_test_51JauaJDQa02VS0IiL7RlJZl1zBm4doCSatoaz9M8OGzSGy2pxMWt0NhtGuSsgf5TLbGkhOCbzAbcuWOZgg0CVlnG00x2jJAdj9"
);

const app = express();

// Middleware
app.use(cors({ Origin: "http://localhost: 3000" }));
app.use(express.json());
// app.use(cord({Access-Control-Allow-Origin: "http://localhost: 3000"}))

// app.post("/api/checkout", async (req, res) => {
//   console.log(req.body);
//     res.send("recibido");

// });

app.post("/api/checkout", async (request, response) => {
  const { id, amount } = request.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "EUR",
      payment_method_types: ["card"], // esto deben agregar,  especifica el "método de pago"
      description: "Basket of products",
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    return response
      .status(200)
      .json({ message: "Se realizo el pago satisfactoriamente" });
  } catch (error) {
    console.log(error);
    return response.json({ message: error.raw.message });
  }
});

app.listen(3001, () => console.log("Server listening port", 3001));
