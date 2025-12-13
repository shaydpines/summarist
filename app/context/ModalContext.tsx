'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { LoginDialog } from '../components/LoginDialog'

type ModalContextType = {
  openLogin: () => void
  closeLogin: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        openLogin: () => setLoginOpen(true),
        closeLogin: () => setLoginOpen(false),
      }}
    >
      {children}
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </ModalContext.Provider>
  )
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used inside ModalProvider')
  return ctx
}
