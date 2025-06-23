INSERT INTO anomali_jaringan (
    reported_by, penghantar, span_tower, peralatan, phasa, permasalahan, kategori_anomali, 
    tanggal_temuan, tanggal_rencana, tanggal_realisasi, anomali_mayor_minor, status_selesai, 
    data_pendukung_url, usulan_perbaikan, pelaksana, perkiraan_kebutuhan_anggaran, rab_url, 
    keterangan, realisasi_rab, ba_penyelesaian_url, bulan_selesai, status_anomali
) VALUES
    -- Baris 1
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '1', 'Klem', 'R', 'Anomali Hotspot pada klem tension T.1 arah Switchyard phasa R, suhu 92,8 Drajat C', 'Hotspot', '2024-05-06', '2024-05-08', '2024-05-08', 'Mayor', 'Selesai', NULL, 'Pembersihan dan pengencangan Klem', 'PDKB', NULL, NULL, NULL, FALSE, NULL, '2025-05-01', 'CLOSE'),
    -- Baris 2
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '55', 'Grounding', '-', 'Grounding kaki tower Leg B dan Leg C putus masing-masing 1 kawat', 'Pentanahan', '2024-04-25', '2024-05-16', '2024-05-16', 'Minor', 'Selesai', 'New Srintami', 'Penggantian kawat yang putus', 'ULTG', 500000, 'https://docs.google.com/spreadsheets/d/1VcsHmxvZeNaBDDxoxcYlHGWA3Vt32DuGSMtHo2T7xXw/edit#gid=22446264', NULL, TRUE, 'https://sg.docworkspace.com/d/sIPughq2xAZePx7gG', '2025-05-01', 'CLOSE'),
    -- Baris 3
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '85', 'Grounding', '-', 'Grounding kaki tower leg C putus 1 kawat', 'Pentanahan', '2024-05-02', '2024-05-20', '2024-05-18', 'Minor', 'Selesai', 'New Srintami', 'Penggantian kawat yang putus', 'Vendor KHS', NULL, NULL, 'Telah dilakukan pemasanga MRG oleh pihak vendor khs', FALSE, NULL, '2025-05-01', 'CLOSE'),
    -- Baris 4
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '43', 'Grounding', '-', 'Grounding kaki tower leg C putus 1 kawat', 'Pentanahan', '2024-05-04', '2024-05-30', '2024-06-06', 'Minor', 'Selesai', 'New Srintami', 'Penggantian kawat yang putus', 'ULTG', 500000, 'https://docs.google.com/spreadsheets/d/1bcNXeuJjRtQF4C03usIMcc4GwMoEtEtLXTWWZy5bIWg/edit#gid=1223769720', NULL, TRUE, 'https://sg.docworkspace.com/d/sINOghq2xAaSbx7gG', '2025-06-01', 'CLOSE'),
    -- Baris 5
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150 KV BDUTR-PDLRU', '33', 'GSW', 'GSW', 'Kawat GSW rantas 1 urat', 'GSW', '2024-05-04', '2024-10-31', '2024-08-25', 'Minor', 'Selesai', 'New Srintami', 'Pemasangan armour rod', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-08-01', 'CLOSE'),
    -- Baris 6
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV JTLHR-PDLRU', '56', 'Body Tower', '-', 'Besi siku leg utama bengkok', 'Besi siku', '2024-05-03', '2024-06-22', NULL, 'Mayor', 'Selesai', 'New Srintami dan Hasil CUI KHS', 'Pemantauan secara rutin', 'Vendor KHS', NULL, NULL, 'Telah dilakukan uji verticality dengan hasil masih sesuai standar', FALSE, NULL, '2025-12-01', 'CLOSE'),
    -- Baris 7
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '22', 'Body Tower', '-', 'Terjadi deformasi konstruksi tower ketika cutover ke tower relokasi proyek KCIC', 'Besi siku', '2022-03-01', '2024-12-31', NULL, 'Mayor', 'Selesai', 'New Srintami', 'Tindaklanjut perbaikan oleh pihak KCIC', 'Pihak luar', NULL, NULL, 'Telah dilakukan uji verticality bersama KCIC, WIKA dan PLN dengan hasil masih sesuai standar', FALSE, NULL, '2025-12-01', 'CLOSE'),
    -- Baris 8
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV BDSLN-KRCDG', '39a', 'Konduktor', 'S', 'Konduktor mekar penghantar 2 dan rantas 1 urat di penghantar 1 akibat cutover KCIC', 'Konduktor', '2021-08-02', '2024-10-31', '2024-08-03', 'Minor', 'Selesai', 'New Srintami', 'Tindaklanjut perbaikan oleh pihak KCIC', 'Pihak luar', NULL, NULL, NULL, FALSE, NULL, '2025-08-01', 'CLOSE'),
    -- Baris 9
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV BDSLN-KRCDG', '35', 'Pondasi', '-', 'Ada retakan di chimney leg A', 'Pondasi', '2024-04-29', '2024-05-30', '2024-06-04', 'Minor', 'Selesai', 'New Srintami', 'Perbakan chimney yang retak', 'ULTG', 3000000, 'https://docs.google.com/spreadsheets/d/1F-s0EiiEoopxHZDaBtTDUDb2edxsG1S2OHeVBtRMXyE/edit#gid=635500029', NULL, FALSE, 'https://sg.docworkspace.com/d/sIFCghq2xAe6qyLgG', '2025-06-01', 'CLOSE'),
    -- Baris 10
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV BDSLN-KRCDG', '56', 'Pondasi', '-', 'Ada retakan chimney leg D', 'Pondasi', '2024-05-03', '2024-06-06', '2024-07-03', 'Minor', 'Selesai', 'New Srintami', 'Perbakan chimney yang retak', 'ULTG', 3000000, 'https://docs.google.com/spreadsheets/d/1pWvWXZK-9cC-CgHl-bAvlzznRqNPnFcHmlCusWPNx5Y/edit#gid=760429264', NULL, FALSE, 'https://sg.docworkspace.com/d/sIPighq2xAbasyLgG', '2025-07-01', 'CLOSE'),
    -- Baris 11
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '45', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-08-07', '2024-08-04', '2024-10-26', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-10-01', 'CLOSE'),
    -- Baris 12
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '89', 'Isolator', 'RST', 'isolator kotor akibat polutan', 'Isolator', '2023-08-07', '2024-08-04', '2024-10-26', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-10-01', 'CLOSE'),
    -- Baris 13
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '94', 'Isolator', 'RST', 'isolator kotor akibat polutan', 'Isolator', '2023-08-07', '2024-08-04', '2024-10-26', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-10-01', 'CLOSE'),
    -- Baris 14
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '5', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-10-26', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-10-01', 'CLOSE'),
    -- Baris 15
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '50', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 16
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '51', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 17
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '53', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 18
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '62', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 19
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '70', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 20
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '71', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 21
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '72', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 22
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '74', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 23
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '76', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 24
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '77', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 25
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '78', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 26
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '97', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 27
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '107', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 28
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '113', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 29
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '121', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 30
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '122', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 31
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '123', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 32
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CNJUR', '124', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2023-10-01', '2024-06-13', '2024-11-10', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 33
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 70KV CKLNG-CGRLG', '2', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2024-03-25', '2024-08-31', '2024-09-25', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-09-01', 'CLOSE'),
    -- Baris 34
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 70KV CKLNG-CGRLG', '33', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2024-03-25', '2024-08-31', '2024-09-25', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-09-01', 'CLOSE'),
    -- Baris 35
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 70KV CKLNG-CGRLG', '36', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2024-03-25', '2024-08-31', '2024-09-25', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-09-01', 'CLOSE'),
    -- Baris 36
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 70KV CKLNG-CGRLG', '37', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2024-03-25', '2024-08-31', '2024-09-25', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-09-01', 'CLOSE'),
    -- Baris 37
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 70KV CKLNG-CGRLG', '38', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2024-03-25', '2024-08-31', '2024-09-25', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-09-01', 'CLOSE'),
    -- Baris 38
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 70KV CKLNG-CGRLG', '39', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2024-03-25', '2024-08-31', '2024-09-25', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-09-01', 'CLOSE'),
    -- Baris 39
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 70KV CKLNG-CGRLG', '44', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2024-03-25', '2024-08-31', '2024-09-25', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-09-01', 'CLOSE'),
    -- Baris 40
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 70KV CKLNG-CGRLG', '45', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2024-03-25', '2024-08-31', '2024-09-25', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-09-01', 'CLOSE'),
    -- Baris 41
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 70KV CKLNG-CGRLG', '49', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2024-03-25', '2024-08-31', '2024-09-25', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-09-01', 'CLOSE'),
    -- Baris 42
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 70KV CKLNG-CGRLG', '64', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2024-03-25', '2024-08-31', '2024-09-25', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-09-01', 'CLOSE'),
    -- Baris 43
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV JTLHR-PDLRU', '13', 'Isolator', 'RST', 'isolator kotor akibat polutan dan ball eye korosi 20%-40%', 'Isolator', '2024-05-03', '2024-08-10', '2024-08-13', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-08-01', 'CLOSE'),
    -- Baris 44
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV JTLHR-PDLRU', '18', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2024-05-03', '2024-08-10', '2024-08-13', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-08-01', 'CLOSE'),
    -- Baris 45
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV JTLHR-PDLRU', '19', 'Isolator', 'RST', 'Isolator kotor akibat polutan', 'Isolator', '2024-05-04', '2024-08-10', '2024-08-13', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-08-01', 'CLOSE'),
    -- Baris 46
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV JTLHR-PDLRU', '29', 'Isolator', 'RST', 'isolator kotor akibat polutan dan ball eye korosi 20%-40%', 'Isolator', '2024-05-03', '2024-08-10', '2024-08-13', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-08-01', 'CLOSE'),
    -- Baris 47
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV JTLHR-PDLRU', '30', 'Isolator', 'RST', 'isolator kotor akibat polutan dan ball eye korosi 20%-40%', 'Isolator', '2024-05-03', '2024-08-10', '2024-08-13', 'Minor', 'Selesai', 'New Srintami', 'Pembersihan Isolator', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-08-01', 'CLOSE'),
    -- Baris 49
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-CBREM', '15', 'Bracing', '-', 'Konstruksi bagian atas body tower bengkok', 'Besi siku', '2022-01-01', '2024-11-30', '2024-11-30', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'Vendor KHS', NULL, NULL, 'Telah dilakukan pengukuran verticality dengan hasil sesuai standar', FALSE, NULL, '2025-11-01', 'CLOSE'),
    -- Baris 50
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '29', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2023-07-12', '2024-11-30', '2024-07-10', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak anomali midspan join)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),

    
    -- Baris 51
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '31', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2023-07-12', '2024-11-30', NULL, 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak anomali midspan join)', NULL, NULL, 'Telah dilakukan pengukuran verticality dengan hasil sesuai standar', FALSE, NULL, '2025-12-01', 'CLOSE'),
    -- Baris 52
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '36', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2023-07-12', '2024-11-30', NULL, 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak anomali midspan join)', NULL, NULL, 'Telah dilakukan pengukuran verticality dengan hasil sesuai standar', FALSE, NULL, '2025-12-01', 'CLOSE'),
    -- Baris 53
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '45', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2023-07-12', '2024-11-30', '2024-07-10', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak anomali midspan join)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 54
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '46', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2023-07-12', '2024-11-30', '2024-07-10', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak anomali midspan join)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 55
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '47', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2023-07-12', '2024-11-30', '2024-07-10', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak anomali midspan join)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 56
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '56', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2023-07-12', '2024-11-30', '2024-07-10', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak anomali midspan join)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 57
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '57', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2023-07-12', '2024-11-30', NULL, 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak anomali midspan join)', NULL, NULL, 'Telah dilakukan pengukuran verticality dengan hasil sesuai standar', FALSE, NULL, '2025-12-01', 'CLOSE'),
    -- Baris 58
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '60', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2023-07-12', '2024-11-30', '2024-07-10', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak anomali midspan join)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 59
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '65', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2023-07-12', '2024-11-30', '2024-07-10', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak anomali midspan join)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 60
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '66', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2023-07-12', '2024-11-30', '2024-07-10', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak anomali midspan join)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 61
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '69', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2023-07-12', '2024-11-30', '2024-07-10', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak anomali midspan join)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 62
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-LGDAR', '4', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2022-07-19', '2024-11-30', '2024-07-31', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak penggantian stringset)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 63
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-LGDAR', '7', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2022-07-19', '2024-11-30', '2024-07-31', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak penggantian stringset)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 64
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-LGDAR', '8', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2022-07-19', '2024-11-30', '2024-07-31', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak penggantian stringset)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 65
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-LGDAR', '15', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2022-07-19', '2024-11-30', '2024-07-31', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak penggantian stringset)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 66
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-LGDAR', '18', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2022-07-19', '2024-11-30', '2024-07-31', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak penggantian stringset)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 67
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-LGDAR', '19', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2022-07-19', '2024-11-30', '2024-07-31', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak penggantian stringset)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 68
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-LGDAR', '20', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2022-07-19', '2024-11-30', '2024-07-31', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak penggantian stringset)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 69
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-LGDAR', '22', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2022-07-19', '2024-11-30', '2024-07-31', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak penggantian stringset)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 70
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-LGDAR', '23', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2022-07-19', '2024-11-30', '2024-07-31', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak penggantian stringset)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 71
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-LGDAR', '24', 'Body Tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2022-07-19', '2024-11-30', '2024-07-31', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan seluruh body tower', 'PT MCPU (bersama kontrak penggantian stringset)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 72
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-LGDAR', '27', 'Body tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2022-07-19', '2024-11-30', '2024-07-31', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan body yang bengkok dan korosi', 'PT MCPU (bersama kontrak penggantian stringset)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 73
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-LGDAR', '28', 'Body tower', '-', 'Konstruksi semua leg tower bengkok dan korosi (Usia body sudah tua)', 'Besi siku', '2022-07-19', '2024-11-30', '2024-07-31', 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan body yang bengkok dan korosi', 'PT MCPU (bersama kontrak penggantian stringset)', NULL, NULL, 'Pengecatan dan pengukuran vertikality dengan hasil sesuai standa', FALSE, NULL, '2025-07-01', 'CLOSE'),
    -- Baris 74
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGRLG-LGDAR', '10', 'Body tower', '-', 'Konstruksi body tower bengkok leg A dan leg B', 'Besi siku', '2022-08-04', '2024-12-31', NULL, 'Mayor', 'Selesai', 'CUI PDKB', 'Perbaikan body yang bengkok', 'PT MCPU (bersama kontrak penggantian stringset)', NULL, NULL, 'Telah dilakukan pengukuran verticality dengan hasil sesuai standar', FALSE, NULL, '2025-12-01', 'CLOSE'),
    -- Baris 75
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-LGDAR', '19', 'Body tower', '-', 'Traves mengalami korosi', 'Besi siku', '2022-07-19', '2024-05-28', '2024-06-04', 'Mayor', 'Selesai', 'CUI PDKB', 'Penggantian traves', 'Vendor', NULL, NULL, NULL, FALSE, NULL, '2025-06-01', 'CLOSE'),
    -- Baris 76
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-LGDAR', '20', 'Body tower', '-', 'Traves mengalami korosi', 'Besi siku', '2022-07-19', '2024-05-28', '2024-06-04', 'Mayor', 'Selesai', 'CUI PDKB', 'Penggantian traves', 'Vendor', NULL, NULL, NULL, FALSE, NULL, '2025-06-01', 'CLOSE'),
    -- Baris 77
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-LGDAR', '21', 'Body tower', '-', 'Traves mengalami korosi', 'Besi siku', '2022-07-19', '2024-05-28', '2024-06-04', 'Mayor', 'Selesai', 'CUI PDKB', 'Penggantian traves', 'Vendor', NULL, NULL, NULL, FALSE, NULL, '2025-06-01', 'CLOSE'),
    -- Baris 78
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-LGDAR', '22', 'Body tower', '-', 'Traves mengalami korosi', 'Besi siku', '2022-07-19', '2024-05-28', '2024-06-04', 'Mayor', 'Selesai', 'CUI PDKB', 'Penggantian traves', 'Vendor', NULL, NULL, NULL, FALSE, NULL, '2025-06-01', 'CLOSE'),
    -- Baris 79
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-LGDAR', '24', 'Body tower', '-', 'Traves mengalami korosi', 'Besi siku', '2022-07-19', '2024-05-28', '2024-06-18', 'Mayor', 'Selesai', 'CUI PDKB', 'Penggantian traves', 'Vendor', NULL, NULL, NULL, FALSE, NULL, '2025-06-01', 'CLOSE'),
    -- Baris 80
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-LGDAR', '25', 'Body tower', '-', 'Traves mengalami korosi', 'Besi siku', '2022-07-19', '2024-05-28', '2024-06-18', 'Mayor', 'Selesai', 'CUI PDKB', 'Penggantian traves', 'Vendor', NULL, NULL, NULL, FALSE, NULL, '2025-06-01', 'CLOSE'),
    -- Baris 81
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-LGDAR', '26', 'Body tower', '-', 'Traves mengalami korosi', 'Besi siku', '2022-07-19', '2024-05-28', '2024-06-18', 'Mayor', 'Selesai', 'CUI PDKB', 'Penggantian traves', 'Vendor', NULL, NULL, NULL, FALSE, NULL, '2025-06-01', 'CLOSE'),
    -- Baris 82
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-LGDAR', '27', 'Body tower', '-', 'Traves mengalami korosi', 'Besi siku', '2022-07-19', '2024-05-28', '2024-06-18', 'Mayor', 'Selesai', 'CUI PDKB', 'Penggantian traves', 'Vendor', NULL, NULL, NULL, FALSE, NULL, '2025-06-01', 'CLOSE'),
    -- Baris 83
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '2', 'Terminal jumper', 'T', 'Hotspot String dalam Penghantar 1 fasa T arah T.3', 'Hotspot', '2024-05-15', '2024-06-22', '2024-05-25', 'Minor', 'Selesai', 'New Srintami', 'Perbaikan hotspot', 'Vendor KHS', NULL, NULL, 'Selisih suhu 16 derajat', FALSE, NULL, '2025-05-01', 'CLOSE'),
    -- Baris 84
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '51', 'Terminal jumper', 'R', 'Hotspot arah T.50 fasa R Penghantar 1', 'Hotspot', '2024-05-15', '2024-06-22', '2024-05-25', 'Minor', 'Selesai', 'New Srintami', 'Perbaikan hotspot', 'Vendor KHS', NULL, NULL, 'Selisih suhu 17.4 derajat', FALSE, NULL, '2025-05-01', 'CLOSE'),
    -- Baris 85
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '54', 'Midspan Joint', 'S', 'Hotspot arah T.53 fasa S Penghantar 2', 'Hotspot', '2024-05-15', '2024-06-22', '2024-05-26', 'Minor', 'Selesai', 'New Srintami', 'Pemasangan jumper temporari', 'Vendor KHS', NULL, NULL, 'Selisih suhu 6.9 derajat tetapi ada gradasi warna', FALSE, NULL, '2025-05-01', 'CLOSE'),
    -- Baris 86
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '56', 'Dead end GSW', 'GSW', 'Hotspot Dead end clamp GSW arah T.55 Penghantar 2', 'Hotspot', '2024-05-15', '2024-06-22', '2024-05-26', 'Minor', 'Selesai', 'New Srintami', 'Pemasangan jumper temporari', 'Vendor KHS', NULL, NULL, 'Selisih suhu 36,1 derajat', FALSE, NULL, '2025-05-01', 'CLOSE'),
    -- Baris 87
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '59', 'Terminal jumper', 'S', 'Hotspot terminal jumper fasa S arah T.58 Penghantar 2', 'Hotspot', '2024-05-15', '2024-06-22', '2024-05-26', 'Minor', 'Selesai', 'New Srintami', 'Perbaikan hotspot', 'Vendor KHS', NULL, NULL, 'Selisih suhu 23,4 derajat', FALSE, NULL, '2025-05-01', 'CLOSE'),
    -- Baris 88
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '70', 'Midspan Joint', 'S', 'Hotspot midspan joint fasa S arah T.69 Penghantar 1', 'Hotspot', '2024-05-15', '2024-06-22', '2024-05-25', 'Minor', 'Selesai', 'New Srintami', 'Pemasangan jumper temporari', 'Vendor KHS', NULL, NULL, 'Selisih suhu 19,7 derajat', FALSE, NULL, '2025-05-01', 'CLOSE'),
    -- Baris 89
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '102', 'CDE', 'T', 'Hotspot CDE arah T.101 fasa T Penghantar 1', 'Hotspot', '2024-05-15', '2024-06-22', '2024-05-25', 'Minor', 'Selesai', 'New Srintami', 'Pemasangan jumper temporari', 'Vendor KHS', NULL, NULL, 'Selisih suhu 18,6 derajat', FALSE, NULL, '2025-05-01', 'CLOSE'),
    -- Baris 90
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '86', 'Midspan Joint', 'T', 'Hotspot Midspan joint arah T.85 fasa T Penghantar 2', 'Hotspot', '2024-05-15', '2024-06-22', '2024-05-26', 'Minor', 'Selesai', 'New Srintami', 'Pemasangan jumper temporari', 'Vendor KHS', NULL, NULL, 'Selisih suhu 10,4 derajat', FALSE, NULL, '2025-05-01', 'CLOSE'),
    -- Baris 91
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '31', 'Grounding', '-', 'leg D (posisi ditinggal di halaman tower dan sudah diamankan) grounding leg A (layer luar saja) hilang', 'Pentanahan', '2024-05-18', '2024-05-21', '2024-05-21', 'Minor', 'Selesai', 'https://drive.google.com/open?id=1q_Y7k2MXgJmOiC8mrUimhCjVBMrRvj_2', 'Perbaikan pentanahan yang hilang', 'ULTG', 800000, 'https://docs.google.com/spreadsheets/d/11hfYZDNFg4UDqv8ofdid-oKOCVhJ-NSPTDNFtzK7dSw/edit#gid=22446264', NULL, TRUE, 'https://sg.docworkspace.com/d/sIG6ghq2xAbPMybgG', '2025-05-01', 'CLOSE'),
    -- Baris 92
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV PDLRU-CRATA', '32', 'Grounding', '-', 'MRG leg C hilang', 'Pentanahan', '2024-05-18', '2024-05-21', '2024-05-20', 'Minor', 'Selesai', 'https://drive.google.com/open?id=1q_Y7k2MXgJmOiC8mrUimhCjVBMrRvj_2', 'Perbaikan pentanahan yang hilang', 'ULTG', 800000, 'https://docs.google.com/spreadsheets/d/1zVO5wp04AnmnFPUuyK1KPktLD3HUGYB8017LCM2YEak/edit#gid=22446264', NULL, TRUE, 'https://sg.docworkspace.com/d/sIGeghq2xAefTybgG', '2025-05-01', 'CLOSE'),
    -- Baris 93
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV BDSLN-CGRLG', '18', 'Isolator', 'R', 'Isolator T.18 Phasa R Penghantar 2 pecah 1 keping', 'Isolator', '2024-05-22', '2024-06-30', '2024-06-27', 'Minor', 'Selesai', NULL, 'Penggantian Isolator', 'PDKB BANDUNG', NULL, NULL, NULL, FALSE, NULL, '2025-06-01', 'CLOSE'),
    -- Baris 94
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV JTLHR-PDLRU', '83', 'Grounding', '-', 'Grounding hilang Leg A 1 bh, Leg B 2 bh dan Leg D 2 buah', 'Pentanahan', '2024-07-16', '2024-07-17', '2024-07-17', 'Minor', 'Selesai', NULL, 'Perbaikan pentanahan yang hilang', 'ULTG', 1037500, 'https://sg.docworkspace.com/d/sIDeghq2xAZWqo7gG', NULL, TRUE, 'https://sg.docworkspace.com/d/sIJSghq2xAafAyLgG', '2025-07-01', 'CLOSE'),
    -- Baris 95
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGLRG-CKLNG', '52', 'Body tower', '-', 'Besi siku hilang', 'Besi siku', '2024-07-24', '2024-07-25', '2024-07-25', 'Mayor', 'Selesai', NULL, 'Perbaikan besi siku hilang', 'ULTG', NULL, NULL, NULL, FALSE, 'https://drive.google.com/file/d/11tvoxCt2A-U2-EPXhnlZlgENzrN8VprI/view?usp=drive_link', '2025-07-01', 'CLOSE'),
    -- Baris 96
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV BDSLN-KRCDG', '56', 'Body tower', '-', 'Besi siku hilang', 'Besi siku', '2024-07-24', '2024-07-25', '2024-07-25', 'Mayor', 'Selesai', NULL, 'Perbaikan besi siku hilang', 'ULTG', NULL, NULL, NULL, FALSE, 'https://drive.google.com/file/d/1gDu-E9nJ8dGg3-doaet6wtWQxmbvkUB6/view?usp=drive_link', '2025-07-01', 'CLOSE'),
    -- Baris 97
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150 KV BDUTR-PDLRU', '36', 'terminal jumper', 'R,S,T', 'Hotspot di PG Terminal Jumper', 'Hotspot', '2024-09-09', '2024-09-12', '2024-09-12', 'Mayor', 'Selesai', NULL, 'Penggantian PG', 'Vendor KHS', NULL, NULL, 'Suhu tertinggi 78 derajat', TRUE, NULL, '2025-09-01', 'CLOSE'),
    -- Baris 98
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV JTLHR-PDLRU', '52', 'Grounding', '-', 'Hasil ukur pentanahan buruk', 'Pentanahan', '2023-08-21', '2024-10-02', '2024-10-03', 'Minor', 'Selesai', 'New Srintami', 'Penambahan patok pentanahan', 'ULTG', 810000, 'https://sg.docworkspace.com/d/sIOOghq2xAeeoo7gG', 'Hasil ukur menjadi 5.99 Ohm', FALSE, 'https://sg.docworkspace.com/d/sIKCghq2xAbOyyLgG', '2025-10-01', 'CLOSE'),
    -- Baris 99
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV CGLRG-CKLNG', '20A', 'Grounding', '-', 'kawat MRG dicuri', 'Pentanahan', '2024-10-04', '2024-10-04', '2024-10-04', 'Minor', 'Selesai', 'Laporan TL Jardgi PNSIA', 'Penggantian kawat pentanahan', 'ULTG', 1625000, 'https://sg.docworkspace.com/d/sIOyghq2xAc-no7gG', NULL, FALSE, 'https://sg.docworkspace.com/d/sIFyghq2xAd61yLgG', '2025-10-01', 'CLOSE'),
    -- Baris 100
    ('cf42380f-3f38-47f4-b9a2-5905dcd55110', 'SUTT 150KV BDSLN-CGRLG', '01,23,39', 'GSW', '-', 'Tidak terpasang jumper GSW', 'GSW', '2023-08-01', '2024-10-31', '2024-10-17', 'Minor', 'Selesai', 'New Srintami', 'Penambahan jumper GSW', 'Vendor KHS', NULL, NULL, NULL, FALSE, NULL, '2025-10-01', 'CLOSE');
    



