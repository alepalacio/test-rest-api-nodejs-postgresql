# REST API - NODEJS, EXPRESSJS & POSTGRESQL.

This is a step-by-step repository to learn how to build a basic rest api using these technologies.

---

## Let's start!

--- 

1. Install Node.js on your OS (Windows, Linux or MAC).  Also, you can use the code editor of your preference.  I used VSCode. It's easy to use, intuitive, fast.

    https://nodejs.org/en/

2. Install postgresql locally following these steps.

    https://www.postgresql.org/download/

3. Initialize a project.  If you type "--y", then your project will be created automatically, using default settings for your package.json.  If not, then you should type each setting manually, like name of your project, scripts, and others.

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

6. Use nodemon as a development dependency, to restart automatically your server when modify. If you use "-D", that means it is a development dependency, which is not strictly necessary for your application. Also use morgan as a development dependency, very useful to catch HTTP requests and its status.

    ```
    npm install nodemon -D
    npm install morgan
    ```

7. Modify your scripts on your package.json.  In this case, as I created a new script called "dev", then I needed to type "run" when running on my terminal.  Then type "nodemon" and the path of your main JS file which will run your server.

    ```
    "scripts": {
    "dev": "nodemon src/index.js"
    }
    ```   

    To run the server:

    ```
    npm run dev
    ```

8. As I am developing on Linux, I had to type the next script to connect locally postgres and my server. "-u" is for the user name, which default on postgresql is postgres.  And "psql" for postgres database properly.

    ```
    sudo -u postgres psql
    ```






