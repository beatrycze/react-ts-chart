import { Graph } from '../data';
import { staticData } from '../data';

export const staticParams = {
    containerHeight: 600,
    containerWidth: 1200,
    containerSpacer: 50, // svg nie wypłenia całej szerokości diva
    textPositionCalc: 40
};

const maxRect: Graph = staticData.reduce((prev: Graph, current: Graph) => (prev.value > current.value) ? prev : current);

function calcGraphParams(container: { containerHeight: number, containerWidth: number, containerSpacer: number, textPositionCalc: number}) {
    const heightCalc = (container.containerHeight - container.containerSpacer / 2) / maxRect.value;
    const widthCalc = (container.containerWidth - container.containerSpacer) / staticData.length;
    const svgHeight = heightCalc * maxRect.value;
    const svgWidth = widthCalc * staticData.length;

    return {
        heightCalc: heightCalc,
        widthCalc: widthCalc,
        svgHeight: svgHeight,
        svgWidth: svgWidth
    };
}

export const graphParams = calcGraphParams(staticParams);
// console.log(graphParams);
