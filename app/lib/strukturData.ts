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
            name: "Soon",
            position: "WAKIL KETUA KELAS"
        },
        sekretaris1: {
            id: "4",
            name: "Soon",
            position: "SEKRETARIS 1"
        },
        sekretaris2: {
            id: "5",
            name: "soon",
            position: "SEKRETARIS 2"
        },
        bendahara1: {
            id: "6",
            name: "Soon",
            position: "BENDAHARA 1"
        },
        bendahara2: {
            id: "7",
            name: "Soon",
            position: "BENDAHARA 2"
        }, 
    },
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
            name: "Soon",
            position: "WAKIL KETUA KELAS"
        },
        sekretaris1: {
            id: "4",
            name: "Soon",
            position: "SEKRETARIS 1"
        },
        sekretaris2: {
            id: "5",
            name: "soon",
            position: "SEKRETARIS 2"
        },
        bendahara1: {
            id: "6",
            name: "Soon",
            position: "BENDAHARA 1"
        },
        bendahara2: {
            id: "7",
            name: "Soon",
            position: "BENDAHARA 2"
        },

       
    },
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
            name: "APIPP",
            position: "WAKIL KETUA KELAS"
        },
        sekretaris1: {
            id: "4",
            name: "Soon",
            position: "SEKRETARIS 1"
        },
        sekretaris2: {
            id: "5",
            name: "soon",
            position: "SEKRETARIS 2"
        },
        bendahara1: {
            id: "6",
            name: "Soon",
            position: "BENDAHARA 1"
        },
        bendahara2: {
            id: "7",
            name: "Soon",
            position: "BENDAHARA 2"
        },

       
    },
]