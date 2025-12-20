'use client';

import { useState } from 'react';
import { useMessage } from '@/app/hooks/useMessage';


export default function Footer() {
  // Message Form Functionality from Hook
  const { name, setName, message, setMessage, status, handleSubmit } = useMessage();

  // Year Function (biar selalu update) 
  const year = new Date().getFullYear();

  return (
    <section className="bg-[#395886] pt-10 pb-10">
      {/* Container Section  */}
      <div className="flex justify-center pl-10 pr-10">
        {/* School Infromation */}
        <div className="w-1/2">
          <div className="flex gap-5 items-center" id="logo">
            <img
              src="asset/image/logo/logo-skanifo.png"
              loading="lazy"
              alt="SKanifo Logp"
              className="w-[70px] h-auto"
            />
            <p className="font-poppins font-bold text-[20px]">SMKN 4 Kendal</p>
          </div>
          <p className="w-1/2 mt-5 font-poppins font-medium">
            Jl. Soekarno-Hatta, Brangsong Utara, Brangsong, Kec. Brangsong,
            Kabupaten Kendal, Jawa Tengah 51318
          </p>
          {/* Embed GMaps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5298675353183!2d110.22777177414194!3d-6.946648368003845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705d9c2a3b439b%3A0xcd3827ba60db3c5!2sSMK%20Negeri%204%20Kendal!5e0!3m2!1sid!2sid!4v1765710509567!5m2!1sid!2sid"
            className="w-[250px] h-[190px] mt-5 rounded-lg"
            loading="lazy"
          ></iframe>
        </div>
        {/* Form Section */}
        <div className="w-1/2 h-max">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 w-full " id="field_nama">
              <label htmlFor="nama" className="label">
                Nama:{" "}
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                placeholder="Masukkan Nama kalian (Ngga harus nama asli kok >_<)"
              />
            </div>
            <div className="flex flex-col gap-2 w-full" id="field_message">
              <label htmlFor="nama" className="label">
                Pesan:{" "}
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input h-[150px] resize-none"
                placeholder="Berikan pesan kalian ke kami :)"
              ></textarea>
            </div>
            <button type="submit" className="btn-secondary">
              Kirim
            </button>
            {status && <p className='text-center'>{status}</p>}
          </form>
        </div>
      </div>
      <div className="w-full h-px bg-[#D5DEEF] mt-[100px] mb-3"></div>
      {/* Copyright */}
      <div className="flex justify-between pl-10 pr-10 text-white">
        <p className="font-bold text-[1.25rem]">
          &copy; Copyright Masterjava <span>{year}</span>
        </p>
        <a
          href="https://www.instagram.com/masterjava.skanifo/"
          className="text-[1.25rem] underline underline-offset-8"
        >
          Instagram Kami
        </a>
        <p className="font-poppins text-[1.25rem]">
          Made By:{" "}<span className="font-poppins font-bold">XIIRPL 3'23 Team</span>
        </p>
      </div>
    </section>
  );
}
