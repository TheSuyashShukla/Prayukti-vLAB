import { Handle, Position, useReactFlow } from '@xyflow/react';

export default function InputNode({ data, id }: { data: any, id: string }) {
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

    return (
        <div className="bg-white border text-center p-2 rounded shadow-sm">
            <label className="block text-xs font-bold mb-1 break-words max-w-[80px]">{data.label || 'Input'}</label>
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
