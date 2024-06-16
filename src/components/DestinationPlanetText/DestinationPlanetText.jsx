import DestinationTab from '../DestinationTab/DestinationTab';
import {
	StyledDestinationInfo,
	StyledDestinationPlanetText,
	StyledDestinationText,
	StyledDestinationTitle
} from './destination-planet-text.styles';

const DestinationPlanetText = ({ planet, setPlanet }) => {
	return (
		<StyledDestinationPlanetText>
			<DestinationTab planet={planet} setPlanet={setPlanet} />
			<StyledDestinationTitle>
				{planet.name.toUpperCase()}
			</StyledDestinationTitle>
			<StyledDestinationText>{planet.text}</StyledDestinationText>
			<StyledDestinationInfo>
				<div>
					<h4>AVG. DISTANCE</h4>
					<p>{planet.distance.toUpperCase()}</p>
				</div>
				<div>
					<h4>AVG. DISTANCE</h4>
					<p>{planet.time.toUpperCase()}</p>
				</div>
			</StyledDestinationInfo>
		</StyledDestinationPlanetText>
	);
};

export default DestinationPlanetText;
