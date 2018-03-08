CREATE TABLE attendees (
    id SERIAL PRIMARY KEY,
     event_id INTEGER, 
     user_id INTEGER
     REFERENCES userprofile (user_id)
     )