import Image from 'next/image';
import profileImage from './images/Nazar.jpg';

export default function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-0 items-center justify-center p-20 min-w-[300px]">
      <div className="overflow-hidden rounded-full lg:m-10 aspect-square w-full max-w-[500px]">
        <Image className="transform -translate-y-[8%] object-cover"
          src={profileImage}
          width={500}
          height={500}
          alt="Nazar Elsayed Profile"
        />
      </div>
      <p className="text-center lg:text-left lg:m-10 max-w-screen-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
    </div>
  );
}
