-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2020 at 07:54 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node1`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `address` varchar(100) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `userType` varchar(10) DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `phone`, `address`, `gender`, `userType`, `image`) VALUES
(1, 'Fardin Imran', 'fardin', '12345678', '01757959078', 'Bashundhara R/A', 'male', 'admin', NULL),
(3, 'Mahdin Ahsan', 'mahdin', '12345678', '01753389078', 'Moulvibazar', 'male', 'employee', 'fb1.jpg'),
(4, 'Zenisa Zerin', 'zenisa', '12345678', '01757654217', 'Tangail', 'female', 'employee', NULL),
(5, 'Israt Evana', 'evana', '12345678', '01796655938', 'Nowakhali', 'female', 'employee', NULL),
(6, 'Askar Ahmed', 'askar ', '12345678', '01757959078', 'Maymansingh', 'male', 'employee', 'fb1.jpg'),
(9, 'Mim mahfuza', 'mim', '12345678', '01757654228', 'Baridhara', 'female', 'employee', NULL),
(12, 'Nilanjan Bissash', 'nilanjan', '12345678', '01757654216', 'Baridhara', 'male', 'employee', NULL),
(13, 'Tawsif Salauddin', 'tawsif', '21212121', '01757654228', 'Puran dhaka', 'male', 'employee', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
