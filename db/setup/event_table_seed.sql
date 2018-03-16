CREATE TABLE events (
    event_id SERIAL PRIMARY KEY, 
    event_host INTEGER
     REFERENCES userprofile (user_id), 
    event_host_name VARCHAR(180),
    event_name VARCHAR(180), 
    event_city VARCHAR(180), 
    event_zip VARCHAR(20), 
    event_address VARCHAR(300),
    image TEXT,
    book_id VARCHAR(180),
    event_description TEXT
)




INSERT INTO events (
    event_host,
    event_host_name,
    event_name,
    event_city,
    event_zip,
    event_address,
    image,
    book_id,
    event_description
)

VALUES (
    9,
    'Tayt',
    'Personal analysis of Antoine St. Exuperies Little Prince',
    'Provo',
    84601,
    '114 S Freedom Blvd',
    'https://images-na.ssl-images-amazon.com/images/I/416G7rmennL._SX311_BO1,204,203,200_.jpg',
    156012197,
    'Come discuss a classic tale of adventure and self discovery'
)