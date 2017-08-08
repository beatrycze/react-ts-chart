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
};

export function getChartSize(container: ContainerSize, graphs: Column[]): ChartSize  {
  const maxRect: Column = graphs.reduce(
    (prev: Column, current: Column) => (prev.value > current.value) ? prev : current
  );
  const heightScale: number = (container.height - container.spacer) / maxRect.value;
  const widthScale: number = (container.width - container.spacer) / graphs.length;
  const svgHeight: number = heightScale * maxRect.value;
  const svgWidth: number = widthScale * graphs.length;

  // console.log(heightScale);

  return {
    heightScale: heightScale,
    widthScale: widthScale,
    svgHeight: svgHeight,
    svgWidth: svgWidth
  };
}
