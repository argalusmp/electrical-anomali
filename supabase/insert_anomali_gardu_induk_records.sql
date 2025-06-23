INSERT INTO anomali_garduinduk (
    garduinduk_id, reported_by, bay, peralatan, phasa, permasalahan, kategori_anomali,
    tanggal_temuan, tanggal_rencana, tanggal_realisasi, anomali_mayor_minor,
    status_selesai, data_pendukung_url, usulan_perbaikan, pelaksana,
    perkiraan_kebutuhan_anggaran, rab_url, keterangan, realisasi_rab,
    ba_penyelesaian_url, bulan_selesai, status_anomali
) VALUES
-- Record 1
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 4', 'Trafo', 'R, S, T', 
 'Minyak Rembes pada Bushing Sekunder phasa R,S dan T', 'Rembesan',
 '2024-04-21', '2024-04-21', '2024-04-21', 'Mayor', 'Selesai',
 'https://drive.google.com/file/d/1HRq3LXc2wnKR2mEd99s5eIgZUTwvRZL1/view?usp=sharing',
 'Dilakukan Penggantian packing Bushing sekunder', 'ULTG', 
 NULL, 'https://drive.google.com/file/d/1HRq3LXc2wnKR2mEd99s5eIgZUTwvRZL1/view?usp=sharing',
 'Ikut pekerjaan ganti bushing', FALSE,
 'https://drive.google.com/file/d/1cbj14UxgDQec2mKx6v2DsA-GihflMyN7/view?usp=drive_link',
 '2025-04-01', 'CLOSE'),
 
-- Record 2
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 4', 'Bushing 150 KV', 'R',
 'Hasil Pengujian Bushing 150 KV phasa R nilai Tan delta tinggi 3,13 %', 'IL3 (Hasil Uji)',
 '2024-04-21', '2024-04-21', '2024-04-21', 'Mayor', 'Selesai',
 'https://drive.google.com/file/d/1r2OonZpbvWrfG0EatVSoTy-qsoz2xx-j/view?usp=sharing',
 'Dilakukan Penggantian Bushing', 'ULTG', 32350205,
 'https://drive.google.com/file/d/1OLEt8rOEYNhyiCdEAsswFxNH1ne5yz9c/view?usp=drive_link',
 NULL, TRUE, NULL, '2025-04-01', 'CLOSE'),
 
-- Record 3
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Jatiluhur 1', 'PMS REL 1 dan 2', 'R, S, T',
 'Pisau PMS Rel 1 dan Rel 2 Tidak masuk sempurna ( motor electik bekerja namun stang PMS telat bekerja,sehingga harus diengkol manual)',
 'PMT/PMS Macet', '2024-05-02', '2024-07-31', NULL, 'Mayor', NULL,
 'https://drive.google.com/file/d/1DCk5GJ-HQ30m_J_5zrXiWG7Ynh2n0DNc/view?usp=sharing',
 'Resetting mekanik PMS dan Pelumasan', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 4
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 2', 'Trafo', '-', 
 'Rembesan minyak pada Bushing tetsier, bushing netral sekunder, pipa oltc dan Radiator (tetasan +- 12 tetas /menit)',
 'Rembesan', '2024-04-25', '2024-05-13', '2024-05-13', 'Mayor', 'Selesai',
 'https://drive.google.com/file/d/1u-tXwyuviiXH8LgJiWUv-U4nV2Fd8PT7/view?usp=drive_link',
 'Dilakukan Penggantian seal / Penutupan saluran kebocoran. (perlu pengurasan minyak)',
 'ULTG', 49787800,
 'https://drive.google.com/file/d/1OLEt8rOEYNhyiCdEAsswFxNH1ne5yz9c/view?usp=drive_link',
 NULL, TRUE,
 'https://drive.google.com/file/d/1Vqx0u998-JTSVMhYUV8qR3GpHpRnpBr7/view?usp=drive_link',
 '2025-05-01', 'CLOSE'),
 
-- Record 5
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 3', 'Bushing', 'R',
 'Rembesan Pada Bushing Primer Fasa R (tetasan +- 6 tetes / menit )', 'Rembesan',
 '2024-04-25', '2024-10-27', '2024-09-03', 'Mayor', 'Selesai',
 'https://drive.google.com/file/d/14oDXTGLex34a7mRZ0gMiNCFdVlRSx2Fc/view?usp=drive_link',
 'Dilakukan Penggantian seal / Penutupan saluran kebocoran. (perlu pengurasan minyak)',
 'ULTG', 20546248,
 'https://drive.google.com/file/d/1ZbH5QazeHCUU4XI0EibvCePYDgLmtkwF/view?usp=drive_link',
 NULL, FALSE,
 'https://drive.google.com/file/d/1sq4P1rOhVa4Ea0c0p4j8r0WRnHyW534l/view?usp=drive_link',
 '2025-09-01', 'CLOSE'),
 
-- Record 6
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 3', 'Bushing', 'T',
 'Rembesan Pada Bushing Tersier', 'Rembesan',
 '2024-09-03', '2024-09-03', '2024-09-03', 'Mayor', 'Selesai',
 NULL,
 'Dilakukan Penggantian seal / Penutupan saluran kebocoran. (perlu pengurasan minyak)',
 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 '2025-09-01', 'CLOSE'),
 
-- Record 7
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 3', 'Dexel Man Hole', '-',
 'Rembesan Pada Dexel Man Hole', 'Rembesan',
 '2024-09-03', '2024-09-03', '2024-09-03', 'Minor', 'Selesai',
 NULL,
 'Dilakukan Penggantian seal / Penutupan saluran kebocoran. (perlu pengurasan minyak)',
 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 '2025-09-01', 'CLOSE'),
 
-- Record 8
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Trafo 4', 'Bushing', 'N',
 'Rembesan Pada Bushing Primer Fasa N (tetasan +- 6 tetes / menit )', 'Rembesan',
 '2024-04-25', '2024-06-07', '2024-07-31', 'Mayor', 'Selesai',
 'https://drive.google.com/file/d/1wdkmDDFQ1rw1JLoF9ovYkwLrkP4EPPFd/view?usp=sharing',
 'Dilakukan Penggantian seal / Penutupan saluran kebocoran. (perlu pengurasan minyak)',
 'ULTG', 7260194,
 'https://drive.google.com/file/d/1xVjwb7_UhMAjlDwAEP1Ie4fkvETZJmeU/view?usp=drive_link',
 NULL, FALSE,
 'https://drive.google.com/file/d/1d4xxUNda99EWcGLQ1LInCh3Sf8XYm03o/view?usp=drive_link',
 '2025-07-01', 'CLOSE'),
 
-- Record 9
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 4', 'Kabel Power 20 KV', 'R, S, T',
 'Kabel Power 20 KV phasa S-2 dan T-1 nilai arus bocor tinggi (kabel dilepas karena phasa T-1 breakdwon, dan S-2 indikasi hasil MVAC flash over)',
 'Arus Bocor', '2024-03-24', '2024-05-01', '2024-07-31', 'Mayor', 'Selesai',
 'https://drive.google.com/file/d/1fZ9zt90G037L3rapNuqD8w54kSLmL2m5/view?usp=drive_link',
 'Dilakukan penggantian kabel Power', 'Vendor', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1HqOPbw1c_QmeMKhj8US7SGLh-ryRNXVE/view?usp=drive_link',
 '2025-07-01', 'CLOSE'),
 
