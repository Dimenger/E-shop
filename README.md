# SQL

Совет по Postgres:
Когда будете переносить эти данные в SQL, типы полей распределятся так:
id: SERIAL или UUID
price: DECIMAL или INTEGER
modules: SMALLINT
in_stock: BOOLEAN
Остальное: VARCHAR

"server": "json-server --watch db.json --delay 500"
