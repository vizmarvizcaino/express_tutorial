const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        status: 'API Works!'
    });
});

router.post('/suma', (req, res) => {
    const { numero1, numero2 } = request.body;
    let resultado = numero1 + numero2;
    res.send({ resultado: resultado });
  });

  router.post('/resta', (req, res) => {
    const { numero1, numero2 } = request.body;
    let resultado = numero1 - numero2;
    res.send({ resultado: resultado });
  });

  router.post('/multiplicacion', (req, res) => {
    const { numero1, numero2 } = request.body;
    let resultado = numero1 * numero2;
    res.send({ resultado: resultado });
  });

  router.post('/division', (req, res) => {
    const { numero1, numero2 } = request.body;
    let resultado = numero1 / numero2;
    res.send({ resultado: resultado });
  });

module.exports = router;