-- Record 10
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Bandung Selatan 2', 'LA', 'R',
 'Gradasi warna Thermovisi pada LA phasa R Top Chamber ( Suhu Top Chamber 28,7℃ dan Chamber bawahnya 26,2, selisih suhu 2,5 ℃ )',
 'Hotspot', '2024-04-29', '2024-05-11', '2024-05-11', 'Mayor', 'Selesai',
 'https://drive.google.com/file/d/1tAC0SNI9a1bKsBoAy_ActwFg1MxzwGAj/view?usp=sharing',
 'Dilakukan Penggantian LA', 'Vendor', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1iHKOLR4gCogrG7jiqax7k5BXVt92MzN7/view?usp=drive_link',
 '2025-05-01', 'CLOSE'),
 
-- Record 11
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Cirata 2', 'LA', 'R, S, T',
 'Gradasi warna Thermovisi pada LA -Phasa R ( suhu top chamber 28,6°C, chamber bawahnya 27,0°C, selisih suhu 1,6°C) -Phasa S ( suhu top chamber 28,6°C, chamber bawahnya 26,1°C, selisih suhu 2,5°C) -Phasa T ( suhu top chamber 27,5°C, chamber bawahnya 26,7°C, selisih suhu 0,8°C)',
 'Hotspot', '2024-04-29', '2024-05-12', '2024-05-12', 'Mayor', 'Selesai',
 'https://drive.google.com/file/d/1tAC0SNI9a1bKsBoAy_ActwFg1MxzwGAj/view?usp=sharing',
 'Dilakukan Penggantian LA', 'Vendor', NULL, NULL, NULL, FALSE,
 'Vendor', '2025-05-01', 'CLOSE'),
 
-- Record 12
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Cibinong 1', 'LA', 'R',
 'Gradasi warna phasa R ( suhu top chamber 27,7°C, chamber bawahnya 26,3°C, selisih suhu 1,4°C)',
 'Hotspot', '2024-04-29', '2024-09-30', '2024-09-30', 'Mayor', 'Selesai',
 'https://drive.google.com/file/d/1tAC0SNI9a1bKsBoAy_ActwFg1MxzwGAj/view?usp=sharing',
 'Dilakukan Penggantian LA', 'Vendor', NULL, NULL,
 'Kondisi Masih Aman, sudah dilakukan penggantian LA', FALSE,
 'https://drive.google.com/file/d/1Y9I9fxqPB_A1Zg2xl8ChMtdARmhFgsLN/view?usp=drive_link',
 '2025-09-01', 'CLOSE'),
 
-- Record 13
(4, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'Kabel Power 20 KV', 'R, S, T',
 'Pengukuran arus bocor kabel power R1 (2,26 A), S2 (6,29 A), T2 (2,76 A), T3 (4,86 A)',
 'Arus Bocor', '2024-03-28', '2024-03-30', '2024-03-30', 'Mayor', 'Selesai',
 'https://drive.google.com/file/d/1fZ9zt90G037L3rapNuqD8w54kSLmL2m5/view?usp=drive_link',
 'Dilakukan perbaikan terminasi dan penggantian cover bawah incoming Trafo',
 'ULTG', 10190792,
 'https://drive.google.com/file/d/195GZYmz0zAhO__O1ZHc8BkFf2wWy1OwD/view?usp=sharing',
 NULL, TRUE,
 'https://drive.google.com/file/d/1CDxu7mhKinAnQfWYmcDk5PSL63T4DHAk/view?usp=drive_link',
 '2025-03-01', 'CLOSE'),
 
-- Record 14
(5, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 2', 'Kabel Power 20 KV', 'R, S, T',
 'Pengukuran arus bocor kabel power semua kabel phasa R,S, T tinggi 2-6 A',
 'Arus Bocor', '2024-05-07', '2024-06-05', '2024-06-05', 'Mayor', 'Selesai',
 'https://drive.google.com/file/d/17zIbfWageT19j123G6AKhY7YJb3-IQYs/view?usp=sharing',
 'Perbaikan Ground Shield', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1OJTfmj0EuYcJcG9qzALDfncesUEGuJJa/view?usp=drive_link',
 '2025-06-01', 'CLOSE'),
 
-- Record 15
(5, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 2', 'Trafo', '-',
 'Rembesan minyak trafo : #NAME? #NAME? - valve radiator atas', 'Rembesan',
 '2024-05-07', '2024-06-05', '2024-06-06', 'Minor', 'Selesai',
 'https://drive.google.com/file/d/17zIbfWageT19j123G6AKhY7YJb3-IQYs/view?usp=sharing',
 'Penambalan', 'ULTG', 48867980,
 'https://drive.google.com/file/d/1-2PEYejCOAlX4d4bMelNnn7Im0vEIaVA/view?usp=drive_link',
 NULL, FALSE,
 'https://drive.google.com/file/d/1OJTfmj0EuYcJcG9qzALDfncesUEGuJJa/view?usp=drive_link',
 '2025-06-01', 'CLOSE'),
 
-- Record 16
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 1', 'PMT 7A1', 'S',
 'Kebocoran Gas SF6 dekat Close Cone arah DS 7A1.1 (Pengisian 2 Bulan sekali)',
 'Kebocoran', '2016-01-01', '2025-01-01', NULL, 'Minor', NULL,
 'LKP On Progress', 'Sudah masuk kontrak overhaul 2025', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 17
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 1', 'PMT 7B1', 'R',
 'Kebocoran Gas SF6 Titik perlu di cek ke site (Pengisian terakhir 2 Tahun lalu)',
 'Kebocoran', '2021-01-01', '2025-01-01', NULL, 'Minor', NULL,
 'LKP On Progress', 'Sudah masuk kontrak overhaul 2025', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 18
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 1', 'GM 12', 'R, T',
 'Kebocoran Gas SF6 Titik perlu di cek ke site (Pengisian 1 Tahun sekali)',
 'Kebocoran', '2016-01-01', '2025-01-01', NULL, 'Minor', NULL,
 'LKP On Progress', 'Sudah masuk kontrak overhaul 2025', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 19
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 1', 'GM 13', 'T',
 'Kebocoran Gas SF6 Titik perlu di cek ke site (Pengisian 2 Bulan sekali)',
 'Kebocoran', '2016-01-01', '2025-01-01', NULL, 'Minor', NULL,
 'LKP On Progress', 'Sudah masuk kontrak overhaul 2025', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 20
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 2', 'GM 22', 'T',
 'Kebocoran Gas SF6 Titik perlu di cek ke site (Pengisian baru 1 kali)',
 'Kebocoran', '2024-01-01', '2024-05-18', NULL, 'Minor', 'Selesai',
 'LKP On Progress', 'Investigasi lanjutan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1DT2GAcg25N9LdGauEwAWliDSGTGIDn1b/view?usp=drive_link',
 '2025-11-01', 'CLOSE'),
 
-- Record 21
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 2', 'GM 24', 'S',
 'Kebocoran Gas SF6 Titik perlu di cek ke site (Pengisian baru 1 kali)',
 'Kebocoran', '2024-01-01', '2024-05-18', NULL, 'Minor', 'Selesai',
 'LKP On Progress', 'Investigasi lanjutan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1DT2GAcg25N9LdGauEwAWliDSGTGIDn1b/view?usp=drive_link',
 '2025-11-01', 'CLOSE'),
 
