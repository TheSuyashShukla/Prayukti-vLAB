import { Node, Edge } from '@xyflow/react';
import { evaluateCircuit } from './circuit-engine';

export interface TruthTableRow {
    inputs: Record<string, number>;
    outputs: Record<string, number>;
}

export interface TableData {
    inputNames: string[];
    outputNames: string[];
    rows: TruthTableRow[];
}

export function generateTruthTable(nodes: Node[], edges: Edge[]): TableData {
    // 1. Identify Inputs and Outputs
    // Sort by position or label to have consistent order
    const inputNodes = nodes
        .filter(n => n.type === 'inputNode')
        .sort((a, b) => (a.data.label as string || '').localeCompare(b.data.label as string || ''));

    const outputNodes = nodes
        .filter(n => n.type === 'outputNode')
        .sort((a, b) => (a.data.label as string || '').localeCompare(b.data.label as string || ''));

    const inputNames = inputNodes.map(n => n.data.label as string || n.id);
    const outputNames = outputNodes.map(n => n.data.label as string || n.id);

    // 2. Generate all permutations (2^n)
    const rowCount = Math.pow(2, inputNodes.length);
    const rows: TruthTableRow[] = [];

    // Limit to prevent browser crash on huge circuits (e.g. max 10 inputs = 1024 rows)
    if (inputNodes.length > 10) {
        throw new Error("Too many inputs for auto-table generation (Limit: 10)");
    }

    for (let i = 0; i < rowCount; i++) {
        // Prepare input state for this iteration
        const inputState = new Map<string, number>();
        inputNodes.forEach((node, index) => {
            // Extract bit value: (i >> (total - 1 - index)) & 1 for big-endian like table
            const bit = (i >> (inputNodes.length - 1 - index)) & 1;
            inputState.set(node.id, bit);
        });

        // Clone nodes to simulate without affecting main canvas state
        const simNodes = nodes.map(n => ({
            ...n,
            data: {
                ...n.data,
                value: inputState.has(n.id) ? inputState.get(n.id) : n.data.value
            }
        }));

        // Run evaluation
        const evaluatedNodes = evaluateCircuit(simNodes, edges);

        // Capture results
        const rowInputs: Record<string, number> = {};
        const rowOutputs: Record<string, number> = {};

        inputNodes.forEach(n => {
            rowInputs[n.data.label as string || n.id] = inputState.get(n.id) as number;
        });

        outputNodes.forEach(n => {
            // Find the evaluated node
            const finalNode = evaluatedNodes.find(en => en.id === n.id);
            rowOutputs[n.data.label as string || n.id] = (finalNode?.data?.value as number) || 0;
        });

        rows.push({ inputs: rowInputs, outputs: rowOutputs });
    }

    return { inputNames, outputNames, rows };
}
