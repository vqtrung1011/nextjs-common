import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Input() {
  return (
    <div className="relative w-full h-16 px-8 py-4 bg-gray-200 rounded-full justify-between items-center flex gap-2">
      <input
        placeholder="Enter a keyword"
        className="text-neutral-400 text-base font-light font-interstate leading-normal tracking-tight bg-transparent w-full"
      />

      <div className="w-6 h-auto relative">
        <MagnifyingGlassIcon className="text-black" />
      </div>
    </div>
  );
}