-- Record 22
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 2', '7AB2', 'T',
 'Pompa motor hidraulik PMT 7AB2 Phasa T sering running (sekitar 30 menit sekali) dengan durasi 5 detik, dikarenakan terdapat kebocoran internal pada sistem hidraulik PMT 7AB2 Phasa T',
 'Kebocoran', '2024-01-01', '2024-05-18', '2024-11-14', 'Minor', 'Selesai',
 'LKP On Progress', 'Investigasi lanjutan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1DT2GAcg25N9LdGauEwAWliDSGTGIDn1b/view?usp=drive_link',
 '2025-11-01', 'CLOSE'),
 
-- Record 23
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 3', 'PMT 7A3', 'S',
 'Kebocoran Gas SF6 Titik perlu di cek ke site (Pengisian 5 Bulan sekali)',
 'Kebocoran', '2023-01-01', '2024-05-18', NULL, 'Minor', NULL,
 'LKP On Progress', 'Investigasi lanjutan', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 24
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 3', 'GM 32', 'S',
 'Kebocoran Gas SF6 Titik perlu di cek ke site (Pengisian 4 Bulan sekali)',
 'Kebocoran', '2017-01-01', '2024-05-18', NULL, 'Minor', NULL,
 'LKP On Progress', 'Investigasi lanjutan', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 25
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 3', 'GM 33', 'S',
 'Kebocoran Gas SF6 Titik perlu di cek ke site (Pengisian 5 Bulan sekali)',
 'Kebocoran', '2017-01-01', '2024-05-18', NULL, 'Minor', NULL,
 'LKP On Progress', 'Investigasi lanjutan', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 26
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 4', 'PMT 7AB4', 'R, T',
 'Kebocoran Gas SF6 Titik perlu di cek ke site (Pengisian 3 Bulan sekali)',
 'Kebocoran', '2019-01-01', '2024-05-18', NULL, 'Minor', NULL,
 'LKP On Progress', 'Investigasi lanjutan', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 27
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 5', '7AB5', 'R',
 'Pressure switch pompa hidraulik PMT 7AB5 phasa R sering bermasalah/perlu penggantian',
 'PMT/PMS Macet', '2024-03-02', '2024-05-01', '2024-05-01', 'Minor', 'Selesai',
 'LKP On Progress', 'Pembersihan kontak Limit Switch', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1n7qXS1txmgtQRXj3YgsKibyoY2mZJ5I2/view?usp=drive_link',
 '2025-05-01', 'CLOSE'),
 
-- Record 28
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 5', '7AB5', 'R',
 'Rembesan minyak di sambungan pipa hidraulik PMT 7B5 phasa R (sangat sedikit)',
 'Rembesan', '2024-01-01', '2024-05-18', NULL, 'Minor', NULL,
 'LKP On Progress', 'Investigasi lanjutan', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 29
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 5', '7AB5', 'R',
 'Rembesan di sekitar Safety Valve PMT 7B5 phasa S ( sedkit )', 'Rembesan',
 '2024-01-01', '2024-05-18', NULL, 'Minor', NULL,
 'LKP On Progress', 'Investigasi lanjutan', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 30
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'CIRATA 1', 'Clamp CVT', 'R, S, T',
 'Suhu Clamp CVT mengalami Hotspot : Phasa R : 48.3 derajat Phasa S : 33.4 derajat Phasa T : 51.1 derajat',
 'Hotspot', '2024-01-01', NULL, '2024-07-15', 'Minor', 'Selesai',
 'LKP On Progress', 'Perbaikan', 'ULTG', 5520163,
 'https://drive.google.com/file/d/1k3R7jEZ_ZgJLDzT3Sc8tE7GP-s_TpBJe/view?usp=drive_link',
 'RAB bersatu no 9', FALSE,
 'https://drive.google.com/file/d/1e6LEMQIcm2wAH6uv286rGsngvHQ1F73r/view?usp=drive_link',
 '2025-07-01', 'CLOSE'),
 
-- Record 31
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Cibinong 1', 'Clamp CVT', 'S',
 'Suhu Clamp CVT mengalami Hotspot : Phasa R : 33.0 derajat Phasa S : 40.9 derajat Phasa T : 33.0 derajat',
 'Hotspot', '2024-07-06', '2024-07-10', '2024-07-10', 'Minor', 'Selesai',
 'LKP On Progress', 'Perbaikan', 'ULTG', 5520163,
 'https://drive.google.com/file/d/1k3R7jEZ_ZgJLDzT3Sc8tE7GP-s_TpBJe/view?usp=drive_link',
 NULL, FALSE,
 'https://drive.google.com/file/d/1l7dOtTgtvS54zp6U5hismukByMUGYtgz/view?usp=drive_link',
 '2025-07-01', 'CLOSE'),
 
-- Record 32
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Kompressor Unit#1 ( Diameter#1, Diameter#2, Diameter#3 )', 'Kompressor Unit #1', '-',
 '- Kebocoran pada seal Air reduce Valve - Kebocoran pada Safety valve', 'Kebocoran',
 '2024-01-01', '2025-01-01', NULL, 'Minor', NULL,
 'LKP On Progress', 'Sudah Masuk Kontrak Overhaul 2025', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 33
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'Kompressor Unit#2 ( Diameter#4 )', 'Kompressor Unit#2', '-',
 '- Safety valve bocor - 1 unit Kompresor tidak fungsi', 'Kebocoran',
 '2024-01-01', '2024-05-18', NULL, 'Minor', NULL,
 'LKP On Progress', 'Investigasi lanjutan', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 34
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'BANDUNG SELATAN 2', 'LA', 'R',
 'Nilai uji isolasi LA Bawah Ground short', 'IL3 (Hasil Uji)',
 '2024-07-20', '2024-07-20', '2024-07-20', 'Minor', 'Selesai',
 'LKP On Progress', 'Perbaikan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/127pqoiJwGrd-kHwXyX3bYnnhR2UaXoT5/view?usp=drive_link',
 '2025-07-01', 'CLOSE'),
 
-- Record 35
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 2', '7AB2', 'T',
 'Terdapat kebocoran gas SF6 pada penutup drain valve', 'Kebocoran',
 '2024-11-05', '2024-11-14', '2024-11-14', 'Minor', 'Selesai',
 NULL, 'Perbaikan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1DT2GAcg25N9LdGauEwAWliDSGTGIDn1b/view?usp=drive_link',
 '2025-11-01', 'CLOSE'),
 
-- Record 36
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'BANDUNG SELATAN 1', 'CVT', 'R',
 'Suhu Clamp CVT mengalami Hotspot : Phasa R : 39.3 derajat Phasa S : 31.9 derajat Phasa T : 31.2 derajat',
 'Hotspot', '2024-10-25', '2024-11-23', '2024-11-23', 'Minor', 'Selesai',
 NULL, 'Perbaikan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1A2bDnPq3WJJc-Xxb3qK8YRYiCuYD--fD/view?usp=drive_link',
 '2025-11-01', 'CLOSE'),
 
