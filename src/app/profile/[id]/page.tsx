export default function Profile({ params }: { params: { id: string } }) {
    return (
        <div className=" min-h-screen items-center justify-center flex-col flex">
            <div>{params.id}</div>
        </div>

    )
}