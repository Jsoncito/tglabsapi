-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: tglabs
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Permiso`
--

DROP TABLE IF EXISTS `Permiso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Permiso` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Permiso`
--

LOCK TABLES `Permiso` WRITE;
/*!40000 ALTER TABLE `Permiso` DISABLE KEYS */;
INSERT INTO `Permiso` VALUES ('1589b87f-b284-44bf-a290-2b941722be2a','editar'),('2a94f783-91ed-4078-a944-933eb842cee5','eliminar'),('79e1008e-4dd2-46d0-b511-34107451071c','crear'),('c7e070ba-5e7d-4ef6-a6d8-a1cd060fb8f3','ver');
/*!40000 ALTER TABLE `Permiso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Rol`
--

DROP TABLE IF EXISTS `Rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Rol` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Rol`
--

LOCK TABLES `Rol` WRITE;
/*!40000 ALTER TABLE `Rol` DISABLE KEYS */;
INSERT INTO `Rol` VALUES ('2dc43ca8-84de-4cc8-a8f6-a908dcc6b8e4','Editor'),('737e9cb7-c3cb-4dcf-bb50-8b04f22925a7','Visualizador'),('a505e24e-16fe-43e4-a9fb-ba5c6d02e635','Administrador');
/*!40000 ALTER TABLE `Rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RolPermiso`
--

DROP TABLE IF EXISTS `RolPermiso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RolPermiso` (
  `idRol` varchar(100) NOT NULL,
  `idPermiso` varchar(100) NOT NULL,
  KEY `RolPermiso_FK` (`idRol`),
  KEY `RolPermiso_FK_1` (`idPermiso`),
  CONSTRAINT `RolPermiso_FK` FOREIGN KEY (`idRol`) REFERENCES `Rol` (`id`),
  CONSTRAINT `RolPermiso_FK_1` FOREIGN KEY (`idPermiso`) REFERENCES `Permiso` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RolPermiso`
--

LOCK TABLES `RolPermiso` WRITE;
/*!40000 ALTER TABLE `RolPermiso` DISABLE KEYS */;
INSERT INTO `RolPermiso` VALUES ('a505e24e-16fe-43e4-a9fb-ba5c6d02e635','1589b87f-b284-44bf-a290-2b941722be2a'),('a505e24e-16fe-43e4-a9fb-ba5c6d02e635','2a94f783-91ed-4078-a944-933eb842cee5'),('a505e24e-16fe-43e4-a9fb-ba5c6d02e635','79e1008e-4dd2-46d0-b511-34107451071c'),('a505e24e-16fe-43e4-a9fb-ba5c6d02e635','c7e070ba-5e7d-4ef6-a6d8-a1cd060fb8f3'),('2dc43ca8-84de-4cc8-a8f6-a908dcc6b8e4','c7e070ba-5e7d-4ef6-a6d8-a1cd060fb8f3'),('2dc43ca8-84de-4cc8-a8f6-a908dcc6b8e4','1589b87f-b284-44bf-a290-2b941722be2a'),('737e9cb7-c3cb-4dcf-bb50-8b04f22925a7','c7e070ba-5e7d-4ef6-a6d8-a1cd060fb8f3');
/*!40000 ALTER TABLE `RolPermiso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `last_login` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('147ba7d2-b719-4b0e-83d0-3d095ba433f2','admin@gmail.com','admin','Jeison','Davalos',NULL,NULL),('894287ce-bec0-41f7-b065-ea6cfa001d2a','visualizador@gmail.com','admin','Jane','DAvalos',NULL,NULL),('fb48bf6d-f183-43ad-8853-933436f10216','editor@gmail.com','admin','Jon','Davalos','24/08/2022',NULL);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserRol`
--

DROP TABLE IF EXISTS `UserRol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserRol` (
  `idUser` varchar(100) NOT NULL,
  `idRol` varchar(100) NOT NULL,
  KEY `UserRol_FK` (`idUser`),
  KEY `UserRol_FK_1` (`idRol`),
  CONSTRAINT `UserRol_FK` FOREIGN KEY (`idUser`) REFERENCES `User` (`id`),
  CONSTRAINT `UserRol_FK_1` FOREIGN KEY (`idRol`) REFERENCES `Rol` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserRol`
--

LOCK TABLES `UserRol` WRITE;
/*!40000 ALTER TABLE `UserRol` DISABLE KEYS */;
INSERT INTO `UserRol` VALUES ('147ba7d2-b719-4b0e-83d0-3d095ba433f2','a505e24e-16fe-43e4-a9fb-ba5c6d02e635'),('894287ce-bec0-41f7-b065-ea6cfa001d2a','737e9cb7-c3cb-4dcf-bb50-8b04f22925a7'),('fb48bf6d-f183-43ad-8853-933436f10216','2dc43ca8-84de-4cc8-a8f6-a908dcc6b8e4');
/*!40000 ALTER TABLE `UserRol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'tglabs'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-11 20:21:37
