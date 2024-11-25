-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 14, 2024 lúc 09:11 AM
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
-- Cơ sở dữ liệu: `lab2nodejs`
--

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
(1, 'Điện thoại'),
(2, 'Máy tính bảng'),
(3, 'Laptop'),
(4, 'Phụ kiện'),
(5, 'Âm thanh'),
(6, 'Máy ảnh'),
(7, 'TV'),
(8, 'Đồng hồ thông minh'),
(9, 'Thiết bị nhà thông minh'),
(10, 'Đồ gia dụng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `masp` int(11) NOT NULL,
  `ten` varchar(255) NOT NULL,
  `gia` decimal(10,2) NOT NULL,
  `hinhanh` varchar(255) DEFAULT NULL,
  `mota` text DEFAULT NULL,
  `idnhom` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`masp`, `ten`, `gia`, `hinhanh`, `mota`, `idnhom`) VALUES
(1, 'iPhone 14', 25000000.00, 'iphone14.jpg', 'Điện thoại Apple iPhone 14, 128GB', 1),
(2, 'Samsung Galaxy S23', 21000000.00, 'galaxys23.jpg', 'Điện thoại Samsung Galaxy S23, 128GB', 1),
(3, 'iPad Pro 11', 22000000.00, 'ipadpro11.jpg', 'Máy tính bảng Apple iPad Pro 11 inch, 128GB', 2),
(4, 'Surface Pro 8', 30000000.00, 'surfacepro8.jpg', 'Máy tính bảng Microsoft Surface Pro 8, 256GB', 2),
(5, 'MacBook Air M1', 27000000.00, 'macbookairm1.jpg', 'Laptop Apple MacBook Air với chip M1, 256GB', 3),
(6, 'Dell XPS 13', 35000000.00, 'dellxps13.jpg', 'Laptop Dell XPS 13, 512GB SSD', 3),
(7, 'Tai nghe AirPods Pro', 5000000.00, 'airpodspro.jpg', 'Tai nghe không dây Apple AirPods Pro', 4),
(8, 'Loa JBL Flip 5', 2500000.00, 'jblflip5.jpg', 'Loa Bluetooth JBL Flip 5', 5),
(9, 'Máy ảnh Canon EOS 90D', 35000000.00, 'canoneos90d.jpg', 'Máy ảnh DSLR Canon EOS 90D', 6),
(10, 'Samsung Smart TV 55\"', 15000000.00, 'samsungtv55.jpg', 'TV thông minh Samsung 55 inch', 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL DEFAULT 'Khác',
  `sex` enum('Nam','Nữ','Khác') DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `role` enum('USERS','ADMIN') NOT NULL DEFAULT 'USERS'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`username`, `password`, `fullname`, `address`, `sex`, `email`, `role`) VALUES
('admin', '1', 'NGUYEN TRAN HOANG LONG', '753/Tan Phuoc 1', 'Nam', 'chandoralong+admin@gmail.com', 'ADMIN'),
('user4', '1', 'Phạm Thị Diệudddđ', 'Cần Thơ', 'Khác', 'dieupham@example.com', 'ADMIN'),
('user8', 'securepass2', 'Nguyễn Thị Hà', 'Vũng Tàu', 'Nữ', 'hannguyen@example.com', 'ADMIN'),
('x', 'dsadsa', 'êy', '', 'Nam', '', 'USERS'),
('xa', '2', 'NGUYEN TRAN HOANG LONG', '753/Tan Phuoc 1', 'Khác', 'chandoralong@gmail.com', 'USERS'),
('xax', '1', 'NGUYEN TRAN HOANG LONG', '753/Tan Phuoc 1', 'Nam', 'chandoralong+1@gmail.com', 'USERS');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `nhom`
--
ALTER TABLE `nhom`
  ADD PRIMARY KEY (`idnhom`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`masp`),
  ADD KEY `idnhom` (`idnhom`);

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
-- AUTO_INCREMENT cho bảng `nhom`
--
ALTER TABLE `nhom`
  MODIFY `idnhom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`idnhom`) REFERENCES `nhom` (`idnhom`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
