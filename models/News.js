// import database
const db = require("../config/database")
// membuat class News
class News {
  // buat fungsi all
  // mengambil semua data news
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

  // menambahkan data news
  static async create(data){
    // Promise 1: melakukan insert data ke database
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO news SET ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });
    
    // refactor promise 2: get data by id
    const news = this.find(id);
    return news;
  }


  // mengedit data news
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

  // menghapus datas news
  static delete(id){
    return new Promise((resolve, reject)=>{
      const sql = "DELETE FROM news WHERE id = ?";
      db.query(sql, id, (err, rsults) => {
        resolve(results);
      })
    })
  }

  // mencari detail data news
  static async find(id){
    return new Promise((resolve, reject)=>{
      const sql = "SELECT * FROM news WHERE id = ?";
      db.query(sql, id, (err, rsults) => {
        // destructuring array
        const [news] = results;
        resolve(results);
      })
    })
  }

  // mendapatkan news dengan category sports
  static async find(category){ 
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM news WHERE category = 'sports' ";
      db.query(sql, [category], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

   // mendapatkan news dengan category finance
   static async find(category){ 
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM news WHERE category = 'finance' ";
      db.query(sql, [category], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

   // mendapatkan news dengan category automative
   static async find(category){ 
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM news WHERE category = 'automative' ";
      db.query(sql, [category], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }



  


}

// export class News
module.exports = News;
