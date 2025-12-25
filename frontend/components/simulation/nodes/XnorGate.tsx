import { Handle, Position } from '@xyflow/react';

export default function XnorGate() {
    return (
        <div className="bg-white border-2 border-black rounded-lg w-16 h-16 flex items-center justify-center relative shadow-sm">
            <div className="text-xs font-bold">XNOR</div>
            <Handle type="target" position={Position.Left} id="a" style={{ top: '30%' }} />
            <Handle type="target" position={Position.Left} id="b" style={{ top: '70%' }} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}
