import { Column } from './column';

interface ContainerSize { 
  height: number;
  width: number;
  spacer: number;
}

type ChartSize = {
  heightScale: number;
  widthScale: number;
  svgHeight: number;
  svgWidth: number;
  maxRectValue: number;
};

export function getChartSize(container: ContainerSize, graphs: Column[]): ChartSize  {
  const maxRect: Column = graphs.reduce(
    (prev: Column, current: Column) => (prev.value > current.value) ? prev : current
  );
  const svgHeight: number = (container.height - container.spacer);
  const svgWidth: number = (container.width - container.spacer);
  const heightScale: number = svgHeight / maxRect.value;
  const widthScale: number = svgWidth / graphs.length;

  return {
    heightScale: heightScale,
    widthScale: widthScale,
    svgHeight: svgHeight,
    svgWidth: svgWidth,
    maxRectValue: maxRect.value
  };
}
