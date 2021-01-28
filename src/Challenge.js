import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import Grunge from "./img/grunge-background.jpg";
import Skull from "./img/skeletor.svg";
import DeskOne from "./img/desks/desk-one.jpg";
import DeskTwo from "./img/desks/desk-two.jpg";
import DeskThree from "./img/desks/desk-three.jpg";
import DeskFour from "./img/desks/desk-four.jpg";

const magicSpin = keyframes`
0%{
    transform:rotate(0deg)
}
25%{
    transform:rotate(25deg);
}
50%{
    transform:rotate(-25deg)
}
75%{
    transform:rotate(25deg)
}
100%{
    transform:rotate(0deg)
}
`;

const goldeneye = keyframes`
0%{
    text-shadow: 0px 0px 0px rgba(155,121,78, 0.0);
}
50%{
    text-shadow: 0px 0px 10px rgba(155,121,78, 0.6);
}
100%{
    text-shadow: 0px 0px 0px rgba(155,121,78, 0.0);
}
`;

const Container = styled.div`
  font-family: "Libre Franklin", sans-serif;
  color: white;
  background-image: url(${Grunge});
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(300px, auto);
  h3 {
    font-size: 2rem;
    font-weight: 200;
  }
  h4 {
    line-height: 1.5rem;
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    padding: 0 2rem;
  }
`;

const HeroSection = styled.div`
  grid-column: 3/5;
  grid-row: 2/3;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  img {
    max-width: 35%;
    animation: 10s ${magicSpin} ease-in-out infinite;
  }
  span {
    color: #9b794e;
    animation: 4s ${goldeneye} ease-in-out infinite;
  }
  h1 {
    font-size: 3em;
    text-transform: uppercase;
    transform: rotate(8deg);
    transition: 1s;
  }
  h1:hover {
    transform: rotate(-5deg);
  }
  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 2rem;
    }
    padding: 9rem 0 0 0;
  }
`;

const DirectionLine = styled.div`
  grid-row: 3/4;
  grid-column: 3/5;
  border-left: 1px solid white;
  height: 450px;
  position: relative;
  left: 50%;
  top: 0;
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;

const TextRow = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const CodeColumn = styled.p`
  text-align: left;
  font-size: 1.2rem;
  padding: 2rem 2.5rem;
  line-height: 2.3rem;
  color: #a384ff;
  background-color: black;
  margin-bottom: 4rem;
  span {
    color: #5bd50d;
  }
`;

const AnswerRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0px;
  }
`;

const AnswerColumn = styled.div`
  background-color: black;
  border: 1px solid #9b794e;
  padding: 2rem;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  :hover {
    transform: translate(0px, -20px);
    background-color: #9b794e;
    color: black;
  }
  p {
    text-align: left;
    line-height: 1.5rem;
  }
`;

const QuestionOneContainer = styled.div`
  display: flex;
  flex-flow: column;
  grid-row: 4/6;
  grid-column: 2/6;
  align-items: center;
  text-align: center;
`;
const QuestionTwoContainer = styled.div`
  display: flex;
  flex-flow: column;
  grid-row: 6/8;
  grid-column: 2/6;
  align-items: center;
  text-align: center;
`;
const QuestionThreeContainer = styled.div`
  display: flex;
  flex-flow: column;
  grid-row: 8/ 11;
  grid-column: 2/6;
  align-items: center;
  text-align: center;
`;
const QuestionFourContainer = styled.div`
  display: flex;
  flex-flow: column;
  grid-row: 11/13;
  grid-column: 2/6;
  align-items: center;
  text-align: center;
`;

const DeskImages = styled.img`
  max-width: 200px;
  cursor: pointer;
  transition: 1s;
  :hover {
    transform: translate(0px, 30px) scale(1.5);
  }
  @media only screen and (max-width: 500px) {
    max-width: 125px;
  }
`;