-- Record 37
(6, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'KOPEL', 'CT', 'R',
 'Rembesan pada CT', 'Rembesan',
 '2024-01-01', '2024-06-24', '2024-06-12', 'Minor', 'Selesai',
 'LKP On Progress', 'Perbaikan', 'ULTG', 12441865,
 'https://drive.google.com/file/d/1-2PEYejCOAlX4d4bMelNnn7Im0vEIaVA/view?usp=drive_link',
 NULL, FALSE,
 'https://drive.google.com/file/d/10BzCMgBqku18aO8ZW1IV_Y-cS8nG6EbG/view?usp=drive_link',
 '2025-06-01', 'CLOSE'),
 
-- Record 38
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 4', 'TRAFO', '-',
 '- Rembesan pada pipa konservator arah Buholz (Tidak menetes, tetapi terlihat basah di body) #NAME? (Tidak menetes, minor)',
 'Rembesan', '2024-01-01', '2024-07-28', '2024-11-17', 'Minor', 'Selesai',
 'LKP On Progress', 'Perbaikan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/11q_fxkJpI67XLL88yZ96u4wdfcWt0axK/view?usp=drive_link',
 '2025-11-01', 'CLOSE'),
 
-- Record 39
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 3', 'TRAFO', '-',
 'Sering muncul sinyal palsu OLTC Oil Level Alarm di Announciator (Perlu di cek kembali ke site untuk mengetahui sumber masalah)',
 'Rembesan', '2024-01-01', '2024-05-22', '2024-12-15', 'Minor', 'Selesai',
 'LKP On Progress', 'Investigasi lanjutan', 'ULTG', NULL, NULL,
 'Rembesan terdapat pada SP OLTC', FALSE,
 'https://drive.google.com/file/d/1meFFt4z9eYz_wJoXRZYYOrJR7VVHBQsE/view?usp=drive_link',
 '2025-12-01', 'CLOSE'),
 
-- Record 40
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'BANDUNG UTARA 1', 'PMS REL 2', 'R, S, T',
 'Gear mekanik penggerak PMS BUS B BAY BDUTR rusak (Patah)', 'PMT/PMS Macet',
 '2024-01-01', '2024-11-17', NULL, 'Minor', NULL,
 'LKP On Progress', 'Penggantian PMS', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 41
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'CIRATA BARU 1', 'PMS REL 1', 'R, S, T',
 'Mekanik penggerak PMS BUS A sulit digerakkan (Berat)', 'PMT/PMS Macet',
 '2024-01-01', '2024-08-03', NULL, 'Minor', NULL,
 'LKP On Progress', 'Penggantian PMS', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 42
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'CIRATA BARU 1', 'PMS REL 2', 'R, S, T',
 'Mekanik penggerak PMS BUS B sulit digerakkan (Berat)', 'PMT/PMS Macet',
 '2024-01-01', '2024-08-03', NULL, 'Minor', NULL,
 'LKP On Progress', 'Penggantian PMS', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 43
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'CIRATA BARU 2', 'PMS REL 1', 'R, S, T',
 'Mekanik penggerak PMS BUS A sulit digerakkan (Berat)', 'PMT/PMS Macet',
 '2024-01-01', '2024-08-03', NULL, 'Minor', NULL,
 'LKP On Progress', 'Penggantian PMS', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 44
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'CIRATA BARU 2', 'PMS REL 2', 'R, S, T',
 'Mekanik penggerak PMS BUS B sulit digerakkan (Berat)', 'PMT/PMS Macet',
 '2024-01-01', '2024-08-03', NULL, 'Minor', NULL,
 'LKP On Progress', 'Penggantian PMS', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),
 
-- Record 45
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'BANDUNG UTARA 1', 'PMS REL 1', 'S',
 'Hotspot klem stud PMS BUS 1 arah PMT', 'Hotspot',
 '2024-01-01', '2024-06-28', '2024-06-28', 'Minor', 'Selesai',
 NULL, 'Perbaikan', 'PDKB', NULL, NULL, NULL, FALSE,
 'PDKB', '2025-06-01', 'CLOSE'),
 
-- Record 46
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'BANDUNG UTARA 2', 'PMS REL 2', 'R',
 '- Klem PMS Bus B Arah PMT - Klem PMS Bus B Arah Busbar', 'Hotspot',
 '2024-07-08', '2024-07-18', '2024-07-18', 'Minor', 'Selesai',
 NULL, 'Perbaikan', 'PDKB', NULL, NULL, NULL, FALSE,
 'PDKB', '2025-07-01', 'CLOSE'),
 
-- Record 47
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 2', 'PMS REL 2', 'R',
 'Terdapat Hotspot pada PMS REL 2', 'Hotspot',
 '2024-08-16', '2024-08-21', '2024-08-21', 'Minor', 'Selesai',
 NULL, NULL, 'PDKB', NULL, NULL, NULL, FALSE,
 'PDKB', '2025-08-01', 'CLOSE'),
 
-- Record 48
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'JATILUHUR 1', 'LA', 'R, S, T',
 '- Tahanan Isolasi LA Fasa T semua titik ukur mengalami Penurunan 8000 MΩ - Nilai Watt Loss LA diatas 0.1 V, - R : 0.1109 V - S : 0.1050 V - T : 0.2443 V - Tahanan Isolasi Bawah - Ground buruk, - R : 0.1 MΩ - S : 0.1 MΩ - T : 0.3 MΩ',
 'IL3 (Hasil Uji)', '2024-01-01', '2024-09-30', '2024-09-30', 'Mayor', 'Selesai',
 NULL, 'Penggantian LA', 'Vendor', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1JD_y1ZTQkO583RRXclbc1ylelEh_R1nz/view?usp=drive_link',
 '2025-09-01', 'CLOSE'),
 
-- Record 49
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'JATILUHUR 1', 'CVT', 'S',
 'Terdapat Rembesan Pada Glass Indikator', 'Rembesan',
 '2023-10-01', '2024-10-23', '2024-10-23', 'Minor', 'Selesai',
 NULL, 'Penambalan', 'ULTG', 22083590,
 'https://drive.google.com/file/d/1T2zdpVFStKgieYTak2PCHlf9gYL0L9cg/view?usp=drive_link',
 'Digabung dengan rembesan IBT 1 Cigereleng, CT fasa R bay bandung selatan 2 GIS Kiaracondong',
 FALSE,
 'https://drive.google.com/file/d/1eyyDs4qkzRSWVOq_ZIBkkAhLGfYSMCHh/view?usp=sharing',
 '2025-10-01', 'CLOSE'),

 -- Record 50
(1, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'LAGADAR 2', 'CVT', 'T',
 'Terdapat Rembesan Pada Glass Indikator', 'Rembesan',
 '2023-10-01', '2024-10-29', '2024-10-29', 'Minor', 'Selesai',
 NULL, 'Penambalan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/14i_gWtBD73VryWRvomTjJtm_g6sk-F9W/view?usp=drive_link',
 '2025-10-01', 'CLOSED'),

-- Record 51
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUKALUYU 1', 'PMS REL 1', 'R, S, T',
 'PMS Rel 1 150kV Bay Sukaluyu 1 tidak bisa dioperasikan dengan motor dan ketika dioperasikan manual mekanik berat.',
 'PMT/PMS Macet', '2024-01-01', '2024-07-11', NULL, 'Minor', NULL,
 'LKP On Progress', 'Penggantian PMS', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),

