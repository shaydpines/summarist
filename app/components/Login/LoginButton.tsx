'use client'
import { useModal } from "@/app/context/ModalContext"

export default function LoginButton() {
  const { openLogin } = useModal()

  return (
    <button onClick={openLogin} className="btn btn__green home__cta--btn">
      Login
    </button>
  )
}
