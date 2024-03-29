import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
export default function Giveaway(){
return <div className="img1 w-full h-[100vh]">
    <Navbar/>
    <Sidenav />
    <div className=" form ">
    <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 w-[600px] h-[600px] absolute top-[100px] left-[500px]" >
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Title</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Title"
              type="text"
              id="name" 
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only text-black" for="email">Event Link</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Event Link"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Starting Time</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Learn More"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
           
           
         
          </div>

          <div>
            <label class="sr-only" for="message">Giveaway Description</label>
            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Giveaway Description"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
            >
              <span class="font-medium"> Post Tweet </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>

    </div>
</div>
}