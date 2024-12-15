-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2024 at 04:23 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ffmaster`
--

-- --------------------------------------------------------

--
-- Table structure for table `dangky`
--

CREATE TABLE `dangky` (
  `id` int(11) NOT NULL,
  `ten` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dangky`
--

INSERT INTO `dangky` (`id`, `ten`) VALUES
(1, 'FaceBook'),
(2, 'Google');

-- --------------------------------------------------------

--
-- Table structure for table `danhgia`
--

CREATE TABLE `danhgia` (
  `id` int(11) NOT NULL,
  `danhgia` tinyint(1) NOT NULL CHECK (`danhgia` between 1 and 5),
  `idnguoindanhgia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `danhgia`
--

INSERT INTO `danhgia` (`id`, `danhgia`, `idnguoindanhgia`) VALUES
(1, 5, 'hnguyen'),
(2, 3, 'hnguyen');

-- --------------------------------------------------------

--
-- Table structure for table `donhang`
--

CREATE TABLE `donhang` (
  `id` int(11) NOT NULL,
  `iddonhang` varchar(255) NOT NULL,
  `idmonhang` int(11) NOT NULL,
  `idnguoimua` varchar(255) NOT NULL,
  `trangthai` enum('wait','paid','done','cancel') NOT NULL DEFAULT 'wait',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donhang`
--

INSERT INTO `donhang` (`id`, `iddonhang`, `idmonhang`, `idnguoimua`, `trangthai`, `createdAt`) VALUES
(39, 'b31c6e3d-45c8-45a8-93af-337945e16793', 23, 'hn', 'done', '2024-12-15 00:42:58'),
(40, 'a7e65241-b652-4d64-813e-4c116851d88b', 22, 'hnn', 'done', '2024-12-15 00:42:58'),
(41, 'e2725fbf-3fc0-44d8-b2dc-93adccfe94e2', 24, 'hnnn', 'wait', '2024-12-15 00:42:58'),
(42, '2bf48639-cbea-4cdb-a892-de6af53fe0fd', 25, 'hnguyen', 'done', '2024-12-15 00:42:58'),
(43, '2bf48639-cbea-4cdb-a892-de6af53fe0fd', 24, 'hnguyen', 'done', '2024-12-15 00:42:58'),
(44, '2bf48639-cbea-4cdb-a892-de6af53fe0fd', 23, 'hnguyen', 'done', '2024-12-15 00:42:58'),
(45, '96ce979f-78c1-4082-ae4c-afa26338fe8b', 21, 'hnguyen', 'cancel', '2024-12-15 00:42:58'),
(46, '72cd2123-6e49-4d09-b524-ae22acb8a095', 21, 'hnguyen', 'done', '2024-12-15 00:43:15'),
(47, '48b40a39-0799-4873-ba09-8a83bb41a738', 20, 'hnguyen', 'cancel', '2024-12-15 02:54:14'),
(48, '48b40a39-0799-4873-ba09-8a83bb41a738', 21, 'hnguyen', 'cancel', '2024-12-15 02:54:14'),
(49, '48b40a39-0799-4873-ba09-8a83bb41a738', 22, 'hnguyen', 'cancel', '2024-12-15 02:54:14');

-- --------------------------------------------------------

--
-- Table structure for table `monhang`
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
-- Dumping data for table `monhang`
--

INSERT INTO `monhang` (`id`, `ten`, `gia`, `mota`, `hinhanh`, `dangky`, `thevocuc`, `soluong`, `nhom`, `createdAt`, `status`) VALUES
(20, 'Acc freefire promax vip 123', 2000000.00, 'Acc vip, full skin, đã nạp 190 triệu', '[\"/src/imgs/7d2cdb85-837d-4abf-8d91-136918678d37.jpg\",\"/src/imgs/05ef689f-153a-48b7-9864-ba1e75541430.jpg\",\"/src/imgs/84cc5a52-61cb-4581-b122-c06f56a08cf6.jpg\"]', 1, 1, 1, 1, '2024-11-27 17:53:24', 0),
(21, 'Acc lửa chùa miễn phí', 1.00, 'miễn phí cho bạn', '[\"/src/imgs/22574ab9-7581-4e58-97fa-4fa168964f54.jpg\"]', 2, 1, 0, 1, '2024-11-27 17:56:31', 0),
(22, 'Free fire promax', 2000.00, 'acc mới tạo', '[\"/src/imgs/c6e0eee2-aa93-456f-ac55-d6013d7c7a57.jpg\"]', 1, 0, 1, 1, '2024-11-27 17:57:23', 0),
(23, 'hhhhhh', 20000000.00, 'acc vip', '[\"/src/imgs/81731f38-1035-471f-b46a-ed212248d6ea.jpg\"]', 2, 0, 0, 1, '2024-11-28 00:44:36', 1),
(24, 'acc ', 233344.00, 'acc vip vip vip', '[\"/src/imgs/3f112a5e-2eff-4e44-9edb-744035dc5750.jpg\",\"/src/imgs/3f112a5e-2eff-4e44-9edb-744035dc5750.jpg\"]', 2, 1, 0, 1, '2024-11-28 01:12:48', 1),
(25, 'acc vipppppp', 1233333.00, 'acc vip ', '[\"/src/imgs/b3362dd3-a329-4d63-ad87-7ed17b3afd60.jpg\"]', 2, 1, 0, 1, '2024-11-28 01:40:32', 1),
(26, 'acccvippppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp', 99999999.99, 'accccccccccccccccccccccccc', '[\"/src/imgs/f2327311-cc0d-4fe4-ae42-ba8d7063e1e7.jpg\"]', 1, 0, 1, 1, '2024-12-12 11:53:46', 1),
(27, '', 0.00, '', '[]', NULL, 0, 1, 1, '2024-12-12 11:57:04', 1),
(28, '', 0.00, '', '[\"/src/imgs/9fc8cfed-5ad5-4cb9-903c-f28f6432e777.svg\"]', NULL, 0, 1, 1, '2024-12-12 12:05:41', 1),
(29, '', 0.00, '', '[]', NULL, 0, 1, 1, '2024-12-12 12:07:05', 1),
(30, '', 0.00, '', '[]', NULL, 0, 1, 1, '2024-12-12 12:33:47', 1),
(31, '', -7666666.00, '', '[]', NULL, 0, 1, 1, '2024-12-12 12:54:18', 1),
(32, '', 1233.44, '', '[]', NULL, 0, 1, 1, '2024-12-12 13:00:56', 1),
(33, '', 0.00, '', '[]', NULL, 0, 1, 1, '2024-12-12 13:18:29', 1),
(34, 'hgvgh', 55.00, 'iiim', '[\"/src/imgs/a20d39d2-4c59-413b-8d09-9b5231929d4e.png\"]', 2, 1, 1, 1, '2024-12-14 18:20:09', 1),
(35, 'Tài khoản FF', 999000.00, 'Acc nhiều skin súng, trang phục đep', '[\"/src/imgs/84a50817-d57d-4f42-958a-1c8d23644ee8.jpg\",\"/src/imgs/84a50817-d57d-4f42-958a-1c8d23644ee8.jpg\",\"/src/imgs/7b7c9365-e2ba-4b74-a978-714d95a2d255.jpg\",\"/src/imgs/82930dfc-6bce-4e09-9847-e1cd61db095b.jpg\"]', 1, 1, 1, 1, '2024-12-15 00:34:51', 0),
(36, 'Acc siêu vippp', 34800000.00, 'Acc vip nhiều Skin súng, có súng nâng cấp lv7', '[\"/src/imgs/a6a3eda1-5569-4bc5-8b55-5ec6afd56c40.jpg\",\"/src/imgs/a6a3eda1-5569-4bc5-8b55-5ec6afd56c40.jpg\",\"/src/imgs/f628b75c-4bed-484e-b4c6-186d76c5d19e.jpg\",\"/src/imgs/24e7039b-73c0-4a4a-9dda-3213804a9f80.jpg\"]', 2, 1, 1, 1, '2024-12-15 00:36:37', 0),
(37, 'FF', 1344566.00, 'Acc vip, full skin, đã nạp 190 triệu', '[\"/src/imgs/c0e00f9c-847e-45a0-8947-b16b7b83eaf1.png\"]', 1, 1, 1, 1, '2024-12-15 02:58:31', 0);

-- --------------------------------------------------------

--
-- Table structure for table `nhom`
--

CREATE TABLE `nhom` (
  `idnhom` int(11) NOT NULL,
  `ten` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nhom`
--

INSERT INTO `nhom` (`idnhom`, `ten`) VALUES
(1, 'Free Fire');

-- --------------------------------------------------------

--
-- Table structure for table `thongtin_monhang`
--

CREATE TABLE `thongtin_monhang` (
  `id` int(11) NOT NULL,
  `id_monhang` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL DEFAULT 'Khác',
  `sex` enum('Male','Female','Nonbinary') DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `role` enum('USERS','ADMIN') NOT NULL DEFAULT 'USERS',
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `fullname`, `address`, `sex`, `email`, `role`, `status`) VALUES
('admin@example.us', '$2b$10$Bm4EoflovL8fYsS4bq5bLud8zZs5fbR8uNcyW39lBHcF19SuYGnkq', 'Jon Stewart Doe', '1600 Fake Street, Apartment 1', 'Nonbinary', 'test@example.us', 'ADMIN', 0),
('d', '$2b$10$xnLSjk0xTY67vFFDaqe14uIZIDyokolxXIiWJ/58AfLjvyVIYd3Gy', 'cfgh', 'sdf', 'Male', 'đfff2@gmail.com', 'USERS', 0),
('dmx', '$2b$10$zgTUxI1WGaQ4zK5r9ykfHe/QLVgAMWuBYcPegqmugB89ub6DJP5w2', 'Đỗ Mỹ Xuyên', 'Cà Mau', 'Female', 'dmxuyen123@gmail.com', 'USERS', 1),
('er', '$2b$10$Vx9kWJ/yEY8EFk0dcMMOe.OHxs0eK6fVPXn6m7ML/KsOe1p6VKqAq', '1234', 'as', 'Male', 'nthnguyen21002@student.ctuet.edu.vn', 'USERS', 0),
('fghj', '$2b$10$nU4psNup1eI2wXeYfgttvOx0vHNcNEKAo/haJDvY1BPG5bkSvJZA6', '@#$%#@@', 'gg', 'Female', 'ngnguyenks2003@gmail.com', 'USERS', 0),
('ggg', '$2b$10$LpOwfTzihkZOiuHikYOUUuDC3lzLNekM0A6FCxrm03/8ae722/M4.', 'ffff', 'ff', 'Female', 'đfff2gmail.com', 'USERS', 0),
('gh', '$2b$10$D5CNKuQU/MyYg1erFIzH4eMwe3p2k1HvNcb.wBy3T5T7SFefYFcFW', 'hnn', 'ST', 'Male', 'gnguyenks2003@gmail.com', 'USERS', 0),
('hn', '$2b$10$IuVBznDdXW48orQd6KqvHu3EThTXsD4UIAe3PI3/LwBkr84T9EAn2', 'nthn', 'ff', 'Female', 'nthnguyen2100238@student.ctuet.edu.vn', 'USERS', 0),
('hnguyen', '$2b$10$SZuAYZkx1CakDWQJWf2JTOwCxpFeHiFBTrXLW1U8Hn8zGenklqGJW', 'nthn', 'st', 'Female', 'hongnguyenks2003@gmail.com', 'ADMIN', 0),
('hnn', '$2b$10$5NqoHGe7oDaB8Ti5pG.L6.DDYwYGgpSj3kAJNNtIiWjf9KB7htWjC', 'dmx', 'st', 'Male', 'dmxuyen2101057@student.ctuet.edu.vn', 'USERS', 0),
('hnnn', '$2b$10$0gnMH/J6PDqxcGGUPux3yeMbv4FMrPJigTTjZvynOwatS65Hs5syS', 'hnnn', 'st', 'Male', 'hongnguynks2003@gmail.com', 'USERS', 0),
('mn', '$2b$10$yvhzD.RiuC7JpsS9sfL3Iej4AzbKp9ZQZ/uyVwzTpT/4QhF7e5LWS', 'MYXUYEN', 'đff', 'Nonbinary', 'jjskksk@gmail.com', 'USERS', 0),
('sdf', '$2b$10$N/WOBcsn463LOcI8y4/8ruRfBahRXBnvtaAiQUPoM7jNI/awMblia', 'a', 'sss', 'Male', 'hongngenks2003@gmail.com', 'USERS', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dangky`
--
ALTER TABLE `dangky`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `danhgia`
--
ALTER TABLE `danhgia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `danhgia_ibfk_1` (`idnguoindanhgia`);

--
-- Indexes for table `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idmonhang` (`idmonhang`),
  ADD KEY `donhang_ibfk_2` (`idnguoimua`);

--
-- Indexes for table `monhang`
--
ALTER TABLE `monhang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `monhang_ibfk_1` (`nhom`),
  ADD KEY `monhang_ibfk_3` (`dangky`);

--
-- Indexes for table `nhom`
--
ALTER TABLE `nhom`
  ADD PRIMARY KEY (`idnhom`);

--
-- Indexes for table `thongtin_monhang`
--
ALTER TABLE `thongtin_monhang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_monhang` (`id_monhang`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dangky`
--
ALTER TABLE `dangky`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `danhgia`
--
ALTER TABLE `danhgia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `donhang`
--
ALTER TABLE `donhang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `monhang`
--
ALTER TABLE `monhang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `nhom`
--
ALTER TABLE `nhom`
  MODIFY `idnhom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `thongtin_monhang`
--
ALTER TABLE `thongtin_monhang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `danhgia`
--
ALTER TABLE `danhgia`
  ADD CONSTRAINT `danhgia_ibfk_1` FOREIGN KEY (`idnguoindanhgia`) REFERENCES `users` (`username`);

--
-- Constraints for table `donhang`
--
ALTER TABLE `donhang`
  ADD CONSTRAINT `donhang_ibfk_1` FOREIGN KEY (`idmonhang`) REFERENCES `monhang` (`id`),
  ADD CONSTRAINT `donhang_ibfk_2` FOREIGN KEY (`idnguoimua`) REFERENCES `users` (`username`);

--
-- Constraints for table `monhang`
--
ALTER TABLE `monhang`
  ADD CONSTRAINT `monhang_ibfk_1` FOREIGN KEY (`nhom`) REFERENCES `nhom` (`idnhom`),
  ADD CONSTRAINT `monhang_ibfk_3` FOREIGN KEY (`dangky`) REFERENCES `dangky` (`id`);

--
-- Constraints for table `thongtin_monhang`
--
ALTER TABLE `thongtin_monhang`
  ADD CONSTRAINT `thongtin_monhang_ibfk_1` FOREIGN KEY (`id_monhang`) REFERENCES `monhang` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
