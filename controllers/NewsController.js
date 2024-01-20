// import Model News
const News = require("../models/News")

// buat class NewsController
class NewsController {
  // buat fungsi

  // menambahkan keyword async memberitahu proses asynchronous
  // funsi untuk mendapatkan semua berita
  static async index(req, res) {
    // memanggil method static all dengan async await
    const news = await News.all();
    
    // refactor handle jika data kosong 
    if(news.length > 0){
      const data = {
        message: "Get All Resource",
        data: news,
      };
      res.status(200).json(data);
    }
    // jika data tidak ditemukan
    else {
      const data = {
        message: "News is empty",
        data: news,
      };
      res.status(200).json(data);
    }
  }

  // untuk menambahkan data news
  static async store(req, res) {
    /**
     * validasi sederhana
     * handle jika salah satu data tidak dikirim
     */

    // destructuring object req.body
    const { title, author, content, url, url_image, published_at, category, timestamp } = req.body;

    // jika data undefined maka dikirim response error
    if(!title || !author || !content || !url || !url_image || !published_at || !category || !timestamp){
      const data = {
        message : "Resource is added successfully",
      }
      return res.status(201).json(data);
    } 

    // else
    const news = await News.create(req.body);

    const data = {
      message: "Menambahkan data news",
      data: news
    }
    return res.status(422).json(data);

  }
  

  // untuk mengedit data news
  static async update(req, res) {
    const {id} = req.params;
    // cari id news yang ingin di update
    const news = await News.find(id);
    
    if(news){
      // Melakukan update data news
      const news = await News.update(id, req.body);
      const data = {
        message: "Resource update is successfully",
        data: news,
      };
      res.status(200).json(data);
    }
    // jika data tidak ditemukan
    else {
      const data = {
        message: "Resource not found",
      };
      res.status(404).json(data);
    }
  }

  // untuk menghapus data news
  static async destroy(req, res){
    const{ id } = req.params;
    // cari berdasarkan news id
    const news = await News.find(id);

    if(news){
      await News.delete(id);
      const data = {
        message: "Resource is delete successfully"
      }
      res.status(200).json(data);
    }  

    // jika data tidak ditemukan
    else {
      const data = {
        message: "Resource not found",
      };
      res.status(404).json(data);
    }
  }

  // untuk menampilkan detail data news
  static async show(req, res){
    const {id} = req.params;
    // cari berdasarkan news id
    const news = await News.find(id);

    // jika data berhasil ditemukan
    if(news){
      const data = {
        message: "Get detail resource",
        data: news,
      }
      res.status(200).json(data);
    }  

    // jika data tidak ditemukan
    else {
      const data = {
        message: "Resource not found",
      };
      res.status(404).json(data);
    }
  }

  // untuk mencari data news dengan keyword title nya
  static async search(req, res){
    // merequest dengan atribut title
    const {title} = req.body;
    // cari berdasarkan news id
    const news = await News.find(title);

    // jika data berhasil ditemukan
    if(news){
      const data = {
        message: "Get search resource",
        data: news,
      }
      res.status(200).json(data);
    }  

    // jika data tidak ditemukan
    else {
      const data = {
        message: "Resource not found",
      };
      res.status(404).json(data);
    }
  }

  // fungsi untuk mencari data news dengan kategori sports
  static async sport(req, res){
    // merequest dengan atribut category
    const { category } = req.body
    // Menggunakan fungsi find untuk mendapatkan data sport dari database
    // cari berdasarkan news category sports
    const news = await News.find(category);
    // menyaring data dari kategori sports dengan array news
    const sportsData = news.filter(item => item.category === 'sports');
 
    // refactor handle jika data kosong
    if(sportsData.length > 0){
      const data = {
        message: "Get sport resource",
        total: sportsData,
        data: news,
      }
      res.status(200).json(data);
    }  

    // jika data tidak ditemukan
    else {
      const data = {
        message: "Resource not found",
      };
      res.status(404).json(data);
    }
  } 

  // untuk mencari data news dengan kategori finance
  static async finance(req, res){
    // merequest dengan atribut category
    const { category } = req.body
    // Menggunakan fungsi find untuk mendapatkan data finance dari database
    // cari berdasarkan news category finance
    const news = await News.find(category);
    // menyaring data dari kategori finance dengan array news
    const financeData = news.filter(item => item.category === 'finance');
 
    // refactor handle jika data kosong
    if(financeData.length > 0){
      const data = {
        message: "Get finance resource",
        total: financeData,
        data: news,
      }
      res.status(200).json(data);
    }  

    // jika data tidak ditemukan
    else {
      const data = {
        message: "Resource not found",
      };
      res.status(404).json(data);
    }
  } 

  // untuk mencari data news dengan kategori automative
  static async automative(req, res){
    // merequest atribut category
    const { category } = req.body
    // cari berdasarkan news category automative
    const news = await News.find({ category });
    // menyaring data dari kategori automative dengan array news
    const automativeData = news.filter(item => item.category === 'sports');
 
    // refactor handle jika data kosong
    if(automativeData.length > 0){
      const data = {
        message: "Get automative resource",
        total: automativeData,
        data:news,

      }
      res.status(200).json(data);
    }  

    // jika data tidak ditemukan
    else {
      const data = {
        message: "Resource not found",
      };
      res.status(404).json(data);
    }
  } 



}

// membuat object NewsController
const object = new NewsController();

// export object NewsController
module.exports = NewsController;
