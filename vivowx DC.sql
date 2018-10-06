-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-09-26 02:36:46
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vivowx`
--

-- --------------------------------------------------------

--
-- 表的结构 `carousellist`
--

CREATE TABLE `carousellist` (
  `id` int(11) NOT NULL,
  `img_url` varchar(248) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `carousellist`
--

INSERT INTO `carousellist` (`id`, `img_url`, `title`) VALUES
(1, 'http://127.0.0.1:3000/carousel/banner1.png', 'phone'),
(2, 'http://127.0.0.1:3000/carousel/banner2.png', 'phone'),
(3, 'http://127.0.0.1:3000/carousel/banner3.png', 'phone'),
(4, 'http://127.0.0.1:3000/carousel/banner4.png', 'phone');

-- --------------------------------------------------------

--
-- 表的结构 `cartlist`
--

CREATE TABLE `cartlist` (
  `id` int(11) NOT NULL,
  `sm_url` varchar(248) DEFAULT NULL,
  `prod_title` varchar(255) DEFAULT NULL,
  `prod_type` varchar(255) DEFAULT NULL,
  `prod_price` decimal(10,2) DEFAULT NULL,
  `num` int(1) NOT NULL,
  `pid` int(11) NOT NULL,
  `selected` varchar(48) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cartlist`
--

INSERT INTO `cartlist` (`id`, `sm_url`, `prod_title`, `prod_type`, `prod_price`, `num`, `pid`, `selected`) VALUES
(28, 'http://127.0.0.1:3000/detail/5174_1535358954455hd_bi_750x750.png', 'X21全面屏', '6GB+12GB', '4298.00', 4, 1, 'false');

-- --------------------------------------------------------

--
-- 表的结构 `indeximg`
--

CREATE TABLE `indeximg` (
  `id` int(11) NOT NULL,
  `sm_url` varchar(248) DEFAULT NULL,
  `md_url` varchar(248) DEFAULT NULL,
  `lg_url` varchar(248) DEFAULT NULL,
  `prod_title` varchar(255) NOT NULL,
  `prod_type` varchar(255) NOT NULL,
  `prod_detail` varchar(255) NOT NULL,
  `prod_price` decimal(10,2) NOT NULL,
  `tid` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `indeximg`
--

INSERT INTO `indeximg` (`id`, `sm_url`, `md_url`, `lg_url`, `prod_title`, `prod_type`, `prod_detail`, `prod_price`, `tid`) VALUES
(1, 'http://127.0.0.1:3000/detail/5174_1535358954455hd_bi_750x750.png', 'http://127.0.0.1:3000/detail/5174_1534929745034hd_bi_750x750.png', 'http://127.0.0.1:3000/detail/5174_1534929750273hd_bi_750x750.png', 'X21全面屏', '6GB+12GB', '93%占屏比,超大视野.128G大内存,3D曲面屏玻璃背部,前后2400万感光单元', '4298.00', 1),
(2, 'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png', 'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png', 'http://127.0.0.1:3000/index/4864_1526305389832hd_250x250.png', 'Z1全面屏', '4GB+64GB', '6.26新一代全面屏,64GB大内存,AI智慧双摄,骁龙660AIE处理器,Jovi智能助手(付款订单将7日内发货)', '1598.00', 2),
(3, 'http://localhost:3000/detail/5080_1534836576680hd_bi_750x750.png', 'http://localhost:3000/detail/780856112798843206.png', 'http://localhost:3000/detail/160802234300531901.png', 'X21全面屏', '6GB+12GB', '93%占屏比,超大视野.128G大内存,3D曲面屏玻璃背部,前后2400万感光单元', '3999.00', 3),
(4, '\r\nhttp://localhost:3000/detail/820373566423359681.jpg', 'http://localhost:3000/detail/16034936659230822.jpg', 'http://localhost:3000/detail/190714283305194817.jpg', 'X21全面屏', '6GB+12GB', '93%占屏比,超大视野.128G大内存,3D曲面屏玻璃背部,前后2400万感光单元', '2998.00', 4);

-- --------------------------------------------------------

--
-- 表的结构 `indexlist`
--

CREATE TABLE `indexlist` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `sub_title` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `prod-detail` varchar(255) NOT NULL,
  `tid` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `indexlist`
--

INSERT INTO `indexlist` (`id`, `title`, `sub_title`, `price`, `prod-detail`, `tid`) VALUES
(1, 'x21指纹版', '6+12GB', '2998.00', '93%占屏比,超大视野.128G大内存,3D曲面屏玻璃背部,前后2400万感光单元', 1),
(2, 'x21指纹版', '6+12GB', '2998.00', '6.26新一代全面屏,64GB大内存,AI智慧双摄,骁龙660AIE处理器,Jovi智能助手(付款订单将7日内发货)', 2),
(3, 'x21指纹版', '6+12GB', '2998.00', '6.26新一代全面屏,64GB大内存,AI智慧双摄,骁龙660AIE处理器,Jovi智能助手(付款订单将7日内发货)', 3),
(4, 'x21指纹版', '6+12GB', '2998.00', '6.26新一代全面屏,64GB大内存,AI智慧双摄,骁龙660AIE处理器,Jovi智能助手(付款订单将7日内发货)', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carousellist`
--
ALTER TABLE `carousellist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartlist`
--
ALTER TABLE `cartlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `indeximg`
--
ALTER TABLE `indeximg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `indexlist`
--
ALTER TABLE `indexlist`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `carousellist`
--
ALTER TABLE `carousellist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `cartlist`
--
ALTER TABLE `cartlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- 使用表AUTO_INCREMENT `indeximg`
--
ALTER TABLE `indeximg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `indexlist`
--
ALTER TABLE `indexlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
