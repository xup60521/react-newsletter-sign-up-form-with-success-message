import IllustrationDesktop from "@/assets/images/illustration-sign-up-desktop.svg";
import IllustrationMobile from "@/assets/images/illustration-sign-up-mobile.svg";
import IconList from "@/assets/images/icon-list.svg";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Form({
    setIsComplete,
    emailInput,
    setEmailInput,
}: {
    setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
    emailInput: string;
    setEmailInput: React.Dispatch<React.SetStateAction<string>>;
}) {
    const [isSending, setIsSending] = useState(false);

    function isEmailValid(input: string) {
        const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return validRegex.test(input);
    }

    function submit(input: string) {
        if (emailInput === "") {
            toast("Email field is empty", {
                style: {background: "#eb6371", color: "white"},
                position: "top-center"
            })
        }
        if (!isEmailValid(input)) {
            toast("Invalid email format", {
                style: {background: "#eb6371", color: "white"},
                position: "top-center"
            })
        }
        if (emailInput === "" || !isEmailValid(input)) return;
        setIsSending(true);
        setTimeout(() => {
            setIsComplete(true);
        }, 1000);
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { type: "just" } }}
            className="w-full h-full min-h-0 absolute flex md:flex-row flex-col items-center md:justify-center"
        >
            <div className="md:hidden block w-full flex-shrink">
                <img src={IllustrationMobile} alt="illustration for mobile" className="w-full" />
            </div>
            <div className="bg-white rounded-3xl flex p-5 gap-8 md:w-fit w-full flex-shrink-0">
                <div className="flex flex-col justify-center md:px-8 md:w-[24rem] w-full">
                    <h2 className="font-roboto md:text-[3rem] text-[2.5rem] md:py-0 py-3 font-bold">
                        Stay updated!
                    </h2>
                    <span className="font-roboto text-sm font-medium py-3">
                        Join 60,000+ product managers receiving monthly updates
                        on:
                    </span>
                    <div className="flex flex-col py-4 gap-3">
                        <p className="flex font-roboto text-sm gap-3 font-medium items-center">
                            <span>
                                <img
                                    src={IconList}
                                    alt="dot icon"
                                    className="aspect-square h-4"
                                />
                            </span>
                            Product descovery and building what matters
                        </p>
                        <p className="flex font-roboto text-sm gap-3 font-medium items-center">
                            <span>
                                <img
                                    src={IconList}
                                    alt="dot icon"
                                    className="aspect-square h-4"
                                />
                            </span>
                            Measuring to ensure updates are a success
                        </p>
                        <p className="flex font-roboto text-sm gap-3 font-medium items-center">
                            <span>
                                <img
                                    src={IconList}
                                    alt="dot icon"
                                    className="aspect-square h-4"
                                />
                            </span>
                            And much more!
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 py-5">
                        <label
                            htmlFor="email_input"
                            className="text-xs font-roboto font-semibold flex justify-between"
                        >
                            <span>Email address</span>
                            {emailInput !== "" && !isEmailValid(emailInput) && (
                                <span className="text-xs font-roboto font-semibold text-red-600">
                                    Valid email required
                                </span>
                            )}
                        </label>
                        <input
                            type="text"
                            id="email_input"
                            className={`rounded-md border-[1.5px] outline-none py-3 px-4 text-sm ${
                                emailInput !== "" && !isEmailValid(emailInput)
                                    ? "border-red-300 bg-red-100 text-red-600"
                                    : "border-grey-400"
                            }`}
                            placeholder="email@company.com"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                        />
                    </div>

                    <div className="w-full rounded-lg text-sm font-roboto bg-gradient-to-r from-[#ec607b] to-[#ed734a] overflow-hidden shadow-none hover:shadow-2xl hover:shadow-orange-500/50 transition duration-300 ring-0">
                        <button
                            onMouseDown={() => submit(emailInput)}
                            className={`w-full h-full flex items-center justify-center text-white transition duration-200 hover:bg-opacity-0 bg-opacity-100 py-3 ${
                                isSending
                                    ? "bg-gradient-to-r from-[#ec607b] to-[#ed734a] overflow-hidden shadow-2xl shadow-orange-500/50"
                                    : "bg-black"
                            }`}
                        >
                            {isSending ? (
                                <span className="flex items-center text-transparent">
                                    loading{" "}
                                    <ThreeDots height={12} color="white" />
                                    loading
                                </span>
                            ) : (
                                "Subscribe to monthly newsletter"
                            )}
                        </button>
                    </div>
                </div>
                <div className="md:block hidden">
                    <img
                        src={IllustrationDesktop}
                        alt="sign up illustration"
                        className="h-[32rem] aspect-[345.35/512]"
                    />
                </div>
            </div>
        </motion.div>
    );
}
