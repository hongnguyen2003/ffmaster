-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 08, 2024 lúc 09:41 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ffmaster`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dangky`
--

CREATE TABLE `dangky` (
  `id` int(11) NOT NULL,
  `ten` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `dangky`
--

INSERT INTO `dangky` (`id`, `ten`) VALUES
(1, 'YSL'),
(2, 'DIOR');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhgia`
--

CREATE TABLE `danhgia` (
  `id` int(11) NOT NULL,
  `danhgia` tinyint(1) NOT NULL CHECK (`danhgia` between 1 and 5),
  `idnguoindanhgia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donhang`
--

CREATE TABLE `donhang` (
  `id` int(11) NOT NULL,
  `iddonhang` varchar(255) NOT NULL,
  `idmonhang` int(11) NOT NULL,
  `idnguoimua` varchar(255) NOT NULL,
  `trangthai` enum('wait','paid','done','cancel') NOT NULL DEFAULT 'wait'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `donhang`
--

INSERT INTO `donhang` (`id`, `iddonhang`, `idmonhang`, `idnguoimua`, `trangthai`) VALUES
(37, '24ec43ae-bffc-498b-b08a-2fb3083546e9', 2, 'admin@example.us', 'cancel'),
(38, '7e875444-86e8-441a-81c3-171a97841571', 2, 'admin@example.us', 'cancel'),
(39, '6b103810-1e19-4726-a635-9ccc513dbde3', 5, 'admin@example.us', 'cancel'),
(40, '1f585c3f-71b2-4b86-811b-adc725b73621', 8, 'admin@example.us', 'cancel'),
(41, 'b7149b43-4c64-45eb-95fd-952883b08681', 3, 'admin@example.us', 'cancel'),
(42, '7d88694a-b71f-405e-94d6-27ca3ab9529b', 3, 'admin@example.us', 'cancel'),
(43, '9a33bc82-c786-4ffd-9168-9bad247e0e3a', 3, 'admin@example.us', 'cancel'),
(44, 'e0db3e2c-c570-4dcb-a3a0-460eeaee3ff9', 3, 'admin@example.us', 'cancel'),
(45, '59f21aa8-a0d7-4b4d-8e77-ba5bc2ae21c2', 3, 'admin@example.us', 'cancel'),
(46, '31c572bf-4d6c-445e-b9f5-bd616a13a7b2', 7, 'admin@example.us', 'cancel'),
(47, '31c572bf-4d6c-445e-b9f5-bd616a13a7b2', 8, 'admin@example.us', 'cancel'),
(48, 'fc6fe9db-84e7-42ab-ae2c-3247848cb8c0', 7, 'admin@example.us', 'wait'),
(49, 'fc6fe9db-84e7-42ab-ae2c-3247848cb8c0', 8, 'admin@example.us', 'wait');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `monhang`
--

CREATE TABLE `monhang` (
  `id` int(11) NOT NULL,
  `ten` varchar(255) NOT NULL,
  `gia` decimal(10,2) NOT NULL,
  `mota` text DEFAULT NULL,
  `hinhanh` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`hinhanh`)),
  `dangky` int(11) DEFAULT 0,
  `thevocuc` tinyint(1) DEFAULT 0,
  `soluong` int(11) NOT NULL DEFAULT 1,
  `nhom` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `monhang`
--

INSERT INTO `monhang` (`id`, `ten`, `gia`, `mota`, `hinhanh`, `dangky`, `thevocuc`, `soluong`, `nhom`, `createdAt`, `status`) VALUES
(1, 'Son Đỏ Ruby', 250000.00, 'Son môi đỏ ruby bền màu, phù hợp đi tiệc', '[\"/src/imgs/1.jpg\", \"/src/imgs/2.jpg\", \"/src/imgs/3.jpg\", \"/src/imgs/4.jpg\", \"/src/imgs/5.jpg\", \"/src/imgs/6.jpg\", \"/src/imgs/7.jpg\", \"/src/imgs/8.jpg\"]', 1, 1, 100, 1, '2024-12-07 17:00:00', 0),
(2, 'Son Hồng Baby', 220000.00, 'Son môi hồng baby dịu dàng, phù hợp hàng ngày', '[\"/src/imgs/2.jpg\", \"/src/imgs/3.jpg\", \"/src/imgs/4.jpg\", \"/src/imgs/5.jpg\", \"/src/imgs/6.jpg\", \"/src/imgs/7.jpg\", \"/src/imgs/8.jpg\", \"/src/imgs/1.jpg\"]', 1, 1, 150, 1, '2024-12-07 17:00:00', 0),
(3, 'Son Cam Đào', 240000.00, 'Son môi cam đào trẻ trung, không gây khô môi', '[\"/src/imgs/3.jpg\", \"/src/imgs/4.jpg\", \"/src/imgs/5.jpg\", \"/src/imgs/6.jpg\", \"/src/imgs/7.jpg\", \"/src/imgs/8.jpg\", \"/src/imgs/1.jpg\", \"/src/imgs/2.jpg\"]', 1, 1, 120, 1, '2024-12-07 17:00:00', 0),
(4, 'Son Đỏ Đậm', 280000.00, 'Son môi đỏ đậm quyến rũ, chất lì lâu trôi', '[\"/src/imgs/4.jpg\", \"/src/imgs/5.jpg\", \"/src/imgs/6.jpg\", \"/src/imgs/7.jpg\", \"/src/imgs/8.jpg\", \"/src/imgs/1.jpg\", \"/src/imgs/2.jpg\", \"/src/imgs/3.jpg\"]', 1, 1, 90, 1, '2024-12-07 17:00:00', 0),
(5, 'Son Nâu Đất', 260000.00, 'Son môi nâu đất thời thượng, phù hợp nhiều phong cách', '[\"/src/imgs/5.jpg\", \"/src/imgs/6.jpg\", \"/src/imgs/7.jpg\", \"/src/imgs/8.jpg\", \"/src/imgs/1.jpg\", \"/src/imgs/2.jpg\", \"/src/imgs/3.jpg\", \"/src/imgs/4.jpg\"]', 1, 1, 110, 1, '2024-12-07 17:00:00', 0),
(6, 'Son Hồng Đất', 270000.00, 'Son môi hồng đất nhẹ nhàng, lên màu chuẩn', '[\"/src/imgs/6.jpg\", \"/src/imgs/7.jpg\", \"/src/imgs/8.jpg\", \"/src/imgs/1.jpg\", \"/src/imgs/2.jpg\", \"/src/imgs/3.jpg\", \"/src/imgs/4.jpg\", \"/src/imgs/5.jpg\"]', 1, 1, 130, 1, '2024-12-07 17:00:00', 0),
(7, 'Son Tím Mận', 290000.00, 'Son môi tím mận cá tính, nổi bật', '[\"/src/imgs/7.jpg\", \"/src/imgs/8.jpg\", \"/src/imgs/1.jpg\", \"/src/imgs/2.jpg\", \"/src/imgs/3.jpg\", \"/src/imgs/4.jpg\", \"/src/imgs/5.jpg\", \"/src/imgs/6.jpg\"]', 1, 1, 80, 1, '2024-12-07 17:00:00', 0),
(8, 'Son Cam Cháy', 250000.00, 'Son môi cam cháy ấm áp, thích hợp mọi tông da', '[\"/src/imgs/8.jpg\", \"/src/imgs/1.jpg\", \"/src/imgs/2.jpg\", \"/src/imgs/3.jpg\", \"/src/imgs/4.jpg\", \"/src/imgs/5.jpg\", \"/src/imgs/6.jpg\", \"/src/imgs/7.jpg\"]', 1, 1, 140, 1, '2024-12-07 17:00:00', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhom`
--

CREATE TABLE `nhom` (
  `idnhom` int(11) NOT NULL,
  `ten` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `nhom`
--

INSERT INTO `nhom` (`idnhom`, `ten`) VALUES
(1, 'Free Fire');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thongtin_monhang`
--

CREATE TABLE `thongtin_monhang` (
  `id` int(11) NOT NULL,
  `id_monhang` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL DEFAULT 'Khác',
  `sex` enum('Male','Female','Nonbinary') DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `role` enum('USERS','ADMIN') NOT NULL DEFAULT 'USERS'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`username`, `password`, `fullname`, `address`, `sex`, `email`, `role`) VALUES
('admin@example.us', '$2b$10$Bm4EoflovL8fYsS4bq5bLud8zZs5fbR8uNcyW39lBHcF19SuYGnkq', 'Jon Stewart Doe', '1600 Fake Street, Apartment 1', 'Nonbinary', 'test@example.us', 'ADMIN');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `dangky`
--
ALTER TABLE `dangky`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `danhgia`
--
ALTER TABLE `danhgia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `danhgia_ibfk_1` (`idnguoindanhgia`);

--
-- Chỉ mục cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idmonhang` (`idmonhang`),
  ADD KEY `donhang_ibfk_2` (`idnguoimua`);

--
-- Chỉ mục cho bảng `monhang`
--
ALTER TABLE `monhang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `monhang_ibfk_1` (`nhom`),
  ADD KEY `monhang_ibfk_3` (`dangky`);

--
-- Chỉ mục cho bảng `nhom`
--
ALTER TABLE `nhom`
  ADD PRIMARY KEY (`idnhom`);

--
-- Chỉ mục cho bảng `thongtin_monhang`
--
ALTER TABLE `thongtin_monhang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_monhang` (`id_monhang`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `dangky`
--
ALTER TABLE `dangky`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `danhgia`
--
ALTER TABLE `danhgia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `donhang`
--
ALTER TABLE `donhang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT cho bảng `monhang`
--
ALTER TABLE `monhang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `nhom`
--
ALTER TABLE `nhom`
  MODIFY `idnhom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `thongtin_monhang`
--
ALTER TABLE `thongtin_monhang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `danhgia`
--
ALTER TABLE `danhgia`
  ADD CONSTRAINT `danhgia_ibfk_1` FOREIGN KEY (`idnguoindanhgia`) REFERENCES `users` (`username`);

--
-- Các ràng buộc cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD CONSTRAINT `donhang_ibfk_1` FOREIGN KEY (`idmonhang`) REFERENCES `monhang` (`id`),
  ADD CONSTRAINT `donhang_ibfk_2` FOREIGN KEY (`idnguoimua`) REFERENCES `users` (`username`);

--
-- Các ràng buộc cho bảng `monhang`
--
ALTER TABLE `monhang`
  ADD CONSTRAINT `monhang_ibfk_1` FOREIGN KEY (`nhom`) REFERENCES `nhom` (`idnhom`),
  ADD CONSTRAINT `monhang_ibfk_3` FOREIGN KEY (`dangky`) REFERENCES `dangky` (`id`);

--
-- Các ràng buộc cho bảng `thongtin_monhang`
--
ALTER TABLE `thongtin_monhang`
  ADD CONSTRAINT `thongtin_monhang_ibfk_1` FOREIGN KEY (`id_monhang`) REFERENCES `monhang` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
