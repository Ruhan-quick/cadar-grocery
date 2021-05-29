import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./GroceryItems.css";
const GroceryItems = () => {
  const items = [
    {
      name: "Ye Egg",
      title: "Ye Egg",
      subTitle: "",
      bCost: "6.5",
      sPrice: "7",
      supplier: "Amal Farm",
      discount: "6",
      imageUrl:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/283/283659/a-basket-of-eggs.jpg",
      details:
        "An egg is the organic vessel containing the zygote in which an embryo develops until it can survive on its own, at which point the animal hatches.",
      quantity: "7",
    },
    {
      name: "Banana",
      title: "Banana S1 Grade",
      subTitle: "",
      bCost: "",
      sPrice: "12",
      supplier: "",
      discount: "",
      imageUrl:
        "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg",
      details: "",
      quantity: "9",
    },
    {
      name: "Mango",
      title: "",
      subTitle: "",
      bCost: "",
      sPrice: "36",
      supplier: "",
      discount: "",
      imageUrl: "",
      details: "",
      quantity: "",
    },
    {
      name: "Banana",
      title: "",
      subTitle: "",
      bCost: "",
      sPrice: "12",
      supplier: "",
      discount: "",
      imageUrl: "",
      details: "",
      quantity: "",
    },
    {
      name: "Mango",
      title: "",
      subTitle: "",
      bCost: "",
      sPrice: "23",
      supplier: "",
      discount: "",
      imageUrl: "",
      details: "",
      quantity: "",
    },
  ];
  return (
    <div>
      <div className="row">
        {items.map((it) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <ItemCard item={it}></ItemCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryItems;
