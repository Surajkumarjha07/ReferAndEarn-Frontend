import { Button, TextField } from "@mui/material"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser'

export default function Modal({ setModal }: any) {
    const [referee_email, setReferee_email] = useState("");
    const [referee_name, setReferee_name] = useState("");
    const [referrer_email, setReferrer_email] = useState("");
    const [referrer_name, setReferrer_name] = useState("");
    const [voucher_code, setVoucher_code] = useState("");

    const referToFriend = async () => {
        if (!referee_email || !referee_name || !referrer_email || !referrer_name || !voucher_code) {
            toast.error("Enter Valid Credentials!", {
                autoClose: 1500,
                hideProgressBar: true,
                position: "top-center",
                type: "error"
            });
            return;
        }

        try {
            const response = await fetch("http://localhost:4000/refer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ referee_email, referee_name, referrer_email, referrer_name, voucher_code })
            })

            if (!response.ok) {
                throw new Error("Failed to send data!");
            }

            if (response.ok || response.status === 200) {
                emailjs.send('service_5x6twjm', 'template_oyipxps', {
                    from_name: referrer_name,
                    from_email: referrer_email,
                    to_name: referee_name,
                    to_email: referee_email,
                    message: voucher_code,
                }, 'qOLGOqqRXmOzFgrLz')
                    .then(() => {
                        toast.success("Your referral has been sent successfully!", {
                            type: "success",
                            hideProgressBar: true,
                            autoClose: 1500,
                            position: "top-center",
                        });
                    })
                    .catch((error) => {
                        console.error("EmailJS Error:", error);
                        toast.error("Failed to send the email!", {
                            autoClose: 1500,
                            hideProgressBar: true,
                            position: "top-center",
                            type: "error"
                        });
                    });

            }

        } catch (error) {
            console.log("Internal server error!");
            toast.error("Internal server error!", {
                autoClose: 1500,
                hideProgressBar: true,
                position: "top-center",
                type: "error"
            })
        }
    }

    return (
        <>
            <section className="flex flex-col justify-center bg-white px-20 py-12 rounded-lg text-center relative">
                <button onClick={() => setModal(false)}>
                    <CloseRoundedIcon className="absolute top-4 right-4 cursor-pointer" />
                </button>
                <h1 className="text-2xl text-blue-500 font-bold bg-gray-100 rounded-md outline-4 outline-gray-200"> Referee details </h1>
                <TextField id="standard-basic" label="Referee Email" variant="standard" sx={{ width: "24rem", marginTop: "8px" }} name="referee_email" value={referee_email} onChange={(e) => setReferee_email(e.target.value)} />
                <TextField id="standard-basic" label="Referee Name" variant="standard" sx={{ width: "24rem", marginTop: "16px" }} name="referee_name" value={referee_name} onChange={(e) => setReferee_name(e.target.value)} />

                <h1 className="text-2xl text-blue-500 font-bold text-center mt-10 bg-gray-100 rounded-md outline-4 outline-gray-200"> Referrer details </h1>
                <TextField id="standard-basic" label="Referrer Email" variant="standard" sx={{ width: "24rem", marginTop: "8px" }} name="referrer_email" value={referrer_email} onChange={(e) => setReferrer_email(e.target.value)} />
                <TextField id="standard-basic" label="Referrer Name" variant="standard" sx={{ width: "24rem", marginTop: "16px" }} name="referrer_name" value={referrer_name} onChange={(e) => setReferrer_name(e.target.value)} />
                <TextField id="standard-basic" label="Referrer Voucher Code" variant="standard" sx={{ width: "24rem", marginTop: "16px" }} name="voucher_code" value={voucher_code} onChange={(e) => setVoucher_code(e.target.value)} />

                <Button variant="contained" sx={{ marginTop: "30px" }} onClick={referToFriend}> Refer To Friend </Button>
            </section>
        </>
    )
}
