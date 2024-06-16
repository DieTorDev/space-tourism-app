import styled from 'styled-components';

const StyledCrewText = styled.article`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const StyledCrewTitle = styled.h2`
	color: white;
	font-family: 'Barlow Condensed', sans-serif;
	font-size: 28px;
	font-weight: 200;
	letter-spacing: 4.72px;
	margin-top: 0;
	margin-bottom: 154px;

	& span {
		margin-right: 24px;
		color: gray;
		font-weight: bold;
	}
`;

const StyledCrewRank = styled.h3`
	margin: 0;
	color: lightgray;
	font-family: 'Bellefair', serif;
	font-size: 32px;
	font-weight: 200;
`;

const StyledCrewName = styled.h1`
	margin-bottom: 27px;
	margin-top: 15px;
	color: white;
	font-family: 'Bellefair', serif;
	font-size: 56px;
	font-weight: 200;
`;

const StyledCrewInfo = styled.p`
	width: 444px;
	color: lightgray;
	margin: 0;
	line-height: 32px;
	font-family: 'Barlow Condensed', sans-serif;
	font-size: 18px;
	font-weight: 200;
	letter-spacing: 1.7px;
`;

export {
	StyledCrewText,
	StyledCrewTitle,
	StyledCrewRank,
	StyledCrewName,
	StyledCrewInfo
};
