import Link from "next/link";
import BrandLogo from "./brand-logo";
import NavHeaderLink from "./nav-header-link";
import MenuIcon from "./menu-icon";
import { useState } from "react";
import CloseIcon from "./close-icon";
import PrimaryButton from "./primary-button";
import Image from "next/image";

function NavHeader() {
    const [showMenu, setShowMenu] = useState(false);

    function handleShowMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <div className="flex items-center justify-between py-7">
                <div>
                    <Link href="/">
                        <a className="flex items-center">
                            {/* <BrandLogo className="w-5 h-7" /> */}
                            <Image
                                src="/images/logo.svg"
                                width={120}
                                height={30}
                                alt="Get Twin"
                            />
                        </a>
                    </Link>
                </div>
                <div className="md:hidden">
                    {showMenu ? (
                        <CloseIcon
                            className="w-6 h-6 mr-2 cursor-pointer"
                            onClick={handleShowMenu}
                        />
                    ) : (
                        <MenuIcon
                            className="w-6 h-6 mr-2 cursor-pointer"
                            onClick={handleShowMenu}
                        />
                    )}
                </div>
                <div className="items-center hidden md:flex">
                    <ul className="flex">
                        <NavHeaderLink href="/claim" text="Claim" />
                        <NavHeaderLink href="/explorer" text="Explorer" />
                        <NavHeaderLink href="/queue" text="Queue" />
                        <NavHeaderLink href="/#token" text="Token" />
                        <NavHeaderLink
                            href={process.env.NEXT_PUBLIC_DOCS_ENDPOINT}
                            text="Documentation"
                        />
                    </ul>

                    <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                        <a className="px-4 py-1.5 ml-6 rounded-lg bg-pir-green hover:bg-pir-green-hover text-black font-medium transitions-colors duration-200">
                            Get in Touch
                        </a>
                    </Link>
                </div>
            </div>

            <div className="md:hidden">
                {showMenu && (
                    <div className="relative h-screen">
                        <div className="absolute flex w-full pb-10 bg-pir-beige">
                            <ul className="flex flex-col w-full -mt-4">
                                <NavHeaderLink
                                    href="/claim"
                                    text="Claim"
                                    isMobile
                                />
                                <NavHeaderLink
                                    href="/explorer"
                                    text="Explorer"
                                    isMobile
                                />
                                <NavHeaderLink
                                    href="/queue"
                                    text="Queue"
                                    isMobile
                                />
                                <NavHeaderLink
                                    href="/#token"
                                    text="Token"
                                    isMobile
                                />
                                <NavHeaderLink
                                    href={process.env.NEXT_PUBLIC_DOCS_ENDPOINT}
                                    text="Documentation"
                                    isMobile
                                />
                                <li className="flex justify-center mt-8">
                                    <PrimaryButton
                                        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                                        text="Get in Touch"
                                        isFull
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default NavHeader;