-- Record 52
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUKALUYU 1', 'PMT', 'R',
 'PMT 150kV Bay Sukaluyu 1 Phasa R mengalami kebocoran halus. Saat ini tekanan SF6 0,66MPa. Periode pengisian Gas SF6 dilakukan rutin tahunan.',
 'Kebocoran', '2024-01-01', '2024-07-11', '2024-11-21', 'Minor', 'Selesai',
 'LKP On Progress', 'Investigasi lanjutan', 'ULTG', 31750740,
 'https://drive.google.com/file/d/12HxJs9FVsd0oAT4nW9xJHHlN_jRl3s7x/view?usp=drive_link',
 NULL, FALSE,
 'https://drive.google.com/file/d/1Y9dKK8yzhMRXFSFgFFh5HEHg_ML8j-Rh/view?usp=drive_link',
 '2025-11-01', 'CLOSED'),

-- Record 53
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 2', 'BUSHING NETRAL SEKUNDER', 'N',
 'Rembesan bushing netral sekunder akibat gempa', 'Rembesan',
 '2024-01-01', '2024-05-13', '2024-05-13', 'Mayor', 'Selesai',
 'LKP On Progress', 'Penambalan', 'ULTG', 49787800,
 'https://drive.google.com/file/d/1OLEt8rOEYNhyiCdEAsswFxNH1ne5yz9c/view?usp=drive_link',
 NULL, TRUE,
 'https://drive.google.com/file/d/1Vqx0u998-JTSVMhYUV8qR3GpHpRnpBr7/view?usp=drive_link',
 '2025-05-01', 'CLOSED'),

-- Record 54
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'LEMBURSITU 1', 'PMS LINE', 'S',
 'Mekanik penggerak PMS Line macet', 'PMT/PMS Macet',
 '2024-03-18', '2024-06-19', '2024-06-19', 'Minor', 'Selesai',
 'LKP On Progress', 'Perbaikan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1KOttn0XPsaskuko4CugrpbZh_6OW0Xkg/view?usp=drive_link',
 '2025-06-01', 'CLOSED'),

-- Record 55
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'LEMBURSITU 1', 'LA', 'R',
 'Hasil uji isolasi bawah-ground 0 (short)', 'IL3 (Hasil Uji)',
 '2024-06-19', '2024-06-19', '2024-06-19', 'Minor', 'Selesai',
 'LKP On Progress', 'Perbaikan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1KOttn0XPsaskuko4CugrpbZh_6OW0Xkg/view?usp=drive_link',
 '2025-06-01', 'CLOSED'),

-- Record 56
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'KAPASITOR', 'CT', 'T',
 'CT arah PMS Tanah fasa T mengalami kenaikan suhu', 'Hotspot',
 '2024-07-07', '2024-07-07', '2024-07-07', 'Minor', 'Selesai',
 'LKP On Progress', 'Perbaikan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1EIr0Cobpb1RRbJ4Yxs8QBrbX2-alEVWw/view?usp=drive_link',
 '2025-07-01', 'CLOSED'),

-- Record 57
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'LEMBURSITU 2', 'LA', 'R, S, T',
 'Hasil uji isolasi bawah-ground 0 (short)', 'IL3 (Hasil Uji)',
 '2024-07-08', '2024-07-08', '2024-07-08', 'Minor', 'Selesai',
 'LKP On Progress', 'Perbaikan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1pI41o71QwaXsVsH6j6xx8Icz_dRXfWnO/view?usp=drive_link',
 '2025-07-01', 'CLOSED'),

-- Record 58
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'KATULAMPA', 'PMS TANAH', 'R, S, T',
 'PMS Tanah tidak masuk sempurna', 'PMT/PMS Macet',
 '2024-01-01', '2024-09-02', '2024-09-02', 'Minor', 'Selesai',
 NULL, 'Perbaikan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/11QM6A_sCrDDewdpMdp2rR4KQeSSGksFr/view?usp=drive_link',
 '2025-09-01', 'CLOSED'),

-- Record 59
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'KATULAMPA', 'PMS LINE', 'S',
 'Terdapat Hotspot pada PMS Line', 'Hotspot',
 '2024-08-28', '2024-09-02', '2024-09-02', 'Minor', 'Selesai',
 NULL, NULL, 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 '2025-09-01', 'CLOSED'),

-- Record 60
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'BOGOR BARU', 'PMS TANAH', 'R',
 'PMS Tanah tidak masuk sempurna', 'PMT/PMS Macet',
 '2024-09-18', '2024-09-18', '2024-09-18', 'Minor', 'Selesai',
 NULL, NULL, 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1jcyhhgq6NygTkZFNTdRcHTDOX9kkt-AQ/view?usp=drive_link',
 '2025-09-01', 'CLOSED'),

-- Record 61
(7, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'RAJAMANDALA', 'PMT', 'T',
 'Konduktor mekar pada lekukan/lengkungan Crossbar arah PMT', 'Hotspot',
 '2024-01-01', '2024-05-29', '2024-06-02', 'Minor', 'Selesai',
 'LKP On Progress', 'Perbaikan Oleh UPP', 'Vendor', NULL, NULL, NULL, FALSE,
 'Vendor', '2025-06-01', 'CLOSED'),

-- Record 62
(7, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'CIANJUR 1', 'CT', 'S',
 'Suhu Clamp CT arah PMT mengalami Hotspot 38.9 derajat', 'Hotspot',
 '2024-01-19', '2024-11-21', '2024-11-21', 'Minor', 'Selesai',
 NULL, NULL, 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1BgLvxYlAHCUFzwhLKQGh9F_EbYEugwUi/view?usp=drive_link',
 '2025-11-01', 'CLOSED'),

-- Record 63
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 7', 'TRAFO', '-',
 'Rembes pada dexel trafo', 'Rembesan',
 '2024-01-01', '2024-11-24', NULL, 'Mayor', NULL,
 'LKP On Progress', 'Perbaikan', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),

-- Record 64
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 7', 'TRAFO', 'N',
 'Rembesan pada bushing netral sekunder', 'Rembesan',
 '2024-01-01', '2024-11-13', '2024-09-13', 'Minor', 'Selesai',
 NULL, NULL, 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1uhidYCwlLQO1jaFNE7ANkCEAne4zHB5T/view?usp=drive_link',
 '2025-09-01', 'CLOSED'),

-- Record 65
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 10', 'TRAFO', '-',
 'Rembesan pada sekunder', 'Rembesan',
 '2024-08-05', '2024-09-21', '2024-09-21', 'Minor', 'Selesai',
 NULL, 'Perbaikan', 'ULTG', 8165968,
 'https://drive.google.com/file/d/1U8PDw-Pt1yoKyPPZ0cOy6YclkoL_zPA9/view?usp=drive_link',
 NULL, FALSE,
 'https://drive.google.com/file/d/1sc56EpJ3Xcl6ykAG-RABVCPVmXBZwZaP/view?usp=drive_link',
 '2025-09-01', 'CLOSED'),

-- Record 66
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'BANDUNG SELATAN 2', 'PMT', 'R',
 'Nilai Tahanan Kontak Tinggi 70 mohm', 'IL3 (Hasil Uji)',
 '2024-08-03', '2024-08-03', '2024-08-03', 'Minor', 'Selesai',
 NULL, 'Perbaikan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1dFE5D162u5ZIsvUqDJUVNwRlqKZ5hE17/view?usp=drive_link',
 '2025-08-01', 'CLOSED'),

