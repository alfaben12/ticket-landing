import PrimaryButton from "./primary-button";
import SecondaryButton from "./secondary-button";

function JumboHero() {
    return (
        <div className="max-w-screen-md py-8 mx-auto md:text-center md:py-28">
            <h1 className="text-4xl font-semibold leading-tight text-black md:text-6xl lg:text-8xl">
                The Twin You Can Get.
            </h1>
            <p className="text-lg md:text-[1.375rem] leading-normal mt-6 md:mt-9 text-pir-gray-500">
                Tingkatkan tiket Anda dengan mudah, NFT adalah bentuk teknologi
                revolusioner yang membuka peluang besar bagi penerbit tiket di
                seluruh dunia. Ya, juga untukmu.
            </p>

            <div className="flex justify-center mt-8 md:mt-12">
                <PrimaryButton href={`/claim`} text="Claim Yours" />
                <SecondaryButton href="/explorer" text="Explorer" />
            </div>
            <p className="mt-3 text-center text-pir-gray-500">
                Let&apos;s start with GET Twin
            </p>
        </div>
    );
}

export default JumboHero;
