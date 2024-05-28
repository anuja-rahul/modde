import "./index.scss";

export default function NavBar() {
  return (
    <div className="Navbar sticky top-0 z-[999] w-[100vw] rounded-md bg-transparent backdrop-blur-sm">
      <div className="flex h-full flex-row flex-nowrap items-center justify-between px-12">
        <div className="logo w-1/2 text-2xl">MODDE</div>
        <div className="flex w-1/4 flex-row items-center justify-evenly gap-4 font-bold text-primary">
          <h4>Male</h4>
          <h4>Female</h4>
          <h4>Trends</h4>
        </div>
      </div>
    </div>
  );
}
