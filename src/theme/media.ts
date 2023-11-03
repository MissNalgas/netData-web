import facepaint from "facepaint";

const breakPoints = [451, 770, 1025, 1367, 1500];
const medias = breakPoints.map((bp) => `@media (min-width: ${bp}px)`);

export const mq = facepaint(medias);
