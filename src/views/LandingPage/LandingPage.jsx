"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import classes from "./LandingPage.module.css";
import { SearchBoxLandingPage } from "@/components/ProjectComponents/SearchBoxLandingPage";
import { MdEditLocationAlt } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
import { IoChatbubblesSharp } from "react-icons/io5";
import { PopularDealCard } from "@/components/ProjectComponents/PopularDealsCard";
import { popular_cards_data, swiper_card_data } from "@/data/DummyData";
import { Button } from "@/components/CommonComponents/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperCard } from "@/components/ProjectComponents/SwiperCard";
import { Pagination } from "swiper/modules";

export const LandingPage = () => {
  const [location, setlocation] = useState("");
  const [date, setdate] = useState("");
  const [returnDate, setreturnDate] = useState("");

  const Section1 = () => {
    return (
      <Row className="mt-5">
        <Col xs={6}>
          <div className={classes?.bgCarDiv}>
            <Image
              alt="car"
              src={"/images/Audi 2.png"}
              width={813}
              height={359}
            />
          </div>
        </Col>

        <Col xs={6}>
          <div className={classes?.sec2RootCont}>
            <div className={classes?.textBoxCont}>
              <div className={classes?.boxCont}>
                <p className="p4">WHY CHOOSE US</p>
              </div>
              <h3 className="h3">
                We offer the best experience with our rental deals
              </h3>
            </div>

            <div className={classes?.expoCardRootCont}>
              {experienceCardData?.map((item, index) => (
                <ExperienceCard
                  key={index}
                  Icon={item?.Icon}
                  heading={item?.heading}
                  para={item?.para}
                />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    );
  };

  const Section2 = () => {
    return (
      <Row>
        <Col className="mb-4" xs={12}>
          <div className={classes?.sec2HeadingCont}>
            <div className={classes?.boxBlueSec2}>
              <p>POPULAR RENTAL DEALS</p>
            </div>
            <h3 className="h3">Most popular cars rental deals</h3>
          </div>
        </Col>
        {popular_cards_data?.map((item, index) => {
          return (
            <Col xs={3} key={index}>
              <PopularDealCard key={index} data={item} />
            </Col>
          );
        })}

        <Col className="mt-5" xs={12}>
          <div className={classes?.lastDivSec2}>
            <Button
              containerClass={"m-auto"}
              variant="primary-light"
              rightIcon={<IoIosArrowRoundForward size={30} />}
            >
              Show All Vehicles
            </Button>
          </div>
        </Col>
      </Row>
    );
  };

  const Section3 = () => {
    return (
      <Row className={classes?.sec3RowCont}>
        <Col className="mb-4" xs={12}>
          <div className={classes?.sec2HeadingCont}>
            <div className={classes?.boxBlueSec2}>
              <p>TESTIMONIALS</p>
            </div>
            <h3 className="h3">What peole say about us?</h3>
          </div>
        </Col>
        <Col xs={12}>
          <Swiper
            slidesPerView={2}
            spaceBetween={50}
            centeredSlides={false}
            className={classes?.swiper}
          >
            {swiper_card_data?.map((item, index) => (
              <SwiperSlide key={index}>
                <SwiperCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    );
  };

  const Section4 = () => {
    return (
      <Row style={{ marginTop: "4rem" }} className={classes?.rowClass}>
        <Col className={classes?.section4Col} xs={6}>
          <div className={classes?.section4RootCont}>
            <div className={classes?.boxBlueSec2}>
              <p>DOWNLOAD</p>
            </div>
            <h2 className="h2">Download Rentcars App for FREE</h2>
            <p className="p2">
              For faster, easier booking and exclusive deals.
            </p>
            <div style={{ marginTop: "1rem" }} className={classes?.imagePayDiv}>
              <Image
                alt="image"
                src={"/images/google play.png"}
                width={150}
                height={50}
              />
              <Image
                alt="image"
                src={"/images/apple play.png"}
                width={150}
                height={50}
              />
            </div>
          </div>
        </Col>
        <Col className={classes?.colClass} xs={6}>
          <div className={classes?.mobileDiv}></div>
        </Col>
      </Row>
    );
  };

  return (
    <Container>
      <Row className="mt-5 mb-4">
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

      <Row className="mt-5">
        <Col xs={12}>
          <div className={classes?.badgeRootCont}>
            <div className={classes?.badgeStyle}>
              <p>HOW IT WORK</p>
            </div>
            <p className="h3">Rent with following 3 working steps</p>
          </div>
        </Col>
        <Col xs={4}>
          {WorkingStepCard(
            MdEditLocationAlt,
            "Choose Location",
            "Choose your and find your best car"
          )}
        </Col>

        <Col xs={4}>
          {WorkingStepCard(
            FaCalendarAlt,
            "Pick-up date",
            "Select your pick up date and time to book your car"
          )}
        </Col>

        <Col xs={4}>
          {WorkingStepCard(
            FaCarRear,
            "Book your car",
            "Book your car and we will deliver it directly to you"
          )}
        </Col>
      </Row>
      <Row>
        <Col className={"mt-5"} xs={12}>
          <div className={classes.swiper_container}>
            <div className={classes.swiper_wrapper}>
              {allLogos.map((logo, index) => (
                <div className={classes.swiper_slide} key={index}>
                  <Image src={logo} alt={`Sponsor ${index + 1}`} fill />
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      {/* section 1 */}
      {<Section1 />}

      {/* section 2 */}
      <Section2 />

      <Section3 />

      <Section4 />
    </Container>
  );
};

const experienceCardData = [
  {
    Icon: <GiMoneyStack size={24} />,
    heading: "Best price guaranteed",
    para: "Find a lower price? We’ll refund you 100of the difference.",
  },

  {
    Icon: <FaUserCheck size={24} />,
    heading: "Experience driver",
    para: "Don’t have driver? Don’t worry, we have many experienced driver for you.",
  },

  {
    Icon: <Ri24HoursFill size={24} />,
    heading: "24 hour car delivery",
    para: "Book your car anytime and we will deliver it directly to you.",
  },

  {
    Icon: <IoChatbubblesSharp size={24} />,
    heading: "24/7 technical support",
    para: "Have a question? Contact Rentcars support any time when you have problem.",
  },
];

const ExperienceCard = ({ Icon, heading, para }) => {
  return (
    <div className={classes?.expCardRootCont}>
      <div className={classes?.boxImageExp}>{Icon}</div>
      <div className="d-flex gap-24 flex-column">
        <p className="p1">{heading} </p>
        <p className="p3 w-75">{para} </p>
      </div>
    </div>
  );
};

const WorkingStepCard = (Icon, title, para) => {
  return (
    <div className={classes?.workingStepRootCont}>
      <div className={classes?.iconContStep}>
        <Icon size={25} />
      </div>
      <div className={classes?.stepCardTextCont}>
        <p className="p1">{title}</p>
        <p className="p4">{para}</p>
      </div>
    </div>
  );
};
const logos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
  "/images/logo6.png",
];

const allLogos = [...logos, ...logos];
