import { useIsomorphicLayoutEffect } from 'react-use'
import { useEvent } from './hooks'
import defaultEmitter from './emitter'
import { canUseDom } from './utils'

const createEvent = (name, options = {}) => {
  const emitter = options.emitter ?? defaultEmitter

  const useListener = handler => {
    const eventHandler = useEvent(handler)

    useIsomorphicLayoutEffect(() => {
      emitter.addListener(name, eventHandler)

      return () => {
        emitter.removeListener(name, eventHandler)
      }
    }, [eventHandler])
  }

  const dispatch = payload => {
    if (!canUseDom) {
      console.warn(
        `Could not emit "${name}" event. Events cannot be emitted from the server.`
      )
      return
    }

    emitter.emit(name, payload)
  }

  return [dispatch, useListener]
}

export default createEvent