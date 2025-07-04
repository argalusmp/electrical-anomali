INSERT INTO anomali_proteksi (
  garduinduk_id, reported_by, bay, peralatan, phasa, permasalahan, 
  kategori_anomali, tanggal_temuan, tanggal_rencana, tanggal_realisasi,
  anomali_mayor_minor, status_selesai, data_pendukung_url, usulan_perbaikan,
  pelaksana, perkiraan_kebutuhan_anggaran, rab_url, keterangan, realisasi_rab,
  ba_penyelesaian_url, bulan_selesai, status_anomali
) VALUES
-- Record 1
(5, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 2', 'Trafo', '-', 
'Kipas tidak berfungsi (rusak) 2 buah yakni pada kipas No.4 (otomatis) dan kipas manual posisi tengah',
'Control', '2024-05-07', '2024-06-30', '2024-06-06', 'Minor', 'Selesai',
'https://drive.google.com/file/d/17zIbfWageT19j123G6AKhY7YJb3-IQYs/view?usp=sharing',
'Investigasi', 'ULTG', 1776000,
'https://docs.google.com/spreadsheets/d/14XxaV4_gXO2cC5N97akpLkH6TK5NOR5-/edit?usp=sharing&ouid=107866528951724927939&rtpof=true&sd=true',
'SPK 053', true,
'https://drive.google.com/file/d/1Z55499y1WzIOpqqllJYieAKy81M2KPJ9/view?usp=sharing',
'2024-06-01', 'CLOSED'),

-- Record 2
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Sukaluyu 2', 'Horn', '-',
'Horn Rusak', 'Indikasi', '2024-04-25', '2024-06-30', '2024-05-28',
'Minor', 'Selesai', 'https://drive.google.com/file/d/1zG81p1xB1bxaRA5t6etChNumdEQFgl8X/view?usp=sharing',
'Penggantian Horn 110 VDC', 'ULTG', 2442000,
'https://docs.google.com/spreadsheets/d/19eSF9IMgvzw8UVv8rSfYcZeoliWEfCTg/edit?usp=sharing&ouid=107866528951724927939&rtpof=true&sd=true',
'SPK 053', true,
'https://drive.google.com/file/d/1F-j8yNdWGAygkBkT6i1kcLsnGfj-UzFr/view?usp=sharing',
'2024-05-01', 'CLOSED'),

-- Record 3
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 4', 'Horn', '-',
'Horn Tidak ada', 'Indikasi', '2024-04-25', '2024-06-30', '2024-07-30',
'Minor', 'Selesai', 'https://drive.google.com/file/d/1wGlU4qHHm2IQn-cGhYxZwTwz5XFxy76l/view?usp=sharing',
'Pengadaan Horn 24 VDC', 'ULTG', 333000,
'https://docs.google.com/spreadsheets/d/1hTmx9bSnwM_yxoRb5i91R8O9NhfSbftE/edit?usp=sharing&ouid=107866528951724927939&rtpof=true&sd=true',
'SPK 053', true, null, '2024-07-01', 'CLOSED'),

-- Record 4
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Bogor Baru', 'Meter', '-',
'Ampere Meter fasa R, S, T rusak', 'Meter', '2024-04-25', '2024-06-30', '2024-09-18',
'Minor', 'Selesai', 'https://drive.google.com/file/d/1k9Qm5_sdd8TkhXcFdm_TAOtvwqq1JV-j/view?usp=sharing',
'Penggantian Ampere meter', 'ULTG', 2647350,
'https://docs.google.com/spreadsheets/d/17z7Ziv8pWOK74nOmfoOLrn0-tOX7fZNo/edit?usp=sharing&ouid=107866528951724927939&rtpof=true&sd=true',
'SPK 053', null, null, '2024-09-01', 'CLOSED'),

-- Record 5
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Jatiluhur 1 & 2', 'Announciator', '-',
'Announciator SF6 stage 1 padam', 'Indikasi', '2024-03-14', '2024-05-22', '2024-05-22',
'Minor', 'Selesai', 'https://drive.google.com/file/d/1uuJgPeRRGIdHqfo1pRyo5jY-iqJnyivg/view?usp=sharing',
'Investigasi lanjutan', 'ULTG', null, null,
'Kabel dulunya dilepas tapi historynya belum diketahui', null, null, '2024-05-01', 'CLOSED'),

