UPDATE products
SET name = ${name},
    description = ${description},
    price = ${price},
    img = ${img}
WHERE product_id = ${id}