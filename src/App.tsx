import { useState } from "react";
import Form from "./components/Form";
import { AnimatePresence } from "framer-motion";
import Complete from "./components/Complete";
import { Toaster } from "sonner";

export default function App() {
    const [isComplete, setIsComplete] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    return (
        <main className="bg-c_background min-h-screen font-roboto flex flex-col justify-center items-center relative overflow-hidden">
            <Toaster />
            <AnimatePresence>
                {isComplete ? (
                    <Complete key="complete" email={emailInput} />
                ) : (
                    <Form setIsComplete={setIsComplete} emailInput={emailInput} setEmailInput={setEmailInput} key="form" />
                )}
            </AnimatePresence>
        </main>
    );
}
