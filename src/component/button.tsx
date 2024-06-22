type Props = {
    title: string
}
export default function Button({ title }: Props) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white  hover:text-blue-900 font-bold py-3 px-4 rounded-lg mt-3">
            {title}
        </button>
    )
}

