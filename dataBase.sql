-- this file will not run

-- creating a table

CREATE TABLE origami(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  price integer NOT NULL,
  active_price integer NOT NULL,
  second_color varchar(30) NOT NULL,
  first_picture varchar(30) NOT NULL,
  second_picture varchar(30) NOT NULL,
  active_picture varchar(30) NOT NULL,
  difficulty integer NOT NULL,
  count integer NOT NULL
)



-- insert into table

INSERT INTO origami(
 name, price, active_price, second_color, first_picture, second_picture, active_picture, difficulty, count
)
VALUES
(

     'Dove',
     10,
     10,
     '#6DF4C0',
     '/images/dove-white.svg',
     '/images/dove-color.svg',
     '/images/dove-white.svg',
     1,
     1
  ),

  (

     'Dog',
     8,
     8,
     '#FCBFAD',
     '/images/dog-white.svg',
     '/images/dog-color.svg',
     '/images/dog-white.svg',
     3,
     1
  ),

  (

     'Dragon',
     12,
     12,
     '#EF5B91',
     '/images/dragon-white.svg',
     '/images/dragon-color.svg',
     '/images/dragon-white.svg',
     8,
     1
  ),

  (

     'Dinosaur',
     14,
     14,
     '#6DF4C0',
     '/images/dinosaur-white.svg',
     '/images/dinosaur-color.svg',
     '/images/dinosaur-white.svg',
     7,
     1
  ),
  (

     'Horse',
     12,
     12,
     '#C0D8DF',
     '/images/horse-white.svg',
     '/images/horse-color.svg',
     '/images/horse-white.svg',
     7,
     1
  ),
  (

     'Pegasus',
     20,
     20,
     '#FD91BA',
     '/images/pegasus-white.svg',
     '/images/pegasus-color.svg',
     '/images/pegasus-white.svg',
     8,
     1
  ),
  (

     'Owl',
     10,
     10,
     '#E2EEF2',
     '/images/owl-white.svg',
     '/images/owl-color.svg',
     '/images/owl-white.svg',
     3,
     1
  ),
  (

     'Unicorn',
     18,
     18,
     '#CA96E5',
     '/images/unicorn-white.svg',
     '/images/unicorn-color.svg',
     '/images/unicorn-white.svg',
     6,
     1
  ),
  (

     'Sword',
     20,
     20,
     '#0ACFFB',
     '/images/sword-white.svg',
     '/images/sword-color.svg',
     '/images/sword-white.svg',
     9,
     1
  )


-- getting the information from the database
SELECT * FROM origamiFigures
