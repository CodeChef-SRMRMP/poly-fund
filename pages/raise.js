import Image from "next/image";
import React from "react";

const Raise = () => {
  return (<div class="w-screen">
    <div class="bg-grey text-white bg-slate-900">
      <div class="mx-10 pt-6 flex flex-col items-left">Raise Fund</div>
      <p class="text-center flex flex-col items-left">Start a fundraiser today and get the first donation from us! We want to be the first to support you</p>
      <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-col justify-center">
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="username">
            Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Answer here" />
        </div>
        <div class="mb-1">
          <label class="block text-white text-sm font-bold mb-2" for="password">
            Location
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Choose Location" />
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="username">
            Email ID
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Answer here" />
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="username">
            Donation Amount
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Answer here" />
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="username">
            Cause for Fund Raising
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Describe it here" />
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto  " type="button">
            Submit
          </button>

        </div>
      </form>
    </div>
  </div>
  );
};

export default Raise;