-- Record 67
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'BANDUNG SELATAN 2', 'PMT', 'R',
 'Keserempakan tinggi', 'IL3 (Hasil Uji)',
 '2024-08-03', '2024-08-03', '2024-08-03', 'Minor', 'Selesai',
 NULL, 'Perbaikan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1dFE5D162u5ZIsvUqDJUVNwRlqKZ5hE17/view?usp=drive_link',
 '2025-08-01', 'CLOSED'),

-- Record 68
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 7', 'PMT', '-',
 'PMT ada kebocoran gas SF6, harus sering di isi tiap 2 minggu', 'Kebocoran',
 '2024-01-01', '2024-09-13', '2024-09-14', 'Mayor', 'Selesai',
 'LKP On Progress', 'Penggantian', 'Vendor', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1uhidYCwlLQO1jaFNE7ANkCEAne4zHB5T/view?usp=drive_link',
 '2025-09-01', 'CLOSED'),

-- Record 69
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'IBT 1', 'TRAFO', '-',
 'Rembes pada OLTC (Tidak menetes)', 'Rembesan',
 '2024-01-01', '2024-09-29', '2024-12-03', 'Minor', 'Selesai',
 'LKP On Progress', 'Penambalan', 'ULTG', NULL,
 'https://drive.google.com/file/d/1T2zdpVFStKgieYTak2PCHlf9gYL0L9cg/view?usp=drive_link',
 'Digabung dengan perbaikan rembesan CVT fasa S bay Jatiluhur 1 & CT fasa R bay bandung selatan 2 GIS Kiaracondong',
 FALSE,
 'https://drive.google.com/file/d/1tpiVYVQR_AZ75Vhk_VOVAq-yhLJQOCIz/view?usp=drive_link',
 '2025-12-01', 'CLOSED'),

-- Record 70
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 9', 'TRAFO', '-',
 'Rembes di konservator (Tidak menetes)', 'Rembesan',
 '2024-01-01', '2024-12-31', '2024-12-10', 'Minor', 'Selesai',
 'LKP On Progress', 'Penggantian Trafo', 'Vendor', 24326640,
 '1 RAB Perbaikan rembesan TRF 9 dan IBT 1 GI CGRLG 2025.pdf', NULL, FALSE,
 'https://drive.google.com/file/d/1ufpJD1uaYXTtndWtx2CVJNwwHJGpnKaG/view?usp=drive_link',
 '2025-12-01', 'CLOSED'),

-- Record 71
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'IBT 2', 'PMT 70 KV', 'R, T',
 'Hasil uji tahanan kontak tinggi', 'PMT/PMS Macet',
 '2024-08-13', NULL, NULL, 'Mayor', NULL,
 NULL, 'Penggantian PMT', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),

-- Record 72
(5, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'TRAFO', '-',
 'Rembesan Minyak Trafo pada packing dan dexel trafo (Tidak menetas)', 'Rembesan',
 '2024-01-01', '2024-10-28', NULL, 'Minor', NULL,
 'LKP On Progress', 'Penambalan', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),

-- Record 73
(9, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'GEDEBAGE 1', 'CVT', 'T',
 'Hotspot box CVT bagian atas', 'Hotspot',
 '2024-01-01', '2024-06-13', '2024-05-30', 'Minor', 'Selesai',
 'LKP On Progress', 'Penggantian CVT', 'ULTG', NULL, NULL,
 'CVT eksisting kondisi masih bagus, perlu dilakukan penggantian rangkaian FR', FALSE,
 'https://drive.google.com/file/d/1bCkriZGivfgaKR6cLMcerr2s3HquevDr/view?usp=drive_link',
 '2025-05-01', 'CLOSED'),

-- Record 74
(9, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'TRAFO', '-',
 'Manometer tangki OLTC mendekati garis MIN', 'Rembesan',
 '2024-01-01', '2024-05-27', '2024-05-27', 'Minor', 'Selesai',
 'LKP On Progress', 'Penambahan minyak OLTC dan Investigasi kebocoran', 'ULTG', NULL, NULL,
 'Titik rembesan dari relay Jansen, perlu dilakukan penggantian', FALSE,
 'https://drive.google.com/file/d/1zZJ-gLcCOr3V3cQzWxI0ChvHpL-zR1CF/view?usp=drive_link',
 '2025-05-01', 'CLOSED'),

-- Record 75
(9, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'TRAFO', '-',
 'Incoming Trafo 1 bergetar (diganjal)', 'PMT/PMS Macet',
 '2024-01-01', '2024-05-27', NULL, 'Minor', NULL,
 'LKP On Progress', 'Penggantian INC', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),

-- Record 76
(9, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'TRAFO', '-',
 'Arus bocor kabel power phasa S1 kabel tinggi', 'Arus Bocor',
 '2024-01-01', '2024-05-27', '2024-05-27', 'Minor', 'Selesai',
 'LKP On Progress', 'Reposisi Ground Shield', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1zZJ-gLcCOr3V3cQzWxI0ChvHpL-zR1CF/view?usp=drive_link',
 '2025-05-01', 'CLOSED'),

-- Record 77
(9, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'TRAFO', '-',
 'Rembesan pada rele jansen', 'Rembesan',
 '2023-10-30', '2024-11-06', '2024-11-06', 'Minor', 'Selesai',
 'LKP On Progress', 'Penambalan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1FqZ0zToKeM70QLAb7xAgA4I2ni-2mE9M/view?usp=drive_link',
 '2025-11-01', 'CLOSED'),

-- Record 78
(9, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 2', 'TRAFO', '-',
 'Ada rembesan pada pipa sergi (Tidak menetes)', 'Rembesan',
 '2024-01-01', '2024-07-24', '2024-07-24', 'Minor', 'Selesai',
 'LKP On Progress', 'Penambalan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1nmr_Sf3pC_Htk0CX2qiOOm0BuAvThH1W/view?usp=drive_link',
 '2025-07-01', 'CLOSED'),

-- Record 79
(9, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 2', 'TRAFO', '-',
 'Terdapat Rembesan Pada Valve Radiator Main Tank', 'Rembesan',
 '2024-07-24', '2024-07-24', '2024-07-24', 'Minor', 'Selesai',
 'LKP On Progress', 'Perbaikan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1nmr_Sf3pC_Htk0CX2qiOOm0BuAvThH1W/view?usp=drive_link',
 '2025-07-01', 'CLOSED'),

-- Record 80
(9, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 2', 'TRAFO', '-',
 'Terdapat Rembesan Pada Dexel', 'Rembesan',
 '2024-10-10', NULL, NULL, 'Minor', NULL,
 NULL, NULL, 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),

-- Record 81
(9, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'BANDUNG SELATAN 1', 'CVT', 'R',
 'Terdapat Desis, Hotspot, Tegangan Drop dan VT Fail pada CVT', 'Hotspot',
 '2024-10-06', '2024-10-06', '2024-10-06', 'Mayor', 'Selesai',
 NULL, 'Perbaikan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1BEa8NYj0WrWubt6VCTHTihRu8GGZVGr0/view?usp=drive_link',
 '2025-10-01', 'CLOSED'),

