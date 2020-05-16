/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80018
Source Host           : localhost:3306
Source Database       : studentmessmanage

Target Server Type    : MYSQL
Target Server Version : 80018
File Encoding         : 65001

Date: 2020-05-16 10:34:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `administrator`
-- ----------------------------
DROP TABLE IF EXISTS `administrator`;
CREATE TABLE `administrator` (
  `admin_username` int(11) NOT NULL,
  `admin_password` varchar(255) NOT NULL,
  `is_login` int(11) NOT NULL,
  PRIMARY KEY (`admin_username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of administrator
-- ----------------------------
INSERT INTO `administrator` VALUES ('1', '1234', '0');
INSERT INTO `administrator` VALUES ('2', '1234', '0');
INSERT INTO `administrator` VALUES ('3', '1234', '0');

-- ----------------------------
-- Table structure for `student_message`
-- ----------------------------
DROP TABLE IF EXISTS `student_message`;
CREATE TABLE `student_message` (
  `stu_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `stu_number` bigint(14) NOT NULL,
  `stu_birthday` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `stu_address` varchar(255) NOT NULL,
  `stu_telephone` bigint(12) NOT NULL,
  `stu_pic_url` varchar(255) NOT NULL,
  `stu_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `stu_study_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`stu_number`,`stu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of student_message
-- ----------------------------
INSERT INTO `student_message` VALUES ('郭晨明', '201720182011', '1999-11-11', '江西省新余市', '14758260000', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1731084366,3273216721&fm=26&gp=0.jpg', '360402199912341234', '在读');
INSERT INTO `student_message` VALUES ('冯天亮', '201720182015', '1999-10-10', '江西省九江市', '18070420000', 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=10569285,3950225092&fm=26&gp=0.jpg', '360403199812341111', '在读');
INSERT INTO `student_message` VALUES ('冯亮', '201720182015', '1999-10-10', '江西省九江市', '18070420000', 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=10569285,3950225092&fm=26&gp=0.jpg', '360403199812341112', '在读');
INSERT INTO `student_message` VALUES ('郭德纲', '201720182016', '1999-10-10', '江西省九江市', '18070420000', 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=10569285,3950225092&fm=26&gp=0.jpg', '360403199812341113', '在读');
INSERT INTO `student_message` VALUES ('李智', '201720182017', '1999-10-10', '江西省九江市', '18070420000', 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=10569285,3950225092&fm=26&gp=0.jpg', '360403199812341113', '在读');
INSERT INTO `student_message` VALUES ('李四', '201720182018', '1999-10-10', '江西省九江市', '18070420000', 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=10569285,3950225092&fm=26&gp=0.jpg', '360403199812341115', '在读');
INSERT INTO `student_message` VALUES (' 彭一鸣', '201720182019', '1999-10-10', '江西省九江市', '18070420000', 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=10569285,3950225092&fm=26&gp=0.jpg', '360403199812341116', '在读');
INSERT INTO `student_message` VALUES ('小智', '201720182020', '1999-10-10', '江西省九江市', '18070420000', 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=10569285,3950225092&fm=26&gp=0.jpg', '360403199812341117', '在读');