-- Record 6
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 2', 'Lock Out', '-',
'Dudukan Lockout patah (Getas)', 'Rele', '2023-10-23', '2024-10-31', null,
'Mayor', null, 'https://drive.google.com/file/d/1NXzXrzqab94rwdx0b8C8qkMyeU3WBTdU/view?usp=sharing',
'Penggantian 2 buah lockout', 'ULTG', 32939250,
'https://docs.google.com/spreadsheets/d/1yJOqQVuEp1iXmCTO66geeTc5Enn4KkmG/edit?usp=sharing&ouid=107866528951724927939&rtpof=true&sd=true',
null, null, null, null, 'OPEN'),

-- Record 7
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 2', 'TCS', '-',
'Dudukan TCS patah (Getas)', 'Rele', '2023-10-23', '2024-10-31', null,
'Mayor', null, null, 'Penggantian 2 buah TCS', 'ULTG', null,
null, null, null, null, null, 'OPEN'),

-- Record 8
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 2', 'Test Block Rele Diff dan OCR HV', '-',
'Dudukan test block patah (Getas)', 'Rele', '2023-10-23', '2024-10-31', null,
'Mayor', null, null, 'Penggantian 2 buah Test Block', 'ULTG', null,
null, null, null, null, null, 'OPEN'),

-- Record 9
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Cirata 2', 'Meter', '-',
'Semua meter rusak (mengandalkan rele dan meter P2B)', 'Meter', '2024-01-01', '2024-10-31', null,
'Minor', null, 'https://drive.google.com/file/d/1kBsApX1OOQ4BDOmRwW0EO_wbMhytJt-4/view?usp=sharing',
'Penggantian menggunakan power meter digital', 'ULTG', 13320000,
'https://docs.google.com/spreadsheets/d/19NdidwNMlMqQJ7gDUFAlOzGUlpg7-QD1/edit?usp=sharing&ouid=107866528951724927939&rtpof=true&sd=true',
null, null, null, null, 'OPEN'),

-- Record 10
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Cibabat Baru', 'Meter', '-',
'Semua meter rusak (mengandalkan rele dan meter P2B)', 'Meter', '2024-01-01', '2024-06-30', null,
'Minor', null, 'https://drive.google.com/file/d/1Alfj1TlaaKps8omhZPWjYet9Ka055sAI/view?usp=sharing',
'Penggantian menggunakan power meter digital', 'ULTG', null, null,
null, null, null, null, 'OPEN'),

-- Record 11
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 7', 'Lock Out', '-',
'Lockout Mekanik Trafo masih dongle rawan malfungsi', 'Rele', '2024-01-01', '2024-10-31', null,
'Mayor', null, 'LKP ON PROGRES', 'Penggantian 7 Buah Lock Out', 'ULTG', 110977800,
'https://docs.google.com/spreadsheets/d/1XZogd3O5N25NFGxJsnFtRtvWv5vbGNM8/edit?usp=sharing&ouid=107866528951724927939&rtpof=true&sd=true',
null, null, null, null, 'OPEN'),

-- Record 12
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 9', 'Lock Out', '-',
'Lockout Mekanik Trafo masih dongle rawan malfungsi', 'Rele', '2024-01-01', '2024-10-31', null,
'Mayor', null, 'LKP ON PROGRES', 'Penggantian 7 Buah Lock Out', 'ULTG', null,
null, null, null, null, null, 'OPEN'),

-- Record 13
(4, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 3', 'Lock Out', '-',
'Lockout Mekanik Trafo masih dongle rawan malfungsi', 'Rele', '2024-01-01', '2024-10-31', null,
'Mayor', null, 'LKP ON PROGRES', 'Penggantian 7 Buah Lock Out', 'ULTG', 55488900,
'https://docs.google.com/spreadsheets/d/1uAev0S7kdQQf6RQTp3FU6bXG3ECAQamI/edit?usp=sharing&ouid=107866528951724927939&rtpof=true&sd=true',
null, null, null, null, 'OPEN'),

