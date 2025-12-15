"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlineClose } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import Image from "next/image";

type LoginDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialogue__overlay" />

        <Dialog.Content className="dialogue__content">
          <Dialog.Title className="dialogue__title">
            Log in to Summarist
          </Dialog.Title>

          <div className="auth__wrapper">

          <button className="btn btn__guest">
            <FaUser className="btn__guest--icon" />
            <p className="btn__para">Login as a Guest</p>
          </button>

          <div className="auth__separator">
            <span className="auth__separator--text">or</span>
          </div>

          <button className="btn btn__google">
            <figure className="btn__google--figure">
              <Image
                src="/images/google.png"
                alt="logo"
                width={40} // required
                height={40} // required
              />
            </figure>
            <p className="btn__para">Login with Google</p>
          </button>

          <div className="auth__separator">
            <span className="auth__separator--text">or</span>
          </div>

          <form className="dialogue__form">
            <input className="dialogue__input" placeholder="Email" />
            <input
              className="dialogue__input"
              type="password"
              placeholder="Password"
            />

            <button type="submit" className="btn btn__green">
              Login
            </button>
          </form>
          </div>
          <div className="auth__forgot--password">Forgot your password?</div>



          <Dialog.Close asChild>
            <button className="dialogue__cancel">
              <AiOutlineClose />
            </button>
          </Dialog.Close>
          <button className="auth__switch--btn">Don't have an account?</button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
