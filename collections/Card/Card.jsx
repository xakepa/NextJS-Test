// The Card to be exported goes here
import Image from "next/image";
import { StyledCard, StyledArticle, StyledTitle, StyledIcon, Text } from "./elements";

export const Card = ({ title, icon, size, bgcolor, children }) => {
    return (
        <StyledCard size={size} bgcolor={bgcolor}>
            
            <StyledIcon>
                <Image src={icon.src} alt="Icon" width={40} height={40} layout="fixed"/>
            </StyledIcon>

            <StyledArticle>
                <StyledTitle>{title}</StyledTitle>

                <Text>{children}</Text>
            </StyledArticle>
        </StyledCard>
    )
}