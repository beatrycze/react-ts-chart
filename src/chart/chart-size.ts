import { Graph } from '../fake/data';
import { staticData } from '../fake/data';

const maxRect: Graph = staticData.reduce((prev: Graph, current: Graph) => (prev.value > current.value) ? prev : current);

interface ContainerSize { 
    height: number;
    width: number;
    spacer: number;
    textPositionCalc: number;
}

export function calcGraphParams(container: ContainerSize) {
    const heightCalc = (container.height - container.spacer / 2) / maxRect.value;
    const widthCalc = (container.width - container.spacer) / staticData.length;
    const svgHeight = heightCalc * maxRect.value;
    const svgWidth = widthCalc * staticData.length;

    return {
        heightCalc: heightCalc,
        widthCalc: widthCalc,
        svgHeight: svgHeight,
        svgWidth: svgWidth
    };
}
