
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