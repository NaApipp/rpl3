export interface Person {
    id: string;
    name: string;
    position: string;
    photo?: string;
}

export interface StrukturData {
    year: string;
    waliKelas: Person;
    ketuaKelas: Person;
    wakilKetuaKelas: Person;
    sekretaris1: Person;
    sekretaris2: Person;
    bendahara1: Person;
    bendahara2: Person;
}

export const strukturData: StrukturData[] = [
    // Data Struktur Kelas 2023/2024 (Kelas 10)
    {
        year: "2023/2024",
        waliKelas: {
            id: "1",
            name: "Siti Mariatul Kiptiyah S.Pd.",
            position: "WALI KELAS"
        },
        ketuaKelas: {
            id: "2",
            name: "Rayi Putra Salasa W",
            position: "KETUA KELAS"
        },
        wakilKetuaKelas: {
            id: "3",
            name: "Assifa Putri Salsabila",
            position: "WAKIL KETUA KELAS"
        },
        sekretaris1: {
            id: "4",
            name: "Yolanda Bintang Anggraeny",
            position: "SEKRETARIS 1"
        },
        sekretaris2: {
            id: "5",
            name: "Eka Rahmawati",
            position: "SEKRETARIS 2"
        },
        bendahara1: {
            id: "6",
            name: "Silvi Sucilanuki Amara Ramadhani",
            position: "BENDAHARA 1"
        },
        bendahara2: {
            id: "7",
            name: "Andyni Karina Agustin",
            position: "BENDAHARA 2"
        }, 
    },
    // Data Struktur Kelas 2024/2025 (Kelas 11)
    {
        
        year: "2024/2025",
        waliKelas: {
            id: "1",
            name: "Siti Mariatul Kiptiyah S.Pd.",
            position: "WALI KELAS"
        },
        ketuaKelas: {
            id: "2",
            name: "Rayi Putra Salasa W",
            position: "KETUA KELAS"
        },
        wakilKetuaKelas: {
            id: "3",
            name: "Nabil Arif Triyanto",
            position: "WAKIL KETUA KELAS"
        },
        sekretaris1: {
            id: "4",
            name: "Kurnia Dewi Priyati",
            position: "SEKRETARIS 1"
        },
        sekretaris2: {
            id: "5",
            name: "Intan Susiana",
            position: "SEKRETARIS 2"
        },
        bendahara1: {
            id: "6",
            name: "Yolanda Bintang Anggraeny",
            position: "BENDAHARA 1"
        },
        bendahara2: {
            id: "7",
            name: "Silvi Sucilanuki Amara Ramadhani",
            position: "BENDAHARA 2"
        },

       
    },
    // Data Struktur Kelas 2025/2026 (Kelas 12)
    {
        year: "2025/2026",
        waliKelas: {
            id: "1",
            name: "Siti Mariatul Kiptiyah S.Pd.",
            position: "WALI KELAS"
        },
        ketuaKelas: {
            id: "2",
            name: "Rayi Putra Salasa W",
            position: "KETUA KELAS"
        },
        wakilKetuaKelas: {
            id: "3",
            name: "Nabil Arif Triyanto",
            position: "WAKIL KETUA KELAS"
        },
        sekretaris1: {
            id: "4",
            name: "Kurnia Dewi Priyati",
            position: "SEKRETARIS 1"
        },
        sekretaris2: {
            id: "5",
            name: "Intan Susiana",
            position: "SEKRETARIS 2"
        },
        bendahara1: {
            id: "6",
            name: "Yolanda Bintang Anggraeny",
            position: "BENDAHARA 1"
        },
        bendahara2: {
            id: "7",
            name: "Silvi Sucilanuki Amara Ramadhani",
            position: "BENDAHARA 2"
        },
       
    },
]