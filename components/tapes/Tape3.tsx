'use client';
import clsx from 'clsx';

type Tape1Props = {
  className?: string;
  title?: string;
  subtitle?: string;
  animated?: boolean;
};

export default function Tape3({ className, title, subtitle, animated }: Tape) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0'
      y='0'
      version='1.1'
      viewBox='0 0 219.5 125.4'
      xmlSpace='preserve'
      className={className}
    >
      <path
        fill='#EB7DAA'
        fillRule='evenodd'
        d='M213.2 1.6H161.2c-2.8 0-5.6 0-8.4-.1h-2.9c-4.2 0-8.4-.1-12.7-.1h-2.3c-10.2-.1-20.7-.2-31.1-.2H99c-4 0-8-.1-11.9-.1h-4.7c-2.3 0-4.6 0-6.9-.1H19.6c-2.9 0-5.4 0-7.4-.1H9.9C8 0 6.8 0 6.6 0h-.2C5.2 0 4.1.3 3.1.9 1.2 2.1-.1 4.3 0 6.8L3.3 89l1 25 .2 5.2v.5c0 .2.1.5.2.8v.2c0 .1.1.3.1.4.9 2.5 3.3 4.3 6.1 4.3h196.2c1.1 0 2.2-.3 3.1-.8h.1c1.8-1 3.1-3 3.3-5.2l.3-5.3 1.3-24.4 4.3-81.2c.2-3.7-2.6-6.8-6.3-6.9zM57.3 121.1c-1.6-.2-2.8-1.6-2.8-3.2s1.2-3 2.8-3.2c1.6.2 2.8 1.6 2.8 3.2s-1.2 2.9-2.8 3.2zm16.1-6.3c-.5.5-1.1.7-1.8.7h-1.2c-1.4 0-2.5-1.1-2.5-2.5 0-.7.3-1.3.7-1.8.4-.4 1.1-.7 1.8-.7h1.2c1.4 0 2.5 1.1 2.5 2.5 0 .8-.3 1.4-.7 1.8zm76.1.8h-1.2c-.7 0-1.3-.3-1.8-.7-.5-.4-.7-1.1-.7-1.8 0-1.4 1.1-2.5 2.5-2.5h1.2c.7 0 1.3.3 1.8.7.5.5.7 1.1.7 1.8.1 1.4-1.1 2.5-2.5 2.5zm13.1 5.5c-1.6-.2-2.8-1.6-2.8-3.2s1.2-3 2.8-3.2c1.6.2 2.8 1.6 2.8 3.2s-1.2 2.9-2.8 3.2zm-12.9-43.4H68.9c-4.6 0-8.8-1.9-11.8-4.9-3-3-4.9-7.2-4.9-11.8 0-9.2 7.5-16.7 16.7-16.7h80.8c4.6 0 8.8 1.9 11.8 4.9 3 3 4.9 7.2 4.9 11.8 0 9.3-7.5 16.7-16.7 16.7z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#F3A1C5'
        fillRule='evenodd'
        d='M204.6 11.5L14.2 12.9c-1.9 0-3.4 1.5-3.4 3.3l2.6 74.3c.1 1.7 1.5 3.1 3.3 3.1h183.8c1.8 0 3.2-1.3 3.3-3l4-75.7c.2-1.8-1.3-3.4-3.2-3.4zm-54.9 66.2H68.9c-4.6 0-8.8-1.9-11.8-4.9-3-3-4.9-7.2-4.9-11.8 0-9.2 7.5-16.7 16.7-16.7h80.8c4.6 0 8.8 1.9 11.8 4.9 3 3 4.9 7.2 4.9 11.8 0 9.3-7.5 16.7-16.7 16.7z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#AF4B78'
        fillRule='evenodd'
        d='M213.9 114.1L215 113.2 216.5 92.4 215.2 89.5z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#AF4B78'
        fillRule='evenodd'
        d='M4.4 114.1L3.3 113.2 1.8 92.4 3.4 89z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#AF4B78'
        fillRule='evenodd'
        d='M180.5 125.4L170.7 98.3 50.8 98.3 38.4 125.4 39.3 125.3 51.6 99.6 169.6 100.1 179.7 125.4z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#F5B1BF'
        fillRule='evenodd'
        d='M170.7 98.3L169.6 100.1 51.6 99.6 50.8 98.3z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#9A9AB8'
        fillRule='evenodd'
        d='M112.9 95L112 93.6 84.7 93.6 83.9 95z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#AF4B78'
        fillRule='evenodd'
        d='M166.3 117.9c0 1.8-1.4 3.2-3.2 3.2h-.5c1.6-.2 2.8-1.6 2.8-3.2s-1.2-3-2.8-3.2h.5c1.8-.1 3.2 1.4 3.2 3.2zM153.1 113.1c0 1.4-1.1 2.5-2.5 2.5h-1c1.4 0 2.5-1.1 2.5-2.5 0-.7-.3-1.3-.7-1.8-.5-.4-1.1-.7-1.8-.7h1c.7 0 1.3.3 1.8.7.4.5.7 1.1.7 1.8zM57.3 121.1h-.5c-1.8 0-3.2-1.5-3.2-3.2 0-1.8 1.5-3.2 3.2-3.2h.5c-1.6.2-2.8 1.6-2.8 3.2s1.2 2.9 2.8 3.2zM70.4 115.6h-1c-1.4 0-2.5-1.1-2.5-2.5 0-.7.3-1.3.7-1.8.4-.4 1.1-.7 1.8-.7h1c-.7 0-1.3.3-1.8.7-.4.5-.7 1.1-.7 1.8 0 1.4 1.1 2.5 2.5 2.5z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#F5B1BF'
        fillRule='evenodd'
        d='M161.9 48.7c-3.2-3.2-7.5-5.1-12.4-5.1H68.3c-9.7 0-17.5 7.8-17.5 17.5 0 4.8 2 9.2 5.1 12.4 3.2 3.2 7.5 5.1 12.4 5.1h81.2c9.7 0 17.5-7.8 17.5-17.5 0-4.9-2-9.3-5.1-12.4zm-12.6 29H68.5c-4.6 0-8.8-1.9-11.8-4.9-3-3-4.9-7.2-4.9-11.8 0-9.2 7.5-16.7 16.7-16.7h80.8c4.6 0 8.8 1.9 11.8 4.9 3 3 4.9 7.2 4.9 11.8 0 9.3-7.5 16.7-16.7 16.7z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#AF4B78'
        fillRule='evenodd'
        d='M4.6 119.2s0 5.6 6.4 5.7l196.2-.5s4.5.3 6.5-5.1c0 0 .7 5.2-6.5 6.1H11s-5.8.5-6.4-6.2z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#F5B1BF'
        fillRule='evenodd'
        d='M213.2 1.6L3.1.9S4-.1 6.6 0s206.6 1.6 206.6 1.6z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#AF4B78'
        fillRule='evenodd'
        d='M206.1 10.2L12.6 11.5c-1.9 0-3.5 1.6-3.4 3.5l2.6 76.8a3.4 3.4 0 003.4 3.2H202c1.8 0 3.3-1.4 3.4-3.1l4.1-78.2c.1-1.9-1.4-3.5-3.4-3.5zm-2.2 80.4c-.1 1.7-1.6 3-3.3 3H16.7c-1.8 0-3.3-1.4-3.3-3.1l-2.6-74.3c-.1-1.8 1.5-3.3 3.4-3.3l190.4-1.4c1.9 0 3.4 1.6 3.3 3.4l-4 75.7z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#FCE2E8'
        fillRule='evenodd'
        d='M44.6 66.2l.3-8.6c.1-3.2-2.5-5.9-5.7-5.9H26.9c-3.2 0-5.7 2.6-5.7 5.7V66c0 3.2 2.6 5.7 5.7 5.7h12c3.1.1 5.6-2.4 5.7-5.5z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#8D6EAF'
        d='M38.6 68.1l-2.5.4c-.2-.6-.4-1.1-.5-1.7-.2-.6-.3-1.1-.5-1.7l-4.1.2-.5 2.2h-2.6c.2-1.9.3-3.7.5-5.6.2-1.9.3-3.7.5-5.6l2.4-.3c.8-.1 1.6-.1 2.4-.1h3c.2 1.1.4 2.3.5 3.4.2 1.1.4 2.3.5 3.4.1.9.3 1.8.4 2.7.1.9.3 1.8.5 2.7zm-4.1-5.2c0-.1 0-.3-.1-.6 0-.3-.1-.6-.1-.9-.1-.3-.1-.6-.2-.8-.1-.2-.1-.4-.2-.4h-1.8c-.1 0-.2 0-.2.1 0 0 0 .1-.1.2 0 .1-.1.3-.1.5s-.1.4-.1.6c0 .2-.1.4-.1.6 0 .2-.1.4-.1.5 0 .1 0 .2-.1.2h3.2z'
      ></path>
      <path
        fill='#FCE2E8'
        fillRule='evenodd'
        d='M46.6 24.8L48.6 27.9 52.2 28.8 49.8 31.7 50.1 35.3 46.6 34 43.2 35.3 43.5 31.7 41.1 28.8 44.7 27.9z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#FCE2E8'
        fillRule='evenodd'
        d='M171.4 24.8L173.4 27.9 177 28.8 174.6 31.7 174.8 35.3 171.4 34 168 35.3 168.2 31.7 165.9 28.8 169.5 27.9z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#FFF'
        d='M177.2 58h-6v-6h6v6zm-5.7-.3h5.4v-5.4h-5.4v5.4zM177.2 67h-6v-6h6v6zm-5.7-.2h5.4v-5.4h-5.4v5.4z'
      ></path>
      <g fill='#FFF'>
        <path d='M179.5 56.4v-2.8c0-.1.1-.1.2-.1h.1v3h-.1c-.2 0-.2 0-.2-.1zM180.4 56.4v-1.9-.1h.1c.1 0 .2 0 .2.1v.3c.1-.2.3-.3.5-.4.2-.1.4-.1.6-.1.3 0 .5.1.7.3.2.2.3.4.3.7V56.6h-.1c-.1 0-.2 0-.2-.1v-1.1c0-.2-.1-.4-.2-.5-.1-.1-.3-.2-.5-.2s-.4.1-.7.2c-.2.1-.4.3-.5.5v1c0 .1-.1.1-.2.1.1 0 0 0 0-.1 0 .1 0 .1 0 0z'></path>
      </g>
      <g fill='#FFF'>
        <path d='M179.3 64.5c0-.4.1-.8.4-1.1.2-.3.5-.4.9-.4.3 0 .6.2.9.5.2.3.4.7.4 1.1 0 .5-.1.8-.3 1.1-.2.3-.5.4-.9.4-.3 0-.6-.1-.9-.4-.3-.4-.5-.8-.5-1.2zm.4 0c0 .3.1.6.3.9.2.2.4.4.7.4.3 0 .5-.1.6-.4.2-.2.3-.5.3-.9 0-.3-.1-.6-.3-.9-.2-.2-.4-.4-.6-.4-.3 0-.5.1-.7.4-.2.3-.3.6-.3.9zM182.3 65.1v-.4-.8-.1h.1c.1 0 .2 0 .2.1V65c0 .2.1.4.2.5.1.1.3.2.5.2s.4-.1.6-.2c.2-.1.4-.3.5-.5v-1c0-.1.1-.1.2-.1h.1V66h-.1c-.1 0-.2 0-.2-.1v-.4c-.1.2-.3.3-.5.4-.2.1-.4.1-.6.1-.3 0-.5-.1-.7-.3-.2-.1-.3-.3-.3-.6zM185.1 64v-.1h.2v-.5-.1h.1c.1 0 .2 0 .2.1v.5H186.4v.1c0 .1 0 .2-.1.2h-.7v1c0 .3.1.5.4.5.1 0 .2 0 .3-.1.1-.1.1-.2.1-.3v-.1h.2v.1c0 .2-.1.4-.2.5-.1.1-.3.2-.5.2-.5 0-.7-.3-.7-.9v-.9h-.1V64z'></path>
      </g>
      <g fillRule='evenodd' clipRule='evenodd'>
        <circle cx='207.8' cy='117.4' r='2.6' fill='#AF4B78'></circle>
        <path
          fill='#1D1D1D'
          d='M205.9 119.3L209.2 115.1 209.8 115.4 206.6 119.7z'
        ></path>
        <path
          fill='#1D1D1D'
          d='M205.7 115.8L209.8 119.3 210.3 118.6 206.2 115.2z'
        ></path>
      </g>
      <path
        fill='#F3A1C5'
        fillRule='evenodd'
        d='M207.9 114c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4 3.4-1.5 3.4-3.4-1.5-3.4-3.4-3.4zm0 6c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6c1.4 0 2.6 1.2 2.6 2.6s-1.2 2.6-2.6 2.6z'
        clipRule='evenodd'
      ></path>
      <g>
        <g fillRule='evenodd' clipRule='evenodd'>
          <circle cx='213.4' cy='7.6' r='2.6' fill='#AF4B78'></circle>
          <path
            fill='#1D1D1D'
            d='M211.4 9.4L214.7 5.2 215.3 5.5 212.1 9.9z'
          ></path>
          <path
            fill='#1D1D1D'
            d='M211.2 5.9L215.3 9.5 215.8 8.8 211.7 5.4z'
          ></path>
        </g>
        <path
          fill='#F3A1C5'
          fillRule='evenodd'
          d='M213.4 4.2c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4 3.4-1.5 3.4-3.4-1.5-3.4-3.4-3.4zm0 6c-1.4 0-2.6-1.2-2.6-2.6S212 5 213.4 5c1.4 0 2.6 1.2 2.6 2.6s-1.2 2.6-2.6 2.6z'
          clipRule='evenodd'
        ></path>
      </g>
      <g>
        <g fillRule='evenodd' clipRule='evenodd'>
          <circle cx='7.5' cy='7.1' r='2.6' fill='#AF4B78'></circle>
          <path fill='#1D1D1D' d='M5.6 9L8.9 4.7 9.5 5.1 6.3 9.4z'></path>
          <path fill='#1D1D1D' d='M5.4 5.5L9.5 9 10 8.3 5.9 4.9z'></path>
        </g>
        <path
          fill='#F3A1C5'
          fillRule='evenodd'
          d='M7.6 3.7c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4S11 9 11 7.1 9.4 3.7 7.6 3.7zm0 6C6.1 9.7 5 8.5 5 7.1s1.2-2.6 2.6-2.6c1.4 0 2.6 1.2 2.6 2.6S9 9.7 7.6 9.7z'
          clipRule='evenodd'
        ></path>
      </g>
      <g>
        <g fillRule='evenodd' clipRule='evenodd'>
          <circle cx='10.9' cy='117.4' r='2.6' fill='#AF4B78'></circle>
          <path
            fill='#1D1D1D'
            d='M9 119.3L12.3 115.1 12.9 115.4 9.7 119.7z'
          ></path>
          <path
            fill='#1D1D1D'
            d='M8.8 115.8L12.9 119.3 13.4 118.6 9.3 115.2z'
          ></path>
        </g>
        <path
          fill='#F3A1C5'
          fillRule='evenodd'
          d='M10.9 114c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4 3.4-1.5 3.4-3.4-1.5-3.4-3.4-3.4zm0 6c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6c1.4 0 2.6 1.2 2.6 2.6s-1.1 2.6-2.6 2.6z'
          clipRule='evenodd'
        ></path>
      </g>
      <g>
        <g fillRule='evenodd' clipRule='evenodd'>
          <circle cx='107.4' cy='105.1' r='2.6' fill='#AF4B78'></circle>
          <path
            fill='#1D1D1D'
            d='M105.5 107L108.8 102.8 109.4 103.1 106.2 107.4z'
          ></path>
          <path
            fill='#1D1D1D'
            d='M105.3 103.5L109.4 107.1 109.9 106.3 105.8 102.9z'
          ></path>
        </g>
        <path
          fill='#F3A1C5'
          fillRule='evenodd'
          d='M107.5 101.7c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4 3.4-1.5 3.4-3.4-1.6-3.4-3.4-3.4zm0 6c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6c1.4 0 2.6 1.2 2.6 2.6s-1.2 2.6-2.6 2.6z'
          clipRule='evenodd'
        ></path>
      </g>
      <g>
        <path
          fill='#EB7DAA'
          fillRule='evenodd'
          d='M161.1 49.1c-3-3-7.2-4.9-11.8-4.9H68.5c-9.2 0-16.7 7.5-16.7 16.7 0 4.6 1.9 8.8 4.9 11.8 3 3 7.2 4.9 11.8 4.9h80.8c9.2 0 16.7-7.5 16.7-16.7 0-4.6-1.9-8.8-4.9-11.8zM68.7 69.6c-4.9 0-8.9-4-8.9-8.9s4-8.9 8.9-8.9 8.9 4 8.9 8.9c.1 4.9-3.9 8.9-8.9 8.9zm81.6-.1c-4.9 0-8.9-4-8.9-8.9s4-8.9 8.9-8.9 8.9 4 8.9 8.9c.1 4.9-3.9 8.9-8.9 8.9z'
          clipRule='evenodd'
        ></path>
        <g
          fillRule='evenodd'
          clipRule='evenodd'
          className={clsx(animated && 'animate-rotate origin-[69px_61px]')}
        >
          <path
            fill='#AF4B78'
            d='M69.1 47.5c-7.4 0-13.4 6-13.4 13.5 0 7.4 6 13.5 13.4 13.5s13.5-6 13.5-13.5c-.1-7.5-6.1-13.5-13.5-13.5zM76 65.6c-1.3 1.9-3.4 3.3-5.8 3.6V67h-2v2.2c-2.4-.3-4.5-1.6-5.9-3.4l1.8-1-1-1.7-1.7 1c-.4-1-.6-2-.6-3.1 0-1.2.3-2.4.8-3.4l1.5.8 1-1.7-1.4-.8c1.3-1.6 3.2-2.8 5.4-3.1v1.5h2v-1.5c2.2.2 4.2 1.3 5.5 3l-1.4.8 1 1.7 1.5-.9c.5 1.1.8 2.3.8 3.6 0 1-.2 2-.5 2.9l-1.7-1-1 1.7 1.7 1z'
          ></path>
          <path
            fill='#FFF'
            d='M78.7 56.1c-.3-.6-.6-1.2-1-1.7-1.8-2.4-4.5-4-7.6-4.2h-2c-3.1.3-5.9 1.9-7.7 4.3-.4.5-.8 1.1-1 1.7-.7 1.4-1.1 3-1.1 4.8 0 6 4.8 10.8 10.8 10.8 3.8 0 7.2-2 9.1-4.9.4-.6.7-1.1.9-1.8.5-1.3.8-2.7.8-4.1 0-1.8-.4-3.4-1.2-4.9zM76 65.6c-1.3 1.9-3.4 3.3-5.8 3.6V67h-2v2.2c-2.4-.3-4.5-1.6-5.9-3.4l1.8-1-1-1.7-1.7 1c-.4-1-.6-2-.6-3.1 0-1.2.3-2.4.8-3.4l1.5.8 1-1.7-1.4-.8c1.3-1.6 3.2-2.8 5.4-3.1v1.5h2v-1.5c2.2.2 4.2 1.3 5.5 3l-1.4.8 1 1.7 1.5-.9c.5 1.1.8 2.3.8 3.6 0 1-.2 2-.5 2.9l-1.7-1-1 1.7 1.7 1z'
          ></path>
          <g fill='#BFBFD2'>
            <path d='M69.2 49.2c-6.5 0-11.8 5.3-11.8 11.8 0 6.5 5.3 11.8 11.8 11.8C75.7 72.8 81 67.5 81 61c0-6.6-5.3-11.8-11.8-11.8zM76 65.6c-1.3 1.9-3.4 3.3-5.8 3.6-.4.1-.7.1-1.1.1-.3 0-.6 0-.9-.1-2.4-.3-4.5-1.6-5.9-3.4-.4-.5-.7-1.1-1-1.7-.4-1-.6-2-.6-3.1 0-1.2.3-2.4.8-3.4.3-.6.6-1.2 1-1.7 1.3-1.6 3.2-2.8 5.4-3.1.4-.1.7-.1 1.1-.1h.9c2.2.2 4.2 1.3 5.5 3 .4.5.8 1.1 1.1 1.7.5 1.1.8 2.3.8 3.6 0 1-.2 2-.5 2.9-.1.6-.4 1.2-.8 1.7z'></path>
            <path d='M68.1 49.6H70.1V54.2H68.1z'></path>
            <path d='M79.1 55.9L78.7 56.1 76.6 57.3 75.2 58.2 74.2 56.5 75.6 55.7 77.7 54.4 78.1 54.2z'></path>
            <path d='M79.2 65.2L78.2 66.9 78.2 66.8 76 65.6 74.3 64.6 75.3 62.9 76.9 63.8 79.1 65.1z'></path>
            <path d='M68.3 67H70.3V71.6H68.3z'></path>
            <path d='M64.2 64.8L62.4 65.8 60.2 67 59.2 65.3 61.5 64 63.2 63z'></path>
            <path d='M64.1 56.6L63.1 58.3 61.6 57.5 59.3 56.2 59.1 56.1 60.1 54.3 60.4 54.5 62.7 55.8z'></path>
          </g>
        </g>
        <g
          fillRule='evenodd'
          clipRule='evenodd'
          className={clsx(animated && 'animate-rotate origin-[151px_61px]')}
        >
          <path
            fill='#AF4B78'
            d='M150.8 47.5c-7.4 0-13.4 6-13.4 13.5 0 7.4 6 13.5 13.4 13.5s13.5-6 13.5-13.5c-.1-7.5-6.1-13.5-13.5-13.5zm6.9 18.1c-1.3 1.9-3.4 3.3-5.8 3.6V67h-2v2.2c-2.4-.3-4.5-1.6-5.9-3.4l1.8-1-1-1.7-1.7 1c-.4-1-.6-2-.6-3.1 0-1.2.3-2.4.8-3.4l1.5.8 1-1.7-1.4-.8c1.3-1.6 3.2-2.8 5.4-3.1v1.5h2v-1.5c2.2.2 4.2 1.3 5.5 3l-1.4.8 1 1.7 1.5-.9c.5 1.1.8 2.3.8 3.6 0 1-.2 2-.5 2.9l-1.7-1-1 1.7 1.7 1z'
          ></path>
          <path
            fill='#FFF'
            d='M160.4 56.1c-.3-.6-.6-1.2-1-1.7-1.8-2.4-4.5-4-7.6-4.2h-2c-3.1.3-5.9 1.9-7.7 4.3-.4.5-.8 1.1-1 1.7-.7 1.4-1.1 3-1.1 4.8 0 6 4.8 10.8 10.8 10.8 3.8 0 7.2-2 9.1-4.9.4-.6.7-1.1.9-1.8.5-1.3.8-2.7.8-4.1 0-1.8-.4-3.4-1.2-4.9zm-2.7 9.5c-1.3 1.9-3.4 3.3-5.8 3.6V67h-2v2.2c-2.4-.3-4.5-1.6-5.9-3.4l1.8-1-1-1.7-1.7 1c-.4-1-.6-2-.6-3.1 0-1.2.3-2.4.8-3.4l1.5.8 1-1.7-1.4-.8c1.3-1.6 3.2-2.8 5.4-3.1v1.5h2v-1.5c2.2.2 4.2 1.3 5.5 3l-1.4.8 1 1.7 1.5-.9c.5 1.1.8 2.3.8 3.6 0 1-.2 2-.5 2.9l-1.7-1-1 1.7 1.7 1z'
          ></path>
          <g fill='#BFBFD2'>
            <path d='M150.9 49.2c-6.5 0-11.8 5.3-11.8 11.8 0 6.5 5.3 11.8 11.8 11.8 6.5 0 11.8-5.3 11.8-11.8-.1-6.6-5.3-11.8-11.8-11.8zm6.8 16.4c-1.3 1.9-3.4 3.3-5.8 3.6-.4.1-.7.1-1.1.1-.3 0-.6 0-.9-.1-2.4-.3-4.5-1.6-5.9-3.4-.4-.5-.7-1.1-1-1.7-.4-1-.6-2-.6-3.1 0-1.2.3-2.4.8-3.4.3-.6.6-1.2 1-1.7 1.3-1.6 3.2-2.8 5.4-3.1.4-.1.7-.1 1.1-.1h.9c2.2.2 4.2 1.3 5.5 3 .4.5.8 1.1 1.1 1.7.5 1.1.8 2.3.8 3.6 0 1-.2 2-.5 2.9-.1.6-.4 1.2-.8 1.7z'></path>
            <path d='M149.8 49.6H151.8V54.2H149.8z'></path>
            <path d='M160.8 55.9L160.4 56.1 158.3 57.3 156.8 58.2 155.9 56.5 157.2 55.7 159.4 54.4 159.8 54.2z'></path>
            <path d='M160.9 65.2L159.9 66.9 159.8 66.8 157.7 65.6 155.9 64.6 156.9 62.9 158.6 63.8 160.8 65.1z'></path>
            <path d='M150 67H152V71.6H150z'></path>
            <path d='M145.8 64.8L144.1 65.8 141.9 67 140.9 65.3 143.1 64 144.9 63z'></path>
            <path d='M145.8 56.6L144.8 58.3 143.3 57.5 141 56.2 140.8 56.1 141.8 54.3 142.1 54.5 144.3 55.8z'></path>
          </g>
        </g>
        <path
          fill='#AEACD6'
          fillRule='evenodd'
          d='M90.2 51.1H129.9V71H90.2z'
          clipRule='evenodd'
        ></path>
        <path
          fill='#614667'
          fillRule='evenodd'
          d='M106.4 61c0 3.4-.5 6.8-1.3 9.9H90.2V51.1h14.9c.8 3.2 1.3 6.5 1.3 9.9zM129.9 51.1V71h-.9c-1.4-3-2.2-6.4-2.2-9.9 0-3.6.8-6.9 2.2-9.9h.9z'
          clipRule='evenodd'
        ></path>
        <path fill='#FFF' d='M125.6 59.5H126.3V63.9H125.6z'></path>
        <path fill='#FFF' d='M120.3 59.5H121V63.9H120.3z'></path>
        <path fill='#FFF' d='M114.9 59.5H115.60000000000001V63.9H114.9z'></path>
        <path fill='#FFF' d='M109.6 59.5H110.3V63.9H109.6z'></path>
        <path fill='#FFF' d='M104.3 59.5H105V63.9H104.3z'></path>
        <path fill='#FFF' d='M98.9 59.5H99.60000000000001V63.9H98.9z'></path>
        <path fill='#FFF' d='M93.6 59.5H94.3V63.9H93.6z'></path>
      </g>
      <path fill='none' d='M20.4 24.7H199.4V76.7H20.4z'></path>
      <text
        fill='#020203'
        className='font-hand'
        fontSize='16'
        transform='translate(110 33.17)'
        textAnchor='middle'
        baselineShift='middle'
      >
        {title}
      </text>
      <path fill='none' d='M13.2 81.1H204V117.1H13.2z'></path>
      <text
        fill='#020203'
        className='font-hand'
        fontSize='10'
        transform='translate(110 89.594)'
        textAnchor='middle'
        baselineShift='middle'
      >
        {subtitle}
      </text>
    </svg>
  );
}
