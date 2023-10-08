import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/navbar";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";


export default function TablePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                 {/* Search input */}
              <div className="flex-shrink-0 hidden sm:block">
                <div className="flex space-x-4 min-w-full">
                  <div className="relative w-full">
                    <span className="absolute inset-y-0 right-9 pl-3 flex items-center pointer-events-none">
                      <Image src="/assets/sreach.svg"
                      alt="pencarian"
                      className="h-5 w-5 text-gray-400 justify-end items-end"
                      aria-hidden="true" 
                      width={50}
                      height={50}/>
                    </span>
                    <input
                      type="text"
                      className="bg-white text-black text-sm rounded-md py-2.5 pr-10 pl-10 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300"
                      placeholder="Search Transaction"
                    />
                  </div>
                </div>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="form-checkbox rounded text-indigo-600" />
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox" className="form-checkbox rounded text-indigo-600" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Nama Item
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      $100
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      01-01-2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  <div className="flex space-x-2">
  <Link legacyBehavior href="/edit" passHref>
  <a className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-900">
    <PencilIcon className="h-5 w-5" />
  </a>
</Link>
    <button className="flex items-center space-x-2 text-red-600 hover:text-red-900">
      <TrashIcon className="h-5 w-5" />
    </button>
  </div>
</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