-- Record 82
(9, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'BANDUNG SELATAN 2', 'CT', 'R',
 'Terdapat Rembesan pada CT Outdoor', 'Rembesan',
 '2024-10-22', '2024-11-06', '2024-11-06', 'Minor', 'Selesai',
 NULL, 'Perbaikan', 'ULTG', NULL,
 'https://drive.google.com/file/d/1T2zdpVFStKgieYTak2PCHlf9gYL0L9cg/view?usp=drive_link',
 'Digabung dengan perbaikan rembesan CVT fasa S bay jatiluhur 1 gi padalarang baru & IBT 1 GI Cigereleng',
 FALSE,
 'https://drive.google.com/file/d/1FqZ0zToKeM70QLAb7xAgA4I2ni-2mE9M/view?usp=drive_link',
 '2025-11-01', 'CLOSED'),

-- Record 83
(10, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'TRAFO', '-',
 'Kebocoran minyak pada Paking relay bucholz (Sudah bocor lama)', 'Rembesan',
 '2024-01-01', '2024-11-28', '2024-07-30', 'Minor', 'Selesai',
 'LKP On Progress', 'Penggantian packing', 'ULTG', 19196158,
 'https://drive.google.com/file/d/1uq9NeqbGN4W58RI_32XAxUhU5fl9lmsi/view?usp=drive_link',
 NULL, FALSE,
 'https://drive.google.com/file/d/1ANiCVP52XrjmPlES0NxgAoyvcX4UPOas/view?usp=drive_link',
 '2025-07-01', 'CLOSED'),

-- Record 84
(10, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'TRAFO', '-',
 'Kebocoran minyak pada bushing 150 Kv Phasa R (sudah pernah diperbaiki, masih rembes)', 'Rembesan',
 '2024-01-01', '2024-11-28', '2024-07-30', 'Minor', 'Selesai',
 'LKP On Progress', 'Penambalan', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 '2025-07-01', 'CLOSED'),

-- Record 85
(10, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'TRAFO', '-',
 'Kebocoran minyak pada indikator level minyak OLTC (2 menit 1 tetes)', 'Rembesan',
 '2024-01-01', '2024-11-28', '2024-07-30', 'Minor', 'Selesai',
 'LKP On Progress', 'Penggatian indikator level minyak', 'ULTG', NULL, NULL, NULL, TRUE, NULL,
 '2025-07-01', 'CLOSED'),

-- Record 86
(10, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'TRAFO', '-',
 'Kebocoran minyak pada paking radiator pendingin (Dulu sempat menetes)', 'Rembesan',
 '2024-01-01', '2024-11-28', '2024-07-30', 'Minor', 'Selesai',
 'LKP On Progress', 'Penambalan', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 '2025-07-01', 'CLOSED'),

-- Record 87
(10, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'TRAFO', '-',
 'Indikator Minyak konservator tidak berubah (ada beberapa kebocoran minyak)', 'Rembesan',
 '2024-01-01', '2024-11-28', '2024-07-30', 'Minor', 'Selesai',
 'LKP On Progress', 'Leveling dan penambahan minyak', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 '2025-07-01', 'CLOSED'),

-- Record 88
(10, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'PMT', '-',
 'Selang Kompresor PMT 150 KV karatan dan getas', 'Kebocoran',
 '2024-01-01', '2024-11-28', '2024-07-30', 'Minor', 'Selesai',
 'LKP On Progress', 'Penggantian selang', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1ANiCVP52XrjmPlES0NxgAoyvcX4UPOas/view?usp=drive_link',
 '2025-07-01', 'CLOSED'),

-- Record 89
(10, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'PELANGGAN KTT', 'PMS REL 2', 'R, S, T',
 'PMS Rel 2 macet saat dimasukkan', 'PMT/PMS Macet',
 '2024-01-01', '2024-11-29', NULL, 'Minor', NULL,
 'LKP On Progress', 'Resetting', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),

-- Record 90
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'TRAFO', '-',
 'Rembesan dari Konservator ke Maintank (Minor)', 'Rembesan',
 '2024-01-01', '2024-11-26', '2024-07-04', 'Minor', 'Selesai',
 'https://drive.google.com/open?id=1Vq0UfNyf7FrSSfhDDR48NZPNYEHBKvJ4',
 'Penambalan', 'ULTG', 12441865,
 'https://drive.google.com/file/d/1-2PEYejCOAlX4d4bMelNnn7Im0vEIaVA/view?usp=drive_link',
 NULL, FALSE,
 'https://drive.google.com/file/d/1KcVn-P2ymr5R-KIldTx8nB8kLilGTyBD/view?usp=drive_link',
 '2025-07-01', 'CLOSED'),

-- Record 91
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'TRAFO', '-',
 'Rembesan dari Radiator ke Maintank (Minor)', 'Rembesan',
 '2024-01-01', '2024-11-26', '2024-07-04', 'Minor', 'Selesai',
 'https://drive.google.com/open?id=1vR2BpMxy6ctoARlJ1oq1n8GQMluMik9k',
 'Penambalan', 'ULTG', 12441865,
 'https://drive.google.com/file/d/1-2PEYejCOAlX4d4bMelNnn7Im0vEIaVA/view?usp=drive_link',
 NULL, FALSE, NULL,
 '2025-07-01', 'CLOSED'),

-- Record 92
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 1', 'TRAFO', '-',
 'Cover test tap bushing primer phasa T tidak bisa di buka', 'IL3 (Hasil Uji)',
 '2024-01-01', '2024-11-26', '2024-07-04', 'Minor', 'Selesai',
 'LKP On Progress', 'Penggantian Bushing', 'Vendor', NULL, NULL,
 'bisa dibuka, posisi center tap fully grounded', FALSE,
 'https://drive.google.com/file/d/1KcVn-P2ymr5R-KIldTx8nB8kLilGTyBD/view?usp=drive_link',
 '2025-07-01', 'CLOSED'),

-- Record 93
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'KAPASITOR', 'PMS REL 1', 'R, S, T',
 'Mekanik penggerak tidak bisa di operasikan manual (mekanik berat)', 'PMT/PMS Macet',
 '2024-01-01', '2024-09-23', NULL, 'Minor', NULL,
 'https://drive.google.com/open?id=1IjiMaXgI6N7WhvbUNkpKHMJcodNC8qB5',
 'Penggantian PMS', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),

-- Record 94
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'KAPASITOR', 'PMS REL 2', 'R, S, T',
 'Mekanik penggerak tidak bisa di operasikan manual (mekanik berat)', 'PMT/PMS Macet',
 '2024-01-01', '2024-09-23', NULL, 'Minor', NULL,
 'https://drive.google.com/open?id=1IjiMaXgI6N7WhvbUNkpKHMJcodNC8qB5',
 'Penggantian PMS', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),

-- Record 95
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 3', 'PMT', '-',
 'Spring Mekanik PMT sering gagal CLOSED pada saat di operasikan', 'PMT/PMS Macet',
 '2024-01-01', '2024-11-27', '2025-02-03', 'Minor', 'Selesai',
 'https://drive.google.com/open?id=1w6_BdQNj3CyM41ZNgh5On1-CToQ9NxQd',
 'Investigasi lanjutan', 'ULTG', NULL, NULL,
 'Sudah dilaksanakan investigasi, fungsi PMT normal', FALSE, NULL,
 NULL, 'OPEN'),