-- Record 14
(9, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DC', 'Sistem DC', '-',
'DC ground Negatif - Ground floating 16 V', 'AC/DC', '2024-01-01', '2024-10-31', null,
'Minor', null, 'LKP ON PROGRES', 'Pengusutan DC Ground', 'ULTG', null,
null, 'Dugaan terakhir berada di konverter milik APD', null, null, null, 'OPEN'),

-- Record 15
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DC', 'Sistem DC', '-',
'DC ground Positif - Ground solid', 'AC/DC', '2024-01-01', '2024-05-21', null,
'Mayor', null, 'LKP ON PROGRES', 'Pengusutan DC Ground', 'ULTG', null,
null, 'Dugaan terakhir berada di sistem yg sudah tidak beroperasi tapi belum bisa dipastikan arah kemana', null, null, null, 'OPEN'),

-- Record 16
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Cibeureum 1', 'TCS', '-',
'Coil TCS sudah lemah', 'Rele', '2024-01-01', '2024-10-31', null,
'Minor', null, 'LKP ON PROGRES', 'Penggantian 6 buah TCS', 'ULTG', 54378900,
'https://docs.google.com/spreadsheets/d/1HqrKqVkFsMD_NL9ic0BcGJWggl4VSOcn/edit?usp=sharing&ouid=107866528951724927939&rtpof=true&sd=true',
null, null, null, null, 'OPEN'),

-- Record 17
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Cibeureum 2', 'TCS', '-',
'Coil TCS sudah lemah', 'Rele', '2024-01-01', '2024-10-31', null,
'Minor', null, 'LKP ON PROGRES', 'Penggantian 6 buah TCS', 'ULTG', null,
null, null, null, null, null, 'OPEN'),

-- Record 18 (continued)
(5, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Cigereleng 1', 'TCS', '-',
'Coil TCS sudah lemah', 'Rele', '2024-01-01', '2024-10-31', null,
'Minor', null, 'LKP ON PROGRES', 'Penggantian 6 buah TCS', 'ULTG', 54378900,
'https://docs.google.com/spreadsheets/d/1ipDAXlTdRvA1uKrbpiE8JD_WuKthXV3C/edit?usp=sharing&ouid=107866528951724927939&rtpof=true&sd=true',
null, null, null, null, 'OPEN'),

-- Record 19
(5, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Cigereleng 2', 'TCS', '-',
'Coil TCS sudah lemah', 'Rele', '2024-01-01', '2024-10-31', null,
'Minor', null, 'LKP ON PROGRES', 'Penggantian 6 buah TCS', 'ULTG', null,
null, null, null, null, null, 'OPEN'),

-- Record 20
(10, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DC', 'Sistem DC', '-',
'DC ground Negatif - Ground floating 26 V', 'AC/DC', '2024-01-01', '2024-05-30', null,
'Minor', null, 'LKP ON PROGRES', 'Pengusutan DC Ground', 'ULTG', null,
null, 'Dugaan terakhir berada di arah Bay Konsumen', null, null, null, 'OPEN'),

-- Record 21
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Bandung Selatan 1', 'PMT', '-',
'CB Healthy Bay Bandung selatan 1', 'Control', '2024-01-28', '2024-08-31', '2024-08-02',
'Mayor', 'Selesai', 'LKP ON PROGRES', 'Penggantian rele bantu untuk Indikasi spring charge PMT', 'ULTG', 11599500,
'https://docs.google.com/spreadsheets/d/1_2om8JkW7Gg207362aWF6oFmv8A6Jwwe/edit?usp=sharing&ouid=107866528951724927939&rtpof=true&sd=true',
null, true, null, '2024-08-01', 'CLOSED'),

-- Record 22
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Bandung Selatan 2', 'PMT', '-',
'CB Healthy Bay Bandung selatan 2', 'Control', '2024-01-28', '2024-08-31', '2024-08-03',
'Mayor', 'Selesai', 'LKP ON PROGRES', 'Penggantian rele bantu untuk Indikasi spring charge PMT', 'ULTG', null,
null, null, true, null, '2024-08-01', 'CLOSED'),

