// import Model News

// buat class NewsController
class NewsController {
  // buat fungsi

  // menambahkan keyword async memberitahu proses asynchronous
  // funsi untuk mendapatkan semua berita
  async index(req, res) {
    // memanggil method static all dengan async await
    const news = await News.all();
    
    // data array lebih dari 0
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
        data: news,
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
        data: news,
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
        data: news,
      };
      res.status(404).json(data);
    }
  }

  // untuk mencari data news dengan keyword title nya
  static async search(req, res){
    const {title} = req.params;
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
        data: news,
      };
      res.status(404).json(data);
    }
  }

  // untuk mencari data news dengan kategori sports
  static async sports(req, res){
    // Menggunakan fungsi find untuk mendapatkan data sport dari database
    const sportsData = await NewsController.find('sports')
    const totalSports = sportsData.length;

    // jika data berhasil ditemukan
    if(totalSports > 0){
      const data = {
        message: "Get sport resource",
        total: totalSports,
        data: news,
      }
      res.status(200).json(data);
    }  

    // jika data tidak ditemukan
    else {
      const data = {
        message: "Resource not found",
        data: news,
      };
      res.status(404).json(data);
    }
  } 

  // untuk mencari data news dengan kategori finance
  static async finance(req, res){
    // Menggunakan fungsi find untuk mendapatkan data sport dari database
    const financeData = await NewsController.find('finance')
    const totalFinance = financeData.length;

    // jika data berhasil ditemukan
    if(totalFinance > 0){
      const data = {
        message: "Get finance resource",
        total: totalFinance,
        data: news,
      }
      res.status(200).json(data);
    }  

    // jika data tidak ditemukan
    else {
      const data = {
        message: "Resource not found",
        data: news,
      };
      res.status(404).json(data);
    }
  } 

  // untuk mencari data news dengan kategori automative
  static async automative(req, res){
    // Menggunakan fungsi find untuk mendapatkan data sport dari database
    const automativeData = await NewsController.find('automative')
    const totalAutomative = automativeData.length;

    // jika data berhasil ditemukan
    if(totalAutomative > 0){
      const data = {
        message: "Get automative resource",
        total: totalAutomative,
        data: news,
      }
      res.status(200).json(data);
    }  

    // jika data tidak ditemukan
    else {
      const data = {
        message: "Resource not found",
        data: news,
      };
      res.status(404).json(data);
    }
  } 



}

// membuat object NewsController
const object = new NewsController();

// export object NewsController
module.exports = new NewsController;
