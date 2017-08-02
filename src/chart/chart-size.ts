import { Column } from './column';

interface ContainerSize { 
  height: number;
  width: number;
  spacer: number;
}

export function getChartSize(container: ContainerSize, graphs: Column[]) {
  const maxRect: Column = graphs.reduce(
      (prev: Column, current: Column) => (prev.value > current.value) ? prev : current
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
