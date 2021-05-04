-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: natrue_db
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(64) NOT NULL,
  `role_id` tinyint(1) NOT NULL,
  `imagepath` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (1,'user','luthfirobbaniy@gmail.com','user',2,'/profile/user.jpg');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `full_address` varchar(200) NOT NULL,
  `default` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,1,'Home','Dummy Street 142, Dummy City, West Dummy Province, Dummy Country.',1),(2,1,'Office','Dummy Street 142, Dummy City, West Dummy Province, Dummy Country.',0);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(200) NOT NULL,
  `imagepath` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Vegetable','Ini adalah bagian deskripsi vegetable page. Ini adalah bagian deskripsi vegetable page. Ini adalah bagian deskripsi vegetable page. Ini adalah bagian deskripsi vegetable page.','/category/vegetable.jpg'),(2,'Fruit','Ini adalah bagian deskripsi fruit page. Ini adalah bagian deskripsi fruit page. Ini adalah bagian deskripsi fruit page. Ini adalah bagian deskripsi fruit page.','/category/fruit.jpg'),(3,'Tea','Ini adalah bagian deskripsi tea page. Ini adalah bagian deskripsi tea page. Ini adalah bagian deskripsi tea page. Ini adalah bagian deskripsi tea page.','/category/tea.jpg'),(4,'Seasoning','Ini adalah bagian deskripsi seasoning page. Ini adalah bagian deskripsi seasoning page. Ini adalah bagian deskripsi seasoning page. Ini adalah bagian deskripsi seasoning page.','/category/seasoning.jpg');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventories`
--

DROP TABLE IF EXISTS `inventories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `ready_stock` varchar(45) NOT NULL,
  `paid_stock` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventories`
--

