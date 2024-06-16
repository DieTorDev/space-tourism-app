import { useState } from 'react';
import TechText from '../TechText/TechText';
import TECH_DATA from '../../constants/tech-data';
import { StyledTechContainer } from './tech-container.styles';

const TechContainer = () => {
	const [tech, setTech] = useState(0);

	return (
		<StyledTechContainer>
			<TechText tech={TECH_DATA[tech]} setTech={setTech} />
			<img src={TECH_DATA[tech].img} alt={TECH_DATA[tech].name} />
		</StyledTechContainer>
	);
};

export default TechContainer;
