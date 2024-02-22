import React from "react";
import infoDetailsStyles from "./order-details.module.css";
import { Done } from "../../images";
import PropTypes from "prop-types";
import { infoPropTypes } from "../../utils/data";

const InfoDetails = ({ info }) => {
  return (
    <>
      <h2
        className={`text text_color_primary text_type_digits-large pt-15 ${infoDetailsStyles.textGlow}`}
      >
        {info.number}
      </h2>
      <p className="text text_color_primary text_type_main-medium pt-2">
        идентификатор заказа
      </p>
      <img
        loading="lazy"
        src={Done}
        alt="checkmark"
        className={`${infoDetailsStyles.checkmark} pt-15 pb-15`}
      />
      <p className="text text_color_primary text_type_main-default pb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_color_inactive text_type_main-default pb-15">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
};

InfoDetails.propTypes = {
  info: PropTypes.shape(infoPropTypes).isRequired,
};
export default InfoDetails;
