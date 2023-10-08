import Image from "next/image";
// import mountains from '../public/gmbr.png'

export default function RegisterPage() {
  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      <div className="bg-white flex flex-col items-center justify-center w-full md:w-1/2">
        <div className="w-full max-w-md space-y-8">
        <Image
    className=""
    src="/assets/google.png" 
    alt="Blob Image"
    width={50}
    height={50}
  />
          <div>
            <h1 className="text-2xl font-bold">Masuk ke akun kamu </h1>
            <p className="mt-2 text-gray-600">Belajar gratis di yoursite.io, dan memulai karir yang kamu cita-cita sejak dalam embrio!</p>
          </div>
          <form className="mt-8 space-y-6">
  <div className="flex space-x-4">
    <div className="w-1/2">
      <label htmlFor="firstName" className="block font-bold text-gray-700">
        Nama Lengkap
      </label>
      <input
        id="firstName"
        type="text"
        placeholder="Nama Depan"
        className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        required
      />
    </div>
    <div className="w-1/2 mt-5">
      <label htmlFor="lastName" className="block font-bold text-gray-700">
      </label>
      <input
        id="lastName"
        type="text"
        placeholder="Nama Belakang"
        className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        required
      />
    </div>
  </div>
  <div>
    <label htmlFor="password" className="block font-bold text-gray-700">
      Password
    </label>
    <input
      id="password"
      type="password"
      placeholder="Enter your password"
      className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
      required
    />
  </div>
  <div className="mt-2 flex items-center">
    <input
      id="rememberMe"
      type="checkbox"
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-blue-700 rounded"
    />
    <label htmlFor="rememberMe" className="ml-2 block text-sm text-black font-semibold">
      Ingat saya
    </label>
  </div>
  <div>
    <button
      type="submit"
      className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
    >
      Mendaftar
    </button>
  </div>
  <div className="flex items-center justify-center mt-6">
    <span className="mr-1 text-base font-extralight  text-black">Dengan mendaftar berati kamu setuju dengan Terms of service dan Privacy Policy dari yoursite.io</span>
  </div>
</form>

        </div>
      </div>
      <div className="bg-indigo-800 flex flex-col  w-full md:w-1/2 relative">
      <div className="absolute flex flex-col items-center justify-center ms-6 inset-0 top-[-80px]">
    <Image
      src="/assets/user-plus.png"
      alt="Blob Image"
      width={150}
      height={50}
      objectPosition="center"
      style={{ filter: 'brightness(0) invert(1)' }}

    />
  </div>
      <div className="z-10 flex flex-col items-center mt-40 justify-center">
        <Image
          src="/assets/Group 8.png" 
          alt="Gambar"
          width={900}
          height={400}
          sizes="100vw"
        /> 
      </div>
    <div className="absolute z-0 inset-0 overflow-hidden left-5 mt-10">
  <Image
    className="blur-md"
    src="/assets/blob.svg" 
    alt="Blob Image"
    layout="fill"
    objectFit="cover"
    objectPosition="bottom" 
    style={{
      clipPath: 'ellipse(300% 60% at 50% 0%)', 
      opacity: 0.1,
    }}
  />
</div>
<div className="absolute z-0 inset-0 overflow-hidden left-72 mt-96">
  <Image
    className="blur-md"
    src="/assets/blob.svg" 
    alt="Blob Image"
    layout="fill"
    objectFit="cover"
    objectPosition="bottom"
    style={{
      clipPath: 'ellipse(300% 40% at 50% 0%)', 
      opacity: 0.1,
    }}
  />
</div>
<div className="justify-start items-start ml-32 mt-5 text-left"> 
    <p className="text-sm font-thin  text-gray-100">yoursite.io</p>
    <p className="mt-2 text-white text-lg">
      Silahkan mengunjungi web kami dan jika belum punya akun Silahkan daftar duku
    </p>
  </div>
</div>
    </div>
  );
}
