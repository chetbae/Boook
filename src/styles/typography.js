import styled from "styled-components";
import colours from "./colours";
import { NavLink } from "react-router-dom";

const largeText = "64px";
const bodyText = "32px";
const smallText = "16px";
// const tinyText = "8px";

const Heading = styled.p`
    margin: 0px;
    font-size: ${largeText};
    padding-top: 10px;
    font-family: "Open Sans", sans-serif;
    font-weight: 1000;
    word-wrap: normal;
    text-align: center;
    color: ${colours.darkblue};
`;

const Body = styled.span`
    margin: 0px;
    font-size: ${bodyText};
    padding-bottom: 6px;
    font-family: "Open Sans", sans-serif;
    word-wrap: normal;
    text-align: left;
    color: ${colours.darkblue};
    letter-spacing: 0.5px;
    font-weight: 700;
    line-height: 30px;
`;

const BodyBold = styled.span`
  font-size: ${bodyText};
  margin-bottom: 4px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colours.darkblue};
  letter-spacing: 0.5px;
  font-weight: 900;
`;

const ButtonText = styled.p`
    background-color: ${colours.pink};
    font-size: ${smallText};
    margin: 4px;
    font-family: "Open Sans", sans-serif;
    word-wrap: normal;
    color: ${colours.darkblue};
    letter-spacing: 0.5px;
    font-weight: 700;
    &:hover {
    background-color: ${colours.peach};
    color: ${colours.background};
    }
`;

const Date = styled(BodyBold)`
    color: ${colours.red};
`;

const Titles = styled(Body)`
    font-size: ${smallText};
`;

export const typography = {
    Heading: Heading,
    Body: Body,
    BodyBold: BodyBold,
    ButtonText: ButtonText,
    Date: Date,
    Titles: Titles
};