import styled from 'styled-components';

const StyledDestinationPlanetText = styled.article`
	width: 445px;
	height: 472px;
	color: white;
`;

const StyledDestinationTitle = styled.h1`
	margin: 0;
	font-family: 'Bellefair', serif;
	font-size: 100px;
	font-weight: 400;
`;

const StyledDestinationText = styled.p`
	font-family: 'Barlow Condensed', sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 32px;
	letter-spacing: 1px;
`;

const StyledDestinationInfo = styled.div`
	display: flex;
	gap: 80px;

	& h4 {
		font-family: 'Barlow Condensed', sans-serif;
		font-size: 14px;
		font-weight: 200;
		letter-spacing: 2px;
	}

	& p {
		font-family: 'Bellefair', serif;
		font-size: 28px;
		font-weight: 400;
		margin: 0;
	}
`;

export {
	StyledDestinationPlanetText,
	StyledDestinationTitle,
	StyledDestinationText,
	StyledDestinationInfo
};
