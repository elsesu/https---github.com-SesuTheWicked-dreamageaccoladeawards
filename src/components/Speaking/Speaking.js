/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Overlay from "../GlobalComponents/Overlay";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import Button from "../GlobalComponents/Button";
import SpeakingBg from "../../img/speakingBg.jpg";
import SpeakingCard from "./SpeakingCard";
import achado from "../Award nominees/achado.jpg"
import abbaMoro from "../Award nominees/abba-moro.jpg"
import adedolopo from "../Award nominees/adedolapo-vaatia.jpg"
import apehHarrison from "../Award nominees/apeh-harrison-iwodi.jpg"
import arome from "../Award nominees/arome-osayi.jpg"
import asiwaju from "../Award nominees/asiwaju-akinkunmi.jpg"
import akinkumi from "../Award nominees/ato-mnena-anita.jpg"
import ato from "../Award nominees/atom-lim.jpg"
import audu from "../Award nominees/audu-innocent-ogbe.jpg"
import barbara from "../Award nominees/barbara-nwadialo.jpg"
import becky from "../Award nominees/becky-orphin.jpg"
import blessing from "../Award nominees/blessing-onuh.jpg"
import bongos from "../Award nominees/bongos-ikwue.jpg"
import daniel from "../Award nominees/daniel-amokachi.jpg"
import david from "../Award nominees/david-ogewu.jpg"
import nguper from "../Award nominees/doc-nguper.jpg"
import enohor from "../Award nominees/enohor-ochepa.jpg"
import eunice from "../Award nominees/eunice.jpg"
import akume from "../Award nominees/george-akume.jpg"
import haakyav from "../Award nominees/haakyav-tombu-peter.jpg"
import inalegwu from "../Award nominees/inalegwu-omakwu.jpg"
import idibia from "../Award nominees/innocent-idibia.jpg"
import josephine from "../Award nominees/josephine-jordan.jpg"
import king from "../Award nominees/king.jpg"
import ewaoche from "../Award nominees/michael-ewaoche.jpg"
import aondokaa from "../Award nominees/micheal-aondokaa.jpg"
import ahula from "../Award nominees/michie-ahula.jpg"
import orubibi from "../Award nominees/mimi-orubibi.jpg"
import nguvaan from "../Award nominees/nguvaan-kyenge.jpg"
import udeh from "../Award nominees/oche-udeh.jpg"
import omudu from "../Award nominees/pastor-king-omudu.jpg"
import oganya from "../Award nominees/patricia-oganya.jpg"
import enenche from "../Award nominees/paul-enenchr.jpg"
import adejoh from "../Award nominees/peter-adejoh.jpg"
import ayo from "../Award nominees/prince-ayo.jpg"
import leonard from "../Award nominees/prince-leonard-ocheuje.jpg"
import asemakaha from "../Award nominees/raymond-asemakaha.jpg"
import regina from "../Award nominees/regina-akume.jpg"
import doofan from "../Award nominees/regina-doofan-gege.jpg"
import zaaki from "../Award nominees/zaaki-azzay.jpg"
import vivian from "../Award nominees/vivian-tseen.jpg"
import victor from "../Award nominees/victor-tartenger.jpg"
import veronica from "../Award nominees/veronica-enewa.png"
import vera from "../Award nominees/vera-obenita-ojabo.jpg"
import ukan from "../Award nominees/ukan-kurugh.png"
import tony from "../Award nominees/tony.jpg"
import thomas from "../Award nominees/thomas-shikaan.jpg"
import terungwa from "../Award nominees/terungwa-hwande.jpg"
import terseer from "../Award nominees/terseer-ugbor.jpg"
import kidd from "../Award nominees/terseer-kidd-waya.jpg"
import terry from "../Award nominees/terry-waya.jpg"
import doose from "../Award nominees/terlumun-doose-gertrude.jpg"
import sony from "../Award nominees/sony-echono.jpg"
import samson from "../Award nominees/samson-idoko.jpg"
import sam from "../Award nominees/sam-ode.jpg"
import riches from "../Award nominees/riches-okwori-ogeyi.jpg"
import reginadofaan from "../Award nominees/regina-doofan-gege.jpg"
import reginaAkume from "../Award nominees/regina-akume.jpg"
import jordan from "../Award nominees/josephine-jordan.jpg"
import kyenge from "../Award nominees/nguvaan-kyenge.jpg"

