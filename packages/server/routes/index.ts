import { Router } from 'express';
let router = Router();

/* GET home page. */
router.get('/', (_req, res) => {
  res.send('express up');
})

export default router;
