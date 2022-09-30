export default function Zara() {
  return (
    <main className="inset-0 h-screen w-screen overflow-hidden">
      {/* gradient div */}
      <title>ZARA</title>
      <div className="fixed -z-10 h-full w-1/2 bg-gradient-to-tr from-yellow-500 via-red-600 to-red-900">
        <div className="items-middle flex h-full w-full items-end justify-end text-white">
          <p className="sm:text-md lg:-mb-5 mr-2 font-elsie text-3xl uppercase">
            zara
          </p>
        </div>
      </div>
      <div className="justify-centers float-right flex h-full w-1/2 items-center bg-black">
        <div className="mx-auto aspect-square w-11/12 rounded-full bg-gradient-to-tl from-yellow-500 via-red-600 to-red-900"></div>
        <div className="fixed bottom-0 h-1/2 w-full bg-gray-200/[.1] backdrop-blur-3xl"></div>
      </div>
    </main>
  );
}
