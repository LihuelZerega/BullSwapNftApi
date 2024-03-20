const { BullsUserModel, sequelize } = require('../db');

exports.register = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const existingUser = await BullsUserModel.findOne({ where: { email } });
  
      if (existingUser) {
        return res.status(400).json({ message: 'El usuario ya existe' });
      }
  
      const newUser = await BullsUserModel.create({ username, email, password });
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al registrar usuario' });
    }
  };

  exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await BullsUserModel.findOne({ where: { email } });
  
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }
  
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al iniciar sesión' });
    }
  };
  
  exports.getUserDetails = async (req, res, next) => {
    try {
      const userId = req.userId;
      const user = await BullsUserModel.findByPk(userId, { attributes: { exclude: ['password'] } });
  
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener detalles de usuario' });
    }
  };
  
  exports.updateUser = async (req, res, next) => {
    try {
      const userId = req.userId;
      const { username, email } = req.body;
  
      const user = await BullsUserModel.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      user.username = username || user.username;
      user.email = email || user.email;
  
      await user.save();
  
      res.status(200).json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar usuario' });
    }
  };
  
  exports.deleteUser = async (req, res, next) => {
    try {
      const userId = req.userId;
  
      const user = await BullsUserModel.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      await user.destroy();
  
      res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar usuario' });
    }
  };

exports.claimEthereum = async (req, res) => {
    try {
      const userId = req.userId;
      const user = await BullsUserModel.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      user.ethereumBalance += 1;
  
      await user.save();
  
      return res.status(200).json({ message: '¡Has reclamado 1 Ethereum gratis!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al reclamar Ethereum' });
    }
  };
