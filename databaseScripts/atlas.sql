CREATE DATABASE atlas;

CREATE TABLE IF NOT EXISTS `atlas`.`customer` (
    `customer_id` INT NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(255),
    `contact_number` VARCHAR(75),
    PRIMARY KEY (`customer_id`) 
);

CREATE TABLE IF NOT EXISTS `atlas`.`table_details` (
    `table_id` INT NOT NULL AUTO_INCREMENT,
    `seat_count` INT NOT NULL,
    PRIMARY KEY (`table_id`) 
);

CREATE TABLE IF NOT EXISTS `atlas`.`booking` (
    `booking_id` INT NOT NULL AUTO_INCREMENT,
    `customer_id` VARCHAR(150) NOT NULL,
    `table_id` VARCHAR(150) NOT NULL,
    `party_size` INT NOT NULL,
    `reservation_datetime` DATETIME,
    PRIMARY KEY (`booking_id`) 
);