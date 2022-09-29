import { createContext, useContext } from 'react'
import defaultEmitter from './emitter'
import { useEventListener, useEventListeners } from './hooks'

const EventEmitterContext = createContext()

export const EventEmitterProvider = ({ children, emitter: inEmitter }) => {
  const emitter = inEmitter ?? defaultEmitter

  const value = {
    emitter,
    emit: (...args) => emitter.emit(...args),
    useListener: (eventName, eventHandler) => useEventListener(eventName, eventHandler, emitter),
    useListeners: eventHandlers => useEventListeners(eventHandlers, emitter)
  }

  return (
    <EventEmitterContext.Provider value={value}>
      {children}
    </EventEmitterContext.Provider>
  )
}

export const useEventEmitter = () => useContext(EventEmitterContext)

export default EventEmitterContext