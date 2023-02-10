
DROP DATABASE IF EXISTS burp_db;
CREATE DATABASE burp_db;

USE burp_db;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    passcode VARCHAR(30) NOT NULL UNIQUE,
    twoFactor VARCHAR(30) NOT NULL
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
=======

CREATE TABLE user (
    prim_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    passcode VARCHAR(30) NOT NULL,
    twoFactor VARCHAR(30)  NOT NULL
);

CREATE TABLE posts (
    prim_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (prim_id) 
    REFERENCES user(prim_id),
    
    user_id PRIMARY KEY VARCHAR (30),
    date_added ,
    title VARCHAR (30),
    content VARCHAR(99)
);

CREATE TABLE comments (
    prim_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (prim_id) 
    REFERENCES user(prim_id),
    date_added ,

    user_id 
    FOREIGN KEY (user_id) 
    REFERENCES posts(user_id)
    VARCHAR(30),
    post_id VARCHAR(30),
    content VARCHAR(99)
);