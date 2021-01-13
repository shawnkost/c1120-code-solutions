with cte_replacementCost as (
  select sum("replacementCost") as "replacementCost"
        from "films"
        join "inventory" using ("filmId")
    group by "filmId"
)

with cte_revenue as (
  select sum("amount") as "revenue1"
        from "payments"
        join "rentals" using ("rentalId")
        join "inventory" using ("inventoryId")
    group by "filmId"
)

select "title",
   sum("cost", "revenue")
  from "films"
  join "cte_replacementCost" as "cost" using ("filmId")
  join "cte_revenue" as "revenue" using ("filmId");
  group by "title"
