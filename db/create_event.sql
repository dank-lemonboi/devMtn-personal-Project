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
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9
)
RETURNING *;


-- {
-- 	"event_host": "9",
-- 	"event_host_name": "Tayt",
-- 	"event_name": "asdf",
-- 	"event_city": "asdf",
-- 	"event_zip": "1234",
-- 	"event_address": "asdf3 234",
-- 	"image": "asdfasdf",
-- 	"book_id": "12345",
-- 	"event_description": "q234asdflaksdjf"
-- }