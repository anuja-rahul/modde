import Link from "next/link";
import "./index.scss";
import Image from "next/image";
import UploadIcon from "./assets/images/uploadIcon.png";

export default function Home() {
  return (
    <main className="flex h-auto min-h-screen w-[115vw] flex-col flex-wrap items-center justify-center overflow-x-hidden bg-transparent">
      <div className="main-grid flex h-auto w-[90%] flex-row flex-wrap items-center justify-between gap-4 sm:h-[70vh] sm:flex-col">
        <div className="upload-box mr-4 w-full text-balance rounded-2xl text-primary sm:my-4 sm:mr-0 sm:w-2/5">
          <div className="upload-content flex h-auto w-full flex-col items-center justify-center text-balance text-center sm:h-full min-h-[65vh]">
            <h2 className="mb-4 font-['DM_Sans_Regular'] text-xl font-bold">
              Enter desired product
            </h2>
            <div className="draggable-box min-h-2/5 flex w-4/5 flex-col items-center justify-center rounded-lg border border-primary p-2">
              <Image src={UploadIcon} alt="upload icon" width={40} />
              <h3>Drag and drop image</h3>
              <div className="my-2 flex w-4/5 flex-row flex-nowrap items-center justify-center">
                <div className="h-0 w-1/4 border border-primary" />
                <h3 className="mx-4">OR</h3>
                <div className="h-0 w-1/4 border border-primary" />
              </div>
              <Link
                href="/"
                className="browse-btn max-w-2/5 btn btn-primary mx-4 mb-1 w-auto rounded-md py-0 text-xs text-white"
              >
                Browse Files
              </Link>
            </div>
          </div>
        </div>
        <div
          className="static-carousel flex min-h-[65vh] w-full flex-row flex-nowrap items-center justify-around gap-6 
        text-balance rounded-2xl text-center sm:my-4 sm:w-3/5"
        >
          <div className="h-full w-1/3 rounded-3xl bg-slate-600/30">
            <Image
              src={
                "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="image1"
              width={400}
              height={1200}
              className="slider-img rounded-3xl"
            />
          </div>
          <div className="h-full w-1/3 rounded-3xl bg-slate-600/30">
            <Image
              src={
                "https://images.unsplash.com/photo-1588117260148-b47818741c74?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="image1"
              width={400}
              height={1200}
              className="slider-img rounded-3xl"
            />
          </div>
          <div className="h-full w-1/3 rounded-3xl bg-slate-600/30">
            <Image
              src={
                "https://images.unsplash.com/photo-1559697242-a465f2578a95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="image1"
              width={400}
              height={1200}
              className="slider-img rounded-3xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
