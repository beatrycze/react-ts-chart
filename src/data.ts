export interface Graph {
    value: number;
    label: string;
}

export interface GraphData {
    graph1: Graph;
    graph2: Graph;
    graph3: Graph;
}

export const data: GraphData = {
    graph1: {
        value: 2,
        label: 'Top'
    },
    graph2: {
        value: 3,
        label: 'Good'
    },
    graph3: {
        value: 1,
        label: 'Low'
    }
};
