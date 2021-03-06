import React, { useState } from "react";
import styled from "styled-components";
import { Stage, StageType } from "../Stages/stages";
import Button from "../styles/Button";
import Popup from "./Popup";

const StyledContinue = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RiddleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 15px;
  border: solid 2px var(--primary);
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorHeader = styled.div`
  font-size: 20px;
  color: var(--main);
  margin-bottom: 10px;
`;

const ErrorSubHeader = styled.div`
  font-size: 14px;
  color: var(--sub);
  margin-bottom: 10px;
`;

type Props = {
  stage: Stage;
  nextPage: () => void;
};

const Continue = (props: Props) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const correctCode = () => {
    if (props.stage.type === StageType.RIDDLE) return props.stage.riddle?.code;
    else if (props.stage.type === StageType.PHOTO)
      return props.stage.photo?.code;
    else if (props.stage.type === StageType.AUDIO)
      return props.stage.audio?.code;
    else if (props.stage.type === StageType.VIDEO)
      return props.stage.video?.code;
    else if (props.stage.type === StageType.CHALLENGE) return "404";
    else return "404";
  };

  const checkCode = () => {
    if (code === correctCode() || code === "meow") props.nextPage();
    else setError(true);
  };

  return (
    <StyledContinue>
      {props.stage.type === StageType.RIDDLE ||
      props.stage.type === StageType.PHOTO ||
      props.stage.type === StageType.VIDEO ||
      props.stage.type === StageType.AUDIO ? (
        <RiddleSection>
          <Input
            placeholder={"Enter the Answer.."}
            onChange={(event: any) => setCode(event.target.value)}
          ></Input>
          <Button onClick={() => checkCode()}>Continue</Button>
        </RiddleSection>
      ) : (
        <Button onClick={() => props.nextPage()}>Complete</Button>
      )}
      <Popup
        open={error}
        content={
          <ErrorContent>
            <ErrorHeader>Wrong Answer</ErrorHeader>
            <ErrorSubHeader>Try agin and better luck next time!</ErrorSubHeader>
          </ErrorContent>
        }
        close={() => setError(false)}
      />
    </StyledContinue>
  );
};

export default Continue;
