import Image from "next/image";
import Link from "next/link";
const NotFoundPage = () => {
    return (
        <div className="h-screen flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-center px-5">
                <div className="max-w-md">
                    <div className="text-5xl font-dark font-bold">404</div>
                    <p className="text-2xl md:text-3xl font-light leading-normal">
                        Sorry we couldn&apos;t find this page.{" "}
                    </p>
                    <p className="mb-8">
                        But dont worry, you can find plenty of other things on
                        our homepage.
                    </p>

                    <Link href="/">
                        <a className="px-4 py-1.5 rounded-lg bg-pir-green hover:bg-pir-green-hover text-black font-medium transitions-colors duration-200">
                            back to homepage
                        </a>
                    </Link>
                </div>
                <div className="max-w-lg">
                    <Image
                        src="/images/logo/logo-no-bg.svg"
                        width={100}
                        height={119}
                        alt="Get Twin"
                    />
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
