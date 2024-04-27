import { Card } from "~/collections/Card";
import {
    StyledTextContainer,
    StyledContainer,
    StyledTitle,
    StyledDescription,
    StyledVideoContainer,
    StyledOuterContainer,
    StyledInnerContainer,
    StyledSection
} from "./elements";

export const ManagedAgencySelection = ({ video, title, description, cardTitle, cardIcon, cardText, ...props }) => {
    return (
        <>
            <StyledContainer {...props}>
                <StyledTextContainer>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledDescription>{description}</StyledDescription>
                </StyledTextContainer>
            </StyledContainer>

            <StyledOuterContainer>
                <StyledInnerContainer>
                    <StyledVideoContainer>
                        <video src={video.src} width={video.width} height={video.height} type="video/mp4" controls />
                    </StyledVideoContainer>

                    <StyledSection>
                        <Card bgcolor='#F9F9F9' size='50%' title='Brief' icon={{src: '/img/icon1.png'}} >Complete <b>brief writing or simple guidance</b> on what to include, we've got you covered.</Card>
                        <Card bgcolor='#F4F4F4' size='53%' title='Search' icon={{src: '/img/icon2.png'}} >In-depth agency search covering; <b>criteria matching,</b> door knocking and due-dilligence vetting.</Card>
                        <Card bgcolor='#F1F1F1' size='56%' title='Pitch' icon={{src: '/img/icon3.png'}}>Comprehensive <b>pitch management</b> including comms, diary managment and pitch hosting.</Card>
                    </StyledSection>
                </StyledInnerContainer>
            </StyledOuterContainer>
        </>
    );
};