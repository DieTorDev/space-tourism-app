import ButtonExplore from '../ButtonExplore/ButtonExplore';
import HomeText from '../HomeText/HomeText';
import { StyledHomeContainer } from './home-container.styles';

const HomeContainer = () => {
	return (
		<StyledHomeContainer>
			<HomeText />
			<ButtonExplore />
		</StyledHomeContainer>
	);
};

export default HomeContainer;
