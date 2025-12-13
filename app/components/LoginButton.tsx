'use client'
import { useModal } from "../context/ModalContext"

export default function LoginButton() {
  const { openLogin } = useModal()

  return (
    <button onClick={openLogin} className="btn home__cta--btn">
      Login
    </button>
  )
}
