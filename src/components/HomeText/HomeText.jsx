import {
	StyledHomeSubtitle,
	StyledHomeText,
	StyledHomeTextContainer,
	StyledHomeTitle
} from './home-text.styles';

const HomeText = () => {
	return (
		<StyledHomeTextContainer>
			<StyledHomeSubtitle>SO, YOU WANT TO TRAVEL TO</StyledHomeSubtitle>
			<StyledHomeTitle>SPACE</StyledHomeTitle>
			<StyledHomeText>
				Let`s face it; if you want to go to space, you might as well genuinely
				go to outer space and not hover kind of on the edge of it. Well sit
				back, and relax because we`ll give you a truly out of this world
				experience!
			</StyledHomeText>
		</StyledHomeTextContainer>
	);
};

export default HomeText;
