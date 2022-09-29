import EventEmitter from 'eventemitter3'

const emitter = new EventEmitter()

emitter.emit = function (...args) {
  const eventName = String(args[0])
  const eventId = args[0].uuid

  eventId && duplicateEventDetection(eventName, eventId)

  return this.constructor.prototype.emit.call(this, ...args)
}

const emittedEvents = new Map()


const duplicateEventDetection = (name, eventId) => {
  if (emittedEvents.has(name)) {
    if (emittedEvents.get(name) !== eventId) {
      console.warn(
        `Another event named "${name}" already exists. Duplicate events share the same listener. This can lead to unexpected issues if their payload differs. Make sure to call the \`createEvent\` function only once per event and reuse the resulting functions throughout your application.`
      )
    }
  }

  emittedEvents.set(name, eventId)
}

export default emitter
