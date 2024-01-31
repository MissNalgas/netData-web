import styled from "styled-components";
import { BodyTwo, Overline } from "../labels/styled";
import Image from "next/image";

export const TitleCard = styled(Overline)`
	display: block;
	margin-top: 10px;
`;

export const DescriptionCard = styled(BodyTwo)`
	display: block;
	margin-top: 10px;
`;

export const Container = styled.div.attrs({
	className: "bg-shadow20 rounded-xl flex justify-center mt-4 py-3",
})`
	position: relative;
	min-height: 50%;
`;

export const ImageContainer = styled.div`
	position: relative;
	overflow: hidden;
	align-items: center;
	display: flex;
`;

export const BadgeContainer = styled.div.attrs({})`
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(20%, -40%);
	border-radius: 50%;
`;

export const Photo = styled(Image)``;
