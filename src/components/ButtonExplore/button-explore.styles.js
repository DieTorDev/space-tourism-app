import styled from 'styled-components';

const StyledExploreButton = styled.button`
	width: 274px;
	height: 274px;
	background-color: white;
	border-radius: 50%;
	color: #0b0d17;
	font-size: 32px;
	font-family: 'Bellefair', serif;
	border: none;
	transition: ease-in-out 0.2s;

	&:hover {
		box-shadow: 0 0 0 88px rgb(151, 151, 151, 0.5);
	}
`;

export { StyledExploreButton };
