Decision Maker
=========

Decision Maker is a quick and easy way to create and share polls with your friends or colleagues.

## Screenshots

Create a poll with ease and add as many options as you like. Don't like an option you've added? Delete it!
![](https://raw.githubusercontent.com/davidclaveau/decision-maker/master/public/img/create-a-poll.png)

Once a poll is created, share the link with your friends! One link to bring users to the voting page - another link to see the results of the poll. The creator of the poll also receives an email using [Mailgun](https://www.mailgun.com/) with the same two links.
![](https://raw.githubusercontent.com/davidclaveau/decision-maker/master/public/img/share-a-poll.png)

To vote for a poll use drag-and-drop for your preferred order. Enter your name to submit the poll. Click the option to see the description (if provided)
![](https://github.com/SophiaL1024/decision-maker/blob/master/public/img/choose-your-favourites.png)

Users can only submit once!
![](https://github.com/SophiaL1024/decision-maker/blob/master/public/img/single-submission.png)

The creator of the poll can see the results and the current leader of the poll. Using the [Borda count method](https://en.wikipedia.org/wiki/Borda_count), the poll will tally each submission based on each user's preference and show which option was voted for the most.
![](https://github.com/SophiaL1024/decision-maker/blob/master/public/img/results-page.png)

The user's page shows every poll created. A user can click each poll to see the poll results and can find the link to the poll page here as well. The user can also delete their poll as needed!
![](https://raw.githubusercontent.com/davidclaveau/decision-maker/master/public/img/track-your-polls.png)

The app is response for mobile devices as well!
![](https://raw.githubusercontent.com/davidclaveau/decision-maker/master/public/img/responsive1.png)
![](https://raw.githubusercontent.com/davidclaveau/decision-maker/master/public/img/responsive2.png)
![](https://raw.githubusercontent.com/davidclaveau/decision-maker/master/public/img/responsive3.png)

## Getting Started

1. Clone this repository.
2. Install dependencies using the `npm install` command.
3. Create a local database by PostgreSQL using the following commands (replace your_username and your_password in the commands with your choice): psql -U postgres, CREATE ROLE your_username WITH LOGIN password 'your_password';, CREATE DATABASE decision_maker OWNER your_username;.
4. Register a free account in Mailgun(https://www.mailgun.com/).
5. Create a .env file based on .env.example. 
6. Update the .env file with your local database information and Mailgun config information set in the previous step.
7. Start the web server using the `npm run local` command. The app will be served at http://localhost:8080/.
8. Go to http://localhost:8080/ in your browser.

## Dependencies

- Body-parser
- Chalk
- Cookie-parser
- Dot-env
- EJS
- Express
- Mailgun
- Morgan
- Node 5.10.x or above
- Node SASS Middleware
- Postgres
- Postgres-native
