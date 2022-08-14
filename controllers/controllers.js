const db = require('../db');

class UserController {
    async createUser(req,res) {
        const {name,email} = req.body;
        const data = await db.query('INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *',[name,email])
        res.json(data.rows[0])  
    }

    async getUsers(req,res) {
        const data = await db.query('SELECT * FROM users');
        res.json(data.rows);
    }

    async getUserById(req,res) {
        const id = req.params.id;
        const data = await db.query('SELECT * FROM users WHERE id=$1',[id]);
        res.json(data.rows[0]);
    }

    async updateUser(req,res) {
        const id = req.params.id;
        const {name,email} = req.body;
        const data = await db.query('UPDATE users SET name=$1,email=$2 WHERE id=$3 RETURNING *',[name,email,id]);
        res.json(data.rows[0]);
    }

    async deleteUser(req,res) {
        const id = req.params.id;
        const data = await db.query('DELETE FROM users WHERE id=$1',[id]);
        res.send('Пользователь удален');
    }
}

module.exports = new UserController();