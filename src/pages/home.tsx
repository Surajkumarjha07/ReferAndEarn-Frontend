import Circle from "../components/circle";
import Topbar from "../components/topbar";
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import Table1 from "../components/table1";
import Table2 from "../components/table2";
import { useState } from "react";
import Modal from "../components/modal";

export default function Home() {
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    }

    return (
        <>
            <section>
                <Topbar />

                {
                    modal &&
                    <>
                        <div className="w-screen h-screen bg-gray-700/45 fixed top-0 bottom-0 right-0 left-0" />
                        <div className="fixed top-10 left-1/2 transform -translate-x-[50%]">
                            <Modal setModal={setModal} />
                        </div>
                    </>
                }

                <div className="w-[70vw] h-[30rem] flex justify-center items-center mx-auto overflow-hidden rounded-2xl pl-12 mb-20">
                    <div className="w-fit h-fit flex flex-col justify-center items-start gap-8">
                        <h1 className="text-6xl font-bold text-[#1A202C] w-80">
                            Let's Learn & Earn
                        </h1>
                        <p className="text-3xl font-normal w-72">
                            Get a chance to win up-to <span className="text-4xl font-medium text-[#1A73E8]">
                                Rs. 15,000
                            </span>
                        </p>

                        <button className="text-white bg-[#1A73E8] px-8 py-2 rounded-md cursor-pointer" onClick={openModal}>
                            Refer Now
                        </button>
                    </div>
                    <div>
                        <img src="/images/hero_logo.png" className="w-[50rem]" />
                    </div>
                </div>

                <div className="w-[70vw] mx-auto flex flex-col justify-start gap-16 my-20">
                    <p className="text-center font-bold text-lg"> How Do I <span className="text-[#1A73E8]"> Refer </span> </p>

                    <div className="flex justify-evenly items-center">
                        <Circle icon={<PersonAddAltRoundedIcon className='text-[#1A73E8] mx-auto' sx={{ fontSize: "4rem" }} />} text={"Submit referrals easily via our website&apos;s referral section."} />
                        <Circle icon={<DescriptionRoundedIcon className='text-[#1A73E8] mx-auto' sx={{ fontSize: "4rem" }} />} text={"Earn rewards once your referral joins an Accredian program."} />
                        <Circle icon={<BusinessCenterRoundedIcon className='text-[#1A73E8] mx-auto' sx={{ fontSize: "4rem" }} />} text={"Referrer receives a bonus 30 days after program enrollment."} />
                    </div>

                    <div className="w-full flex justify-center">
                        <button className="text-white bg-[#1A73E8] px-8 py-2 rounded-md cursor-pointer">
                            Refer Now
                        </button>
                    </div>
                </div>

                <div className="w-[70vw] mx-auto my-20">
                    <h1 className="text-center font-bold text-lg">
                        What Are The <span className="text-[#1A73E8]"> Referral Benefits? </span>
                    </h1>
                    <div className="flex justify-between items-start gap-8 h-[32rem] my-8">
                        <Table1 />
                        <Table2 />
                    </div>

                    <div className="w-full flex justify-end">
                        <button className="text-[#3C485285] border-2 border-[#3C485285] text-sm px-4 py-2 rounded-md">
                            Show More
                        </button>
                    </div>
                </div>

                <div className="w-[70vw] h-fit mx-auto my-20">
                    <p className="text-center font-bold text-lg"> Frequently Asked <span className="text-[#1A73E8]"> Questions </span> </p>
                    <div className="flex justify-center items-start gap-20 my-8">
                        <div className="h-full flex flex-col justify-start items-center gap-6">
                            <div className="text-[#1A73E8] border-2 border-[#1A73A8] h-fit w-60 text-center py-3 rounded-md">
                                <p> Eligibility </p>
                            </div>
                            <div className="text-[#737373] border-2 border-[#737373] h-fit w-60 text-center py-3 rounded-md">
                                <p> How To Use ? </p>
                            </div>
                            <div className="text-[#737373] border-2 border-[#737373] h-fit w-60 text-center py-3 rounded-md">
                                <p> Terms & Conditions </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-start gap-6 w-full">
                            <p className="text-[#1A73E8]">
                                Do I need to have prior Product Management and Project Management experience to enroll in the program?
                            </p>
                            <p>
                                No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
                            </p>
                            <p className="font-medium">
                                What is the minimum system configuration required?
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-[70vw] h-fit flex justify-center items-center gap-10 mx-auto bg-[#1A73E8] px-16 py-12 rounded-lg my-20">
                    <div className="bg-white rounded-md outline-4 outline-gray-300 p-2">
                        <SupportAgentOutlinedIcon className="text-[#1A73E8]" sx={{ fontSize: "3rem" }} />
                    </div>
                    <div className="flex-1 flex justify-between items-center">
                        <div className="text-white">
                            <h1 className="text-lg font-medium">
                                Want to delve deeper into the program?
                            </h1>
                            <p>
                                Share your details to receive expert insights from our program team!
                            </p>
                        </div>
                        <div>
                            <button className="bg-white text-[#1A73E8] px-8 py-2 rounded-md">
                                Get in touch
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
