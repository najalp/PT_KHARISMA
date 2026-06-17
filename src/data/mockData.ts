import { Project, Testimonial } from "../types";

export const COMPANY_DETAILS = {
  name: "PT Kharisma Bangun Banua",
  tagline: "Membangun Fondasi Masa Depan Keluarga Anda",
  establishedYear: 2018,
  officeAddress: "Jl. Ahmad Yani Km. 8.2, Kompleks Kharisma Office Blok A, Kertak Hanyar, Kabupaten Banjar, Kalimantan Selatan 70654",
  officePhone: "+62 511-789-4455",
  whatsappNumber: "+6281255551234", // active simulated WA for conversion
  officeEmail: "info@kharismabangunbanua.co.id",
  stats: [
    { label: "Total Handover Unit", value: "450+", subtext: "Kunci diserahterimakan" },
    { label: "Kompleks Perumahan", value: "3", subtext: "Kawasan yang berkembang" },
    { label: "Kepuasan Konsumen", value: "98.7%", subtext: "Survei bulanan pembeli" },
    { label: "Legalitas SHM & IMB", value: "100%", subtext: "Terjamin legalitas aman" },
  ],
  features: [
    {
      title: "Legalitas Terjamin",
      description: "Seluruh unit perumahan kami dipasarkan dengan status Sertifikat Hak Milik (SHM) pecah per unit, lengkap dengan Persetujuan Bangunan Gedung (PBG/IMB) yang siap diajukan ke perbankan.",
    },
    {
      title: "Kualitas Struktur Unggulan",
      description: "Kami tidak mengurangi spesifikasi material. Fondasi pancang kayu galam ulin khas Banua berkualitas, dinding bata merah, dan plafon tinggi 4.2 meter untuk sirkulasi optimal.",
    },
    {
      title: "Solusi KPR Mudah & Cepat",
      description: "Kemitraan luas dengan Bank Tabungan Negara (BTN), Bank Mandiri, BNI, dan Bank Kalsel/Syariah memudahkan persetujuan kredit bagi ASN, karyawan swasta, maupun wiraswasta.",
    },
    {
      title: "Nilai Investasi Tinggi",
      description: "Setiap lokasi proyek dipilih secara strategis di koridor emas pengembangan Banjarmasin - Banjarbaru, menjamin reli kenaikan harga tanah (capital gain) setiap tahun.",
    },
  ],
};

