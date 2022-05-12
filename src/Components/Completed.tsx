import React, { useState } from "react";
import styled from "styled-components";
import { openTreasure } from "../firebaseConfig";
import Button from "../styles/Button";
import Completedfinal from "./Completedfinal";
import Popup from "./Popup";
import ProgressBar from "./ProgressBar";
const StyledTopBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;
const StyledComplete = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  font-size: 30px;
  color: var(--main);
  text-align: center;
  margin-bottom: 20px;
`;

const SubHeader = styled.div`
  width: 100%;
  font-size: 16px;
  color: var(--sub);
  text-align: center;
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
    nextPage: () => void;
    percentComplete: number;
}
const Completed = (props:Props) => {
    const [name, setName] = useState("");
    const [team, setTeam] = useState("");
    const [error, setError] = useState(false);
    const [firebaseerror, setFireError] = useState(false);
    const [finish, setFinish] = useState(false);
   
    const handleSubmit = async () => {
      
        if (name==="" || name.length===0){
            setError(true);
        }
        else {
            try{
            await openTreasure({name,team});
            setFinish(true);
          }
            catch(error){
              console.log("error",error);
              setFireError(true);
            } 
          
        }
      };
    if (finish===false){
    return (
      <StyledTopBar>
        <ProgressBar percentComplete={props.percentComplete} />
  
      <StyledComplete>
      <TextArea>
        <Header>You are almost there!!</Header>
        <SubHeader>
            Enter the details to open the Treasure..
        </SubHeader>
      </TextArea>
      <Input
            placeholder={"Enter Your Name.."}
            onChange={(event: any) => setName(event.target.value)}
          ></Input>
           <Input
            placeholder={"Enter Team Name(if any).."}
            onChange={(event: any) => setTeam(event.target.value)}
          ></Input>
          <Button onClick={() => handleSubmit()}>Finish</Button>
          <Popup
        open={error}
        content={
          <ErrorContent>
            <ErrorHeader>Name is empty</ErrorHeader>
            <ErrorSubHeader>Enter your Name and try again</ErrorSubHeader>
          </ErrorContent>
        }
        close={() => setError(false)}/>
        <Popup
        open={firebaseerror}
        content={
          <ErrorContent>
            <ErrorHeader>Oops..Something happened</ErrorHeader>
            <ErrorSubHeader>Please try submitting again</ErrorSubHeader>
          </ErrorContent>
        }
        close={() => setFireError(false)}/>
 
    </StyledComplete>
    </StyledTopBar>
  );
}else{
    props.nextPage();
    return(<Completedfinal open={finish}/>);
};

}
export default Completed;
