import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-scroll";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 10px;
  padding-top: 110px;
  .image {
    width: 200px;
  }
  .title {
    font-size: 55px;
    font-weight: bold;
    color: #19f919;
    text-align: center;
    margin: 0;
  }
  .subtitle {
    font-size: 24px;
    text-align: center;
    color: #f6ff00;
  }
  .button {
    border: 0;
    outline: 0;
    border-radius: 16px;
    font-family: Minecraft Ten;
    font-size: 32px;
    font-weight: 500;

    color: #fff;
    background: #009a9a;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 30px;
    padding-top: 4px;
  }

  @media only screen and (max-width: 520px) {
    .image {
      width: 40%;
    }
    .title {
      font-size: 36px;
    }
    .subtitle {
      font-size: 16px;
    }
    .button {
      font-size: 16px;
      padding-top: 8px;
    }
  }
`;

const HeroSection = () => {
  return (
    <Col className="mx-auto">
      <Wrapper>
        <img src="./images/creativerse.png" alt="" className="image" />
        <h1 className="title">Creativerse</h1>
        <p className="m-0 subtitle">
          Decentralized Minecraft Protocol, secured by Ethereum
        </p>
        <Link
          to="learnmore"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          {" "}
          <button className="button my-3">Learn More</button>
        </Link>
        <Link
          to="learnmore"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <BsChevronDown color="#fff" style={{ cursor: "pointer" }} />
        </Link>
      </Wrapper>
    </Col>
  );
};
export default HeroSection;
