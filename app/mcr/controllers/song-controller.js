const Song = require('../models/song-model')

const sanitizeBody = require('./sanitize-body')
const { editOptions, bodyWhiteList } = require('./controller-config')

const buildEditParams = (target, req) =>
  [target, sanitizeBody(req), editOptions]

const getMany = (req, res, nxt) =>
  Song
    .find()
    .then(songs => res.json(songs))
    .catch(err => nxt(err))

const getOne = (req, res, nxt) =>
  Song
    .findById(req.params.songId)
    .then(song => res.json(song))
    .catch(err => nxt(err))

const postOne = (req, res, nxt) =>
  Song
    .create(sanitizeBody(req.body, bodyWhiteList), editOptions)
    .then(song => res.json(song))
    .catch(err => nxt(err))

const putOne = (req, res, nxt) =>
  Song
    .findOneAndReplace(...buildEditParams({ _id: req.params.songId }, req))
    .then(song => res.json(song))
    .catch(err => nxt(err))

const patchOne = (req, res, nxt) =>
  Song
    .findByIdAndUpdate(...buildEditParams(req.params.songId), req)
    .then(song => res.json(song))
    .catch(err => nxt(err))

const deleteOne = (req, res, nxt) => {
  Song
    .findByIdAndDelete(req.params.songID)
    .then(song => res.json(song))
    .catch(err => nxt(err))
}

module.exports = {
  getMany,
  getOne,
  postOne,
  putOne,
  patchOne,
  deleteOne
}
