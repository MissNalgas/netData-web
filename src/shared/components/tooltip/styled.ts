import styled from "styled-components";

const ContentButtonMain = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-radius: 12px;
	border: ${({ theme }) => theme.colors.orange50} solid 1px;
	padding: 1%;
	width: 90%;
	margin: 1%;
`;

export { ContentButtonMain };
