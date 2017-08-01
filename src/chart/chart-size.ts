import { Graph } from '../fake/data';
import { staticData } from '../fake/data';

interface ContainerSize { 
    height: number;
    width: number;
    spacer: number;
    textPositionCalc: number;
}

export function calcGraphParams(container: ContainerSize) {
    const maxRect: Graph = staticData.reduce((prev: Graph, current: Graph) => (prev.value > current.value) ? prev : current);
    const heightCalc: number = (container.height - container.spacer / 2) / maxRect.value;
    const widthCalc: number = (container.width - container.spacer) / staticData.length;
    const svgHeight: number = heightCalc * maxRect.value;
    const svgWidth: number = widthCalc * staticData.length;

    return {
        heightCalc: heightCalc,
        widthCalc: widthCalc,
        svgHeight: svgHeight,
        svgWidth: svgWidth
    };
}
