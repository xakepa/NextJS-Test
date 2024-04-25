import styled from "styled-components";
import { forwardRef } from "react";

export const StyledCard = styled(({ ...props }) => <div {...props} />)`
    background-color: #F1F1F1;
    display: flex;
    align-items: center;
    padding: 1rem;
    margin-bottom: 2rem;
    width: ${(props) => (props.size === 'medium' ? '50%' : '55%')};
    max-width: ${(props) => (props.size === 'small' ? '45%' : '55%')};
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

export const StyledArticle = styled(({ ...props }) => <div {...props} />)`
    margin-left: 2rem;
`

export const Text = styled(forwardRef((props, ref) => <p {...props} ref={ref} />))`
    margin-top:0;
`

