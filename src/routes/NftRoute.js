const express = require('express');
const router = express.Router();
const nftController = require('../controllers/NftController');

router.get('/', nftController.getAllNFTs);
router.get('/:id', nftController.getNFTById);
router.post('/', nftController.createNFT);
router.put('/:id', nftController.updateNFT);
router.delete('/:id', nftController.deleteNFT);

module.exports = router;
