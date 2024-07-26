import IllustrationDesktop from "@/assets/images/illustration-sign-up-desktop.svg";
import IconList from "@/assets/images/icon-list.svg";

export default function Form() {
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
                    <p className="flex font-roboto text-sm gap-3 font-medium">
                        <span>
                            <img
                                src={IconList}
                                alt="dot icon"
                                className="aspect-square scale-90"
                            />
                        </span>
                        Product descovery and building what matters
                    </p>
                    <p className="flex font-roboto text-sm gap-3 font-medium">
                        <span>
                            <img
                                src={IconList}
                                alt="dot icon"
                                className="aspect-square scale-90"
                            />
                        </span>
                        Measuring to ensure updates are a success
                    </p>
                    <p className="flex font-roboto text-sm gap-3 font-medium">
                        <span>
                            <img
                                src={IconList}
                                alt="dot icon"
                                className="aspect-square scale-90"
                            />
                        </span>
                        And much more!
                    </p>
                </div>
                <div className="flex flex-col gap-2 py-5">
                    <label
                        htmlFor="email_input"
                        className="text-xs font-roboto font-black"
                    >
                        Email address
                    </label>
                    <input
                        type="text"
                        id="email_input"
                        className="rounded-md border-[1px] border-gray-400 py-3 px-4 text-sm"
                        placeholder="email@company.com"
                    />
                </div>
                <button className="w-full rounded-md bg-black text-white text-sm font-roboto transition hover:bg-slate-800 border-[1px] py-3">
                    Subscribe to monthly newsletter
                </button>
            </div>
            <div>
                <img
                    src={IllustrationDesktop}
                    alt="sign up illustration"
                    className="h-[32rem]"
                />
            </div>
        </div>
    );
}
