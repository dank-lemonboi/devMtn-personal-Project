create table events 
(event_id SERIAL PRIMARY KEY, event_name varchar(180), event_host varchar(180), event_city VARCHAR(180), event_zip varchar(20), event_address varchar(300), all_ages boolean)