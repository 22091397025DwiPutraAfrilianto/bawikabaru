const express = require('express');
const { upload, createPebelajaran, getPembelajaranByCategoryId, deletePebelajaran, getPebelajaranById, getPebelajarans, updatePebelajaran } = require('../../controllers/user/pembelajaranController');
const router = express.Router();
const authenticateJWT = require('../../middlewares/authMiddleware');


router.post('/pembelajarans', authenticateJWT, upload.none(), createPebelajaran); // Upload video
router.get('/pembelajarans', getPebelajarans); // Get all videos
router.get('/pembelajarans/category/:id', upload.none(), getPembelajaranByCategoryId); // Get all videos
router.get('/pembelajarans/:id', getPebelajaranById); // Get all videos
router.put('/pembelajarans/:id', authenticateJWT, upload.none(), updatePebelajaran); // Update video
router.delete('/pembelajarans/:id', authenticateJWT, upload.none(), deletePebelajaran); // Delete video

module.exports = router;
