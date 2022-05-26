import Image from "next/image";
import PrimaryButton from "./primary-button";

function ProductClients() {
    return (
        <ul className="grid grid-cols-1 mx-auto lg:grid-cols-3 gap-x-16 gap-y-12 lg:gap-y-32 max-w-35r lg:max-w-none">
            <li className="flex flex-col justify-center order-1 col-span-1">
                <h5 className="text-2xl font-medium lg:text-3xl">
                    Fit for Platform
                </h5>
                <p className="mt-5 text-lg lg:text-[1.375rem] leading-normal text-pir-gray-500">
                    Integrasi end-to-end untuk penjualan akhir tiket dan klaim
                    ke dompet pembeli secara mudah dan tanpa biaya.
                </p>
                <div className="mt-10">
                    <PrimaryButton
                        href={process.env.NEXT_PUBLIC_DOCS_ENDPOINT}
                        text="Add to Platform"
                    />
                </div>
            </li>
            <li className="flex items-center justify-center order-2 col-span-2 px-12 py-24 bg-black lg:px-0 rounded-xl">
                <Image
                    src="/images/your-platform.svg"
                    width={450}
                    height={80}
                    alt="Your Platform"
                />
            </li>
            <li className="flex items-center justify-center order-4 col-span-2 px-12 py-24 bg-black lg:px-0 lg:order-3 rounded-xl">
                <Image
                    src="/images/polygon-white.svg"
                    width={450}
                    height={80}
                    alt="Polygon Network"
                />
            </li>
            <li className="flex flex-col justify-center order-3 col-span-1 mt-6 lg:mt-0 lg:order-4">
                <h5 className="text-2xl font-medium lg:text-3xl">
                    Works with Polygon Network
                </h5>
                <p className="mt-5 text-lg lg:text-[1.375rem] leading-normal text-pir-gray-500">
                    Polygon Network adalah sebuah protokol terdesentralisasi
                    untuk membangun dan menghubungkan beberapa jaringan
                    blockchain yang kompatibel dengan Ethereum.
                </p>
            </li>
        </ul>
    );
}

export default ProductClients;