const Speaking = () => (
  <section css={styles} className="speaking" id="speakers">
    <Overlay
      overlay="linear-gradient(120deg, #505add 0%, #df42b1 100%)"
      opacity=".9"
    />
    <Title subtitle="" title="OUR AWARD NOMINEES" />
    <Container>
      <SpeakingCard
        speakerName="Albert Barnes"
        speakerDesc="Founder"
        speakerImg={achado}
      />
      <SpeakingCard
        speakerImg={abbaMoro}
      />
      <SpeakingCard
        speakerImg={apehHarrison}
      />
      <SpeakingCard
        speakerImg={ato}
      />
      <SpeakingCard
        speakerImg={asiwaju}
      />
      <SpeakingCard
        speakerImg={audu}
      />
       <SpeakingCard
        speakerImg={adedolopo}
      />
       <SpeakingCard
        speakerImg={arome}
      />
       <SpeakingCard
        speakerImg={barbara}
      />
        <SpeakingCard
        speakerImg={blessing}
      />
        <SpeakingCard
        speakerImg={becky}
      />
        <SpeakingCard
        speakerImg={bongos}
      />
        <SpeakingCard
        speakerImg={daniel}
      />
        <SpeakingCard
        speakerImg={david}
      />
        <SpeakingCard
        speakerImg={nguper}
      />
        <SpeakingCard
        speakerImg={enohor}
      />
        <SpeakingCard
        speakerImg={eunice}
      />
        <SpeakingCard
        speakerImg={thomas}
      />

<SpeakingCard
        speakerImg={terry}
      />
        <SpeakingCard
        speakerImg={adejoh}
      />
        <SpeakingCard
        speakerImg={enenche}
      />
        <SpeakingCard
        speakerImg={oganya}
      />
        <SpeakingCard
        speakerImg={nguvaan}
      />
        <SpeakingCard
        speakerImg={udeh}
      />
        <SpeakingCard
        speakerImg={omudu}
      />
        <SpeakingCard
        speakerImg={terry}
      />
        <SpeakingCard
        speakerImg={ayo}
      />
        <SpeakingCard
        speakerImg={terungwa}
      />
        <SpeakingCard
        speakerImg={orubibi}
      />
        <SpeakingCard
        speakerImg={ahula}
      />
        <SpeakingCard
        speakerImg={reginaAkume}
      />
        <SpeakingCard
        speakerImg={reginadofaan}
      />
        <SpeakingCard
        speakerImg={regina}
      />
        <SpeakingCard
        speakerImg={akinkumi}
      />
        <SpeakingCard
        speakerImg={akume}
      />
        <SpeakingCard
        speakerImg={josephine}
      />
        <SpeakingCard
        speakerImg={jordan}
      />
        <SpeakingCard
        speakerImg={sony}
      />
        <SpeakingCard
        speakerImg={samson}
      />
      <SpeakingCard
        speakerImg={haakyav}
      />
      <SpeakingCard
        speakerImg={inalegwu}
      />
      <SpeakingCard
        speakerImg={king}
      />
      <SpeakingCard
        speakerImg={ewaoche}
      />
      <SpeakingCard
        speakerImg={leonard}
      />
      <SpeakingCard
        speakerImg={asemakaha}
      />

<SpeakingCard
        speakerImg={vera}
      />
      <SpeakingCard
        speakerImg={ukan}
      />
      <SpeakingCard
        speakerImg={tony}
      />

<SpeakingCard
        speakerImg={tony}
      />
       <SpeakingCard
        speakerImg={idibia}
      />
       <SpeakingCard
        speakerImg={aondokaa}
      />
       <SpeakingCard
        speakerImg={sam}
      />
       <SpeakingCard
        speakerImg={riches}
      />
       <SpeakingCard
        speakerImg={kyenge}
      />
       <SpeakingCard
        speakerImg={doofan}
      />

<SpeakingCard
        speakerImg={zaaki}
      />
      
      <SpeakingCard
        speakerImg={vivian}
      />
      
      <SpeakingCard
        speakerImg={victor}
      />
      
      <SpeakingCard
        speakerImg={terseer}
      />
      
      <SpeakingCard
        speakerImg={kidd}
      />

<SpeakingCard
        speakerImg={veronica}
      />
      
      <SpeakingCard
        speakerImg={doose}
      />
       
      
    </Container>
    <div className="buttonWrap">
      <Button btnTitle="View all Awardees" />
    </div>
  </section>
);

const styles = css`
  width: 100%;
  padding: 100px 0;
  position: relative;
  background: url('${SpeakingBg}') no-repeat center/cover;
  .container {
    position: relative;
    padding: 40px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .buttonWrap {
    display: flex;
    justify-content: center;
    .btn {
      background: transparent;
      border: 1px solid #fff;
      position: relative;
      &:hover {
        background: #df42b1;
        border: 1px solid #df42b1;
      }
    }
  }
  @media (max-width: 810px) {
    .container {
      flex-direction: column;
      align-items: center;
      flex-wrap: nowrap;
    }
  }
`;

export default Speaking;
