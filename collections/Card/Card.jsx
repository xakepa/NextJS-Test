// The Card to be exported goes here
import Image from "next/image";
import { StyledCard, StyledArticle, StyledTitle, Text } from "./elements";

export const Card = ({ title, icon, children }) => {
    return (
        <StyledCard>
            <Image src={icon.src} alt="Icon" width={icon.width} height={icon.height} />

            <StyledArticle>
                <StyledTitle>{title}</StyledTitle>

                <Text>{children}</Text>
            </StyledArticle>
        </StyledCard>
    )
}