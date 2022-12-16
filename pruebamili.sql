-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-12-2022 a las 16:51:52
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
(1, 'CAE', '24515256', '5 años', 2, 110000, 0, NULL, '2022-12-15 21:16:26'),
(5, 'E.T', '00214854', '4 años', 3, 50000, 0, '2022-12-15 20:49:13', '2022-12-15 20:49:13');

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
  `Contraseña` varchar(45) DEFAULT NULL,
  `rol` varchar(45) DEFAULT NULL,
  `TipoDocumento` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idUser`, `nombre`, `email`, `estado`, `createdAt`, `updatedAt`, `Apellidos`, `NumCedula`, `Telefono`, `Edad`, `sexo`, `Contraseña`, `rol`, `TipoDocumento`) VALUES
(2, 'pedro', 'pero@gmail.con', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'garcia', 100241855, 2147483647, 30, 'm', 'pedo2456', 'ADMIN', NULL),
(3, 'fede', 'fede@gmail.com', 0, '0000-00-00 00:00:00', '2022-12-15 16:11:20', 'lobos', 100256545, 32115254, 20, 'm', 'fede6354', 'EMPLOYE', NULL),
(6, 'juan', 'juan@gmail.com', 1, '2022-12-14 15:32:52', '2022-12-14 15:32:52', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'melanie', 'melany@gmail.com', 0, '2022-12-14 15:37:04', '2022-12-15 14:16:03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
