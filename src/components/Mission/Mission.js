/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import AboutInfo from "./AboutInfo";
import AboutDate from "./AboutDate";

const Mission = () => (
  <section css={styles} className="about" id="mission">
    <Container>
      <AboutInfo />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  background: #151853;
  padding: 100px 0;
`;

export default Mission;
