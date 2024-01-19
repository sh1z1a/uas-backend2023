// import NewsController

// import express
const express = require("express");

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
router.deletet("/news/:id", NewsController.destroy);

// Mendapatkan deatail data berita 
router.get("/news/:id", NewsController.show);

// Mencari data berita dari judulnya
router.get("/news/search/:title", NewsController.search);

// Mendapatkan data berita dengan kategori sport
router.get("/news/category/sport", NewsController.sport);

// Mendapatkan data berita dengan kategori finance
router.get("/news/category/finance", NewsController.finande);

// Mendapatkan data berita dengan kategori automative
router.get("/news/category/automative", NewsController.automative);


// export router
module.exports = router;
