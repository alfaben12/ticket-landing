import ProductFeatureItem from "./product-feature-item";

function ProductFeaturesList() {
    return (
        <ul className="grid grid-cols-1 mx-auto mb-20 max-w-35r lg:max-w-none lg:grid-cols-3 mt-16 gap-x-7 gap-y-7 lg:gap-y-14">
            <ProductFeatureItem
                title="Experience"
                text="Pengalaman tiket yang tak tertandingi dalam kemudahan penggunaan, fleksibilitas, dan keamanannya."
            />
            <ProductFeatureItem
                title="Unrivalled data"
                text="Data yang jelas dan dapat diverifikasi tentang kepemilikan tiket, sangat meningkatkan upaya pemasaran."
            />
            <ProductFeatureItem
                title="Profitability"
                text="Kontrol total dan wawasan atas pasar primer &amp; sekunder. Ambil keuntungan yang akan diberikan kepada calo."
            />
            <ProductFeatureItem
                title="NFT's"
                text="Tiket menjadi koleksi digital yang dapat diperdagangkan (NFT), dengan berbagai kemungkinan luar biasa untuk penggemar &amp; penyelenggara acara."
            />
        </ul>
    );
}

export default ProductFeaturesList;
