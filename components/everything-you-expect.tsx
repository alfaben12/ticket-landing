import Image from "next/image";
import PrimaryButton from "./primary-button";

function EverythingYouExpect() {
  return (
    <>
      <div className="mx-auto mt-10 lg:mt-0 max-w-35r lg:max-w-none">
        <h3 className="max-w-screen-md mx-auto text-3xl font-semibold leading-tight lg:text-center sm:text-5xl lg:text-6xl">
          <span className="underline">The Twin</span> You Expect, and More...
        </h3>
        <ul className="grid grid-cols-1 mt-4 lg:mt-20 lg:grid-cols-2 gap-y-12 lg:gap-y-32 gap-x-24">
          <li className="flex flex-col justify-center order-1">
            <h4 className="text-2xl font-medium lg:text-3xl">
              Powerful Technology for Your Assets
            </h4>
            <p className="mt-5 text-lg lg:text-[1.375rem] leading-normal text-pir-gray-500">
              Tiket NFT Anda dapat memiliki fasilitas unik, yang dibuat khusus untuk acara Anda.
            </p>
            <p className="mt-5 text-lg lg:text-[1.375rem] leading-normal text-pir-gray-500">
              Selain barang fisik, pelanggan dapat membeli gambar digitalnya, yang memungkinkan mereka memiliki barang digital yang dapat dikoleksi dan bukti keasliannya.
            </p>
            <p className="mt-5 text-lg lg:text-[1.375rem] leading-normal text-pir-gray-500">
              Selanjutnya, koleksi ini dapat dijual kembali dengan cara yang aman, memungkinkan pemilik menerima potongan kecil setiap kali aset berpindah tangan.
            </p>
            <div className="mt-10">
              <PrimaryButton href="/#live-demo" text="See Live Demo" />
            </div>
          </li>
          <li className="order-2">
            <Image
              src="https://pirsch.io/static/img/tables-dark.svg"
              width={568}
              height={663}
            />
          </li>
          <li className="order-4 -mt-4 lg:mt-0 lg:order-3">
            <Image
              src="https://pirsch.io/static/img/access-dark.svg"
              width={568}
              height={663}
            />
          </li>
          <li className="flex flex-col justify-center order-3 mt-6 lg:mt-0 lg:order-4">
            <h4 className="text-2xl font-medium lg:text-3xl">
              NFT Supercharge
            </h4>
            <p className="mt-5 text-lg lg:text-[1.375rem] leading-normal text-pir-gray-500">
              NFT (non-fungible token) adalah catatan digital unik yang tidak dapat diubah atau diubah.Mereka mewakili aset fisik atau digital (pada dasarnya item apa pun yang dapat Anda bayangkan, seperti sepasang snicker, tiket acara, lagu, video, dll.) dan menyimpan bukti seluruh sejarah item tersebut.
            </p>
            <p className="mt-5 text-lg lg:text-[1.375rem] leading-normal text-pir-gray-500">
              Saat kita bergerak cepat menuju Web 3.0 (atau Metaverse), aset digital menjadi semakin berharga. Perusahaan sedang mengembangkan aset digital unik yang dapat digunakan atau dijual melalui dunia digital, memperkaya pengalaman online pelanggan.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default EverythingYouExpect;
