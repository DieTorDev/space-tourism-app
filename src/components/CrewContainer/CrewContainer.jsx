import { useState } from 'react';
import CrewText from '../CrewText/CrewText';
import { StyledCrewContainer } from './crew-container.styles';
import CREW_DATA from '../../constants/crew-data';

const CrewContainer = () => {
	const [crew, setCrew] = useState(0);

	return (
		<StyledCrewContainer>
			<CrewText crew={CREW_DATA[crew]} setCrew={setCrew} />
			<img src='/assets/crew/image-douglas-hurley.webp' alt='' />
		</StyledCrewContainer>
	);
};

export default CrewContainer;
