import colors from "@theme/colors";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	& b {
		color: ${colors.orange50};
	}
`;
