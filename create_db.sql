DROP DATABASE myBlogData;
CREATE DATABASE myBlogData;
USE myBlogData;

CREATE USER 'appuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'app2027';
GRANT ALL PRIVILEGES ON myBlogData.* TO 'appuser'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE users (id INT AUTO_INCREMENT, 
					name VARCHAR(50), 
                    email VARCHAR(30),
                    PRIMARY KEY(id));
                    
-- TODO To run this on the server, connect to your virtual server, start up mysql and run the .sql file using source create_db.sql:^