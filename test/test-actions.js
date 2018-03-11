'use strict'

require('babel-core/register')
require('babel-polyfill')

const assert = require('assert')

const { audioPlay, audioPlaying, audioPause, audioPaused, audioEnded,
        audioRegister, audioUnregister, audioSrc, audioCommand } = require('../src/actions')

describe('actions', () => {
  describe('audioPlay', () => {
    it('returns an object with id and type', () => {
      const result = audioPlay('id')
      assert.equal(result.type, '@@redux-audio/PLAY')
      assert.equal(result.id, 'id')
    })
  })

  describe('audioPlaying', () => {
    it('returns an object with id and type', () => {
      const result = audioPlaying('id')
      assert.equal(result.type, '@@redux-audio/PLAYING')
      assert.equal(result.id, 'id')
    })
  })

  describe('audioPause', () => {
    it('returns an object with id and type', () => {
      const result = audioPause('id')
      assert.equal(result.type, '@@redux-audio/PAUSE')
      assert.equal(result.id, 'id')
    })
  })

  describe('audioPaused', () => {
    it('returns an object with id and type', () => {
      const result = audioPaused('id')
      assert.equal(result.type, '@@redux-audio/PAUSED')
      assert.equal(result.id, 'id')
    })
  })

  describe('audioEnded', () => {
    it('returns an object with id and type', () => {
      const result = audioEnded('id')
      assert.equal(result.type, '@@redux-audio/ENDED')
      assert.equal(result.id, 'id')
    })
  })

  describe('audioRegister', () => {
    it('returns an object with id and type', () => {
      const result = audioRegister('id')
      assert.equal(result.type, '@@redux-audio/REGISTER')
      assert.equal(result.id, 'id')
    })
  })

  describe('audioUnregister', () => {
    it('returns an object with id and type', () => {
      const result = audioUnregister('id')
      assert.equal(result.type, '@@redux-audio/UNREGISTER')
      assert.equal(result.id, 'id')
    })
  })

  describe('audioSrc', () => {
    it('returns an object with id, type, and src', () => {
      const result = audioSrc('id', 'src')
      assert.equal(result.type, '@@redux-audio/SRC')
      assert.equal(result.id, 'id')
      assert.equal(result.src, 'src')
    })
  })

  describe('audioCommand', () => {
    it('returns an object with id and type', () => {
      const result = audioCommand('id')
      assert.equal(result.type, '@@redux-audio/COMMAND')
      assert.equal(result.id, 'id')
    })
  })
})
