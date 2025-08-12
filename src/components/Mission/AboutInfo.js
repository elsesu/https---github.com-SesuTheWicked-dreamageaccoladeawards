/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";
import AboutBg from "../Photo Gallery/TON_6556 (1).jpg";


const AboutInfo = () => (
  <div css={styles} className="aboutInfo">
    <div className="aboutDesc">
      <span>Mission Statement</span>
      <p>
DAAC is committed to:
Celebrating virtuous and accomplished citizens from Central Nigeria.
Mentoring emerging leaders and future change makers.
Empowering orphans and underprivileged children.
Providing platforms to build the dreams of vulnerable youth.
Honouring individuals who exemplify success, creativity, industriousness, and philanthropy.


      </p>
    </div>
    <img src={AboutBg} alt="about" className="aboutimg"/>
  </div>
);

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .aboutimg {
    border-radius: 20px;
    width: 100%; /* so it scales */
    height: auto;
    object-fit: cover; /* syncs with container background */
  }
  
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
