import { Card } from "../../collections/Card/Card";
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
                        <Card size='small' title='Brief' icon={{src: '/img/icon1.png', width: 60, height: 60}} >Complete <b>brief writing or simple guidance</b> on what to include, we've got you covered.</Card>
                        <Card size='medium' title='Search' icon={{src: '/img/icon2.png', width: 60, height: 60}} >In-depth agency search covering; <b>criteria matching,</b> door knocking and due-dilligence vetting.</Card>
                        <Card title='Pitch' icon={{src: '/img/icon3.png', width: 60, height: 60}}>Comprehensive <b>pitch management</b> including comms, diary managment and pitch hosting.</Card>
                    </StyledSection>
                </StyledInnerContainer>
            </StyledOuterContainer>
        </>
    );
};