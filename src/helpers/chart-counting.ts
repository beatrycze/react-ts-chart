import { Graph } from '../data';
import { staticData } from '../data';

const maxRect: Graph = staticData.reduce((prev: Graph, current: Graph) => (prev.value > current.value) ? prev : current);

export function calcGraphParams(container: { containerHeight: number, containerWidth: number, containerSpacer: number, textPositionCalc: number}) {
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
