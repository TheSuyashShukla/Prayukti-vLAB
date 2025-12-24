import { Handle, Position } from '@xyflow/react';

export default function NotGate() {
    return (
        <div className="bg-white border-2 border-black rounded-tl-full rounded-bl-full p-4 w-16 h-16 flex items-center justify-center shadow-md relative">
            <Handle type="target" position={Position.Left} />

            <div className="font-bold text-xs">NOT</div>

            <Handle type="source" position={Position.Right} />
        </div>
    );
}
