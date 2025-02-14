
export default function Circle({ icon, text }: any) {
    return (
        <>
            <section className='flex flex-col justify-center items-center gap-2 w-60 h-60 rounded-full p-6 text-center shadow-md shadow-gray-400'>
                <div>
                    {icon}
                </div>

                <p className='w-40 text-sm '>
                    {text}
                </p>
            </section>
        </>
    )
}
