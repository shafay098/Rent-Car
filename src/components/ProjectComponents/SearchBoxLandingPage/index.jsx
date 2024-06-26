import React from "react";
import { GrLocation } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import Input from "@/components/CommonComponents/Input";
import classes from "./SearchBoxLandingPage.module.css";
import { Button } from "@/components/CommonComponents/Button";

export const SearchBoxLandingPage = () => {
  return (
    <div className={classes?.searchBoxrangeCont}>
      <div className={classes?.box1}>
        <GrLocation size={32} className={classes?.icon} />
        <div className={classes?.smallBoxCont}>
          <p className="p3">Location</p>
          <Input inputContainerClass={classes?.inputClass} />
        </div>
      </div>
      <div className={classes?.box2}>
        <MdDateRange size={32} className={classes?.icon} />
        <div className={classes?.smallBoxCont}>
          <p className="p3">Location</p>
          <Input inputContainerClass={classes?.inputClass} />
        </div>
      </div>
      <div className={classes?.box3}>
        <MdDateRange size={32} className={classes?.icon} />
        <div className={classes?.smallBoxCont}>
          <p className="p3">Location</p>
          <Input inputContainerClass={classes?.inputClass} />
        </div>
      </div>

      <div className={classes?.submitBox}>
        <Button variant="primary">Search</Button>
      </div>
    </div>
  );
};
