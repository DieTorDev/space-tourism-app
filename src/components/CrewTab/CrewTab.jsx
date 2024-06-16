import { v4 } from 'uuid';
import CREW_DATA from '../../constants/crew-data';
import { StyledCrewTab, StyledCrewTabElement } from './crew-tab.styles';

const CrewTab = ({ crew, setCrew }) => {
	return (
		<StyledCrewTab>
			{CREW_DATA.map((element, i) => (
				<StyledCrewTabElement
					key={v4()}
					onClick={() => setCrew(i)}
					$active={crew.name === element.name}
				></StyledCrewTabElement>
			))}
		</StyledCrewTab>
	);
};

export default CrewTab;
