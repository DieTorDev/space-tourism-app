import styled from 'styled-components';

const StyledCrewTab = styled.ul`
	display: flex;
	gap: 24px;
	margin-top: 120px;
`;

const StyledCrewTabElement = styled.li`
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: ${({ $active }) => ($active ? 'white' : '#292929')};
`;

export { StyledCrewTabElement, StyledCrewTab };
