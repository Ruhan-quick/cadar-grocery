import { Button } from "@material-ui/core";
import React, { useState } from "react";
import DetailsAorder from "../DetailesAorder/DetailsAorder";
import "./ItemCard.css";
const ItemCard = ({ item }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="itemCard">
      <img className="itemImage" src={item.imageUrl} alt="" />
      <h3>{item.title}</h3>
      <h6>{item.quantity}</h6>
      <h3>$ {item.sPrice}</h3>

      <Button
        onClick={openModal}
        style={{ width: "100%" }}
        variant="contained"
        color="secondary"
      >
        Add to Bag
      </Button>
      <DetailsAorder
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        item={item}
      ></DetailsAorder>
    </div>
  );
};

export default ItemCard;
