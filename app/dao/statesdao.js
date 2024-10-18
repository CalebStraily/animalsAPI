//IMPORT OUR MYSQL "pool" variable connection
const pool = require('../config/dbconfig');

class StatesDao
{
    constructor() 
    {
        this.pool = pool;
    }

    findAll(req, res)
    {
        pool.query('SELECT * from states', (err, rows) => 
        {
            console.log(rows);
            res.send(rows);
        })
    }
}

module.exports = StatesDao;