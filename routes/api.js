// import NewsController
const NewsController = require("../controllers/NewsController");

// import express
const express = require("express");
const app = express();
const port = 3000;

// membuat object router
const router = express.Router();


/**
 * Membuat routing
 */

router.get("/", (req, res) => {
  res.send("Hello News API Express");
});

// Membuat routing news

// Mendapatkan semua news 
router.get("/news", NewsController.index);

// Menambahkan data berita 
router.post("/news", NewsController.store);

// Mengupdate data berita  
router.put("/news/:id", NewsController.update);

// Menghapus data berita 
router.delete("/news/:id", NewsController.destroy);

// Mendapatkan deatail data berita 
router.get("/news/:id", NewsController.show);

// Mencari data berita dari judulnya
router.get("/news/search/:title", NewsController.search);

// Mendapatkan data berita dengan kategori sport
router.get("/news/category/sport", NewsController.sport);

// Mendapatkan data berita dengan kategori finance
router.get("/news/category/finance", NewsController.finance);

// Mendapatkan data berita dengan kategori automative
router.get("/news/category/automative", NewsController.automative);


// export router
module.exports = router;
 