const FinalQuestion = styled.div`
  grid-row: 14/ 16;
  grid-column: 1/ -1;
  display: flex;
  align-items: center;w
  flex-flow: column;
  a {
    opacity: 0.1;
    color: black;
  }
  @media only screen and (max-width: 500px) {
    a {
      opacity: 1;
      font-size: 2px;
    }
  }
`;
const Challenge = () => {
  const [questionOne, setQuestionOne] = useState(false);
  const [questionTwo, setQuestionTwo] = useState(false);
  const [questionThree, setQuestionThree] = useState(false);
  const [questionFour, setQuestionFour] = useState(false);
  const answerFunction = (answer, questionNumber) => {
    switch (answer) {
      case questionNumber === 1:
        setQuestionOne(() => true);
        break;
      case questionNumber === 2:
        setQuestionTwo(() => true);
        break;
      case questionNumber === 3:
        setQuestionThree(() => true);
        break;
      case questionNumber === 4:
        setQuestionFour(() => true);
        break;
      default:
        console.log("Bogus! Some kind of error happened.");
    }
  };
  return (
    <Container>
      <HeroSection>
        <img src={Skull} />
        <h1>
          Your <span>adventure</span> begins here
        </h1>
      </HeroSection>
      <DirectionLine></DirectionLine>
      <QuestionOneContainer>
        <TextRow>
          <h3>
            {questionOne
              ? "Well done!"
              : "Which of these desks doesn't belong?"}
          </h3>
        </TextRow>
        <AnswerRow>
          <DeskImages src={DeskOne} onClick={() => answerFunction(true, 1)} />
          <DeskImages
            src={DeskTwo}
            onClick={() => answerFunction(false, 1)}
            style={{ opacity: questionOne ? 0.2 : 1 }}
          />
          <DeskImages
            src={DeskThree}
            onClick={() => answerFunction(false, 1)}
            style={{ opacity: questionOne ? 0.2 : 1 }}
          />
          <DeskImages
            src={DeskFour}
            onClick={() => answerFunction(false, 1)}
            style={{ opacity: questionOne ? 0.2 : 1 }}
          />
        </AnswerRow>
      </QuestionOneContainer>
      <QuestionTwoContainer style={{ display: !questionOne ? "none" : "flex" }}>
        <TextRow>
          <h3>
            {questionTwo
              ? "You are correct! (COVID cancelled our team trip to the baseball game.)"
              : "Which of these is false?"}
          </h3>
        </TextRow>
        <AnswerRow>
          <AnswerColumn
            onClick={() => answerFunction(false, 2)}
            style={{ opacity: questionTwo ? 0.2 : 1 }}
          >
            <h4>At least one dog has pooped in the office</h4>
          </AnswerColumn>
          <AnswerColumn
            onClick={() => answerFunction(false, 2)}
            style={{ opacity: questionTwo ? 0.2 : 1 }}
          >
            <h4>
              Geoff was the first person to knock down the walls to expand the
              VSSL office
            </h4>
          </AnswerColumn>
          <AnswerColumn
            onClick={() => answerFunction(false, 2)}
            style={{ opacity: questionTwo ? 0.2 : 1 }}
          >
            <h4>The VSSL office has two decks at it's office</h4>
          </AnswerColumn>
          <AnswerColumn onClick={() => answerFunction(true, 2)}>
            <h4>VSSL once had a shout out at a Padre's game</h4>
          </AnswerColumn>
        </AnswerRow>
      </QuestionTwoContainer>
      <QuestionThreeContainer
        style={{ display: !questionTwo ? "none" : "flex" }}
      >
        <TextRow>
          <h3>
            {questionThree
              ? "const answer = true"
              : "What does the following code output to the console?"}
          </h3>
          <CodeColumn style={{ opacity: questionThree ? 0.2 : 1 }}>
            var vssl = [];
            <br />
            vssl[0] = <span>'Jake'</span>;
            <br />
            vssl[1] = <span>'Kayla'</span>;
            <br />
            vssl.dev = <span>'Andy'</span>;
            <br />
            <span>console.log</span>(vssl.length);
          </CodeColumn>
        </TextRow>
        <AnswerRow>
          <AnswerColumn
            onClick={() => answerFunction(false, 3)}
            style={{ opacity: questionThree ? 0.2 : 1 }}
          >
            <h4>Kayla</h4>
          </AnswerColumn>
          <AnswerColumn onClick={() => answerFunction(true, 3)}>
            <h4>2</h4>
          </AnswerColumn>
          <AnswerColumn
            onClick={() => answerFunction(false, 3)}
            style={{ opacity: questionThree ? 0.2 : 1 }}
          >
            <h4>Jake, Kayla</h4>
          </AnswerColumn>
          <AnswerColumn
            onClick={() => answerFunction(false, 3)}
            style={{ opacity: questionThree ? 0.2 : 1 }}
          >
            <h4>3</h4>
          </AnswerColumn>
        </AnswerRow>
      </QuestionThreeContainer>
      <QuestionFourContainer
        style={{ display: !questionThree ? "none" : "flex" }}
      >
        <TextRow>
          <h3>
            {questionFour
              ? "Your final clue is around here somewhere..."
              : "What is the difference between Let and Const?"}
          </h3>
        </TextRow>
        <AnswerRow>
          <AnswerColumn
            onClick={() => answerFunction(false, 4)}
            style={{ opacity: questionFour ? 0.2 : 1 }}
          >
            <p>
              <strong>"Const”</strong> constructs a variable, “Let” assigns a
              value to it
            </p>
          </AnswerColumn>
          <AnswerColumn
            onClick={() => answerFunction(false, 4)}
            style={{ opacity: questionFour ? 0.2 : 1 }}
          >
            <p>
              <strong>"Const”</strong> and <strong>“Let”</strong> are the same,
              it’s a matter of developer style
            </p>
          </AnswerColumn>
          <AnswerColumn onClick={() => answerFunction(true, 4)}>
            <p>
              <strong>"Const”</strong> will not change <strong>“Let”</strong>{" "}
              may be reassigned
            </p>
          </AnswerColumn>
          <AnswerColumn
            onClick={() => answerFunction(false, 4)}
            style={{ opacity: questionFour ? 0.2 : 1 }}
          >
            <p>
              <strong>"Const”</strong> constructs an object,{" "}
              <strong>“Let”</strong> assigns a value to a variable
            </p>
          </AnswerColumn>
        </AnswerRow>
      </QuestionFourContainer>
      <FinalQuestion style={{ display: !questionFour ? "none" : "flex" }}>
        <a
          href="https://vssl-agency@bitbucket.org/vssl-agency/coin.git"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://vssl-agency@bitbucket.org/vssl-agency/coin.git
        </a>
      </FinalQuestion>
    </Container>
  );
};
export default Challenge;
