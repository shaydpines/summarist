"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { useModal } from "@/app/context/ModalContext";

type ReadListenProps = {
    id: string;
};

const ReadListen = ({id}: ReadListenProps) => {
  const router = useRouter();
  const { user } = useAuth();
  const { openLogin } = useModal();
  const toPlayer = () => {
    router.push(`/player/${id}`)
  }


  return (
    <div className="book__read--btn-wrapper flex gap-4 m-6">
      <button
        type="button"
        onClick={user? toPlayer : openLogin }
        className="book__read--btn flex items-center justify-center w-36 h-12 bg-[#032b41] text-white text-[16px] rounded-sm cursor-pointer gap-2 transition-opacity duration-200 hover:opacity-90"
      >
        <span className="book__read--text">Read</span>
      </button>

      <button
        type="button"
        onClick={user? toPlayer : openLogin }
        className="book__read--btn flex items-center justify-center w-36 h-12 bg-[#032b41] text-white text-[16px] rounded-sm cursor-pointer gap-2 transition-opacity duration-200 hover:opacity-90"
      >
        <span className="book__read--text">Listen</span>
      </button>
    </div>
  );
};

export default ReadListen;
