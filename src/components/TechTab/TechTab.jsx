import { v4 } from 'uuid';
import TECH_DATA from '../../constants/tech-data';
import { StyledTechTab, StyledTechTabElement } from './tech-tab.styles';

const TechTab = ({ tech, setTech }) => {
	return (
		<StyledTechTab>
			{TECH_DATA.map((element, i) => (
				<StyledTechTabElement
					$active={tech === element}
					key={v4()}
					onClick={() => setTech(i)}
				>
					{i + 1}
				</StyledTechTabElement>
			))}
		</StyledTechTab>
	);
};

export default TechTab;
