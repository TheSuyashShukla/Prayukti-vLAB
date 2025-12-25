import { Edge, Node } from '@xyflow/react';

type LogicValue = 0 | 1;

export function evaluateCircuit(nodes: Node[], edges: Edge[]): Node[] {
    // Create a map of node values (initially from inputs)
    const nodeValues = new Map<string, LogicValue>();

    // 1. Initialize logic values from Input Nodes
    nodes.forEach(node => {
        if (node.type === 'inputNode') {
            nodeValues.set(node.id, (node.data.value ? 1 : 0) as LogicValue);
        }
    });

    // 2. Iterative evaluation (simple limit to prevent infinite loops)
    // In a real sophisticated engine, we'd use topological sort or event-driven prop.
    // For DLD prototype, 5-10 passes is usually enough for simple combinational circuits.
    let cleanPasss = false;
    let iterations = 0;

    // Clone nodes to avoid mutation during iteration if not careful, 
    // but here we just want to calculate new data.
    const newNodes = nodes.map(n => ({ ...n, data: { ...n.data } }));
    // const nodeMap = new Map(newNodes.map(n => [n.id, n])); // Unused

    while (!cleanPasss && iterations < 10) {
        cleanPasss = true;
        iterations++;

        // We need to evaluate Gate nodes
        newNodes.forEach(node => {
            if (['and', 'or', 'not', 'nand', 'nor', 'xor', 'xnor', 'outputNode'].includes(node.type || '')) {

                // Find incoming edges
                const incomingEdges = edges.filter(e => e.target === node.id);

                const inputs: LogicValue[] = incomingEdges.map(e => {
                    return nodeValues.get(e.source) || 0;
                });

                let newValue: LogicValue = 0;

                if (node.type === 'and') {
                    // ALL inputs must be 1.
                    newValue = (inputs.length > 0 && inputs.every(v => v === 1)) ? 1 : 0;
                } else if (node.type === 'nand') {
                    // NOT AND
                    const andResult = (inputs.length > 0 && inputs.every(v => v === 1));
                    newValue = andResult ? 0 : 1;
                } else if (node.type === 'or') {
                    newValue = inputs.some(v => v === 1) ? 1 : 0;
                } else if (node.type === 'nor') {
                    // NOT OR
                    const orResult = inputs.some(v => v === 1);
                    newValue = orResult ? 0 : 1;
                } else if (node.type === 'xor') {
                    // 1 if odd number of inputs are 1. Usually 2 inputs.
                    const ones = inputs.filter(v => v === 1).length;
                    newValue = (ones % 2 === 1) ? 1 : 0;
                } else if (node.type === 'xnor') {
                    // NOT XOR
                    const ones = inputs.filter(v => v === 1).length;
                    newValue = (ones % 2 === 0) ? 1 : 0;
                } else if (node.type === 'not') {
                    // NOT takes only 1 input usually.
                    newValue = inputs.length > 0 && inputs[0] === 0 ? 1 : 0;
                } else if (node.type === 'outputNode') {
                    // Output node just reflects its input
                    newValue = (inputs.length > 0 ? inputs[0] : 0) || 0;
                }

                // Check if value changed
                const oldValue = nodeValues.get(node.id);
                if (oldValue !== newValue) {
                    nodeValues.set(node.id, newValue);
                    node.data.value = newValue; // Update the node data
                    cleanPasss = false; // Something changed, run another pass to propagate
                }
            }
        });
    }

    return newNodes;
}
