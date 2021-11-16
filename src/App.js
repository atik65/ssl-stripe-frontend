import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [product, setProdcut] = useState({
    name: "React Course",
    price: 50,
    quantity: 2,
  });
  const [clientSecret, setClientSecret] = useState("");
  const handleStripePayment = () => {
    axios
      .post("https://frozen-sea-04813.herokuapp.com/create-checkout-session", {
        product,
      })
      .then((res) => {
        window.location = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSsl = () => {
    axios
      .post("https://frozen-sea-04813.herokuapp.com/sslcommerz", {
        product,
      })
      .then((res) => {
        window.location = res.data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button className="btn btn-primary" onClick={handleStripePayment}>
          Pay with Stripe
        </button>
        <button className="btn btn-primary my-3" onClick={handleSsl}>
          Pay with SSL Commerz
        </button>
      </header>
    </div>
  );
}

export default App;
