// import database
const db = require("../config/database")
// membuat class News
class News {
  // buat fungsi all
  static all(){
      return new Promise((resolve, reject)=> {
        const query = "SELECT * FROM news";
      /**
       * Melakukan query menggunakan method query
       * menerima 2 params: query dan callback
       */
      db.query(query, (err, results) => {
        // jika berhasil, jalankan method resolve dan kirim results
        resolve(results);
      });
    });
  }

  static async create(data){
    // melakukan insert data ke database
    const id = await new Promise((resove, reject) => {
      const sql = "INSERT INTO news SET ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });
    
    // melakukan query berdasarkan id
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM news WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  static async update(id, data){
    await new Promise((resolve, reject) => {
      const sql = "UPDATE news SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) =>{
        resolve(results);
      });
    });

    // mencari data yang baru diupdate
    const news = await this.find(id);
    return news;
  }

  
  


}

// export class News
module.exports = News;
