import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

const Navbar: React.FC = async () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
              <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                <Link href="/" className="flex z-40 font-semibold">
                  <span className="text-green-800 font-bold">krowd.</span><span
                  className="text-xs align-top text-amber-500">beta</span>
                </Link>
                <div className="items-center space-x-4 sm:flex">
                </div>

              </div>
            </MaxWidthWrapper>
        </nav>
)
}

export default Navbar
