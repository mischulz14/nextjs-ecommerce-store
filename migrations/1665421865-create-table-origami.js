exports.up = async (sql) => {
  await sql`
	CREATE TABLE origami(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  price integer ,
  active_price integer ,
  second_color varchar(50) ,
  first_picture varchar(50) ,
  second_picture varchar(50) ,
  active_picture varchar(50) ,
  difficulty integer ,
  count integer
)`;
};

exports.down = async (sql) => {
  await sql`DROP TABLE origami`;
};
