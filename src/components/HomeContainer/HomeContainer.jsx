import ButtonExplore from '../ButtonExplore/ButtonExplore';
import { StyledHomeContainer } from './home-container.styles';

const HomeContainer = () => {
	return (
		<StyledHomeContainer>
			<section>
				<div>
					<h2>SO, YOU WANT TO TRAVEL TO</h2>
					<h1>SPACE</h1>
					<p>
						Let`s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we`ll give you a truly out of this
						world experience!
					</p>
				</div>
				<ButtonExplore />
			</section>
		</StyledHomeContainer>
	);
};

export default HomeContainer;
