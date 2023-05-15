drop schema if exists examen;
create database examen;
use examen;

create table datos (
	id int primary key auto_increment,
  dato varchar(255)
);

select * from datos;	