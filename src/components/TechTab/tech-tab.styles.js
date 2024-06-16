import styled from 'styled-components';

const StyledTechTab = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

const StyledTechTabElement = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 80px;
	outline: 0.5px solid white;
	border-radius: 50%;
	color: ${({ $active }) => ($active ? '#0B0D17' : 'white')};
	background-color: ${({ $active }) => ($active ? 'white' : 'transparent')};
	font-size: 32px;
	font-family: 'Bellefair', serif;
`;

export { StyledTechTab, StyledTechTabElement };
