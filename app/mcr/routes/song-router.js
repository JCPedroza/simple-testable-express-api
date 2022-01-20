const Router = require('express')

const songCtrl = require('../controllers/song-controller')

const songRouter = new Router()

songRouter
  .route('')
  .get(songCtrl.getMany)
  .post(songCtrl.postOne)

songRouter
  .route('/:songId')
  .get(songCtrl.getOne)
  .put(songCtrl.putOne)
  .patch(songCtrl.patchOne)
  .delete(songCtrl.deleteOne)

module.exports = songRouter