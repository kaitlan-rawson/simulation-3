select username
from users 
where id in (select friend_key 
from friends
where friend_key != 1 and user_id =1);

