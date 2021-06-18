const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '0711',
    database: 'basicapi',
    port: '5432'
});

const get = (req, res) => {
    res.send('Welcome to this basic rest api with nodeJS and postgresql! To check users, try --->  /users');
};

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

const singleUser = async (req, res) => {
    try {
        const id = await req.params.id;
        const user =  await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        res.status(200).json({
            status: true,
            message: 'Found user',
            response: user.rows
        });
    } catch (error) {
        console.log(error);
    };
};

const newUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
        console.log(response)
        res.status(200).json({
            status: true,
            message: 'User saved successfully',
            body: {
                user: {
                    name, email
                }
            }
        });
        
    } catch (error) {
        console.log(error);
    };
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email } = req.body;
        const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
            name,
            email,
            id
        ]);
        console.log(response);
        res.status(200).json({
            status: true,
            message: `User ${id} updated successfully`
        });
    } catch (error) {
        console.log(error);
    };
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        console.log(response)
        res.status(200).json({
            status: true,
            message: `User ${id} deleted`,
        });
    } catch (error) {
        console.log(error);
    };
};

module.exports = {
    get,
    getUsers,
    newUser,
    singleUser,
    updateUser,
    deleteUser
};