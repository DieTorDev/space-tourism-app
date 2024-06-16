import {
	StyledDestinationPlanetImg,
	StyledDestinationTitle
} from './destination-planet-img.styles';

const DestinationPlanetImg = ({ planet }) => {
	return (
		<StyledDestinationPlanetImg>
			<StyledDestinationTitle>
				<span>01</span>PICK YOUR DESTINATION
			</StyledDestinationTitle>
			<img src={planet.img} alt='' />
		</StyledDestinationPlanetImg>
	);
};

export default DestinationPlanetImg;
