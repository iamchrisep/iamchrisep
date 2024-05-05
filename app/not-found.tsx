import Link from 'next/link';
import Page404 from "@/app/components/Page404";

export default function NotFound() {
    return (
        <main className="flex flex-col w-screen h-screen justify-center items-center gap-10 p-5">
            <div className="max-h-[50vw] max-w-[75vw]">
                <Page404/>
            </div>
            <div className="text-xl font-bold">
                Houston, we have a problem
            </div>
            <Link
                className="flex items-center justify-center relative mt-10 px-8 py-4 text-black text-xl font-semibold overflow-hidden border-2 border-black bg-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full hover:before:bg-black"
                href="/">
                <span className="relative z-10">Back to home</span>
            </Link>
        </main>
    );
}
