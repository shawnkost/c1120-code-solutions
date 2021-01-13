select "c"."name" as "category",
  count("f"."title") as "numberOfFilms"
  from "categories" as "c"
  join "filmCategory" using ("categoryId")
  join "films" as "f" using ("filmId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
 where "firstName" = 'Lisa' and "lastName" = 'Monroe'
 group by "c"."categoryId";
