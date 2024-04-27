import styled from "styled-components";
import { forwardRef } from "react";

export const StyledCard = styled(({ ...props }) => <div {...props} />)`
    background-color: ${(props) => (props.bgcolor)};
    max-width: ${(props) => props.size};
    display: flex;
    align-items: center;
    padding: .7rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    font-family: "Poppins", sans-serif;
    border: 2px solid transparent;
    transition: 0.2s ease-in-out;
    
    :hover {
        border: 2px solid blue;
    }

    @media (max-width: 1300px) {
        max-width: 60%;
        width: 60%;
    }
`
export const StyledTitle = styled(forwardRef((props, ref) => <h3 {...props} ref={ref} />))`
    display: block;
    margin: 0;
    ${StyledCard}:hover & {
        color: blue;
        text-decoration: underline; 
    }
`

export const StyledIcon = styled(({ ...props }) => <div {...props} />)`
  padding: 0 1rem;
`

export const StyledArticle = styled(({ ...props }) => <div {...props} />)`
`

export const Text = styled(forwardRef((props, ref) => <p {...props} ref={ref} />))`
    margin-top:0;
`

