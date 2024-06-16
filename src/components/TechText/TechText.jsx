import TechTab from '../TechTab/TechTab';
import {
	StyledTechInfo,
	StyledTechInfoContainer,
	StyledTechInfoSubititle,
	StyledTechInfoTitle,
	StyledTechText,
	StyledTechTitle
} from './tech-text.styles';

const TechText = ({ tech, setTech }) => {
	return (
		<StyledTechText>
			<StyledTechTitle>
				<span>03</span>SPACE LAUNCH 101
			</StyledTechTitle>
			<StyledTechInfoContainer>
				<TechTab tech={tech} setTech={setTech} />
				<div>
					<StyledTechInfoSubititle>THE TECHNOLOGY...</StyledTechInfoSubititle>
					<StyledTechInfoTitle>{tech.name.toUpperCase()}</StyledTechInfoTitle>
					<StyledTechInfo>{tech.text}</StyledTechInfo>
				</div>
			</StyledTechInfoContainer>
		</StyledTechText>
	);
};

export default TechText;
