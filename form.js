function aupdateprodi(){
    const fakultasselect = document.getElementById('fakultas');
    const prodiselect = document.getElementById('prodi');
    const fakultasterpilih = fakultasselect.value;

    const dataprodi  = {
        FH: [{ value: "Hukum", text: "Ilmu Hukum" }],
        FT: [{ value: "TM", text: "Teknik Mesin" }, 
            { value: "TIN", text: "Teknik Industri" }, 
            { value: "TS", text: "Teknik Sipil" }, 
            { value: "TA", text: "Teknik Arsitektur" },],
        FISIP: [{ value: "AN", text: "Administrasi Negara" }, 
            { value: "ANI", text: "Administrasi Niaga" },
            { value: "IK", text: "Ilmu Komunikasi" },],
        FEB: [{ value: "M", text: "Manajemen" },
            { value: "A", text: "Akuntansi" },
            { value: "EPTM", text: "Ekonomi Pembangunan" },],
        FTEIC: [{ value: "TE", text: "Teknik Elektro" },
            { value: "TI", text: "Teknik Informatika" },
            { value: "SISTEKIN", text: "Sistem dan Teknologi Informasi " },
            { value: "AERO", text: "Aeronautika" },],
        FPSI: [{ value: "PSI", text: "Psikologi" },],
        FIB : [{ value: "SI", text: "Sastra Inggris"},
            { value: "SJ", text: "Sastra Jepang"},],
        FTT : [{ value: "TRM", text: "Teknologi Rekayasa Manufaktur"},
            { value: "TRO", text: "Teknologi Rekayasa Otomasi"},
            { value: "AI", text: "Agroindustri"},],
        FK : [{ value: "K", text: "Kedokteran"},
            { value: "PPD", text: "Pendidikan Profesi Dokter"},],
        
            
    };
    prodiselect.innerHTML = '<option value="" disabled selected>--Pilih Prodi--</option>';

    if(fakultasterpilih && dataprodi[fakultasterpilih]) {dataprodi[fakultasterpilih].forEach(prodi=> {
        const opsibaru = document.createElement('option');
        opsibaru.value = prodi.value;
        opsibaru.text = prodi.text;

        prodiselect.add(opsibaru);
        
    });}

}
