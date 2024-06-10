import Image from "next/image";
import "./index.scss";
import Modde from "./../../../app/assets/images/Modde.svg";

export default function NavBar() {
  return (
    <div className="Navbar sticky top-0 z-[999] w-[100vw] rounded-md bg-transparent backdrop-blur-sm py-0">
      <div className="flex h-full flex-row flex-nowrap items-center justify-between px-12 py-0">
        <div className="title logo w-1/2 text-2xl">
          <Image src={Modde} alt="Modde" width={100} />
        </div>
        <div className="flex w-1/4 flex-row items-center justify-evenly gap-4 font-bold text-primary">
          <h4 className="font-bold">Male</h4>
          <h4 className="font-bold">Female</h4>
          <h4 className="font-bold">Trends</h4>
        </div>
      </div>
    </div>
  );
}
