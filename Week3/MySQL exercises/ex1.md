## What columns violate 1NF?

#### 1- dinner_date (it should be the same type and the same format)

#### 2- food_code (multiple values )

#### 3- food_description(multiple values)

## What entities do you recognize that could be extracted?

#### 1- member

#### 2- dinner

#### 3- venue

#### 4- food

## Name all the tables and columns that would make a 3NF compliant solution

#### 1- members table (member_id INT PRIMARY KEY, member_name VARCHAR(150), member_address VARCHAR(200))

#### 2- venue table (venue_code INT PRIMARY KEY- venue_description VARCHAR(200))

#### 3- food table (food_code INT PRIMARY KEY- food_description VARCHAR(300))

#### 4- dinner table (dinner_id INT PRIMARY KEY ,dinner_date DATETIME, food_code INT FK)

#### 5- dinner_venue table (dinner_id INT FK,venue_code INT FK)

#### 6-dinner_food table (dinner_id INT FK, food_code INT FK)

#### 7-member-order (member_id INT FK, dinner_id INT FK)
