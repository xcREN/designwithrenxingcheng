"use client"

import { useEffect, useState } from "react"
import { AboutModal } from "./about-modal"

type Tab = "story" | "services" | "chinese"

export default function AboutModalController() {
    const [isOpen, setIsOpen] = useState(false)
    const [tab, setTab] = useState<Tab | undefined>(undefined)

    useEffect(() => {
        function onOpen(e: Event) {
            // Expect a CustomEvent with detail: { tab?: 'services' }
            const ev = e as CustomEvent<{ tab?: Tab }>
            setTab(ev?.detail?.tab)
            setIsOpen(true)
        }

        window.addEventListener("open-about-modal", onOpen as EventListener)
        return () => window.removeEventListener("open-about-modal", onOpen as EventListener)
    }, [])

    return <AboutModal isOpen={isOpen} onClose={() => setIsOpen(false)} initialTab={tab} />
}
