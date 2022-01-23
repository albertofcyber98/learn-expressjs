const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('<a href="/kategori" style="text-decoration:none;">Menuju Halaman Kategori</a><br><a href="/profil" style="text-decoration:none;">Menuju Halaman Profil</a>');
});
router.get('/kategori', (req, res)=>{
    res.send('<a href="/" style="text-decoration:none;">Menuju Halaman Index</a><br><a href="/profil" style="text-decoration:none;">Menuju Halaman Profil</a>');
});
router.get('/profil', (req, res)=>{
    res.send('<a href="/" style="text-decoration:none;">Menuju Halaman Index</a><br><a href="/kategori" style="text-decoration:none;">Menuju Halaman Kategori</a>');
});

module.exports = router;