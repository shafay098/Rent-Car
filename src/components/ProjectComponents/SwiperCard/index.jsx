import React from "react";
import Image from "next/image";
import classes from "./SwiperCard.module.css";
import ReactStars from "react-stars";

export const SwiperCard = ({ data }) => {
  return (
    <div className={classes?.cardContRoot}>
      <div className={classes?.imageContainer}>
        <Image alt="person" fill src={data?.image} />
      </div>
      <div className={classes?.textContainer}>
        <div className={classes?.sec1textContPart1}>
          <div className={classes?.starsText}>
            <p>
              {data?.starNumber} <span>Stars</span>
            </p>
          </div>
          <div className={classes?.starPickCont}>
            <ReactStars
              count={5}
              value={data?.starNumberDefault}
              edit={false}
              size={20}
              color2={"#ffd700"}
            />
          </div>
        </div>

        <div className={classes?.sec1textContPart2}>
          <div className={classes?.commentStyle}>
            <p className="p2">{`"${data?.comment}"`}</p>
          </div>

          <div className={classes?.lastFooterText}>
            <p>{data?.customerName}</p>
            <p>{data?.destination}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
