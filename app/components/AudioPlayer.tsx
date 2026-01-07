"use client";
import React from "react";
import type { BookType } from "../types/book";
import Image from "next/image";
import { RiForward10Fill, RiReplay10Fill } from "react-icons/ri";
import { FaPause, FaPlay } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

type AudioPlayerProps = {
  book?: BookType;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ book }) => {
  if (!book) {
    return (
      <div className="container">
        <p>Book not found</p>
      </div>
    );
  }

  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying((prev) => !prev);
  };

  const skip = (amount: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime += amount;
  };

  const formatTime = (time: number) => {
    if (!time) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="audio__wrapper h-180px md:h-80px w-full py-4 md:py-0 px-6 md:px-10 flex flex-col md:flex-row mt-auto items-center justify-between bg-[#042330] fixed bottom-0 left-0 z-50">
      <audio
        ref={audioRef}
        src={book.audioLink}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
      />
      <div className="audio__track--wrapper w-full md:w-[calc(100%/3)] justify-center flex gap-3">
        <figure className="audio__track--image-mask max-w-20 md:max-w-12 flex">
          <figure className="book__image--wrapper h-12 w-12 min-w-12">
            <Image
              src={book.imageLink}
              alt={book.title}
              width={300}
              height={300}
              className="book__image block"
              priority
            />
          </figure>
        </figure>
        <div className="audio__track--details-wrapper text-white text-[14px] flex flex-col gap-1 justify-center ">
          <div className="audio__track--title ">{book.title}</div>
          <div className="audio__track--author text-[]">{book.author}</div>
        </div>
      </div>
      <div className="audio__controls--wrapper w-full md:w-[calc(100%/3)] flex justify-center">
        <div className="audio__controls gap-6 flex items-center justify-center">
          <button
            onClick={() => skip(-10)}
            className="audio__controls--btn flex items-center justify-center rounded-[50%] cursor-pointer"
          >
            <RiReplay10Fill className="audio__controls--icon w-7 h-7 text-white transition-all duration-200" />
          </button>
          <button
            onClick={togglePlay}
            className="audio__controls--btn flex items-center justify-center rounded-[50%] cursor-pointer audio__controls--btn-play bg-white w-10 h-10"
          >
            {isPlaying ? (
              <FaPause className="audio__controls--icon w-5 h-5 text-[#042330] transition-all duration-200" />
            ) : (
              <FaPlay className="audio__controls--icon w-5 h-5 text-[#042330] transition-all translate-x-0.5 duration-200" />
            )}
          </button>
          <button
            onClick={() => skip(10)}
            className="audio__controls--btn flex items-center justify-center rounded-[50%] cursor-pointer"
          >
            <RiForward10Fill className="audio__controls--icon w-7 h-7 text-white transition-all duration-200" />
          </button>
        </div>
      </div>
      <div className="audio__progress--wrapper w-full md:w-[calc(100%/3)] flex justify-center items-center gap-4">
        <div className="audio__time text-white text-[14px] ">
          {formatTime(currentTime)}
        </div>
        <input
          type="range"
          value={currentTime}
          max={duration}
          onChange={(e) => {
            const time = Number(e.target.value);
            audioRef.current!.currentTime = time;
          }}
          style={{ "--progress": `${progress}%` } as React.CSSProperties}
        />
        <div className="audio__time text-white text-[14px]">
          {formatTime(duration)}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
