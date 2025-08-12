/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";
import AboutBg from "../../img/aboutBg.png";

const AboutInfo = () => (
  <div css={styles} className="aboutInfo">
    <div className="aboutDesc">
      <span>  Vision Statement</span>
      <p>
    
To become the leading platform in Central Nigeria and beyond for recognizing excellence, inspiring leadership, and fostering social impact—by celebrating the achievements of distinguished individuals and empowering underprivileged children and orphans to realize their fullest potential.

      </p>
    </div>
   
  </div>
);

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .aboutDesc {
    width: 100%;
    max-width: 520px;
    color: #fff;
    span {
      color: #df42b1;
      border-bottom: 2px solid #4b4d7b;
    }
    h2 {
      font-size: 40px;
      line-height: 1.2;
      margin: 26px 0;
    }
    p {
      font-size: 15px;
      line-height: 1.8;
    }
    .btn {
      margin: 64px 0 0 0;
    }
  }
  @media (max-width: 876px) {
    flex-direction: column;
    img {
      margin: 50px 0 0 0;
      max-width: 94%;
    }
    .aboutDesc {
      h2 {
        font-size: 30px;
      }
      .btn {
        margin: 20px 0 0 0;
      }
    }
  }
  @media (min-width: 877px) and (max-width: 1120px) {
    .aboutDesc,
    img {
      max-width: 48%;
    }
    .aboutDesc {
      h2 {
        font-size: 28px;
      }
    }
  }
`;

export default AboutInfo;
