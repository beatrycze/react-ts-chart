import { Graph } from './chart';

interface ContainerSize { 
    height: number;
    width: number;
    spacer: number;
    textPositionCalc: number;
}

export function getChartSize(container: ContainerSize, graphs: Graph[]) {
    const maxRect: Graph = graphs.reduce(
        (prev: Graph, current: Graph) => (prev.value > current.value) ? prev : current
    );
    const heightCalc: number = (container.height - container.spacer / 2) / maxRect.value;
    const widthCalc: number = (container.width - container.spacer) / graphs.length;
    const svgHeight: number = heightCalc * maxRect.value;
    const svgWidth: number = widthCalc * graphs.length;

    return {
        heightCalc: heightCalc,
        widthCalc: widthCalc,
        svg: {
            height: svgHeight,
            width: svgWidth
        }
    };
}
