"use client";
import CountUp from "react-countup";

export default function Count() {
  return (
    <div className="container-count flex bg-[#638ECB]  rounded-lg text-white">
      <div className="aktif text-center">
        <p className="count">
          <CountUp end={36} duration={7} scrollSpyOnce />
        </p>
        <p className="head-count">SISWA AKTIF</p>
      </div>
      <div className="laki text-center">
        <p className="count">
          <CountUp end={15} duration={7} scrollSpyOnce />
        </p>
        <p className="head-count">LAKI-LAKI</p>
      </div>
      <div className="perempuan text-center">
        <p className="count">
          <CountUp end={21} duration={7} scrollSpyOnce />
        </p>
        <p className="head-count">PEREMPUAN</p>
      </div>
    </div>
  );
}
