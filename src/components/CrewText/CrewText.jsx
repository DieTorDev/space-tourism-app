import CrewTab from '../CrewTab/CrewTab';
import {
	StyledCrewInfo,
	StyledCrewName,
	StyledCrewRank,
	StyledCrewText,
	StyledCrewTitle
} from './crew-text.styles';

const CrewText = ({ crew, setCrew }) => {
	return (
		<StyledCrewText>
			<StyledCrewTitle>
				<span>02</span>MEET YOUR CREW
			</StyledCrewTitle>
			<StyledCrewRank>{crew.rank.toUpperCase()}</StyledCrewRank>
			<StyledCrewName>{crew.name.toUpperCase()}</StyledCrewName>
			<StyledCrewInfo>{crew.text}</StyledCrewInfo>
			<CrewTab crew={crew} setCrew={setCrew} />
		</StyledCrewText>
	);
};

export default CrewText;
