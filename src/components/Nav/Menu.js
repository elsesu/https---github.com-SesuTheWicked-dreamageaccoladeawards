/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Menu = ({ setIsOpened }) => {
  const links = [
    {
      name: "home",
      href: "#home",
      id: "1",
    },
    {
      name: "About Us",
      href: "#about",
      id: "2",
    },
    {
      name: "Awardees",
      href: "#speakers",
      id: "3",
    },
    {
      name: "Vision",
      href: "#mission",
      id: "4",
    },
    {
      name: "Contact",
      href: "#contact",
      id: "5",
    },
    {
      name: "Projects",
      href: "#blog",
      id: "6",
    },
  ];

  return (
    <div className="menu" css={styles}>
      {links.map((link) => (
        <a
          onClick={() => setIsOpened(false)}
          key={link.id}
          className={link.id === "1" ? "active" : ""}
          href={link.href}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

const styles = css`
  padding: 20px 0;
  a {
    position: relative;
    text-decoration: none;
    display: inline-block;
    color: #fff;
    text-transform: uppercase;
    transition: color 600ms ease-in-out;
    font-size: 16px;
    font-weight: 500;
    margin-right: 56px;
    &:hover,
    &.active {
      color: #df42b1;
    }
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    a {
      width: 100%;
      font-size: 22px;
      &:not(:last-of-type) {
        margin-bottom: 16px;
      }
    }
  }
`;

export default Menu;
