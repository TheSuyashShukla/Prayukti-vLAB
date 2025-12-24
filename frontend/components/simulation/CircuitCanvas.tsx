"use client";

import { useState, useCallback, useEffect } from 'react';
import { ReactFlow, Controls, Background, useNodesState, useEdgesState, addEdge, Connection, Edge, Node, reconnectEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { evaluateCircuit } from '@/lib/circuit-engine';
import AndGate from './nodes/AndGate';
import OrGate from './nodes/OrGate';
import NotGate from './nodes/NotGate';
import NandGate from './nodes/NandGate';
import NorGate from './nodes/NorGate';
import XorGate from './nodes/XorGate';
import XnorGate from './nodes/XnorGate';
import InputNode from './nodes/InputNode';
import OutputNode from './nodes/OutputNode';

const nodeTypes = {
    and: AndGate,
    or: OrGate,
    not: NotGate,
    nand: NandGate,
    nor: NorGate,
    xor: XorGate,
    xnor: XnorGate,
    inputNode: InputNode,
    outputNode: OutputNode,
};

type AppNode = Node & {
    data: {
        label: string;
        value?: number;
    };
};

const initialNodes: AppNode[] = [
    { id: '1', position: { x: 50, y: 50 }, data: { label: 'Input A', value: 0 }, type: 'inputNode' },
    { id: '2', position: { x: 50, y: 150 }, data: { label: 'Input B', value: 0 }, type: 'inputNode' },
    { id: '3', position: { x: 250, y: 100 }, data: { label: 'AND Gate' }, type: 'and' },
    { id: '4', position: { x: 450, y: 100 }, data: { label: 'Output', value: 0 }, type: 'outputNode' },
];
const initialEdges: Edge[] = [
    { id: 'e1-3', source: '1', target: '3', sourceHandle: 'a' },
];

export default function CircuitCanvas() {
    const [nodes, setNodes, onNodesChange] = useNodesState<AppNode>(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    // Removed manual onInputToggle injection in favor of useReactFlow in InputNode

    // Simulation Loop
    useEffect(() => {
        const evaluatedNodes = evaluateCircuit(nodes, edges);
        // Simple deep equal check using JSON to avoid unnecessary updates
        const isChanged = JSON.stringify(nodes.map(n => n.data.value)) !== JSON.stringify(evaluatedNodes.map(n => n.data.value));

        if (isChanged) {
            setNodes(evaluatedNodes as AppNode[]);
        }

    }, [nodes, edges, setNodes]);

    // Correction: The InputNode toggle needs to update the parent state to trigger this effect.
    // The current InputNode uses local state. We need to lift that up or use onNodesChange properly.
    // Better: We provide a custom `onToggle` callback    // ... existing onInputToggle ...

    const saveCircuit = async () => {
        const circuitName = prompt("Enter circuit name:");
        if (!circuitName) return;

        // Mock User ID for prototype
        const userId = "mock-user-123";

        try {
            await fetch('http://localhost:5000/api/circuits', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId,
                    practicalId: '1', // Dynamic later
                    name: circuitName,
                    data: { nodes, edges }
                })
            });
            alert('Circuit saved!');
        } catch (e) {
            alert('Failed to save circuit');
        }
    };

    const onReconnect = useCallback(
        (oldEdge: Edge, newConnection: Connection) => {
            setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
        },
        [setEdges],
    );

    return (
        <div className="h-full w-full bg-gray-50 flex flex-col">
            {/* Toolbar */}
            <div className="bg-white border-b p-2 flex gap-2 overflow-x-auto shadow-sm items-center">
                <div className="text-xs font-bold text-gray-500 uppercase px-2 py-1">Tools:</div>
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs border" onClick={() => {
                    const id = Math.random().toString();
                    setNodes((nds) => nds.concat({ id, position: { x: 100, y: 100 }, data: { label: 'AND' }, type: 'and' }));
                }}>+ AND</button>
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs border" onClick={() => {
                    const id = Math.random().toString();
                    setNodes((nds) => nds.concat({ id, position: { x: 100, y: 100 }, data: { label: 'OR' }, type: 'or' }));
                }}>+ OR</button>
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs border" onClick={() => {
                    const id = Math.random().toString();
                    setNodes((nds) => nds.concat({ id, position: { x: 100, y: 100 }, data: { label: 'NOT' }, type: 'not' }));
                }}>+ NOT</button>
                <div className="border-l h-6 mx-1"></div>
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs border" onClick={() => {
                    const id = Math.random().toString();
                    setNodes((nds) => nds.concat({ id, position: { x: 100, y: 100 }, data: { label: 'NAND' }, type: 'nand' }));
                }}>+ NAND</button>
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs border" onClick={() => {
                    const id = Math.random().toString();
                    setNodes((nds) => nds.concat({ id, position: { x: 100, y: 100 }, data: { label: 'NOR' }, type: 'nor' }));
                }}>+ NOR</button>
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs border" onClick={() => {
                    const id = Math.random().toString();
                    setNodes((nds) => nds.concat({ id, position: { x: 100, y: 100 }, data: { label: 'XOR' }, type: 'xor' }));
                }}>+ XOR</button>
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs border" onClick={() => {
                    const id = Math.random().toString();
                    setNodes((nds) => nds.concat({ id, position: { x: 100, y: 100 }, data: { label: 'XNOR' }, type: 'xnor' }));
                }}>+ XNOR</button>
                <div className="border-l h-6 mx-1"></div>
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs border" onClick={() => {
                    const id = Math.random().toString();
                    setNodes((nds) => nds.concat({ id, position: { x: 100, y: 100 }, data: { label: 'Input' }, type: 'inputNode' }));
                }}>+ Input</button>
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs border" onClick={() => {
                    const id = Math.random().toString();
                    setNodes((nds) => nds.concat({ id, position: { x: 100, y: 100 }, data: { label: 'Output' }, type: 'outputNode' }));
                }}>+ Output</button>

                <div className="flex-1"></div>
                <button className="px-4 py-1 bg-[#d32f2f] hover:bg-[#b71c1c] text-white rounded text-xs font-bold" onClick={saveCircuit}>
                    SAVE CIRCUIT
                </button>
            </div>

            <div className="flex-1">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onReconnect={onReconnect}
                    nodeTypes={nodeTypes}
                    fitView
                    deleteKeyCode={['Backspace', 'Delete']}
                    multiSelectionKeyCode={['Control', 'Meta']}
                    selectionKeyCode={['Shift']}
                    panOnScroll
                    selectionOnDrag
                    panOnDrag={[1, 2]}
                    selectNodesOnDrag={false}
                >
                    <Controls />
                    <Background />
                </ReactFlow>
            </div>
        </div>
    );
}
