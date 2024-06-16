import styled from 'styled-components';

const StyledDestinationPlanetImg = styled.section`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 97px;
`;

const StyledDestinationTitle = styled.h2`
	margin: 0;
	color: white;
	font-family: 'Barlow Condensed', sans-serif;
	font-size: 28px;
	font-weight: 300;
	letter-spacing: 1px;

	& span {
		padding-right: 28px;
		color: gray;
		font-weight: bold;
	}
`;

export { StyledDestinationPlanetImg, StyledDestinationTitle };
