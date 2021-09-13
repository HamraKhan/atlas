CREATE TABLE IF NOT EXISTS customer (
    customer_id SERIAL PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(255),
    contact_number VARCHAR(75) 
);

CREATE TABLE IF NOT EXISTS table_details (
    table_id SERIAL PRIMARY KEY,
    seat_count INT NOT NULL
);

CREATE TABLE IF NOT EXISTS booking (
    booking_id SERIAL PRIMARY KEY,
    customer_id VARCHAR(150) NOT NULL,
    table_id VARCHAR(150) NOT NULL,
    party_size INT NOT NULL,
    reservation_datetime TIMESTAMP
);