-- Record 23
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', '7B3', 'DS', '-',
'DC Ground ketika DS 7B3.2 posisi keluar', 'AC/DC', '2024-01-01', '2024-10-31', null,
'Mayor', null, 'LKP ON PROGRES', 'Penggantian Kabel kontrol dari LCC ke CB', 'Pihak ke 3', null,
null, null, null, null, null, 'OPEN'),

-- Record 24
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DC', 'Sistem DC', '-',
'DC GROUND TOTAL : 121.2 V ( + GROUND : 120.2 V ) & ( - GROUND 1.06 )', 'AC/DC', '2024-01-01', '2024-05-30', null,
'Mayor', null, 'LKP ON PROGRES', 'Hasil Investigasi awal mengarah ke bay Trafo 3, padam bay Trafo 3', 'ULTG', null,
null, null, null, null, null, 'OPEN'),

-- Record 25
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'HMI', 'HMI', '-',
'HMI yang saat ini terpasang blm pernah dilakukan pengujian pengoperasian, terdapat beberapa pembacaan yang tidak sesuai dengan panel kontrol serta tidak ada fungsi audio untuk horn dan buzzer.',
'Control', '2024-01-01', '2024-10-31', null,
'Minor', null, 'LKP ON PROGRES', 'Dilakukan pengujian bersama dengan UP2B', 'UP2B', null,
null, null, null, null, null, 'OPEN'),

-- Record 26
(9, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Semua Bay', 'Heater', '-',
'Heater panel Kontrol mati', 'AC/DC', '2024-01-01', '2024-10-31', '2024-05-27',
'Minor', 'Selesai', 'LKP ON PROGRES', 'Dilakukan pengecekan pada rangkaian supply AC Heater', 'ULTG', null,
null, 'Hasil investigasi setting thermostat lebih rendah dari suhu ruang sehingga heater mati', null, null, '2024-05-01', 'CLOSED'),

-- Record 27
(4, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 2', 'Indikator Suhu HV', '-',
'Indikator Suhu HV meningkat drastis ketika penambahan beban', 'Rele', '2024-01-01', '2024-06-30', null,
'Mayor', null, 'LKP ON PROGRES', 'Diinvetigasi terkait thermokopel dan Meter pembacaannya', 'ULTG', null,
null, null, null, null, null, 'OPEN'),

-- Record 28
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'HMI', 'HMI', '-',
'HMI yang saat ini terpasang blm pernah dilakukan pengujian pengoperasian, terdapat beberapa pembacaan yang tidak sesuai dengan panel kontrol serta tidak ada fungsi audio untuk horn dan buzzer.',
'Control', '2024-01-01', '2024-10-31', null,
'Minor', null, 'LKP ON PROGRES', 'Dilakukan pengujian bersama dengan UP2B', 'Vendor', null,
null, 'HMI rusak setelah penggantian relay diff Trafo 1 oleh Vendor SMthree', null, null, null, 'OPEN'),

-- Record 29
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Rectifier 2', 'RECTIFIER 2', '-',
'Saat berbeban tegangan drop mencapai 99 VDC. dikarenakan module droper yang tidak standart setting', 'AC/DC', '2023-06-01', '2024-06-30', null,
'Mayor', null, 'LKP ON PROGRES', 'Dilakukan reseting tap tegangan pada module droper pada rectifier 2 oleh pabrikan', 'Vendor/Pabrikan', null,
null, 'Kondisi kabel sudah banyak yang luka akibat gigitan tikus', null, null, null, 'OPEN'),

-- Record 30
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 2', 'Push Button OLTC', '-',
'Push button kontrol naik dan turun pada box OLTC Trafo 2 rusak (getas)', 'Control', '2024-01-01', '2024-06-30', null,
'Minor', null, 'LKP ON PROGRES', 'Dilakukan penggantian push button', 'ULTG', 144300,
'https://docs.google.com/spreadsheets/d/18nuTE3D3cup7ZxXykdmZjyfJ8SHtvk0f/edit?usp=sharing&ouid=107866528951724927939&rtpof=true&sd=true',
'SPK 053', true, null, null, 'OPEN'),

