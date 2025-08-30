/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import BlogBg from "../Projects/1741733339582.jpg";
import Overlay from "../GlobalComponents/Overlay";
import BlogCard from "./BlogCard";
import BlogOneBg from "../Projects/DSC_7374.JPG_1.jpg";
import BlogTwoBg from "../Projects/27.jpg";
import BlogThreeBg from "../Projects/CSC_4667.JPG";

const Blog = () => (
  <section css={styles} className="blog" id="blog">
    <Overlay
      overlay="linear-gradient(120deg, #505add 0%, #df42b1 100%)"
      opacity=".9"
    />
    <Title subtitle="OUR PROJECTS" title="LATEST NEWS" />
    <Container>
      <BlogCard blogImg={BlogOneBg} blogTitle="Cultural day" />
      <BlogCard blogImg={BlogTwoBg} blogTitle="Girl In Focus Magazine" />
      <BlogCard blogImg={BlogThreeBg} blogTitle="School Outreach Programe" />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 100px 0;
  position: relative;
  background: url('${BlogBg}') no-repeat center/cover;
  .container {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 60px 0 0 0;
  }
  @media(max-width: 826px){
    .container{
      flex-direction: column;
      align-items: center;
    }
  }
  @media(min-width: 827px) and (max-width: 1168px){
    .container{
      flex-wrap: wrap;
    }
  }
`;

export default Blog;
