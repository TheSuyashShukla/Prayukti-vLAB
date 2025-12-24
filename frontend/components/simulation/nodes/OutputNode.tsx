import { Handle, Position } from '@xyflow/react';

export default function OutputNode({ data }: { data: any }) {
    const isOn = data.value === true || data.value === 1;

    return (
        <div className="bg-white border text-center p-2 rounded shadow-sm">
            <label className="block text-xs font-bold mb-1">{data.label || 'Output'}</label>
            <div className={`w-8 h-8 rounded-full border-2 mx-auto transition-colors ${isOn ? 'bg-red-500 border-red-700 shadow-[0_0_10px_rgba(239,68,68,0.6)]' : 'bg-gray-200 border-gray-400'
                }`} />
            <Handle type="target" position={Position.Left} />
        </div>
    );
}
