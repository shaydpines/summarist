'use client'
import { useModal } from "../context/ModalContext"

export default function LoginLink() {
  const { openLogin } = useModal()

  return (
    <div onClick={openLogin}>
      Login
    </div>
  )
}