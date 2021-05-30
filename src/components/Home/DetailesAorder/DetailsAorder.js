import React from "react";
import Modal from "react-modal";
import { CButton } from "@coreui/react";
import "./DetailsAorder.css";

Modal.setAppElement("#root");
const DetailsAorder = ({ modalIsOpen, closeModal, item }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      //   style={customStyles}
      style={{ margin: "70px" }}
    >
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <img style={{ width: "100%" }} src={item.imageUrl} alt="" />
        </div>
        <div className="col-lg-6 col-md-12">
          <h1>{item.title}</h1>
          <h6>{item.quantity}</h6>
          <h2>{item.sPrice} BDT</h2>
          <div className="row">
            <div className="col-9">
              <div className="row">
                <div className="col-3 x">
                  <h1>-</h1>
                </div>
                <div className="col-6 x">
                  <h5>In Bag</h5>
                </div>
                <div className="col-3 x">
                  <h1>+</h1>
                </div>
              </div>
            </div>
            <div className="col-3 x">
              <CButton
                style={{ width: "100%" }}
                color="primary"
                size="lg"
                disabled
              >
                Buy
              </CButton>
            </div>
          </div>

          <hr />
          <h5>{item.details}</h5>
        </div>
      </div>
      <hr />
      <div className="tagnav">
        <h6>
          <img
            src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+Release-2127/Default/stores/chaldal/components/page/BrandComponent/images/1-hour.png?q=low&webp=1&alpha=1"
            alt=""
          />
          1 hour Delivery
        </h6>
        <h6>
          <img
            src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+Release-2127/Default/stores/chaldal/components/page/BrandComponent/images/cash-on-delivery.png?q=low&webp=1&alpha=1"
            alt=""
          />
          Cash on delivery
        </h6>
        <img
          src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+Release-2127/Default/components/shared/NewFooter/images/VIsa.png?q=low&webp=1&alpha=1"
          alt=""
        />
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt=""
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            blanditiis numquam quis inventore enim architecto quidem? Ipsum et
            in molestiae dolor quas nesciunt omnis ducimus rerum nisi sequi
            iusto cum dignissimos, odit nostrum maiores at dolorum sit illum
            iure natus cupiditate, laudantium reiciendis quod. Deserunt ipsam
            reprehenderit natus quasi ad.
          </p>
        </div>
        <div className="col-lg-8 col-md-12"></div>
      </div>
    </Modal>
  );
};

export default DetailsAorder;
