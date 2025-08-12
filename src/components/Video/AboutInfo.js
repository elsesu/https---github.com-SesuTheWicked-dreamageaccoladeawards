/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";
import AboutBg from "../Video Gallery/Blue & Red Neon Coming Soon Mobile Video_20250729_172329_0001.mp4";

const AboutInfo = () => (
  <div css={styles} className="aboutInfo">
   <video className="video"
      src={AboutBg} 
      autoPlay 
      loop 
      muted 
      playsInline
      style={{
        width: "100%",
        borderRadius: "20px", // rounded corners
        objectFit: "cover" // ensures it fits background style
      }}
    />
  </div>
);

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .video {
    width: 100%;
    max-height: 700px; /* adjust this to make it shorter */
    border-radius: 20px;
    object-fit: cover; /* crops while keeping aspect ratio */
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
