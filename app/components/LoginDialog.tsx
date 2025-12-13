'use client'

import * as Dialog from '@radix-ui/react-dialog'

type LoginDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialogue__overlay" />

        <Dialog.Content className="dialogue__content">
          <Dialog.Title className="dialogue__title">
            Log in to Summarist
          </Dialog.Title>

          <form className="dialogue__form">
            <input
              className="dialogue__input"
              placeholder="Email"
            />
            <input
              className="dialogue__input"
              type="password"
              placeholder="Password"
            />

            <button type="submit" className="btn">
              Login
            </button>
          </form>

          <Dialog.Close asChild>
            <button className="dialogue__cancel">
              Cancel
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
