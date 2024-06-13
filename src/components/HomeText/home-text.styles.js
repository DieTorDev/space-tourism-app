import styled from 'styled-components';

const StyledHomeTextContainer = styled.section`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-content: start;
	gap: 24px;
	color: white;
`;

const StyledHomeSubtitle = styled.h2`
	font-family: 'Barlow Condensed', sans-serif;
	font-size: 28px;
	font-weight: 400;
	margin: 0;
	color: #d0d6f9;
`;

const StyledHomeTitle = styled.h1`
	font-family: 'Bellefair', serif;
	font-size: 150px;
	margin: 0;
`;

const StyledHomeText = styled.p`
	font-family: 'Barlow Condesed', sans-serif;
	font-size: 18px;
	font-weight: 400;
	letter-spacing: 1px;
	line-height: 32px;
	color: #d0d6f9;
	margin: 0;
`;

export {
	StyledHomeTextContainer,
	StyledHomeSubtitle,
	StyledHomeTitle,
	StyledHomeText
};
