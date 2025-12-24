import { Handle, Position } from '@xyflow/react';

export default function AndGate() {
    return (
        <div className="bg-white border-2 border-black rounded-sm p-4 w-24 h-24 flex items-center justify-center shadow-md relative">
            <Handle type="target" position={Position.Left} id="a" style={{ top: '30%' }} />
            <Handle type="target" position={Position.Left} id="b" style={{ top: '70%' }} />

            <div className="font-bold text-xs">AND</div>

            <Handle type="source" position={Position.Right} />
        </div>
    );
}
