insert into userprofile 
(user_name, user_image, auth_id)
values
($1, $2, $3)
returning *