-- Record 96
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 3', 'TRAFO', '-',
 'Rembesan dari Radiator ke Maintank (Minor)', 'Rembesan',
 '2024-01-01', '2024-11-27', '2024-09-26', 'Minor', 'Selesai',
 'https://drive.google.com/open?id=1PKVZYmTXyiS7yyGqswVITe2hKUk1ll0x',
 'Penambalan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1tQTXony7TAYaHH-AUDDfZNdvEJYqNWe4/view?usp=drive_link',
 '2025-09-01', 'CLOSED'),

-- Record 97
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 4', 'TRAFO', '-',
 'Rembesan Bushing 20 kv Phasa T ( Mayor)', 'Rembesan',
 '2024-01-01', '2024-05-19', '2024-11-19', 'Mayor', 'Selesai',
 'https://drive.google.com/open?id=1lJLthPT_HbARIdI22YkNj9lhkUzCtbwg',
 'Investigasi lanjutan', 'ULTG', 23015275,
 'https://drive.google.com/file/d/16_-R_PPtVwMEj0wmAGVEkN4hKkiBgkjl/view?usp=drive_link',
 'Kebocoran pada venting bushing sekunder', FALSE,
 'https://drive.google.com/file/d/167aFfVn5O9J2CjKGLy5Uo_Y6IqNeuvja/view?usp=drive_link',
 '2025-11-01', 'CLOSED'),

-- Record 98
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 4', 'TRAFO', '-',
 'Rembesan dari Radiator ke Maintank (Minor)', 'Rembesan',
 '2024-01-01', '2024-05-19', '2024-05-19', 'Minor', 'Selesai',
 'https://drive.google.com/open?id=1T2i2edlnr8zkJSpu6EgyiyfeHGR7xXIF',
 'Penambalan', 'ULTG', NULL, NULL, NULL, FALSE,
 'https://drive.google.com/file/d/1TZ4PIuNbjGea4L6aRMxTcANhKNGamdHA/view?usp=drive_link',
 '2025-05-01', 'CLOSED'),

-- Record 99
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 4', 'TRAFO', '-',
 'Rembesan dari Konservator ke Maintank (Minor)', 'Rembesan',
 '2024-01-01', '2024-05-19', '2024-05-19', 'Minor', 'Selesai',
 'https://drive.google.com/open?id=1QUQnUyhGJxbX0UaIXPtjRIIXlX0ETU9C',
 'Penambalan', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 '2025-05-01', 'CLOSED'),

-- Record 100
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'KOPEL', 'PMS REL 2', 'R, S, T',
 'PMS Rel 2 tidak bisa di operasikan via elektrik ( motor PMS short sircuit)', 'PMT/PMS Macet',
 '2024-01-01', '2024-09-24', '2025-10-08', 'Minor', 'Selesai',
 'https://drive.google.com/open?id=1GdaGGmw2fNw3geiK141PtUnIMP4GFnuA',
 'Penggantian PMS', 'Vendor', NULL, NULL,
 'Sudah dilaksanakan penggantian', FALSE, NULL,
 NULL, 'OPEN'),

-- Record 101
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DAGOPAKAR 2', 'PMS REL 2', 'R, S, T',
 'PMS rel 2 tidak bisa di operasikan via mekanik ( lubang tuas engkol tidak simetris)', 'PMT/PMS Macet',
 '2024-01-01', '2024-10-28', NULL, 'Minor', NULL,
 'https://drive.google.com/open?id=1zbWtPtNl1xq68KUGgB2-xT3OrchS9T_9',
 'Penggantian PMS', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),

-- Record 102
(11, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DAGOPAKAR 1', 'PMS LINE', 'R, S, T',
 'PMS line tidak bisa di operasikan elektrik ( motor PMS short sircuit)', 'PMT/PMS Macet',
 '2024-01-01', '2024-10-29', NULL, 'Minor', NULL,
 'https://drive.google.com/open?id=10UZZ09Jlsperjy-BtL0OUBdJk34aTURj',
 'Penggantian PMS', 'Vendor', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),

-- Record 103
(4, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 3', 'TRAFO', '-',
 'Terdapat Rembesan pada Sambungan Pipa Jansen dengan Kompartmen', 'Rembesan',
 '2024-12-12', NULL, NULL, 'Minor', NULL,
 NULL, 'Perbaikan', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'OPEN'),

-- Record 104
(13, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 2', 'TRAFO', '-',
 'Terdapat Rembesan pada Kaca Penduga Jansen', 'Rembesan',
 '2025-01-13', '2025-01-13', '2025-01-13', 'Minor', 'Selesai',
 NULL, 'Pengencangan Baut Kaca Penduga', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 '2025-12-01', 'CLOSED'),

-- Record 105
(13, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 2', 'TRAFO', '-',
 'Terdapat Rembesan pada Tubular Fasa T', 'Rembesan',
 '2025-01-13', '2025-01-13', '2025-01-13', 'Minor', 'Selesai',
 NULL, 'Pemberian Sealtape pada tutup Tubular, Penggantian O-Ring, dan Pengencangan Tutup Tubular',
 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 '2025-12-01', 'CLOSED'),

-- Record 106
(13, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'TRAFO 2', 'TRAFO', '-',
 'Stang Penggerak PMS Tanah Q38 Patah', 'PMT/PMS Macet',
 '2025-01-13', '2025-01-13', '2025-01-13', 'Minor', 'Selesai',
 NULL, 'Penggantian Stang Penggerak PMS Tanah', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 '2025-12-01', 'CLOSED'),

-- Record 107
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'CIBEREUM 1', 'LA', 'S, T',
 'Hasil uji isolasi bawah-ground 0 (short)', 'IL3 (Hasil Uji)',
 '2025-01-21', '2025-01-21', '2025-01-21', 'Minor', 'Selesai',
 NULL, 'Pembersihan support LA', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'CLOSED'),

-- Record 108
(8, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'CIKALONG 1', 'LA', 'R, T',
 'Hasil uji isolasi bawah-ground 0 (short)', 'IL3 (Hasil Uji)',
 '2025-01-22', '2025-01-22', '2025-01-22', 'Minor', 'Selesai',
 NULL, 'Pembersihan support LA', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'CLOSED'),

-- Record 109
(3, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'DIAMETER 2', 'PMT 7A2', 'S',
 'Terdapat kebocoran gas SF6 pada penutup drain valve', 'Kebocoran',
 '2025-01-22', '2025-01-30', '2025-01-30', 'Minor', 'Selesai',
 NULL, 'Penggantian O-ring pada penutup drain valve', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'CLOSED'),

-- Record 110
(10, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'BANDUNG SELATAN 1', 'LA', 'R',
 'Hasil uji isolasi bawah-ground 0 (short)', 'IL3 (Hasil Uji)',
 '2025-01-23', '2025-01-23', '2025-01-23', 'Minor', 'Selesai',
 NULL, 'Pembersihan support LA', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'CLOSED'),

-- Record 111
(2, 'cf42380f-3f38-47f4-b9a2-5905dcd55110', 'KAPASITOR', 'KAPASITOR', 'T',
 'Unbalance pada kapasitor', 'IL3 (Hasil Uji)',
 '2025-01-26', '2025-01-26', '2025-01-26', 'Minor', 'Selesai',
 NULL, 'Penggantian cell kapasitor no.6', 'ULTG', NULL, NULL, NULL, FALSE, NULL,
 NULL, 'CLOSED');