export const ACTIVE_PROJECTS: Project[] = [
  {
    id: "d-royal-kharisma",
    name: "D'Royal Kharisma",
    slug: "d-royal-kharisma",
    tagline: "Hunian Eksklusif Kelas Elite di Jantung Banua",
    type: "premium",
    location: "Kertak Hanyar, Banjar (Dekat CitraLand & Jl. A. Yani Km 7)",
    fullAddress: "Jl. Tatah Belayung Baru, Kertak Hanyar, Kabupaten Banjar, Kalimantan Selatan 70654 (Hanya 3 menit dari Jl. Raya A. Yani Km 7)",
    priceStart: 890000000,
    priceEnd: 1480000000,
    shortDescription: "Mahakarya hunian berarsitektur modern tropis klasik yang menghadirkan eksklusivitas, privasi tingkat tinggi, serta kenyamanan premium bagi keluarga tercinta Anda.",
    longDescription: "D'Royal Kharisma dirancang khusus untuk memenuhi standar hidup kalangan profesional, pengusaha sukses, dan eksekutif premium di Kalimantan Selatan. Menyatukan kemegahan desain modern tropis klasik dengan material bangunan nomor satu seperti lantai granite premium, sanitary TOTO, serta struktur fondasi galam ulin super yang kokoh di lahan rawa Banua. Dilengkapi gerbang satu pintu (one-gate system) dengan pengamanan 24 jam dan CCTV kompleks, jalan lingkungan paving block lebar 8 meter, saluran air bawah tanah rapi, serta taman bermain anak yang asri. Sebuah hunian prestisius yang merepresentasikan kesuksesan hidup Anda.",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    bookingFee: 10000000,
    specifications: [
      { id: "dr-spec-1", label: "Pondasi", value: "Pancang Galam Ulin 10x10 Kombinasi Beton Bertulang" },
      { id: "dr-spec-2", label: "Dinding", value: "Bata Merah Jumbo, Plester Rapi, Finishing Cat Jotun WeatherShield" },
      { id: "dr-spec-3", label: "Lantai", value: "Granite Tile 60x60 Premium High-Gloss" },
      { id: "dr-spec-4", label: "Kusen & Pintu", value: "Kayu Ulin/Laba-laba Oven Kelas I, Plat Kunci Yale" },
      { id: "dr-spec-5", label: "Rangka Atap", value: "Baja Ringan Zincalume 0.75mm, Genteng Beton Flat Karang Pilang" },
      { id: "dr-spec-6", label: "Sanitary", value: "Closet Duduk & Shower Set TOTO, Wastafel Marmer" },
      { id: "dr-spec-7", label: "Listrik & Air", value: "PLN 2.200 VA (Token Bawah Tanah), PDAM Bandarmarmasin Lancar" },
      { id: "dr-spec-8", label: "Sertifikasi", value: "SHM Ready, PBG Lengkap, Dokumen Siap KPR Bank BUMN" },
    ],
    features: [
      { icon: "Shield", title: "Double Gate Security", description: "Sistem keamanan berlapis dengan kartu akses RFID & penjagaan security profesional 24 Jam penuh." },
      { icon: "Navigation", title: "Underground Cabling", description: "Kabel listrik, internet serat optik, dan jaringan air bersih semuanya di bawah tanah, rapi tanpa kabel udara." },
      { icon: "Sparkles", title: "Premium Clubhouse", description: "Akses eksklusif kolam renang anak, ruang serbaguna, dan gymnasium mini warga." },
      { icon: "TreePine", title: "Linear Jogging Track", description: "Kawasan hijau asri sepanjang komplek untuk berolahraga pagi dengan suasana segar rindang." },
    ],
    typesList: [
      {
        nameName: "Tipe Royal Sapphire (70/120)",
        price: 890000000,
        landSize: 120,
        buildingSize: 70,
        bedrooms: 2,
        bathrooms: 2,
        installmentsMonthEst: 5400000,
        gallery: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
        ]
      },
      {
        nameName: "Tipe Royal Diamond (100/150)",
        price: 1190000000,
        landSize: 150,
        buildingSize: 100,
        bedrooms: 3,
        bathrooms: 3,
        installmentsMonthEst: 7200000,
        gallery: [
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
        ]
      },
      {
        nameName: "Tipe Grand Monarch (120/180)",
        price: 1450000000,
        landSize: 180,
        buildingSize: 120,
        bedrooms: 4,
        bathrooms: 3,
        installmentsMonthEst: 8800000,
        gallery: [
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
        ]
      }
    ],
    nearbyAmenities: [
      { category: "leisure", name: "CitraLand Waterpark", distanceMinutes: 3 },
      { category: "healthcare", name: "RSUD Dr. H. Moch Ansari Saleh (Satelit)", distanceMinutes: 8 },
      { category: "shopping", name: "Duta Mall Banjarmasin", distanceMinutes: 12 },
      { category: "education", name: "Universitas Lambung Mangkurat (ULM)", distanceMinutes: 15 },
      { category: "shopping", name: "Lotte Grosir Banjarmasin", distanceMinutes: 5 }
    ],
    imagesGallery: [
      { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", caption: "Fasad Megah Tipe Grand Monarch Tropis Modern", category: "exterior" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80", caption: "Ruang Keluarga Mewah High-Ceiling", category: "interior" },
      { url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80", caption: "Dapur Clean-Concept & Meja Makan Marmer", category: "interior" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80", caption: "Kamar Tidur Utama dengan Pencahayaan Alami", category: "interior" },
      { url: "https://images.unsplash.com/photo-1590019313952-46b415a97aa1?auto=format&fit=crop&w=800&q=80", caption: "Row Jalan Kompleks Paving Blok 8 Meter", category: "siteplan" }
    ]
  },
  {
    id: "pondok-kharisma",
    name: "Pondok Kharisma",
    slug: "pondok-kharisma",
    tagline: "Hunian Modern Strategis Ideal untuk Keluarga Muda & ASN",
    type: "affordable",
    location: "Gambut, Banjar (Akses Cepat ke Kantor Pusat Pemprov Kalsel)",
    fullAddress: "Jl. Ir. Pangeran Muhammad Noor, Gambut (Koridor Lingkar Luar ke Banjarbaru / Kompleks Pemprov Kalsel)",
    priceStart: 192000000,
    priceEnd: 340000000,
    shortDescription: "Perumahan subsidi premium & komersil kelas menengah dengan akses instan menuju pusat perkantoran pemerintah provinsi, bandara, serta sekolah.",
    longDescription: "Pondok Kharisma dirancang khusus menjawab impian kepemilikan rumah pertama yang kokoh, strategis, namun tetap bersahabat dengan anggaran keluarga. Dikembangkan dengan konsep 'Minimalis Pintar', tata ruang dioptimalkan untuk memaksimalkan tanah yang luas sehingga mempermudah renovasi tumbuh di kemudian hari. Sangat ideal untuk para Aparatur Sipil Negara (ASN/PNS) Pemprov, guru, karyawan swasta industri, maupun wirausahawan Banua. Area kompleks memiliki fasilitas masjid megah, jalan aspal mulus, drainase teratur bebas banjir, serta dikelilingi sarana belanja rakyat harian.",
    mainImage: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
    bookingFee: 2000000,
    specifications: [
      { id: "pk-spec-1", label: "Pondasi", value: "Tongkat Ulin 10x10 & Cerucuk Galam Tahan Korosi Pasang" },
      { id: "pk-spec-2", label: "Dinding", value: "Batako Press Semen Padat / Bata Merah (Opsional Deluxe), Cat Vinilex Luar Dalam" },
      { id: "pk-spec-3", label: "Lantai", value: "Keramik 40x40 Putih Mengkilat Anti Gores" },
      { id: "pk-spec-4", label: "Pintu & Jendela", value: "Kusen Kayu Kelas II Setingkat Meranti, Daun Pintu Rangka Panel" },
      { id: "pk-spec-5", label: "Atap", value: "Rangka Baja Ringan Kokoh, Atap Multi-Roof Berwarna" },
      { id: "pk-spec-6", label: "Kamar Mandi", value: "Closet Jongkok Keramik Standar Nasional, Bak Mandi Fiber" },
      { id: "pk-spec-7", label: "Sirkulasi Air", value: "Air Bersih Sumur Bor Jernih dengan Filter Tabung / PDAM Banjar" },
      { id: "pk-spec-8", label: "Sertifikat", value: "Sertifikat Hak Milik (SHM) Siap Balik Nama, PBG/IMB Siap" },
    ],
    features: [
      { icon: "DollarSign", title: "Paket Subsidi ASN", description: "Bantuan khusus dan fasilitas bunga flat KPR 5% untuk PNS/ASN, honorer instansi, dan guru bersertifikasi." },
      { icon: "Activity", title: "Bebas Banjir", description: "Tanah dasar kompleks ditinggikan 1 meter dari permukaan jalan umum dengan saluran pembuangan box culvert." },
      { icon: "Compass", title: "3 Menit ke Jalan Utama", description: "Sangat dekat dengan jalan arteri penghubung utama Banjarmasin - Banjarbaru Km 14." },
      { icon: "UserCheck", title: "Developer Amanah", description: "Bukan developer fiktif. Lahan milik developer sendiri 100%, serah terima fisik tepat waktu tanpa molor." },
    ],
    typesList: [
      {
        nameName: "Tipe Kharisma Pratama (36/90)",
        price: 192000000,
        landSize: 90,
        buildingSize: 36,
        bedrooms: 2,
        bathrooms: 1,
        installmentsMonthEst: 1100000,
        gallery: [
          "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
        ]
      },
      {
        nameName: "Tipe Kharisma Premium (45/105)",
        price: 255000000,
        landSize: 105,
        buildingSize: 45,
        bedrooms: 2,
        bathrooms: 1,
        installmentsMonthEst: 1600000,
        gallery: [
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
        ]
      },
      {
        nameName: "Tipe Kharisma Deluxe (54/120)",
        price: 330000000,
        landSize: 120,
        buildingSize: 54,
        bedrooms: 3,
        bathrooms: 2,
        installmentsMonthEst: 2100000,
        gallery: [
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
        ]
      }
    ],
    nearbyAmenities: [
      { category: "transport", name: "Pemprov Kalsel Office Center", distanceMinutes: 10 },
      { category: "transport", name: "Bandara Internasional Syamsudin Noor", distanceMinutes: 15 },
      { category: "shopping", name: "Pasar Gambut Tradisional & Minimarket", distanceMinutes: 5 },
      { category: "healthcare", name: "Puskesmas Gambut Utama", distanceMinutes: 6 },
      { category: "education", name: "SMA Negeri 1 Gambut", distanceMinutes: 4 }
    ],
    imagesGallery: [
      { url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80", caption: "Kompleks Asri Minimalis Tipe Pratama 36", category: "exterior" },
      { url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80", caption: "Halaman Depan & Carport Tipe Premium 45", category: "exterior" },
      { url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80", caption: "Ruang Tamu Terbuka Terang Minimalis", category: "interior" },
      { url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80", caption: "Kamar Utama Nyaman dengan Ventilasi Silang", category: "interior" },
      { url: "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?auto=format&fit=crop&w=800&q=80", caption: "Progress Pembangunan Unit Rapih Kokoh Terpantau", category: "construction" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Dharmawan Saputra",
    role: "ASN / PNS Dinas Lingkungan Hidup Prov. Kalsel",
    project: "Pondok Kharisma",
    quote: "Sangat bersyukur membeli rumah Tipe 45 di Pondok Kharisma. Dekat sekali menuju kantor Gubernur di Banjarbaru, hanya 10 menit perjalanan santai. Kualitas dinding batu bata merahnya beda dari rumah sekelasnya, kokoh dan plafonnya tinggi jadi di dalam rumah sejuk sekali meskipun siang hari panas terik. KPR BTN dibantu tim marketing KBB hingga selesai tanpa ribet!",
    rating: 5,
    avatar: "DS"
  },
  {
    id: "test-2",
    name: "dr. Amelia Lestari",
    role: "Dokter Spesialis & Anggota IDI Banjar",
    project: "D'Royal Kharisma",
    quote: "Saya memilih Tipe Grand Monarch (120/180) di D'Royal Kharisma karena One-Gate Security System yang sangat ketat dan kabel bawah tanahnya yang rapi tanpa kabel bergelantungan. Sangat menunjang ketenangan istirahat keluarga saya di sela kepatutan jadwal RS. Desain tropis eksklusifnya benar-benar terasa royal dan membanggakan saat menyambut kolega bertamu.",
    rating: 5,
    avatar: "AL"
  },
  {
    id: "test-3",
    name: "H. Muhammad Rusli",
    role: "Pemilik Usaha Kuliner Soto Banjar di A. Yani",
    project: "D'Royal Kharisma",
    quote: "Investasi di D'Royal Kharisma adalah keputusan bisnis terbaik saya. Lokasinya di Km 7 Kertak Hanyar laku keras. Nilai pasarnya naik tinggi sekali tiap tahun. Anak saya tinggal di Tipe Sapphire, aman sekali lingkungannya berpaving blok lebar, bebas banjir genangan rawa khas Banjar karena tanah dasar diuruk tinggi sekali.",
    rating: 5,
    avatar: "HR"
  },
  {
    id: "test-4",
    name: "Kartini Rahmawati, S.Pd.",
    role: "Guru SD Negeri & Ibu 2 Anak",
    project: "Pondok Kharisma",
    quote: "Awalnya ragu apakah PNS guru golongan muda seperti saya bisa punya rumah modern sendiri. Pihak PT Kharisma Bangun Banua mengarahkan saya mengambil paket promo PNS subsidi dengan bunga tetapBTB. DP-nya murah sekali dan bisa dicicil. Sekarang anak-anak punya kamar sendiri yang luas dan berventilasi sehat. Lingkungannya kental kekeluargaan religius.",
    rating: 5,
    avatar: "KR"
  }
];

export const MORTGAGE_BANK_PARTNERS = [
  { name: "Bank BTN", rate: 5.0, description: "Bunga KPR Subsidi flat & Komersil bersaing" },
  { name: "Bank Mandiri", rate: 5.75, description: "Proses cepat suku bunga stabil" },
  { name: "Bank Kalsel Syariah", rate: 6.0, description: "Margin flat berkah syariah daerah Banua" },
  { name: "BNI Griya", rate: 5.5, description: "Bunga promo ASN tenor fleksibel" }
];

export const FAQS = [
  {
    q: "Apakah seluruh unit sudah memiliki Sertifikat Hak Milik (SHM)?",
    a: "Benar sekali. Semua perumahan besutan PT Kharisma Bangun Banua dikembangkan di atas lahan murni milik perusahaan tanpa sengketa. Sertifikat Hak Milik (SHM) sudah dipecah per unit kavling tinggal proses balik nama ke pembeli, lengkap dengan Persetujuan Bangunan Gedung (PBG/IMB)."
  },
  {
    q: "Bagaimana proses KPR jika saya seorang PNS / ASN?",
    a: "Sebagai ASN, Anda berhak menikmati skema khusus KPR bersubsidi atau komersil ASN dengan suku bunga rendah mulai 5% flat. Hubungi tim marketing kami, Anda cukup melengkapi berkas standar dinas (SK Pegawai, slip gaji, fotokopi KTP/NPWP), selanjutnya pengajuan ke bank rekanan (BTN/Bank Kalsel) seutuhnya kami kawal sampai akad credit."
  },
  {
    q: "Apakah tanah rawa diuruk (ditimbun) dengan aman dari risiko ambles atau banjir?",
    a: "Sangat aman. Kami menggunakan sistem konstruksi spesifikasi tinggi khas Banua: tiang pancang galam ulin ulet kelas I yang ditanam dalam hingga menyentuh tanah keras rawa banua, dikombinasikan dengan balok beton slop bertulang kokoh. Seluruh kawasan kami timbun (uruk) tinggi di atas level jalan raya umum untuk proteksi banjir berbulan-bulan."
  },
  {
    q: "Berapa biaya Booking Fee dan apakah mengurangi harga jual?",
    a: "Booking fee untuk Pondok Kharisma adalah Rp 2.000.000, sedangkan D'Royal Kharisma adalah Rp 10.000.000. Biaya ini dihitung resmi sebagai pengurang total Nilai Down Payment (Uang Muka) atau harga jual rumah Anda."
  },
  {
    q: "Apakah diperbolehkan melakukan renovasi atau perluasan bangunan setelah serah terima?",
    a: "Boleh sekali! Setiap unit kami sisakan tanah sisa (halaman belakang atau samping) yang cukup lapang agar memberi kebebasan bagi keluarga berencana melakukan pengembangan rumah tumbuh di masa depan."
  }
];
