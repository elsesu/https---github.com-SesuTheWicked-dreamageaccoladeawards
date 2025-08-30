/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Logo from "../../img/logo.png";
import FooterOneBg from "../Photo Gallery/20250713_162746.jpg";
import FooterTwoBg from "../Photo Gallery/20250713_163420.jpg";
import FooterThreeBg from "../Photo Gallery/20250713_163420.jpg";
import FooterFourBg from "../Photo Gallery/20250713_162746.jpg";
import FooterFiveBg from "../Photo Gallery/TON_6556.jpg";
import FooterSixBg from "../Photo Gallery/Screenshot_20250713-225521_2.png";

const FooterContainer = () => {
  const images = [
    FooterOneBg,
    FooterTwoBg,
    FooterThreeBg,
    FooterFourBg,
    FooterFiveBg,
    FooterSixBg,
  ];

  return (
    <div css={styles} className="footerContainer">
    
      <div className="footerCard second">
        <div className="footerCard first">
  
        <div className="socialWrap">
  <a 
    href="https://www.facebook.com/DAACawards" 
    target="_blank" 
    rel="noopener noreferrer"
    className="socialIcon"
  >
    <i className="fab fa-facebook-f fa-sm"></i>
  </a>

  <a 
    href="https://www.instagram.com/daac_awards/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="socialIcon"
  >
    <i className="fab fa-instagram fa-sm"></i>
  </a>

  <a 
    href="https://x.com/DAACawards" 
    target="_blank" 
    rel="noopener noreferrer"
    className="socialIcon"
  >
    <i className="fab fa-twitter fa-sm"></i>
  </a>

  <a 
    href="https://linkedin.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="socialIcon"
  >
    <i className="fab fa-linkedin-in fa-sm"></i>
  </a>
</div>

</div>

      </div>
      
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  .footerCard {
    width: 100%;
    max-width: 220px;
    color: #9293bc;
    h2 {
      color: #fff;
      margin-bottom: 14px;
    }
    &.first {
      img {
        padding: 8px 0 0 0;
      }
      p {
        margin: 14px 0;
        font-size: 14px;
        line-height: 1.7;
      }
      .socialWrap {
        display: flex;
        gap: 12px;
      }
      
      .socialIcon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: #444675;
        color: #fff;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
      }
      
      .socialIcon i {
        font-size: 18px;
      }
      
      .socialIcon:hover {
        background: #1da1f2; /* Example: Twitter blue, you can change per icon */
        transform: scale(1.1);
      }
      
          i {
            color: #fff;
            margin: auto;
          }
        }
      }
    }
    &.second {
      p {
        font-weight: 400;
        font-size: 15px;
        &:not(:last-of-type) {
          margin-bottom: 14px;
        }
      }
    }
    &.third {
      max-width: 250px;
      a {
        text-decoration: none;
        display: inline-block;
        color: #9293bc;
        transition: color 500ms ease-in-out;
        &:hover {
          color: #fff;
        }
        &:not(:last-of-type) {
          margin-bottom: 14px;
        }
      }
    }
    &.forth {
      .imgContainer {
        width: 100%;
        min-height: 154px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .imgWrapper {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 5px;
          cursor: pointer;
          .overlay {
            opacity: 0;
            transition: all 500ms ease-in-out;
          }
          &:hover {
            .overlay {
              opacity: 0.8;
            }
          }
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
      }
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    .footerCard {
      &.first,
      &.second,
      &.third,
      &.forth {
        max-width: 100%;
        margin: 14px 0;
      }
      &.third {
        a {
          display: block;
        }
      }
      &.forth {
        .imgContainer {
          .imgWrapper {
            width: 32%;
            height: 110px;
            margin: 5px 0;
          }
        }
      }
    }
  }

  @media (min-width: 641px) and (max-width: 1140px) {
    flex-wrap: wrap;
    .footerCard {
      &.first,
      &.second,
      &.third,
      &.forth {
        max-width: 47%;
        margin: 14px 0;
      }
      &.forth {
        .imgContainer {
          .imgWrapper {
            width: 32%;
            height: 110px;
            margin: 5px 0;
          }
        }
      }
    }
  }
`;

export default FooterContainer;
