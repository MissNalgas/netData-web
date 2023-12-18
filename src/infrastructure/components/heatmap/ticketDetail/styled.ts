import styled from "styled-components";

export const PentaContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	place-content: center;
	gap: 2rem 0;
`;
