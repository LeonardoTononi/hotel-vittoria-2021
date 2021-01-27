export default function Features() {
  return (
    <section class='text-gray-600 body-font'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='text-center mb-20'>
          <h2 class='title_section'>Our most Loved Characteristic</h2>
        </div>
        <div class='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
          <div class='p-4 md:w-1/3 flex flex-col text-center items-center'>
            <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-green-900 mb-5 flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                class='w-10 h-10'
                viewBox='0 0 24 24'>
                <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
              </svg>
            </div>
            <div class='flex-grow'>
              <h2 class='text-gray-900 text-lg title-font font-medium mb-3'>
                Lovely Family
              </h2>
              <p class='leading-relaxed text-base'>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
            </div>
          </div>
          <div class='p-4 md:w-1/3 flex flex-col text-center items-center'>
            <div class='w-20 h-20 inline-flex items-center justify-center rounded-full  bg-gray-100 text-green-900 mb-5 flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                class='w-10 h-10'
                viewBox='0 0 24 24'>
                <circle cx='6' cy='6' r='3'></circle>
                <circle cx='6' cy='18' r='3'></circle>
                <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
              </svg>
            </div>
            <div class='flex-grow'>
              <h2 class='text-gray-900 text-lg title-font font-medium mb-3'>
                Breakfast
              </h2>
              <p class='leading-relaxed text-base'>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
            </div>
          </div>
          <div class='p-4 md:w-1/3 flex flex-col text-center items-center'>
            <div class='w-20 h-20 inline-flex items-center justify-center rounded-full  bg-gray-100 text-green-900 mb-5 flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                class='w-10 h-10'
                viewBox='0 0 24 24'>
                <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </svg>
            </div>
            <div class='flex-grow'>
              <h2 class='text-gray-900 text-lg title-font font-medium mb-3'>
                Nature Reserve
              </h2>
              <p class='leading-relaxed text-base'>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
            </div>
          </div>
        </div>
        <div className='pt-14 hidden flex-wrap max-w-screen-xl mx-auto justify-center lg:flex'>
          <img src='https://dummyimage.com/400x360' />
          <img src='https://dummyimage.com/400x360' />
          <img src='https://dummyimage.com/400x360' />
        </div>
        <div className='hidden flex-wrap max-w-screen-xl mx-auto justify-center lg:flex'>
          <img src='https://dummyimage.com/600x360' />
          <img src='https://dummyimage.com/600x360' />
        </div>
      </div>
    </section>
  );
}
