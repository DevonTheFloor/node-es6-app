import express from 'express';
import * as ctrl from '../affichage/pages-site.js';
const siteMap = express.Router();

siteMap
  .get('/', ctrl.indexPage)
  .get('/second', ctrl.secondPage);

export default siteMap;