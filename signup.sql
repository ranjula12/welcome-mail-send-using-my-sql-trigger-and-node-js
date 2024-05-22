-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2024 at 08:10 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `signup`
--

-- --------------------------------------------------------

--
-- Table structure for table `email_log`
--

CREATE TABLE `email_log` (
  `id` int(11) NOT NULL,
  `recipient_email` varchar(255) DEFAULT NULL,
  `email_sent` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `email_log`
--

INSERT INTO `email_log` (`id`, `recipient_email`, `email_sent`, `created_at`) VALUES
(40, 'ranjulabandara12@gmail.com', 1, '2024-05-21 18:03:31'),
(41, 'ranjulabandara12@gmail.com', 1, '2024-05-21 18:03:33'),
(42, 'ranjulabandara12@gmail.com', 1, '2024-05-21 18:03:34'),
(43, 'ranjulabandara12@gmail.com', 1, '2024-05-21 18:03:34'),
(44, 'ranjulabandara12@gmail.com', 1, '2024-05-21 18:03:35'),
(45, 'ranjulabandara12@gmail.com', 1, '2024-05-21 18:03:36');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `email`, `password`) VALUES
(53, 'ranjula', 'ranjulabandara12@gmail.com', 'ranjula'),
(54, 'ranjula', 'ranjulabandara12@gmail.com', 'ranjula'),
(55, 'ranjula', 'ranjulabandara12@gmail.com', 'ranjula'),
(56, 'ranjula', 'ranjulabandara12@gmail.com', 'ranjula'),
(57, 'ranjula', 'ranjulabandara12@gmail.com', 'ranjula'),
(58, 'ranjula', 'ranjulabandara12@gmail.com', 'ranjula');

--
-- Triggers `login`
--
DELIMITER $$
CREATE TRIGGER `after_user_insert` AFTER INSERT ON `login` FOR EACH ROW BEGIN
    INSERT INTO email_log (recipient_email) VALUES (NEW.email);
END
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `email_log`
--
ALTER TABLE `email_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `email_log`
--
ALTER TABLE `email_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
