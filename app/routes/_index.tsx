import type {MetaFunction} from "@remix-run/node";
import {motion} from "framer-motion";

export const meta: MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export default function Index() {
    return (
        <div className=" h-screen items-center justify-center flex flex-col">
            <p className={'text-2xl font-bold'}>Get started with RTF</p>
            <motion.p className={'text-sm text-white/50'} initial={{opacity: 0, y: 10}}
                      animate={{opacity: 1, y: 0}}>Rust, React, Remix, Tauri, Tailwind, and Framer-Motion
            </motion.p>
            <div className={'flex flex-row w-full h-fit justify-center pt-8'}>
                <div className={' border border-white/50 rounded-md p-4 flex flex-col w-fit h-fit items-center'}>
                    <p className={'text-lg font-medium'}>Edit Window Details</p>
                    <p className={'text-sm text-white/25'}>Go to tauri.conf.json</p>
                </div>
            </div>
        </div>
    );
}
