// import Model News

// buat class NewsController
class NewsController {
  // buat fungsi

  // menambahkan keyword async memberitahu proses asynchronous
  // funsi untuk mendapatkan semua berita
  async index(req, res) {
    
    if(news){
      // memanggil method static all dengan async await
      const news = await News.all();
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


  static async index(req, res){
    const news = await News.all();

    // data array lebih dari 0
    if(N=news.length > 0){
      const data = {
        message: "Get all resource",
        data: news,
      }
      res.status(200).json(data);
    }  
    // jika data tidak ditemukan
    else {
      const data = {
        message: "Student is empty",
      };
      res.status(404).json(data);
    }

  }





}

// membuat object NewsController
const object = new NewsController();

// export object NewsController
module.exports = object;
