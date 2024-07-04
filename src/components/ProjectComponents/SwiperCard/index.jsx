import React from "react";
import Image from "next/image";
import classes from "./SwiperCard.module.css";

export const SwiperCard = ({ data }) => {
  return (
    <div className={classes?.cardContRoot}>
      <div className={classes?.imageContainer}>
        <Image alt="person" src={data?.image} />
      </div>
      <div className={classes?.textContainer}>
        <div className={classes?.sec1textCont}></div>
        <div></div>
      </div>
    </div>
  );
};
