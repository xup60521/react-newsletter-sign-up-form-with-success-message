import { motion } from "framer-motion";
import IconSuccess from "@/assets/images/icon-success.svg";

export default function Complete({ email }: { email: string }) {

    function refreshPage() {
        location.reload()
    }
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
            className="w-full h-full absolute flex items-center justify-center"
        >
            <div className="bg-white text-black font-roboto rounded-3xl flex flex-col p-12 md:w-[22.5rem] gap-8">
                <img src={IconSuccess} alt="success icon" className="size-10" />
                <h3 className="font-roboto text-[2.5rem] font-bold text-slate-800 -my-2 leading-[2.5rem]">Thanks for subscribing!</h3>
                <span className="font-roboto text-xs text-gray-600">
                    A confirmation email has been sent to{" "}
                    <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.
                </span>
                <button onMouseDown={refreshPage} className="bg-gradient-to-r from-[#ec607b] to-[#ed734a] transition hover:shadow-lg hover:shadow-orange-500/50 text-white rounded-lg font-roboto text-xs py-3">Dismiss message</button>
            </div>
        </motion.div>
    );
}