-- Record 31
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 2', 'Horn', '-',
'Horn mati', 'Indikasi', '2024-01-01', '2024-05-15', '2024-05-15',
'Minor', 'Selesai', 'LKP ON PROGRES', 'Dilakukan pengecekan dan pengencangan kabel pada terminal', 'ULTG', null,
null, null, null, null, '2024-05-01', 'CLOSED'),

-- Record 32
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Jatiluhur 2', 'PMS LINE', '-',
'Tidak dapat dioperasikan secara elektrik', 'Control', '2024-05-22', '2024-05-22', '2024-05-22',
'Minor', 'Selesai', 'LKP ON PROGRES', 'Dilakukan pengecekan rangkaian motor dan control PMS Line Bay JTLHR2', 'ULTG', null,
null, null, null, null, '2024-05-01', 'CLOSED'),

-- Record 33
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Lembursitu 1', 'Horn', '-',
'Horn mati', 'Indikasi', '2024-01-01', '2024-06-19', '2024-06-19',
'Minor', 'Selesai', 'LKP ON PROGRES', 'Perbaikan Horn', 'ULTG', null,
null, null, null, null, '2024-06-01', 'CLOSED'),

-- Record 34
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 5', 'Meter', '-',
'Ampere Meter fasa R S T rusak dan kV meter', 'Meter', '2024-06-13', '2024-07-10', '2024-07-10',
'Minor', 'Selesai', 'LKP ON PROGRES', 'Penggantian Ampere meter dan kV meter', 'ULTG', 3479850,
'https://docs.google.com/spreadsheets/d/1pUNWJu7t6P_6Fbb1H4w6hgt1fFwEGDBF/edit?usp=sharing&ouid=107866528951724927939&rtpof=true&sd=true',
null, null, null, '2024-07-01', 'CLOSED'),

-- Record 35
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'FL TWS', 'FL TWS', '-',
'Tidak merekam gangguan', 'DFR/TWS', '2024-06-13', '2024-07-10', '2024-07-10',
'Minor', 'Selesai', null, 'Dilakukan clean memory dan reboot ulang', null, null,
null, null, null, null, '2024-07-01', 'CLOSED'),

-- Record 36
(9, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 2', 'AVR', '-',
'AVR RUSAK', 'Rele', '2024-07-23', '2024-07-25', '2024-07-25',
'Mayor', 'Selesai', null, 'Dilakukan penggantian rele AVR', null, null,
null, null, null, null, '2024-07-01', 'CLOSED'),

-- Record 37
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'Push Button OLTC', '-',
'rusak', 'Control', '2024-08-02', '2024-08-02', '2024-08-02',
'Mayor', 'Selesai', null, 'Dilakukan penggantian push button', null, null,
null, null, null, null, '2024-08-01', 'CLOSED'),

-- Record 38
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'LAGADAR 1', 'DISTANCE', '-',
'Keypad error, pembacaan metering tidak akurat, usia relay tua', 'Rele', '2024-08-13', '2024-08-27', '2024-08-27',
'Mayor', 'Selesai', null, 'Dilakukan penggantian relay & uji fungsi', 'ULTG', null,
null, null, null, null, '2024-08-01', 'CLOSED'),

-- Record 39
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'KATULAMPA', 'Meter', '-',
'Ampere Meter fasa R S T rusak', 'Meter', '2024-04-25', '2024-09-03', '2024-09-03',
'Minor', 'Selesai', null, 'Penggantian Ampere meter', 'ULTG', null,
null, null, null, null, '2024-09-01', 'CLOSED'),

-- Record 40
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 10', 'Meter', '-',
'Ampere Meter fasa S rusak', 'Meter', '2024-09-10','2024-09-21', '2024-09-21','Minor','Selesai',null,'Penggantian Ampere meter','ULTG',null,null, null, null, null, '2024-09-01', 'CLOSED');

