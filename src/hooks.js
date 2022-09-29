import { useCallback, useRef } from 'react'
import { forIn } from 'lodash'
import { useIsomorphicLayoutEffect } from 'react-use'

import defaultEmitter from './emitter'

export const useEventListeners = (handlers, emitter = defaultEmitter) => {
  useIsomorphicLayoutEffect(() => {
    forIn(handlers, (eventHandler, eventName) => {
      emitter.addListener(eventName, eventHandler)
    })

    return () => {
      forIn(handlers, (eventHandler, eventName) => {
        emitter.removeListener(eventName, eventHandler)
      })
    }
  }, [handlers])
}

export const useEventListener = (
  eventName,
  eventHandler,
  emitter = defaultEmitter
) => {
  useIsomorphicLayoutEffect(() => {
    emitter.addListener(eventName, eventHandler)

    return () => {
      emitter.removeListener(eventName, eventHandler)
    }
  }, [eventHandler])
}

export const useEvent = handler => {
  const handlerRef = useRef(() => {
    throw new Error('Cannot call an event handler during the first render.')
  })

  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler
  })

  return useCallback((...args) => handlerRef.current?.apply(null, args), [])
}
