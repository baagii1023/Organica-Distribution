import React from 'react'
import logo from '/green-logo.png';

export default function ContactUs() {
  return (
    <section className='w-full bg-[#FF6D00]'>
      <div className='px-4 relative max-w-[1200px] mx-auto text-white text-center py-[64px]'>
        <h2 className='font-semibold text-3xl sm:text-4xl text-center pb-6'>Get In Touch</h2>
        <p className='text-white/80'>Want to get in touch? We’d love to hear from you</p>
        <a className='mt-6 inline-block px-6 py-3 bg-white text-black shadow-lg' href="contact">Contact Us</a>
      </div>
    </section>
  )
}
