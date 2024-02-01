import styled from "styled-components";

type StyledContainerProps = {
	$justify?: string;
};

export const ContainerFlex = styled.div<StyledContainerProps>`
	display: flex;
	width: 100%;
	justify-content: ${({ $justify: justify }) => justify ?? justify};
`;
