import Link from "next/link";
import "./index.scss";

export default function Home() {
  return (
    <main className="flex h-auto min-h-screen w-screen flex-col flex-wrap items-center justify-center bg-transparent">
      <div className="main-grid flex h-[140vh] w-[90%] flex-row flex-wrap items-center justify-between gap-4 sm:h-[70vh] sm:flex-col">
        <div className="upload-box mr-4 min-h-[70vh] w-full text-balance rounded-2xl text-primary sm:my-4 sm:mr-0 sm:w-2/5">
          <div className="upload-content flex h-[70vh] w-full flex-col items-center justify-center text-balance text-center sm:h-full">
            <h2 className="mb-4 text-xl font-bold">Enter desired product</h2>
            <div className="draggable-box min-h-2/5 flex w-4/5 flex-col items-center justify-center rounded-lg border border-primary p-2">
              <h2>Icon</h2>
              <h3>Drag and drop image</h3>
              <div className="my-2 flex w-4/5 flex-row flex-nowrap items-center justify-center">
                <div className="h-0 w-1/4 border border-primary" />
                <h3 className="mx-4">OR</h3>
                <div className="h-0 w-1/4 border border-primary" />
              </div>
              <Link
                href="/"
                className="browse-btn w-autop-1 max-w-2/5 btn btn-primary mx-4 mb-2 rounded-md text-xs text-white"
              >
                Browse Files
              </Link>
            </div>
          </div>
        </div>
        <div
          className="static-carousel flex min-h-[70vh] w-full flex-row flex-nowrap items-center justify-normal text-balance 
        rounded-2xl bg-slate-800/30 text-center sm:my-4 sm:w-3/5"
        >
          <div>Photos</div>
          <div>Photos</div>
          <div>Photos</div>
        </div>
      </div>
    </main>
  );
}
