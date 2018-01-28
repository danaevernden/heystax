
###users table >>
populated from facebook?

| Column        | Type           |
| ------------- |:-------------:|
| id      | number |
| image_1   | varchar      |
| image_2   | varchar      |
| image_3   | varchar      |
| image_4   | varchar      |
| image_5  | varchar      |
| image_6   | varchar      |
| stax_id | number |
| bio | varchar |
| location | varchar |
| age | number |

###preferences table
| Column        | Type           |
| ------------- |:-------------:|
| id      | number |
| user_id | number |
| widget_id | number |
| preference | number |

###stax table

| Column        | Type           |
| ------------- |:-------------:|
| id      | number |
| title   | varchar      |
| description | varchar  |
| category_id | number |
| icon | varchar |

###categories table

| Column        | Type           |
| ------------- |:-------------:|
| id      | number |
| title   | varchar      |
| color | varchar  |

### stax_with_users table
####includes a short general bio
| Column        | Type           |
| ------------- |:-------------:|
| stax_id      | number |
| user_id   | number      |
| image_1   | varchar      |
| image_2   | varchar      |
| image_3   | varchar      |
| image_4   | varchar      |
| image_5  | varchar      |
| image_6   | varchar      |
| bio   | varchar      |

### widgets table

| Column        | Type           |
| ------------- |:-------------:|
| id      | number |
| stax_id      | number |
| widget_type  | varchar      |

### widgets_answers table

| Column        | Type           |
| ------------- |:-------------:|
| id      | number |
| widget_id  | number      |
| user_id | number |
| widget_answer_text | varchar |
| widget_answer_num | number |

###matches table

| Column        | Type           |
| ------------- |:-------------:|
| id      | number |
| user_1_id   | number      |
| user_2_id | number  |
| user_1_vote | boolean |
| user_2_vote | boolean |

###inbox table

| Column        | Type           |
| ------------- |:-------------:|
| id      | number |
| user_1_id   | number      |
| user_2_id | number  |
| message_id | varchar |

###messages table
-- how to load only a few at a time?
| Column        | Type           |
| ------------- |:-------------:|
| id      | number |
| user_1_id   | number      |
| user_2_id | number  |
| message | varchar |
| timestamp | timestamp |

###routes outline
-- how to pull alerts?
| Page        | Action           | Logic |
| ------------- |:-------------:|:-------------:|
| login/sign up      | none | n/a |
| splash page (waiting to load) | none | n/a |
| inbox | get from messages_abbrev, user table? | get most recent for user, get user for each message |
| message with user (examples of brynn and anne), matches | get/post with messages, get from matches where no messages?, post to messages |
| likes me | get/post from matches, users, stax_with_users |  get from matches where user_2_vote is true and user_id = user and user_1_vote is blank, post to matches |
| swipe_test | get/post from matches, users, stax_with_users | get from users where same city, not in matches, same stax_with_users for specific stax, post to matches |
| grid of categories | get from categories | select all from categories |
| grid of stax | get from stax | select all from stax where category matches previously selected |
| about womentors (stax example) | get from stax | get from stax where id matches previously selected |
| join womentors | get from widgets, post to widgets_answers | get from widgets where stax matches current, post to widgets_answers |
| >swipe in womentors | (eventually reuse swipe) | n/a |
| Settings - main_page | none | n/a |
| edit_profile (or create profile if empty?) | get/post from users | get info for user, post to users |
| Preferences | none | n/a |
| widgets_preferences (DistanceWidget) | get/post from preferences | get/post preferences where user matches |
| about_heystax | none | n/a |
| my stax | get stax_with_users, stax | get stax where stax_with_users matches |
