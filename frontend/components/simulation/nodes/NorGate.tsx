import { Handle, Position } from '@xyflow/react';

export default function NorGate() {
    return (
        <div className="bg-white border-2 border-black rounded-lg w-16 h-16 flex items-center justify-center relative shadow-sm" style={{ borderRadius: '0 50% 50% 0' }}>
            <div className="text-xs font-bold z-10">NOR</div>
            <Handle type="target" position={Position.Left} id="a" style={{ top: '30%' }} />
            <Handle type="target" position={Position.Left} id="b" style={{ top: '70%' }} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}
