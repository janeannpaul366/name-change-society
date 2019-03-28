# Name change society

## Background

You have been hired by the government of a small country who have asked you to
build a website to help its citizens manage their interaction with the
government. They live in a society where people like to change their name, so
much so that it is law for people to change their name at least ever year,
although they have the option to change it more often if they like.

The government requires a system for its people to be able to log in and submit
their name changes as well as providing a way to view their past names.

For the general public there is also a frontend that shows names that are
approaching their 1 year limit.

## Task

### Overview

You need to implement this system. There needs to be a way for users to log in
to the system and update their name as well as see their past names. A person
is not allowed to re-use a name they had in the past and no two people should
be allowed to have the same name at the same time. People using the system
should be able to add a name up to 1 week in advance (but will default to
applying from the day they submit it).

There should be an administration area that can only be used by administrators
(available via a different URL). Here they should be able to see a list of all
the registered people in the system. There should be a page for them to check
upcoming changes as well as seeing a list of people that have forgotten to
submit their new name (to help with law enforcement). When they view a person,
they should be shown a full list of that persons name history. Administrators
will also need a way to see historical data, so there will need to be a way to
select a date and see the names of people at the date selected.

For the general public, there should be a simple page, that doesn't require
logging in to see, that shows the names of people that should be updating their
names some time within the next 28 days.

### Backend

The backend for this service will need a number of features and endpoints. This
list isn't meant to be an exaustive list, just a guide on what you might want to
plan to support

- A datastore (RDBMS or optionally a NoSQL solution)
  - Users
  - People
  - Names
  - Admins
- API endpoints for the required functionallity
  - Auth (login/logout)
  - Listing names that will need to be updated soon
  - Listing people stored in the system
  - Getting historical names for a person
  - Submitting a new name for a person
  - Listing names that haven't been renewed on time

### Frontend

The frontend needs to be built in React and should call the APIs that have been
built. The pages will need to have different checks on them to make sure that
only people with the correct permissions can access them (e.g. normal users
shouldn't be able to access the admin pages).

- Home page
- Logged in user pages
  - Person overview
  - Historical names
  - Form to submit a new name
- Admin pages
  - List of all people
  - Viewing a single person
  - Listing people with names that haven't been updated on time

## Considerations

The code built for this should be easily reusable, so that when the government
wants to provide an API for 3rd party use in the future, they won't need to
re-build everything.

To save money, the site doesn't need to have a fancy design. It will only be
used to submit new names, so any basic CSS framework (or none at all) will
suffice.

The department has a stong usage of Python and NodeJS. The backend could be
built using either of these languages. For the front end they would like it to
be written using React. The data store can either be a RDBMS or a NoSQL
solution, so long as the data integrity can be assured.

Security is important, e.g. users shouldn't be able to see the names of other
people.
