select count("city"."name") as "numberOfCities",
       "country"."name" as "country"
  from "cities" as "city"
  join "countries" as "country" using ("countryId")
  group by "countryId";
