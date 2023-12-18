import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	padding: 1rem;
	min-height: 100%;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 350px;
	}
`;
