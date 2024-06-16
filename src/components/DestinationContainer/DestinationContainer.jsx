import { useState } from 'react';
import DestinationPlanetImg from '../DestinationPlanetImg/DestinationPlanetImg';
import DestinationPlanetText from '../DestinationPlanetText/DestinationPlanetText';
import { StyledDestinationContainer } from './destination-container.styles';
import DESTINATION_DATA from '../../constants/destination-data';

const DestinationContainer = () => {
	const [planet, setPlanet] = useState(0);

	return (
		<StyledDestinationContainer>
			<DestinationPlanetImg planet={DESTINATION_DATA[planet]} />
			<DestinationPlanetText
				planet={DESTINATION_DATA[planet]}
				setPlanet={setPlanet}
			/>
		</StyledDestinationContainer>
	);
};

export default DestinationContainer;