LOCK TABLES `inventories` WRITE;
/*!40000 ALTER TABLE `inventories` DISABLE KEYS */;
INSERT INTO `inventories` VALUES (1,1,'50','0'),(2,2,'50','0'),(3,3,'50','0'),(4,4,'50','0'),(5,5,'50','0'),(6,6,'50','0'),(7,7,'50','0'),(8,8,'50','0'),(9,9,'50','0'),(10,10,'50','0'),(11,11,'50','0'),(12,12,'50','0'),(13,13,'50','0'),(14,14,'50','0'),(15,15,'50','0'),(16,16,'50','0'),(17,17,'50','0'),(18,18,'50','0'),(19,19,'50','0'),(20,20,'50','0'),(21,21,'50','0'),(22,22,'50','0');
/*!40000 ALTER TABLE `inventories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_methods`
--

DROP TABLE IF EXISTS `payment_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_methods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `method` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
INSERT INTO `payment_methods` VALUES (1,'Wallet'),(2,'Bank Transfer');
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NOT NULL,
  `payment_method_id` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (1,1,1);
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `description` varchar(300) NOT NULL,
  `category_id` tinyint(1) NOT NULL,
  `imagepath` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Apel',4000,'Apel adalah buah berwarna merah. Apel adalah buah berwarna merah. Apel adalah buah berwarna merah. Apel adalah buah berwarna merah. Apel adalah buah berwarna merah.',2,'[{\"path\": \"/product/apple1.jpg\"}]'),(2,'Avocado',2000,'Avocado adalah buah yang berwarna hijau. Avocado adalah buah yang berwarna hijau. Avocado adalah buah yang berwarna hijau. Avocado adalah buah yang berwarna hijau. Avocado adalah buah yang berwarna hijau.',2,'[{\"path\": \"/product/avocado1.jpg\"}]'),(3,'Banana',1000,'Banana adalah buah yang berwarna kuning. Banana adalah buah yang berwarna kuning. Banana adalah buah yang berwarna kuning. Banana adalah buah yang berwarna kuning. Banana adalah buah yang berwarna kuning.',2,'[{\"path\": \"/product/banana1.jpg\"}]'),(4,'Blueberry',500,'Blueberry adalah buah yang berwarna biru. Blueberry adalah buah yang berwarna biru. Blueberry adalah buah yang berwarna biru. Blueberry adalah buah yang berwarna biru. Blueberry adalah buah yang berwarna biru.',2,'[{\"path\": \"/product/blueberry1.jpg\"}]'),(5,'Broccoli',15000,'Broccoli adalah sayuran yang berwarna hijau. Broccoli adalah sayuran yang berwarna hijau. Broccoli adalah sayuran yang berwarna hijau. Broccoli adalah sayuran yang berwarna hijau. Broccoli adalah sayuran yang berwarna hijau.',1,'[{\"path\": \"/product/broccoli1.jpg\"}]'),(6,'Carrot',3000,'Carrot adalah sayuran yang berwarna jingga. Carrot adalah sayuran yang berwarna jingga. Carrot adalah sayuran yang berwarna jingga. Carrot adalah sayuran yang berwarna jingga. Carrot adalah sayuran yang berwarna jingga.',1,'[{\"path\": \"/product/carrot1.jpg\"}]'),(7,'Chilli',5000,'Chilli adalah bumbu yang berwarna merah. Chilli adalah bumbu yang berwarna merah. Chilli adalah bumbu yang berwarna merah. Chilli adalah bumbu yang berwarna merah. Chilli adalah bumbu yang berwarna merah. ',4,'[{\"path\": \"/product/chilli1.jpg\"}]'),(8,'Corn',7000,'Corn adalah sayuran yang berwarna kuning. Corn adalah sayuran yang berwarna kuning. Corn adalah sayuran yang berwarna kuning. Corn adalah sayuran yang berwarna kuning. Corn adalah sayuran yang berwarna kuning.',1,'[{\"path\": \"/product/corn1.jpg\"}]'),(9,'Cucumber',2000,'Cucumber adalah sayuran yang berwarna hijau. Cucumber adalah sayuran yang berwarna hijau. Cucumber adalah sayuran yang berwarna hijau. Cucumber adalah sayuran yang berwarna hijau. Cucumber adalah sayuran yang berwarna hijau. ',1,'[{\"path\": \"/product/cucumber1.jpg\"}]'),(10,'Garlic',500,'Garlic adalah bumbu yang berwarna putih. Garlic adalah bumbu yang berwarna putih. Garlic adalah bumbu yang berwarna putih. Garlic adalah bumbu yang berwarna putih. Garlic adalah bumbu yang berwarna putih.',4,'[{\"path\": \"/product/garlic1.jpg\"}]'),(11,'Grape',14000,'Grape adalah buah yang berwarna ungu. Grape adalah buah yang berwarna ungu. Grape adalah buah yang berwarna ungu. Grape adalah buah yang berwarna ungu. Grape adalah buah yang berwarna ungu.',2,'[{\"path\": \"/product/grape1.jpg\"}]'),(12,'Kiwi',5000,'Kiwi adalah buah yang berwarna coklat. Kiwi adalah buah yang berwarna coklat. Kiwi adalah buah yang berwarna coklat. Kiwi adalah buah yang berwarna coklat. Kiwi adalah buah yang berwarna coklat. ',2,'[{\"path\": \"/product/kiwi1.jpg\"}]'),(13,'Lemon',2500,'Lemon adalah buah yang berwarna kuning. Lemon adalah buah yang berwarna kuning. Lemon adalah buah yang berwarna kuning. Lemon adalah buah yang berwarna kuning. Lemon adalah buah yang berwarna kuning.',2,'[{\"path\": \"/product/lemon1.jpg\"}]'),(14,'Lettuce',1000,'Lettuce adalah sayuran yang berwarna hijau. Lettuce adalah sayuran yang berwarna hijau. Lettuce adalah sayuran yang berwarna hijau. Lettuce adalah sayuran yang berwarna hijau. Lettuce adalah sayuran yang berwarna hijau.',1,'[{\"path\": \"/product/lettuce1.jpg\"}]'),(15,'Matcha',50000,'Matcha adalah teh yang berwarna hijau. Matcha adalah teh yang berwarna hijau. Matcha adalah teh yang berwarna hijau. Matcha adalah teh yang berwarna hijau. Matcha adalah teh yang berwarna hijau.',3,'[{\"path\": \"/product/matcha1.jpg\"}]'),(16,'Melon',35000,'Melon adalah buah yang berwarna hijau dalemnya. Melon adalah buah yang berwarna hijau dalemnya. Melon adalah buah yang berwarna hijau dalemnya. Melon adalah buah yang berwarna hijau dalemnya. Melon adalah buah yang berwarna hijau dalemnya.',2,'[{\"path\": \"/product/melon1.jpg\"}]'),(17,'Orange',2000,'Orange adalah buah yang berwarna jingga. Orange adalah buah yang berwarna jingga. Orange adalah buah yang berwarna jingga. Orange adalah buah yang berwarna jingga. Orange adalah buah yang berwarna jingga.',2,'[{\"path\": \"/product/orange1.jpg\"}]'),(18,'Potato',3000,'Potato adalah sayuran yang berwarna coklat. Potato adalah sayuran yang berwarna coklat. Potato adalah sayuran yang berwarna coklat. Potato adalah sayuran yang berwarna coklat. Potato adalah sayuran yang berwarna coklat.',1,'[{\"path\": \"/product/potato1.jpg\"}]'),(19,'Shallot',500,'Shallot adalah penyedap yang berwarna coklat / merah. Shallot adalah penyedap yang berwarna coklat / merah. Shallot adalah penyedap yang berwarna coklat / merah. Shallot adalah penyedap yang berwarna coklat / merah. Shallot adalah penyedap yang berwarna coklat / merah.',4,'[{\"path\": \"/product/shallot1.jpg\"}]'),(20,'Strawberry',1000,'Strawberry adalah buah yang berwarna merah. Strawberry adalah buah yang berwarna merah. Strawberry adalah buah yang berwarna merah. Strawberry adalah buah yang berwarna merah. Strawberry adalah buah yang berwarna merah.',2,'[{\"path\": \"/product/strawberry1.jpg\"}]'),(21,'Tea',10000,'Tea adalah teh. Tea adalah teh. Tea adalah teh. Tea adalah teh. Tea adalah teh.',3,'[{\"path\": \"/product/tea1.jpg\"}]'),(22,'Tomato',2000,'Tomato adalah sayur yang berwarna merah. Tomato adalah sayur yang berwarna merah. Tomato adalah sayur yang berwarna merah. Tomato adalah sayur yang berwarna merah. Tomato adalah sayur yang berwarna merah.',1,'[{\"path\": \"/product/tomato1.jpg\"}]');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction_items`
--

DROP TABLE IF EXISTS `transaction_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `transaction_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction_items`
--

LOCK TABLES `transaction_items` WRITE;
/*!40000 ALTER TABLE `transaction_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction_statuses`
--

DROP TABLE IF EXISTS `transaction_statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction_statuses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction_statuses`
--

LOCK TABLES `transaction_statuses` WRITE;
/*!40000 ALTER TABLE `transaction_statuses` DISABLE KEYS */;
INSERT INTO `transaction_statuses` VALUES (1,'Payment Pending'),(2,'Rejected'),(3,'Canceled'),(4,'On Process'),(5,'Delivered'),(6,'Success');
/*!40000 ALTER TABLE `transaction_statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NOT NULL,
  `serial_code` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  `time` varchar(45) NOT NULL,
  `transaction_status_id` tinyint(1) NOT NULL,
  `total` int NOT NULL,
  `address` varchar(200) NOT NULL,
  `payment` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallets`
--

DROP TABLE IF EXISTS `wallets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NOT NULL,
  `balance` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallets`
--

LOCK TABLES `wallets` WRITE;
/*!40000 ALTER TABLE `wallets` DISABLE KEYS */;
INSERT INTO `wallets` VALUES (1,1,100000);
/*!40000 ALTER TABLE `wallets` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-03 23:56:54
