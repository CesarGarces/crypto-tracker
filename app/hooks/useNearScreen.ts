'use client'
import { useEffect, useState, useRef } from "react"
const useNearScreen = ({ distance = "100px", externalRef, once = true }: { distance: string, externalRef: any, once: boolean }) => {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver

    const element = externalRef ? externalRef.current : fromRef.current
    const onChange = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })

      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect()

  })
  return {isNearScreen, fromRef}
}

export default useNearScreen