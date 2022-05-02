import PrimaryButton from "./primary-button";
import SecondaryButton from "./secondary-button";

function JumboHero() {
  return (
    <div className="max-w-screen-md py-8 mx-auto md:text-center md:py-28">
      <h1 className="text-4xl font-semibold leading-tight text-black md:text-6xl lg:text-8xl">
        Twins Ticket You Can Get.
      </h1>
      <p className="text-lg md:text-[1.375rem] leading-normal mt-6 md:mt-9 text-pir-gray-500">
        Tingkatkan tiket Anda dengan mudah, NFT adalah bentuk teknologi revolusioner yang membuka peluang besar bagi penerbit tiket di seluruh dunia. Ya, juga untukmu.
      </p>

      <div className="flex justify-center mt-8 md:mt-12">
        <PrimaryButton href="/#get-started" text="Try it for Free" />
        <SecondaryButton href="/#live-demo" text="Live Demo" />
      </div>
      <p className="mt-3 text-center text-pir-gray-500">
        No credit card required.
      </p>
    </div>
  );
}

export default JumboHero;
