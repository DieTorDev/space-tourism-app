import styled from 'styled-components';

const StyledDestinationTab = styled.ul`
	display: flex;
	gap: 16px;
	margin-bottom: 52px;
`;

const StyledDestinationTabElement = styled.li`
	font-family: 'Barlow Condensed', sans-serif;
	font-size: 18px;
	font-weight: 400;
	letter-spacing: 1px;
	color: lightgray;
	border-bottom: ${({ $active }) => ($active ? '3px solid white' : 'none')};
	padding-bottom: 12px;
`;

export { StyledDestinationTab, StyledDestinationTabElement };
