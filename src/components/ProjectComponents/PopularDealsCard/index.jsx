import React from "react";
import Image from "next/image";
import classes from "./PopularDealsCard.module.css";
import { CiStar } from "react-icons/ci";

import { TbManualGearboxFilled } from "react-icons/tb";
import { TbAirConditioning } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { GiCarDoor } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/CommonComponents/Button";
import { mergeClass } from "@/utils/HelperFunctions";

export const PopularDealCard = ({ data }) => {
  return (
    <div className={classes?.rootCardContainer}>
      <div className={classes?.imageContainer}>
        <Image alt="car" src={data?.image} fill />
      </div>
      <div className={classes?.textSection}>
        <p3 className="p3">{data?.title}</p3>
        <div className={classes?.starReviewCont}>
          <CiStar size={25} />
          <div className={classes?.starReviewText}>
            <p>{data?.starsAverage}</p>
            <p>{data?.totalReviews}</p>
          </div>
        </div>
      </div>
      <div className={classes?.itemsContainer}>
        <div className="d-flex flex-row justify-between">
          <div className={classes?.itemContSec}>
            <FiUsers size={25} />
            <p>{data?.necessities?.passenger}</p>
          </div>
          <div className={mergeClass(classes?.itemContSec, "justify-end ")}>
            <TbManualGearboxFilled size={25} />
            <p style={{ width: "50px" }} className="w-30">
              {data?.necessities?.gearType}
            </p>
          </div>
        </div>

        <div className="d-flex flex-row justify-between">
          <div className={mergeClass(classes?.itemContSec)}>
            <TbAirConditioning size={25} />
            <p>{data?.necessities?.airCondition}</p>
          </div>
          <div className={mergeClass(classes?.itemContSec, "justify-end")}>
            <GiCarDoor size={25} />
            <p style={{ width: "50px" }} className="w-30">
              {data?.necessities?.doors}
            </p>
          </div>
        </div>
      </div>

      <hr className={classes?.hrLine} />
      <div className={classes?.priceContainer}>
        <p>Price</p>
        <p>
          {`$${data?.price}`}
          <span>/day</span>
        </p>
      </div>

      <div className={classes?.buttonCont}>
        <Button rightIcon={<IoIosArrowRoundForward size={50} />}>
          Rent Now
        </Button>
      </div>
    </div>
  );
};
