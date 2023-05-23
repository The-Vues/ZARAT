-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ZARAT
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ZARAT
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ZARAT` DEFAULT CHARACTER SET utf8 ;
USE `ZARAT` ;

-- -----------------------------------------------------
-- Table `ZARAT`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ZARAT`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ZARAT`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ZARAT`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Fname` VARCHAR(45) NOT NULL,
  `Lname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `cart_id` INT NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`, `cart_id`),
  INDEX `fk_user_cart_idx` (`cart_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_cart`
    FOREIGN KEY (`cart_id`)
    REFERENCES `ZARAT`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ZARAT`.`items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ZARAT`.`items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `image` LONGTEXT NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `size` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `keyword` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ZARAT`.`allCarts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ZARAT`.`allCarts` (
  `cart_id` INT NOT NULL,
  `items_id` INT NOT NULL,
  PRIMARY KEY (`cart_id`, `items_id`),
  INDEX `fk_cart_has_items_items1_idx` (`items_id` ASC) VISIBLE,
  INDEX `fk_cart_has_items_cart1_idx` (`cart_id` ASC) VISIBLE,
  CONSTRAINT `fk_cart_has_items_cart1`
    FOREIGN KEY (`cart_id`)
    REFERENCES `ZARAT`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_has_items_items1`
    FOREIGN KEY (`items_id`)
    REFERENCES `ZARAT`.`items` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
