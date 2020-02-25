-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-02-2020 a las 18:01:42
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `viajes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `nciudad` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `cp` int(5) NOT NULL,
  `pais` varchar(40) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`nciudad`, `cp`, `pais`) VALUES
('Londres', 17901, 'Inglaterra'),
('Birmingham', 19167, 'Inglaterra'),
('Madrid', 28001, 'España'),
('New York', 10001, 'Estados Unidos'),
('Las Vegas', 88901, 'Estados Unidos'),
('Sevilla', 41001, 'España'),
('Florida', 10100, 'Estados Unidos'),
('California', 10200, 'Estados Unidos'),
('Barcelona', 35001, 'España');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pilotos`
--

CREATE TABLE `pilotos` (
  `nombre` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `dni` varchar(9) COLLATE utf8_spanish_ci NOT NULL,
  `fregistro` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `compania` varchar(30) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pilotos`
--

INSERT INTO `pilotos` (`nombre`, `dni`, `fregistro`, `compania`) VALUES
('Pepe Botellas', '45454545D', '12-02-2015', 'Vueling'),
('Jhonny Muchy', '45879844D', '20-02-2000', 'Iberia'),
('Pepe', '12345678B', '20-05-2010', 'Iberia'),
('Paco', '12345638B', '10-05-2014', 'Iberia'),
('Antonio', '12312638B', '20-12-2012', 'Vueling'),
('Carly', '12313338C', '07-02-2017', 'Vueling'),
('Jhon Trap Volta', '12313311G', '24-09-2012', 'Air France'),
('Jhonny Mela', '11233311G', '27-05-2016	', 'Air France');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vuelos`
--

CREATE TABLE `vuelos` (
  `avion` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `id` int(3) NOT NULL,
  `salida` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `destino` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `vuelos`
--

INSERT INTO `vuelos` (`avion`, `id`, `salida`, `destino`) VALUES
('XF-2000', 1, 'Sevilla', 'Chicago'),
('F-50', 2, 'Madrid', 'Londres'),
('F-18 ', 3, 'Madrid', 'Sevilla'),
('S-70', 4, 'Londres', 'Reykjavik'),
('AC-130', 5, 'Sevilla', 'Paris'),
('XF-1800', 6, 'Barcelona', 'New York'),
('F-16', 7, 'New York', 'Los Angeles');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
