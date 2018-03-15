CREATE TABLE events (
    event_id SERIAL PRIMARY KEY, 
    event_host INTEGER
     REFERENCES userprofile (user_id), 
    event_host_name VARCHAR(180),
    event_name VARCHAR(180), 
    event_city VARCHAR(180), 
    event_zip VARCHAR(20), 
    event_address VARCHAR(300),
    all_ages BOOLEAN,
    event_picture TEXT,
    book_id VARCHAR(180),
    event_description TEXT,
)