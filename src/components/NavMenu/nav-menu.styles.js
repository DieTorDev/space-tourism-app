import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavMenu = styled.nav`
	display: flex;
	justify-content: end;
	padding-right: 123px;
	width: 830px;
	height: 96px;
	backdrop-filter: blur(40px);
	font-family: 'Barlow Condensed', sans-serif;
	position: relative;

	&::after {
		content: ' ';
		position: absolute;
		width: 473px;
		height: 0.5px;
		background-color: white;
		left: -415px;
		top: 48px;
	}
`;

const StyledNavList = styled.ul`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 48px;
`;

const StyledMenuOption = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 11px;

	&.active {
		border-bottom: 3px solid white;
	}
`;

const StyledMenuNumber = styled.span`
	color: white;
	font-weight: bolder;
`;

const StyledMenuText = styled.p`
	color: white;
	font-size: 16px;
	font-weight: 400;
`;

export {
	StyledNavMenu,
	StyledNavList,
	StyledMenuOption,
	StyledMenuNumber,
	StyledMenuText
};
