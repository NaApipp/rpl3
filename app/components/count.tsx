export default function Count() {
    return (
        <div className="count flex bg-[#638ECB] pt-10 pb-10 gap-52 justify-center rounded-lg text-white">
            <div className="aktif text-center">
                <p className="count">36</p>
                <p className="head-count">SISWA AKTIF</p>
            </div>
            <div className="laki text-center">
                <p className="count">15</p>
                <p className="head-count">LAKI-LAKI</p>
            </div>
            <div className="perempuan text-center">
                <p className="count">21</p>
                <p className="head-count">PEREMPUAN</p>
            </div>
        </div>
    )
}