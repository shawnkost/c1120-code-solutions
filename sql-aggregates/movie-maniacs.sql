select "c"."firstName",
       "c"."lastName",
    sum("payments"."amount") as "totalAmountSpentOnRentals"
  from "customers" as "c"
  join "rentals" using ("customerId")
  join "payments" using ("rentalId")
  group by "c"."customerId"
  order by "totalAmountSpentOnRentals" desc;
