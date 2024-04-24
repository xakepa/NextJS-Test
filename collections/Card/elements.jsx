import styled from "styled-components";
import { forwardRef } from "react";

export const StyledCard = styled(({ ...props }) => <div {...props} />)`
    background-color: #F1F1F1;
    display: flex;
    align-items: center;
    padding: 1rem;
    margin-bottom: 2rem;
    max-width: 60%;
    border-radius: 10px;
`
export const StyledTitle = styled(forwardRef((props, ref) => <h3 {...props} ref={ref} />))`
    display: block;
    margin: 0;
`

export const StyledArticle = styled(({ ...props }) => <div {...props} />)`
    margin-left: 2rem;
`

export const Text = styled(forwardRef((props, ref) => <p {...props} ref={ref} />))`
    font-size: 18px;
`

