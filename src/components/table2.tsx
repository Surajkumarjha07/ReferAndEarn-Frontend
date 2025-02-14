import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

export default function Table2() {
    return (
        <>
            <table className='flex-1 h-full shadow-md shadow-gray-400 rounded-lg overflow-hidden'>
                <thead>
                    <tr>
                        <th className='text-[#1350A0] bg-[#1A73E859] p-4 border-r border-[#3C4852] w-fit h-fit'> Programs </th>
                        <th className='text-[#1350A0] bg-[#1A73E859] p-4 border-r border-[#3C4852] w-fit h-fit'> Referrer Bonus </th>
                        <th className='text-[#1350A0] bg-[#1A73E859] p-4 w-fit h-fit'> Referee Bonus </th>
                    </tr>
                </thead>

                <tbody className='text-[#3C4852] text-sm'>
                    <tr>
                        <td className='flex justify-start items-center gap-2 w-full h-full border-r border-[#3C4852] px-8'>
                            <SchoolRoundedIcon />
                            <p className='w-64'> Professional Certificate Program in Product Management </p>
                        </td>

                        <td className='text-center border-r border-[#3C4852]'>
                            ₹ 7,000
                        </td>

                        <td className='text-center'>
                            ₹ 9,000
                        </td>
                    </tr>

                    <tr>
                        <td className='flex justify-start items-center gap-2 w-full h-full border-r border-[#3C4852] px-8'>
                            <SchoolRoundedIcon />
                            <p className='w-64'> PG Certificate Program in Strategic Product Management </p>
                        </td>

                        <td className='text-center border-r border-[#3C4852]'>
                            ₹ 9,000
                        </td>

                        <td className='text-center'>
                            ₹ 11,000
                        </td>
                    </tr>

                    <tr>
                        <td className='flex justify-start items-center gap-2 w-full h-full border-r border-[#3C4852] px-8'>
                            <SchoolRoundedIcon />
                            <p className='w-64'> Executive Program in Data Driven Product Management </p>
                        </td>

                        <td className='text-center border-r border-[#3C4852]'>
                            ₹ 10,000
                        </td>

                        <td className='text-center'>
                            ₹ 10,000
                        </td>
                    </tr>

                    <tr>
                        <td className='flex justify-start items-center gap-2 w-full h-full border-r border-[#3C4852] px-8'>
                            <SchoolRoundedIcon />
                            <p className='w-64'> Executive Program in Product Management and Digital Transformation </p>
                        </td>

                        <td className='text-center border-r border-[#3C4852]'>
                            ₹ 10,000
                        </td>

                        <td className='text-center'>
                            ₹ 10,000
                        </td>
                    </tr>

                    <tr>
                        <td className='flex justify-start items-center gap-2 w-full h-full border-r border-[#3C4852] px-8'>
                            <SchoolRoundedIcon />
                            <p className='w-64'> Executive Program in Product Management </p>
                        </td>

                         <td className='text-center border-r border-[#3C4852]'>
                            ₹ 10,000
                        </td>

                        <td className='text-center'>
                            ₹ 10,000
                        </td>
                    </tr>

                    <tr>
                        <td className='flex justify-start items-center gap-2 w-full h-full border-r border-[#3C4852] px-8'>
                            <SchoolRoundedIcon />
                            <p className='w-64'> Advanced Certification in Product Management </p>
                        </td>

                         <td className='text-center border-r border-[#3C4852]'>
                            ₹ 10,000
                        </td>

                        <td className='text-center'>
                            ₹ 10,000
                        </td>
                    </tr>

                    <tr>
                        <td className='flex justify-start items-center gap-2 w-full h-full border-r border-[#3C4852] px-8'>
                            <SchoolRoundedIcon />
                            <p className='w-64'> Executive Program in Product Management and Project Management </p>
                        </td>

                         <td className='text-center border-r border-[#3C4852]'>
                            ₹ 10,000
                        </td>

                        <td className='text-center'>
                            ₹ 10,000
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
