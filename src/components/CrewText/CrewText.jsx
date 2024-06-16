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
		</StyledCrewText>
	);
};

export default CrewText;
