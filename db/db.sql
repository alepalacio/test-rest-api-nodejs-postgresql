CREATE DATABASE basicapi;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email TEXT
);

INSERT INTO users (name, email) VALUES
    ('gabriella', 'gaby@hacker.com'),
    ('alexis', 'alexis@code.com'),
    ('freddo', 'freddo@freddo.com'),
    ('ceci', 'ceci@freddo.com'),
    ('tam', 'tam@st.org'),
    ('rick', 'rick@morty.com'),
    ('charles', 'charles@bro.es'),
    ('vinson', 'vinson@use.com'),
    ('tomato', 'mr@tomato.com'),
    ('nancy', 'mom@family.com'),
    ('kary', 'angels@gmail.com'),
    ('cris', 'ny@paradise.com'),
    ('monique', 'mon@mom.gov.us'),
    ('mina', 'aunt@mina.com'),
    ('christine', 'develop@home.es'),
    ('developer', 'development@improve.com');