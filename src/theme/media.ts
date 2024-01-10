import facepaint from "facepaint";

const breakPoints = [320, 600, 768, 1024, 1200];
const medias = breakPoints.map((bp) => `@media (min-width: ${bp}px)`);

export const mq = facepaint(medias);
