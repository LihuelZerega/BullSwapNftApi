const { BullsNftModel, sequelize } = require('../db');

const nftController = {
  getAllNFTs: async (req, res) => {
    try {
      const nfts = await BullsNftModel.findAll();
      res.json(nfts);
    } catch (error) {
      console.error('Error al obtener los NFTs:', error);
      res.status(500).json({ message: 'Error al obtener los NFTs' });
    }
  },

  getNFTById: async (req, res) => {
    const { id } = req.params;
    try {
      const nft = await BullsNftModel.findByPk(id);
      if (!nft) {
        return res.status(404).json({ message: 'NFT no encontrado' });
      }
      res.json(nft);
    } catch (error) {
      console.error('Error al obtener el NFT:', error);
      res.status(500).json({ message: 'Error al obtener el NFT' });
    }
  },

  createNFT: async (req, res) => {
    const nftData = req.body;
    try {
      const newNFT = await BullsNftModel.create(nftData);
      res.status(201).json(newNFT);
    } catch (error) {
      console.error('Error al crear el NFT:', error);
      res.status(500).json({ message: 'Error al crear el NFT' });
    }
  },

  updateNFT: async (req, res) => {
    const { id } = req.params;
    const nftData = req.body;
    try {
      const nftToUpdate = await BullsNftModel.findByPk(id);
      if (!nftToUpdate) {
        return res.status(404).json({ message: 'NFT no encontrado' });
      }
      await nftToUpdate.update(nftData);
      res.json(nftToUpdate);
    } catch (error) {
      console.error('Error al actualizar el NFT:', error);
      res.status(500).json({ message: 'Error al actualizar el NFT' });
    }
  },

  deleteNFT: async (req, res) => {
    const { id } = req.params;
    try {
      const nftToDelete = await BullsNftModel.findByPk(id);
      if (!nftToDelete) {
        return res.status(404).json({ message: 'NFT no encontrado' });
      }
      await nftToDelete.destroy();
      res.json({ message: 'NFT eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar el NFT:', error);
      res.status(500).json({ message: 'Error al eliminar el NFT' });
    }
  }
};

module.exports = nftController;
