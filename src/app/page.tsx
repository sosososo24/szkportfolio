export default function Home() {
  return (
    <div className="py-10 space-y-8">
      <div className="inner-sm bg-orange py-6">
        <p className="text-hero text-white">inner-sm / max-w-[76.8rem]</p>
      </div>

      <div className="inner-md bg-thin-orange py-6">
        <p className="text-black">inner-md / max-w-[128rem]</p>
      </div>

      <div className="inner-lg bg-gray py-6">
        <p className="text-white">inner-lg / max-w-[144rem]</p>
      </div>

      <div className="inner-full bg-black py-6">
        <p className="text-white">inner-full / max-w-[256rem]</p>
      </div>
    </div>
  );
}
