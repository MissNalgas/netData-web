import React from "react";
import styled from "styled-components";

interface ProgressProps {
  progress: number;
  bgColor?: string;
}

const ProgressBarContainer = styled.div<ProgressProps>`
    width: ${(props) => props.progress}%;
    border-radius: 4px;
    align-items: center;
    display: flex;
`;

const Progress = styled.div.attrs({
	className: "rounded-full",
})<ProgressProps>`
    height: 12px;
    background-color: ${(props) => props.bgColor};
    width: ${(props) => props.progress}%;
`;

export default function ProgressBar({incidents, maxIncidents, bgColor}: { incidents: number, maxIncidents: number, bgColor: string }) {
  const progress = (incidents / maxIncidents) * 100;

  return (
    <ProgressBarContainer progress={progress}>
      <Progress progress={progress} bgColor={bgColor}></Progress>
    </ProgressBarContainer>
  );
};