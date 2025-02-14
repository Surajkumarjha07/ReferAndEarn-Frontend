import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <>
            <footer className="bg-[#282828] w-screen h-fit text-white p-6 text-sm mt-20">
                <div className="w-[75vw] h-fit flex justify-between items-center mx-auto">
                    <img src="/images/accredian_logo_white.png" className="w-32" />
                    <div>
                        <button className="bg-[#007BFF] text-sm text-white p-2 rounded-md border border-white"> Schedule 1-on-1 Call Now </button>
                        <p className="text-xs text-center my-1"> Speak with our learning advisor </p>
                    </div>
                </div>

                <hr className="text-white w-[75vw] mx-auto my-6" />

                <div className='w-[75vw] mx-auto flex justify-between items-start'>
                    <div className='flex flex-col justify-evenly items-start gap-4'>
                        <h1 className='text-lg'> Programs </h1>
                        <div className='flex justify-between items-center w-60 font-medium'>
                            <p> Data Science & AI </p>
                            <button>
                                <AddIcon />
                            </button>
                        </div>
                        <div className='flex justify-between items-center w-60 font-medium'>
                            <p> Product Management </p>
                            <button>
                                <AddIcon />
                            </button>
                        </div>
                        <div className='flex justify-between items-center w-60 font-medium'>
                            <p> Business Analytics </p>
                            <button>
                                <AddIcon />
                            </button>
                        </div>
                        <div className='flex justify-between items-center w-60 font-medium'>
                            <p> Digital Tranformation </p>
                            <button>
                                <AddIcon />
                            </button>
                        </div>
                        <div className='flex justify-between items-center w-60 font-medium'>
                            <p> Business Management </p>
                            <button>
                                <AddIcon />
                            </button>
                        </div>
                        <div className='flex justify-between items-center w-60 font-medium'>
                            <p> Project Management </p>
                            <button>
                                <AddIcon />
                            </button>
                        </div>
                        <div className='flex justify-between items-center w-60 font-medium'>
                            <p> Strategy & Leadership </p>
                            <button>
                                <AddIcon />
                            </button>
                        </div>
                        <div className='flex justify-between items-center w-60 font-medium'>
                            <p> Senior Management </p>
                            <button>
                                <AddIcon />
                            </button>
                        </div>
                        <div className='flex justify-between items-center w-60 font-medium'>
                            <p> Fintech </p>
                            <button>
                                <AddIcon />
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col justify-evenly items-start text-xs gap-4 w-96'>
                        <h1 className='text-lg'> Contact Us </h1>
                        <div className='flex flex-col justify-evenly items-start gap-1'>
                            <p>
                                Email us (For Data Science Queries): admissions@accredian.com
                            </p>
                            <p>
                                Email us (For Product Management Queries): pm@accredian.com
                            </p>
                            <p>
                                Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
                            </p>
                            <p>
                                Product Management Admission Helpline:+91 9625811095
                            </p>
                            <p>
                                Enrolled Student Helpline: +91 7969322507
                            </p>
                            <p>
                                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
                                Haryana 122015
                            </p>
                            <p className='text-sm font-medium'>
                                Why Accredian
                            </p>

                            <div>
                                <p className='text-sm font-light my-1'>
                                    Follow Us
                                </p>
                                <div className='flex justify-start items-center'>
                                    <FacebookIcon />
                                    <LinkedInIcon />
                                    <InstagramIcon />
                                    <TwitterIcon />
                                    <YouTubeIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-evenly items-start gap-4'>
                        <h1 className='text-lg'> Accredian </h1>
                        <div className='flex flex-col justify-evenly items-start gap-2'>
                            <p> About </p>
                            <p> Career </p>
                            <p> Blog </p>
                            <p> Admission policy </p>
                            <p> Referral policy </p>
                            <p> Privacy policy </p>
                            <p> Terms Of Services </p>
                            <p> Master FAQs </p>
                        </div>
                    </div>
                </div>

                <p className='text-center my-4'>
                    © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
                </p>

            </footer>
        </>
    )
}
