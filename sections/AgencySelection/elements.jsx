import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  margin-bottom: 2rem;
`;


export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 4rem auto 0;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: .3rem 0 0;
  text-align: center;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  margin: 0 auto;
  font-family: sans-serif;
`;


export const StyledVideoContainer = styled(({ ...props }) => <div {...props} />)`
  width: fit-content;

  @media (max-width: 1024px) {
    margin-bottom: 2rem;
  }
`;

export const StyledOuterContainer = styled(({ ...props}) => <div {...props}/>)`
  background: url("/img/background.png") 25% / contain no-repeat;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const StyledInnerContainer = styled(({ ...props}) => <div {...props}/>)`
  display: flex;
  align-items: center;
  margin-left: 17rem;

  @media (max-width: 1024px) {
    margin: auto;
    flex-direction: column;
  }
`;

export const StyledSection = styled(({ ...props}) => <div {...props}/>)`
  margin-left: 3rem;

  @media (max-width: 1024px) {
    margin-left: 0;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;