# REST API - NODEJS, EXPRESSJS & POSTGRESQL.

This is a step-by-step repository to learn how to build a basic rest api using these technologies.

*Before starting this tutorial you should know about basic - intermediate Javascript, NodeJS, APIs, SQL databases, HTTP requests, Internet.*

---

## Let's start!

--- 

1. Install Node.js on your OS (Windows, Linux or MAC).  Also, you can use the code editor of your preference.  In my case, I have used VSCode. It's easy to use, intuitive and fast.

    https://nodejs.org/en/

2. Install postgresql locally following these steps:

    https://www.postgresql.org/download/

3. Initialize a project.  If you type `--y`, then your project will be created automatically, using default settings for your package.json.  If not, then you should type each setting manually, like name of your project, scripts, and others.

    ```
    npm init --y
     ```

4. Then, install your main dependency, Express.

    ```
    npm install express
    ```

5. Install pg package, which is a connection driver and will let us to do a database consulting, in this case with postgresql.

    ```
    npm install pg
    ```

6. Use nodemon as a development dependency, to restart automatically your server when modify. If you use `-D`, that means it is a development dependency, which is not strictly necessary for running your application. Also use morgan as a development dependency, very useful to catch HTTP requests and status.

    ```
    npm install nodemon -D
    npm install morgan
    ```

7. Modify your scripts on your package.json.  In this case, as I created a new script called `dev`, then I needed to type `run` when running on my terminal.  Then type `nodemon` and the path of your main JS file which will run your server.

    ```
    "scripts": {
    "dev": "nodemon src/index.js"
    }
    ```   

    To run the server:

    ```
    npm run dev
    ```

8. As I am developing on Linux, I had to type the next script to connect locally postgres and my server.
`-u` is for the user name, which default on postgresql is postgres.  And `psql` for postgres database properly. Open your terminal window to connect your database, and keep another one window for your server.

    ```
    sudo -u postgres psql
    ```

9. Remember to use different files and folders for your main JS file, routes, controllers, database, etc.

10. When your database terminal shows a message like this: 

    ```
    postgres=#
    ```
    that means that you are succesfully connected and ready to create a database, tables, save and consult data.

11. Using postgresql syntax, let's create a database, for example:

    ```
    CREATE DATABASE <databasename>;
    ```

12. To check if your database was created:

    ```
    \l
    ```

13. To use your created database:

    ```
    \c <databasename>;
    ```

14. To create a simple database table, let's use this basic example:

    ```
    CREATE TABLE <databasetablename>(
        id SERIAL PRIMARY KEY,
        name VARCHAR(30),
        email TEXT
    );
    ```

15. To check if your table was created:

    ```
    \dt
    ```

16. To insert data on your database, for example:

    ```
    INSERT INTO <databasetablename> (name, email) VALUES
        ('example', 'example@example.com'),
        ('otherexample', 'otherexample@example.com');
    ```

17. To check if data was succesfully inserted:

    ```
    SELECT * FROM <databasetablename>;
    ```
    and this will return a table with your saved data manually. Well done!

    **but this is not a common way to save or get data from your database.  Let's do it using NodeJS.**

18. Preferably, you should use a controller file on a folder named `controllers`. Then, let's create that file!

    ```js
    const { Pool } = require('pg');
    ```
    using destructuring, from pg package, let's require Pool, which is a constructor.  Also, we can use dot notation, but use object destructuring is very useful and efficient:
    ```js
    const pg = require('pg');
    const Pool = pg.Pool();
    ```
    **click here for more information:** https://node-postgres.com/api/pool

19. Placed on our controller JS file, let's create our example constructor:

    ```js
    const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: '<databasename>',
    port: '<databaseport>'
    });
    ```
    *In this case, we are using a local server, and a local connection with postgres, that's the reason why I used as host "localhost".  Default password is empty, if you set a new password for that user, type it.*

20. As we are using connections from server to a database, they are asynchronous connections, then we should use `async function`.  Let's define variables (constants) which are going to set every HTTP request that our app will need: GET, POST, PUT, DELETE, for example.  Let's check a GET request:

    ```js
    const getUsers = async (req, res) => {
        try {
            const users = await pool.query('SELECT * FROM users;');
            console.log(users.rows);
            res.status(200).json({
                status: true,
                message: 'Found users',
                response: users.rows
            });
        } catch (error) {
            console.log(error);
        };
    };

    ```
    *From `pool`, we are going to use `query` to set postgresql syntax and get data from our database.*

    *It will return a chunk data, but for our importance, by now, use `.rows` to read data we need.*

    **for more information, click here:**  https://node-postgres.com/features/queries

21. With this information, you are capable to build POST, PUT, DELETE requests.

22. Finally, as our variable contains a function, we will use it to define our routes, for example:

    ```js
    router.get('/users', getUsers);
    ```

    ...and this is going to work, if your server is succesfully running.  For a GET request testing, use a navigator as simple way, but to create, update and delete, and to DO NOT USE FRONTEND tools as HTML (a form), I recommend an API tester as POSTMAN or INSOMNIA.

23. What is Postman? 

        https://www.postman.com/

24. What is Insomnia?

        https://insomnia.rest/


---

### ALEPALACIO </> STEP-BY-STEP