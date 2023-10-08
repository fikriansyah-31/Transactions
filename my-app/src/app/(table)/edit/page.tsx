import Navbar from "@/app/navbar";


export default function Edit () {
    return (
        <div className="min-h-screen bg-white">
                <Navbar/>
        <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Item</h2>
        <form action="#">
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value="Apple iMac 27&ldquo;"
                placeholder="Type product name"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
              <input
                type="date"
                name="date"
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value="Apple"
                placeholder="Product brand"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value="2999"
                placeholder="$299"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="Success">Success</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Gagal</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-12 ">
            <button
              type="submit"
              className="text-white bg-blue-500 inline-flex items-start hover:text-white border border-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:text-white"
            >
              Update product
            </button>
          </div>
        </form>
      </div>
    </section>
        </div>
    )
}