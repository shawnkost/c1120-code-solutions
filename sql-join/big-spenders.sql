select "amount", "firstName", "lastName"
  from "payments"
  join "customers" using ("customerId")
  order by "amount" desc
  limit 10;
