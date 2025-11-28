"use client"

import { useEffect, useRef } from "react"

export default function SpotlightBg() {
    const rootRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const el = rootRef.current
        if (!el) return

        // initialize CSS vars on the element and document root (robust for CSS lookup)
        const setVar = (name: string, value: string) => {
            el.style.setProperty(name, value)
            try {
                document.documentElement.style.setProperty(name, value)
            } catch (err) {
                // ignore
            }
        }

        setVar("--spot-x", "50%")
        setVar("--spot-y", "50%")
        setVar("--spot-opacity", "0")

        // disable on coarse pointers (touch devices)
        const isCoarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches
        if (isCoarse) return

        let raf = 0
        function onMove(e: MouseEvent) {
            if (raf) cancelAnimationFrame(raf)
            raf = requestAnimationFrame(() => {
                const x = e.clientX + "px"
                const y = e.clientY + "px"
                setVar("--spot-x", x)
                setVar("--spot-y", y)
                setVar("--spot-opacity", `1`)
            })
        }

        function onLeave() {
            if (raf) cancelAnimationFrame(raf)
            setVar("--spot-opacity", `0`)
        }

        window.addEventListener("mousemove", onMove)
        window.addEventListener("mouseleave", onLeave)

        return () => {
            window.removeEventListener("mousemove", onMove)
            window.removeEventListener("mouseleave", onLeave)
            if (raf) cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <div ref={rootRef} className="fixed inset-0 pointer-events-none z-0">
            <div className="hero-bg-lines absolute inset-0" />
            <div className="hero-spotlight absolute inset-0" />
        </div>
    )
}
