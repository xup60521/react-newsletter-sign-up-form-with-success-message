import IllustrationDesktop from "@/assets/images/illustration-sign-up-desktop.svg";
import IconList from "@/assets/images/icon-list.svg";
import { useState } from "react";

export default function Form() {
    const [isSending, setIsSending] = useState(false);
    const [emailInput, setEmailInput] = useState("");

    function isEmailValid(input: string) {
        const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return validRegex.test(input);
    }

    function submit(input: string) {
        if (emailInput === "" || !isEmailValid(input)) return;
    }

    return (
        <div className="bg-white rounded-3xl flex p-5 gap-8">
            <div className="flex flex-col justify-center px-8 w-[24rem]">
                <h2 className="font-roboto text-[3rem] font-bold">
                    Stay updated!
                </h2>
                <span className="font-roboto text-sm font-medium py-3">
                    Join 60,000+ product managers receiving monthly updates on:
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
                        onMouseDown={()=>submit(emailInput)}
                        className="w-full h-full bg-black text-white transition duration-200 hover:bg-opacity-0 bg-opacity-100 py-3"
                    >
                        {isSending
                            ? "loading"
                            : "Subscribe to monthly newsletter"}
                    </button>
                </div>
            </div>
            <div>
                <img
                    src={IllustrationDesktop}
                    alt="sign up illustration"
                    className="h-[32rem] aspect-[345.35/512]"
                />
            </div>
        </div>
    );
}
