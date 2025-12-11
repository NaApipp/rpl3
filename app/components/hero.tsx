export default function Hero() {
     const year = new Date().getFullYear();
    return (
        <section id="hero">
            <div className="flex flex-col justify-center items-center mt-9">
                <img src="image\construction.png" alt="Development Icon" className="w-[300px]"/>
                <h1 className="mt-[20px] font-extrabold text-5xl">Halaman Masih Dalam Tahap Pengembangan</h1>
                <h1 className="mt-[5px] font-extrabold text-3xl">🙏🏻🙏🏻🙏🏻</h1>
                <p className="mt-[200px]"><span>&copy; {year}</span> XIIRPL 3'23 Team</p>
            </div>
        </section>
    )
}