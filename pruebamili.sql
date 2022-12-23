-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-12-2022 a las 23:16:22
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pruebamili`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `DATOS_SOLICITUDES_USER` ()   BEGIN
SELECT * FROM solicitudes S join users U
 where S.iduser = U.id ;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE `solicitudes` (
  `id` int(11) NOT NULL,
  `NombreEmpresa` varchar(45) DEFAULT NULL,
  `nitEmpresa` varchar(45) DEFAULT NULL,
  `EstadiaEnEmpresa` varchar(45) DEFAULT NULL,
  `iduser` int(11) DEFAULT NULL,
  `Monto` int(11) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `solicitudes`
--

INSERT INTO `solicitudes` (`id`, `NombreEmpresa`, `nitEmpresa`, `EstadiaEnEmpresa`, `iduser`, `Monto`, `estado`, `createdAt`, `updatedAt`) VALUES
(1, 'CAE', '24515256', '5 años', 2, 110000, 1, NULL, '2022-12-20 14:24:12'),
(6, 'CAE', '24515256', '4 años', 3, 510000, 1, '2022-12-17 14:50:31', '2022-12-20 14:10:39'),
(7, 'CAE', '24515256', '6 años', 2, 2210000, 0, '2022-12-20 13:52:20', '2022-12-20 13:52:20'),
(8, 'CAE', '24515256', '5 años', 3, 2210000, 0, '2022-12-20 13:53:48', '2022-12-20 13:53:48'),
(9, 'CAE', '24515256', '4 años', 3, 510000, 1, '2022-12-20 14:22:41', '2022-12-20 14:22:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `email` varchar(60) NOT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Apellidos` varchar(45) DEFAULT NULL,
  `NumCedula` int(11) DEFAULT NULL,
  `Telefono` int(11) DEFAULT NULL,
  `Edad` int(11) DEFAULT NULL,
  `sexo` varchar(45) DEFAULT NULL,
  `Contraseña` varchar(100) DEFAULT NULL,
  `rol` varchar(45) DEFAULT NULL,
  `TipoDocumento` varchar(45) DEFAULT NULL,
  `img` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idUser`, `nombre`, `email`, `estado`, `createdAt`, `updatedAt`, `Apellidos`, `NumCedula`, `Telefono`, `Edad`, `sexo`, `Contraseña`, `rol`, `TipoDocumento`, `img`) VALUES
(2, 'pedro', 'pero@gmail.con', 1, '0000-00-00 00:00:00', '2022-12-21 22:37:43', 'garcia', 100241855, 2147483647, 31, 'm', 'pedo2456', 'ADMIN', NULL, ''),
(3, 'fede', 'fede@gmail.com', 0, '0000-00-00 00:00:00', '2022-12-20 22:23:20', 'lobos', 100256545, 32115254, 20, 'm', 'fede6354', 'EMPLOYE', NULL, 'PROYECTO INTEGRADOR.png'),
(6, 'juan', 'juan@gmail.com', 1, '2022-12-14 15:32:52', '2022-12-14 15:32:52', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'melanie', 'melany@gmail.com', 0, '2022-12-14 15:37:04', '2022-12-20 22:06:56', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'imangen de prueba.png'),
(9, 'morris', 'MORRIS@gmail.com', 1, '2022-12-17 15:36:13', '2022-12-17 15:36:13', 'alfred', 1224545, 302454145, 20, 'f', '123445', 'EMPLOYE', 'cc', NULL),
(10, 'luis', 'luisosda@gmail.con', 1, '2022-12-22 14:56:16', '2022-12-22 14:56:16', 'garcia', 252415, 2147483647, 31, 'm', 'LUIS2456', 'EMPLOYE', 'cc', ''),
(11, 'loraine', 'loraine@gmail.con', 1, '2022-12-22 15:22:03', '2022-12-22 15:22:03', 'florez', 4541585, 2147483647, 31, 'm', 'LORI2456', 'EMPLOYE', 'cc', ''),
(14, 'alfredo', 'alfre@gmail.con', 1, '2022-12-23 21:16:53', '2022-12-23 21:16:53', 'resdes', 1002145564, 302154552, 31, 'm', '$2a$10$yC1n/j..QIHgHIag8Vrg5./HlXSHsmE5DDx56GeJnaNo.pLsDzNpe', 'EMPLOYE', 'cc', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `iduser` (`iduser`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `NumCedula` (`NumCedula`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD CONSTRAINT `solicitudes_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `users` (`iduser`),
  ADD CONSTRAINT `solicitudes_ibfk_2` FOREIGN KEY (`iduser`) REFERENCES `users` (`iduser`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
