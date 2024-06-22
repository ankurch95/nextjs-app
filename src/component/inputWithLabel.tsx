
type Props = {
    id: string
    label: string
    type: string
    placeholder: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputWithLabel({
    id,
    label,
    type,
    placeholder,
    value,
    onChange,
}: Props) {
    return (
        <div className="flex flex-col"> 
            <label
                htmlFor={id}
                className="font-bold text-gray-600 mb-2"
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border border-gray-400 p-2 rounded"
            />
        </div>
    )
}       