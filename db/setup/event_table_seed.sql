CREATE TABLE events (
    event_id SERIAL PRIMARY KEY, 
    event_name VARCHAR(180), 
    event_host VARCHAR(180), 
    event_city VARCHAR(180), 
    event_zip VARCHAR(20), 
    event_address VARCHAR(300), 
     user_id INTEGER
     REFERENCES userprofile (user_id),
    all_ages BOOLEAN
)