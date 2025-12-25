import { Handle, Position, useReactFlow, NodeProps } from '@xyflow/react';
import { useState } from 'react';

type OutputNodeData = {
    label: string;
    value?: number | boolean;
};

export default function OutputNode({ data, id }: NodeProps<OutputNodeData>) {
    const isOn = data.value === true || data.value === 1;

    const [isEditing, setIsEditing] = useState(false);
    const [label, setLabel] = useState(data.label || 'Output');
    const { setNodes } = useReactFlow();

    const handleDoubleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
        setNodes((nds) => nds.map((n) => {
            if (n.id === id) {
                return {
                    ...n,
                    data: {
                        ...n.data,
                        label: label
                    }
                };
            }
            return n;
        }));
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleBlur();
        }
    };

    return (
        <div className="bg-white border text-center p-2 rounded shadow-sm min-w-[60px]">
            {isEditing ? (
                <input
                    autoFocus
                    className="text-xs font-bold mb-1 w-full text-center border-none focus:ring-0 p-0 outline-none"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                />
            ) : (
                <label
                    className="block text-xs font-bold mb-1 cursor-text select-none"
                    onDoubleClick={handleDoubleClick}
                >
                    {data.label || 'Output'}
                </label>
            )}
            <div className={`w-8 h-8 rounded-full border-2 mx-auto transition-colors ${isOn ? 'bg-red-500 border-red-700 shadow-[0_0_10px_rgba(239,68,68,0.6)]' : 'bg-gray-200 border-gray-400'
                }`} />
            <Handle type="target" position={Position.Left} />
        </div>
    );
}
