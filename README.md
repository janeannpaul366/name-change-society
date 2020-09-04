# Name change society

## Background
The government of a small country has tasked you with building a website to help its citizens manage their names. This country is pretty quirky. The citizens loved changing their name so much that it became law for everyone to change their name at least once a year! Quirkier still, no one is allowed to re-use a past name, and everyone's current name must be unique.

### Overview
This government requires a system for its citizens to be able to log in and submit their name changes as well as providing a way to view their past names. Government officials will also be able to log in and view a list of people who have not changed their name in the past year.

There also needs to be a public to show names that are approaching their one year limit. The citizens are expected to check this page without logging in, as they'll want to keep an eye out for names that they might like to have for a year!

### Your Tasks
##### Create any necessary pages that allow citizens to:
1. Log in/out
1. View their current name
1. View their historical names
1. Submit a new name

Keep in mind there are restrictions on what a citizen can name themselves:
1. They cannot re-use a name that they've had in the past
1. They cannot use a name that someone else currently has
 
##### Create any necessary pages that allow government officials to:
1. Log in/oout
1. View the all citizens
1. View any particular citizen to:
    1. See their current name
    1. See their past names
    1. Submit a new name on their behalf
1. View a list of citizens that:
    1. Have not changed their name in the past year
    1. Need to change their name within 28 days

### Solution
For your solution we would expect to see:
1. Usage of a relatiional database such as PostgresSQL
1. A Rest or GraphQL API written in PHP, ideally Laravel
1. A frontend built in React, that performs API calls to your API

Your solution will need a number of endpoints / features / database tables, etc. The following is only a guide of what we are expecting to see in your submission

- A RDBMS datastore (PostgresSQL for example)
  - Tables
    - Citizens
    - Government Officials
    - Names
    - Users
- API Endpoints and Frontend Pages
  - Login
  - Authenticated endpoints / pages
    - The logged in citizen can:
      - Retrive their own name
      - Retrieve all their historical names
      - Submit a new name
      - List all names that are expiring within 28 days
    - The logged in goverment official can:
      - List the names of all citizens
      - List all historical names of any citizen
      - Submit a new name for any citizen
      - List all citizens that need to update their name within 28 days
      - List all citizens who have not changed their name in the past year
- Additional API Endpoints
    - Log out
- Additional Frontend Pages
  - Home Page

### Considerations
- You may manually create users directly in your database.
- Security is important, e.g. Citizens shouldn't be able to submit a new name for other Citizens, view Citizens' past names, etc.
- The code built for this should be easily reusable, so that when the government wants to provide an API for 3rd party use in the future, they won't need to re-build everything.
- The site doesn't need to have a fancy design as the government is looking to save money. Feel free to use any basic CSS framework or none at all.
- The government is thinking of allowing citizens to submit name changes that come into effect within 28 days, but has decided to hold off on that for now
