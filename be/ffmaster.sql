-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 27, 2024 lúc 06:57 PM
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
(1, 'FaceBook'),
(2, 'Google');

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
(20, 'Acc freefire promax vip 123', 2000000.00, 'Acc vip, full skin, đã nạp 190 triệu', '[\"/src/imgs/7d2cdb85-837d-4abf-8d91-136918678d37.jpg\",\"/src/imgs/05ef689f-153a-48b7-9864-ba1e75541430.jpg\",\"/src/imgs/84cc5a52-61cb-4581-b122-c06f56a08cf6.jpg\"]', 1, 1, 1, 1, '2024-11-27 17:53:24', 0),
(21, 'Acc lửa chùa miễn phí', 1.00, 'miễn phí cho bạn', '[\"/src/imgs/22574ab9-7581-4e58-97fa-4fa168964f54.jpg\"]', 2, 1, 1, 1, '2024-11-27 17:56:31', 0),
(22, 'Free fire promax', 2000.00, 'acc mới tạo', '[\"/src/imgs/c6e0eee2-aa93-456f-ac55-d6013d7c7a57.jpg\"]', 1, 0, 1, 1, '2024-11-27 17:57:23', 0);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

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
