import styled from 'styled-components';

const StyledTechText = styled.section`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const StyledTechTitle = styled.h2`
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

const StyledTechInfoContainer = styled.article`
	display: flex;
	gap: 80px;
`;

const StyledTechInfoSubititle = styled.h2`
	margin: 0;
	font-family: 'Barlow Condensed', sans-serif;
	font-size: 16px;
	font-weight: 400;
	color: gray;
	letter-spacing: 2.7px;
`;

const StyledTechInfoTitle = styled.h1`
	margin-top: 11px;
	margin-bottom: 17px;
	color: white;
	font-family: 'Bellefair', serif;
	font-size: 52px;
	font-weight: 400;
`;

const StyledTechInfo = styled.p`
	margin: 0;
	color: #d0d6f9;
	font-family: 'Barlow Condensed', sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 32px;
	letter-spacing: 1px;
`;

export {
	StyledTechText,
	StyledTechTitle,
	StyledTechInfoContainer,
	StyledTechInfoSubititle,
	StyledTechInfoTitle,
	StyledTechInfo
};
