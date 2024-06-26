"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import classes from "./LandingPage.module.css";
import { SearchBoxLandingPage } from "@/components/ProjectComponents/SearchBoxLandingPage";

export const LandingPage = () => {
  const [location, setlocation] = useState("");
  const [date, setdate] = useState("");
  const [returnDate, setreturnDate] = useState("");

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={6}>
          <div className={classes?.textConainerSec1}>
            <h2 className="h2">Find, book and rent a car Easily</h2>
            <p className="p2">
              Get a car wherever and whenever you need it with your IOS and
              Android device.
            </p>
            <div className={classes?.imagePayDiv}>
              <Image
                alt="image"
                src={"/images/google play.png"}
                width={123}
                height={36}
              />
              <Image
                alt="image"
                src={"/images/apple play.png"}
                width={123}
                height={36}
              />
            </div>
          </div>
        </Col>
        <Col xs={6}>
          <div className={classes?.imageContainer}>
            <Image src={"/images/car landingpage.png"} alt="image" fill />
          </div>
        </Col>
        <Col xs={12}>
          <div className="d-flex justify-content-center">
            <SearchBoxLandingPage />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
