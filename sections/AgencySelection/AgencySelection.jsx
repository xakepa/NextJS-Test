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

export const ManagedAgencySelection = ({ video, title, description, cardTitle, cardIcon, cardText, cards, cardsToDisplay, ...props }) => {
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
                        {cards.slice(0, cardsToDisplay).map((cardData, index) => (
                            <Card
                                key={index}
                                bgcolor={cardData.bgcolor}
                                size={cardData.size}
                                title={cardData.title}
                                icon={cardData.icon}
                            >
                                {cardData.content} 
                            </Card>
                        ))}
                    </StyledSection>
                </StyledInnerContainer>
            </StyledOuterContainer>
        </>
    );
};