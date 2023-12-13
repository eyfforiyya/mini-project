DROP DATABASE myBlogData;
CREATE DATABASE myBlogData;
USE myBlogData;

CREATE USER 'appuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'app2027';
GRANT ALL PRIVILEGES ON myBlogData.* TO 'appuser'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE users (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
					first_name VARCHAR(50) NOT NULL, 
                    last_name VARCHAR(50) NOT NULL,
                    username VARCHAR(20) NOT NULL,
                    email VARCHAR(30) NOT NULL,
                    password VARCHAR(20) NOT NULL);
                    
-- TODO To run this on the server, connect to your virtual server, start up mysql and run the .sql file using source create_db.sql:^