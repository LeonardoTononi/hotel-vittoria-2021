import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Room({
  room: { name, img, price, alt, text, guest },
  index,
}) {
  const router = useRouter();
  return (
    <section
      onClick={() =>
        router
          .push({ pathname: '/appartamenti', query: { room: name } })
          .then(() => window.scrollTo(0, 0))
      }
      class='lg:py-12 lg:flex lg:justify-center rounded-2xl cursor-pointer transition transform hover:scale-105 group'>
      <div class='lg:mx-8 lg:max-w-5xl rounded-lg'>
        <div class={``}>
          <div class='rounded-lg lg:h-full'>
            <Image
              className='w-full h-full rounded-lg'
              alt={alt}
              objectFit='cover'
              src={img}
              width={600}
              height={400}
            />
          </div>
        </div>

        <div class='max-w-xl px-6 py-2 lg:max-w-5xl flex place-content-between place-items-center'>
          <h2 class='text-2xl font-semilbold font-serif text-green-900 dark:text-white md:text-3xl capitalize'>
            {name}
            <span class='text-xl text-gray-500 dark:text-indigo-400 grid font-semibold'>
              {guest} guest
            </span>
          </h2>

          <div class='mt-8'>
            <button class='px-5 group-hover:bg-gray-700 group-hover:text-gray-100 py-2 font-semibold text-gray-700 transition-colors duration-200 transform rounded-xl border-2 border-gray-700 hover:bg-gray-700 hover:text-gray-100'>
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
