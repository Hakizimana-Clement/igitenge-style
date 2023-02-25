import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

export default function Cart1() {
  const navigate = useNavigate();

  let startingNumber = 1;

  const [count, setCount] = useState(startingNumber);

  function handleAddClick() {
    setCount(count + 1);
  }

  function handleSubstractClick() {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  }
  return (
    <>
      <div className="row cart">
        <div className="col-lg-7">
          <div className="cart-image">
            <img
              src="https://cdn.shopify.com/s/files/1/0684/2619/products/Womens-Afua-African-Print-High-Low-Off-Shoulder-Maxi-Dress-Brown-Black-Adire-Hem-Detail_1000x1400.jpg?v=1643382309"
              alt="placeholder"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-5 cart-text ">
          <div>
            <h1>Igitenge Dress</h1>

            <p className="cart-price">
              <strong>Price: </strong> 300$
            </p>
            <h3>Description:</h3>
            <ul>
              <li>Puff sleeve with cuff at wrist</li>
              <li>Detachable sash at waist</li>
              <li>Slit skirt</li>
              <li>Cross-over faux wrap with snap closure</li>
              <li>Invisible zipper with hook and eye at center back</li>
              <li>Pockets at sides</li>
              <li>100% Cotton</li>
            </ul>
            <h3>Care:</h3>
            <ul>
              <li>Hand wash, mild detergent. Do not bleach. Hang to dry</li>
            </ul>
          </div>
          <div className="cart-quality">
            <h3>Select size:</h3>
            <FormControl>
              <RadioGroup
                row
                defaultValue="XS"
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="XS" control={<Radio />} label="XS" />
                <FormControlLabel value="S" control={<Radio />} label="S" />
                <FormControlLabel value="M" control={<Radio />} label="M" />
                <FormControlLabel value="L" control={<Radio />} label="L" />
                <FormControlLabel
                  value="XL"
                  control={<Radio />}
                  label="XL"
                  color="danger"
                />
              </RadioGroup>
            </FormControl>

            <div>
              <h3>Quantity:</h3>
              <div className="cart-quality-button">
                <button onClick={handleSubstractClick}>-</button>
                <h2>{count}</h2>
                <button onClick={handleAddClick}>+</button>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 mt-4">
            <button
              className="btn btn-dark btn-lg"
              onClick={() => navigate("checkout")}
            >
              <ShoppingCartIcon />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {/* <Comment /> */}
      <Footer />
    </>
  );
}
