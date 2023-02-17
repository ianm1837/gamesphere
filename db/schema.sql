
DROP DATABASE IF EXISTS burp_db;
CREATE DATABASE burp_db;

USE burp_db;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    passcode VARCHAR(30) NOT NULL UNIQUE,
    twoFactor INT NOT NULL
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id),
    date_added TIMESTAMP DEFAULT NOW(),
    title VARCHAR(30) NOT NULL,
    content TEXT NOT NULL
);

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date_added TIMESTAMP DEFAULT NOW(),
    user_id INT NOT NULL,
    FOREIGN KEY (user_id)
    REFERENCES user (id),
    content TEXT NOT NULL
);