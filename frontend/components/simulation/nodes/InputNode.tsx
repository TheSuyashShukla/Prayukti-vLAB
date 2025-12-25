import { Handle, Position, useReactFlow } from '@xyflow/react';
import { useState } from 'react';

export default function InputNode({ data, id }: { data: { label?: string; value?: number }; id: string }) {
    const { setNodes } = useReactFlow();
    const isOn = !!data.value;

    const toggle = () => {
        console.log('InputNode toggle clicked', id, !isOn);
        setNodes((nds) => nds.map((node) => {
            if (node.id === id) {
                return { ...node, data: { ...node.data, value: !isOn ? 1 : 0 } };
            }
            return node;
        }));
    };

    const [isEditing, setIsEditing] = useState(false);
    const [label, setLabel] = useState(data.label || 'Input');

    const handleDoubleClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent canvas events
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
        setNodes((nds) => nds.map((n) => {
            if (n.id === id) {
                return { ...n, data: { ...n.data, label } };
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
                    className="text-xs font-bold mb-1 w-full text-center border-none focus:ring-0 p-0"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                />
            ) : (
                <label
                    className="block text-xs font-bold mb-1 break-words max-w-[80px] cursor-text"
                    onDoubleClick={handleDoubleClick}
                >
                    {data.label || 'Input'}
                </label>
            )}
            <button
                onClick={toggle}
                className={`w-12 h-6 rounded-full transition-colors relative ${isOn ? 'bg-green-500' : 'bg-gray-300'}`}
            >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isOn ? 'left-7' : 'left-1'}`} />
            </button>
            <div className="text-[10px] mt-1 text-gray-500">{isOn ? 'HIGH (1)' : 'LOW (0)'}</div>
            <Handle type="source" position={Position.Right} />
        </div>
    );
}
