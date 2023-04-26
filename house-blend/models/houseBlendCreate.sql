CREATE TABLE public.user (
    "_id" serial NOT NULL,
    "userName" varchar NOT NULL,
    "password" varchar NOT NULL,
    "zipcodes" integer[],
    PRIMARY KEY ("_id")
);

CREATE TABLE public.zipcodes (
    "_id" serial NOT NULL,
    "zipcode" integer,
    "population" integer,
    "averageHousePrice" integer,
    "coffeeShops" integer,
    "blendScore" integer,
    PRIMARY KEY ("_id")
);

CREATE TABLE user_zipcode (
    "user_id" integer REFERENCES "user"("_id"),
    "zipcode_id" integer REFERENCES zipcodes("_id"),
    PRIMARY KEY (user_id, zipcode_id)
);