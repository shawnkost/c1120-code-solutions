select "releaseYear",
       "categories"."name" as "category"
  from "films"
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
 where "title" = 'Boogie Amelie';
