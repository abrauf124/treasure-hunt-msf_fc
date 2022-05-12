import React from "react";
import styled from "styled-components";
import sunlight from "../assets/Sunlight.svg";
import Button from "../styles/Button";
import intro from "../assets/Intro.svg";

const StyledIntro = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
  color: var(--main);
  font-size: 30px;
`;

const Image = styled.img`
  width: 80%;
  max-height:80%;
`;

type Props = {
  nextPage: () => void;
};

const Intro = (props: Props) => {
  return (
    <StyledIntro>
      <Image src={intro}></Image>
      <Header>Welcome Farookian's. Let's Hunt !!</Header>
      <Button onClick={() => props.nextPage()}>Start</Button>
    </StyledIntro>
  );
};

export default Intro;
