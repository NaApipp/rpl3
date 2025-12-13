export default function Footer() {
    return (
        <div className="bg-[#395886] pt-10 pb-10 flex justify-center items-center"> 
            <div className="w-1/2"></div>
            <form action="">
                <div className="w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-2" id="field_nama">
                    <label htmlFor="nama">Nama: </label>
                    <input type="text" placeholder="Masukkan Nama  Kalian (Ngga harus nama asli kok >_<)"/>
                </div>
                <div className="flex flex-col gap-2" id="field_nama">
                    <label htmlFor="nama">Nama: </label>
                    <input type="text" placeholder="Masukkan Nama  Kalian (Ngga harus nama asli kok >_<)"/>
                </div>
                <button type="submit">Kirim</button>
            </div>
            </form>
        </div>
        )
    }