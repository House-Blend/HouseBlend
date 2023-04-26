CREATE TABLE public.brew_user (
    "_id" serial NOT NULL,
    "user_name" varchar NOT NULL,
    "password" varchar NOT NULL,
    "zipcodes" integer[],
    PRIMARY KEY ("_id")
);

CREATE TABLE public.zipcodes (
    "_id" serial NOT NULL,
    "zipcode" integer,
    "population" integer,
    "average_house_price" integer,
    "coffee_shops" integer,
    "blend_score" integer,
    PRIMARY KEY ("_id")
);

CREATE TABLE user_zipcode (
    "user_id" integer REFERENCES brew_user("_id"),
    "zipcode_id" integer REFERENCES zipcodes("_id"),
    PRIMARY KEY (user_id, zipcode_id)
);