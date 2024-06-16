import { v4 } from 'uuid';
import DESTINATION_DATA from '../../constants/destination-data';
import {
	StyledDestinationTab,
	StyledDestinationTabElement
} from './destination-tab.styles';

const DestinationTab = ({ planet, setPlanet }) => {
	return (
		<StyledDestinationTab>
			{DESTINATION_DATA.map((p, i) => (
				<StyledDestinationTabElement
					$active={planet.name === p.name}
					key={v4()}
					onClick={() => setPlanet(i)}
				>
					{p.name.toUpperCase()}
				</StyledDestinationTabElement>
			))}
		</StyledDestinationTab>
	);
};

export default DestinationTab;
