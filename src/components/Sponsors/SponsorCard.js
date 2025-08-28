/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import LogoOne from "../PARTNERS/FB_IMG_16383071447628811.jpg";
import LogoTwo from "../PARTNERS/IMG-20250427-WA0008.jpg";
import LogoThree from "../PARTNERS/IMG-20250708-WA0009.jpg";
import LogoFour from "../PARTNERS/Picture1.jpg";
import LogoFive from "../PARTNERS/Picture2.jpg";
import LogoSix from "../PARTNERS/aquatrust.jpg";
import LogoSeven from "../PARTNERS/FB_IMG_16383071447628811.jpg";
import LogoEight from "../PARTNERS/IMG-20250708-WA0009.jpg";

const SponsorCard = () => {
  const logos = [
    LogoOne,
    LogoTwo,
    LogoThree,
    LogoFour,
    LogoFive,
    LogoSix,
    LogoSeven,
    LogoEight,
  ];

  return (
    <React.Fragment>
      {logos.map((logo, index) => (
        <div key={index} css={styles} className="sponsorCard">
          <img src={logo} alt="sponsorLogo" />
        </div>
      ))}
    </React.Fragment>
  );
};

const styles = css`
  width: 100%;
  max-width: 25%;
  height: 240px;
  border: 1px solid #444675;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
    display: block;
    cursor: pointer;
    opacity: 0.4;
    transition: opacity 500ms ease-in-out;
    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 700px) {
    max-width: 50%;
  }

  @media (min-width: 701px) and (max-width: 1020px) {
    max-width: 32%;
    margin: 10px 0;
    &:nth-child(7),
    &:nth-child(8) {
      max-width: 49%;
    }
  }
`;


export default SponsorCard;
