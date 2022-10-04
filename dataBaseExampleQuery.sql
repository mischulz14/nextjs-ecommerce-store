-- this file will not run

-- creating a table

CREATE TABLE origamiFigures(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
)

-- insert into table

INSERT INTO origamiFigures(
  first_name, type, accessory
)
VALUES
("dove", "white"," yellow"),
("dog", "color", "blue")


-- getting the information from the database:
SELECT * FROM origamiFigures
