import React, { useContext, useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Card, Button, Modal } from "react-bootstrap";
import { CartContext } from "../context/CardContext";
import Carousel from "react-bootstrap/Carousel";
import { Skeleton } from "@mui/material";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // loading skeleton
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={product.img}
          height="400px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-3">{product.title}</span>
            <span className="ms-2 text-muted">${product.price}</span>
          </Card.Title>
          <div className="mt-auto">
            {productQuantity > 0 ? (
              <Button
                className="w-100 d-flex justify-content-center align-items-center"
                variant="success"
                onClick={handleShow}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "28px", paddingRight: "7px" }}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M16.5163 8.93451L11.0597 14.7023L8.0959 11.8984"
                      stroke="#00ff88"
                      stroke-width="2"
                    ></path>
                    <path
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="#00ff88"
                      stroke-width="2"
                    ></path>
                  </g>
                </svg>
                <div></div>
                View Details
              </Button>
            ) : (
              <Button className="w-100" onClick={handleShow}>
                View Details
              </Button>
            )}
            <Modal sm="lg" show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <div className="row">
                  <div className="col-lg-6 modalClass">
                    <Carousel fade controls={false}>
                      <Carousel.Item>
                        {loading ? (
                          <Skeleton
                            variant="rectangular"
                            width={421}
                            height={590}
                            animation="wave"
                          />
                        ) : (
                          <img
                            className="d-block w-100"
                            src={product.img}
                            alt={product.title}
                          />
                        )}
                      </Carousel.Item>
                      <Carousel.Item>
                        {loading ? (
                          <Skeleton
                            variant="rectangular"
                            width={421}
                            height={590}
                            animation="wave"
                          />
                        ) : (
                          <img
                            className="d-block w-100"
                            src={product.img2}
                            alt={product.title}
                          />
                        )}
                      </Carousel.Item>
                      <Carousel.Item>
                        {loading ? (
                          <Skeleton
                            variant="rectangular"
                            width={421}
                            height={590}
                            animation="wave"
                          />
                        ) : (
                          <img
                            className="d-block w-100"
                            src={product.img3}
                            alt={product.title}
                          />
                        )}
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="product-details">
                      <h1>{product.title}</h1>
                      <hr />
                      <h4>Description:</h4>

                      <ul>
                        <li>{product.description1}</li>
                        <li>{product.description2}</li>
                      </ul>

                      <h4>Care:</h4>
                      <ul>
                        <li>{product.care}</li>
                      </ul>
                    </div>
                    <div className="mb-4 size-button">
                      <h4 className="mb-3">Select the size:</h4>
                      <FormControl>
                        <RadioGroup
                          row
                          defaultValue="XS"
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="size"
                          type="submit"
                        >
                          <FormControlLabel
                            value="XS"
                            control={<Radio />}
                            label="XS"
                          />
                          <FormControlLabel
                            value="S"
                            control={<Radio />}
                            label="S"
                          />
                          <FormControlLabel
                            value="M"
                            control={<Radio />}
                            label="M"
                          />
                          <FormControlLabel
                            value="L"
                            control={<Radio />}
                            label="L"
                          />
                          <FormControlLabel
                            value="XL"
                            control={<Radio />}
                            label="XL"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    {productQuantity > 0 ? (
                      <>
                        <div
                          className="d-flex align-items-center flex-column mb-3"
                          style={{ gap: ".5rem" }}
                        >
                          <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ gap: ".5rem" }}
                          >
                            <Button
                              variant="dark"
                              onClick={() => cart.removeOneToCart(product.id)}
                            >
                              -
                            </Button>
                            <div>
                              <span className="fs-3">{productQuantity} </span>
                              in the cart
                            </div>
                            <Button
                              variant="dark"
                              onClick={() => cart.addOneToCart(product.id)}
                            >
                              +
                            </Button>
                          </div>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => cart.deleteFromCart(product.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </>
                    ) : (
                      <Button
                        className="w-100 mt-3"
                        onClick={() => cart.addOneToCart(product.id)}
                        variant="dark"
                      >
                        Add To Cart
                      </Button>
                    )}
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
