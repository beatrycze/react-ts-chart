import { Column } from './column';

interface ContainerSize { 
  height: number;
  width: number;
  spacer: number;
}

type ChartSize = {
  heightCalc: number;
  widthCalc: number;
  svg: {
    height: number;
    width: number;
  };
};

export function getChartSize(container: ContainerSize, graphs: Column[]): ChartSize  {
  const maxRect: Column = graphs.reduce(
      (prev: Column, current: Column) => (prev.value > current.value) ? prev : current
  );
  const heightCalc: number = (container.height - container.spacer) / maxRect.value;
  const widthCalc: number = (container.width - container.spacer) / graphs.length;
  const svgHeight: number = heightCalc * maxRect.value;
  const svgWidth: number = widthCalc * graphs.length;

  console.log(heightCalc);

  return {
      heightCalc: heightCalc,
      widthCalc: widthCalc,
      svg: {
          height: svgHeight,
          width: svgWidth
      }
  };
}
