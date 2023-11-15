DROP TABLE IF EXISTS owners;
CREATE TABLE books(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL,
    rating INT,
    status VARCHAR(20) DEFAULT 'unread'
);


INSERT INTO books (title, author, rating, status)
VALUES ('To Kill a Mockingbird', 'Harper Lee', 4.28, 'Unread');

INSERT INTO books (title, author, rating, status)
VALUES ('1984', 'George Orwell', 4.17, 'Unread');

INSERT INTO books (title, author, rating, status)
VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', 3.91, 'Read');

INSERT INTO books (title, author, rating, status)
VALUES ('The Catcher in the Rye', 'J.D. Salinger', 3.81, 'Unread');

INSERT INTO books (title, author, rating, status)
VALUES ('To the Lighthouse', 'Virginia Woolf', 3.78, 'Unread');

INSERT INTO books (title, author, rating, status)
VALUES ('The Hobbit', 'J.R.R. Tolkien', 4.28, 'Read');

INSERT INTO books (title, author, rating, status)
VALUES ('The Da Vinci Code', 'Dan Brown', 3.83, 'Read');

INSERT INTO books (title, author, rating, status)
VALUES ('Pride and Prejudice', 'Jane Austen', 4.27, 'Unread');