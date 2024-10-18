//IMPORT OUR MYSQL "pool" variable connection
const pool = require('../config/dbconfig');

class AnimalDao
{
    constructor() 
    {
        this.pool = pool;
    }

    findAll(req, res)
    {
        pool.query('SELECT * from animal_records', (err, rows) => 
        {
            console.log(rows);
            res.send(rows);
        })
    }
}

module.exports = AnimalDao;