'use strict'

require('babel-core/register')
require('babel-polyfill')

const assert = require('assert')

const reducer = require('../src/reducers').default
const { audioPlay, audioPlaying, audioPause, audioPaused, audioEnded,
        audioRegister, audioUnregister, audioSrc, audioCommand } = require('../src/actions')

describe('reducers', () => {
  describe('AUDIO_REGISTER actions', () => {
    it('registers a new id with the state', () => {
      const result = reducer(undefined, audioRegister('id'))
      assert.strictEqual(result.id.command, 'none')
      assert.strictEqual(result.id.state, 'none')
      assert.strictEqual(result.id.src, '')
    })
  })

  describe('AUDIO_UNREGISTER actions', () => {
    it('unregisters an id with the state', () => {
      const result = reducer({id: 'hello'}, audioUnregister('id'))
      assert.strictEqual(typeof result.id, 'undefined')
    })
  })

  describe('AUDIO_PLAY actions', () => {
    it('changes the command of the Map with the corresponding id to "play"', () => {
      const result = reducer({id: {command: 'none', state: 'none', src: ''}}, audioPlay('id'))
      assert.strictEqual(result.id.command, 'play')
    })
  })

  describe('AUDIO_PLAYING actions', () => {
    it('changes the state of the Map with the corresponding id to "playing"', () => {
      const result = reducer({id: {command: 'none', state: 'none', src: ''}}, audioPlaying('id'))
      assert.strictEqual(result.id.state, 'playing')
    })
  })

  describe('AUDIO_PAUSE actions', () => {
    it('changes the command of the Map with the corresponding id to "pause"', () => {
      const result = reducer({id: {command: 'none', state: 'none', src: ''}}, audioPause('id'))
      assert.strictEqual(result.id.command, 'pause')
    })
  })

  describe('AUDIO_PAUSED actions', () => {
    it('changes the state of the Map with the corresponding id to "paused"', () => {
      const result = reducer({id: {command: 'none', state: 'none', src: ''}}, audioPaused('id'))
      assert.strictEqual(result.id.state, 'paused')
    })
  })

  describe('AUDIO_ENDED actions', () => {
    it('changes the state of the Map with the corresponding id to "ended"', () => {
      const result = reducer({id: {command: 'none', state: 'none', src: ''}}, audioEnded('id'))
      assert.strictEqual(result.id.state, 'ended')
    })
  })

  describe('AUDIO_SRC actions', () => {
    it('changes the state of the Map with the corresponding src', () => {
      const result = reducer({id: {command: 'none', state: 'none', src: ''}}, audioSrc('id', 'src'))
      assert.strictEqual(result.id.src, 'src')
    })
  })

  describe('AUDIO_COMMAND actions', () => {
    it('changes the state of the Map to set command to "none"', () => {
      const result = reducer({id: {command: 'play', state: 'playing', src: 'src'}}, audioCommand('id'))
      assert.strictEqual(result.id.command, 'none')
      assert.strictEqual(result.id.state, 'playing')
      assert.strictEqual(result.id.src, 'src')
    })
  })
})
