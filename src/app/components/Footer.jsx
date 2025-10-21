"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Footer = ({ lang }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "service_6zp3u3s", // from EmailJS
        // "template_o5lo6dq", // from EmailJS
        form.current
        // "uE105nhzu8mwmZfTE" // from EmailJS
      )
      .then(
        () => {
          console.log("تم الإرسال بنجاح!");
          form.current.reset();
        },
        () => {
          console.log("حدث خطأ! حاول مرة أخرى.");
        }
      );
  };
  return (
    <footer
      className="text-[#0f204e] bg-white pb-12 px-4 md:px-0 w-full"
      dir="ltr"
    >
      <div className="container  grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-8 items-start text-center">
        {/* Contact Form */}
        <div className="text-center flex flex-col justify-center gap-y-4 h-full pt-14">
          <p className="text-4xl font-bold" dir={lang === "en" ? "ltr" : "rtl"}>
            {lang === "en"
              ? " © Copyrights by VISION for industry and trade"
              : " © جميع الحقوق محفوظة لشركة فيچين للصناعة والتجارة "}
          </p>
          <p className="text-4xl text-center font-bold ">
            {lang === "en" ? "Designed and programmed by" : "تصميم وبرمجة"}
            <span> </span>
            <a
              target="_blank"
              href="https://hagerfathi.netlify.app/"
              className="text-text hover:text-hover underline "
            >
              {lang === "en" ? " Hager Fathi" : "هاجر فتحي"}
            </a>
          </p>
        </div>
        {/* Social + Logo */}
        <div className="md:flex flex-col items-center justify-center gap-2 md:pt-10">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-[60%] md:w-[40%] mx-auto"
          />

          <div className={`flex gap-x-10 justify-center items-center`}>
            <img src="./rowad.jpg" alt="Logo" className="w-[25%] h-[25%]" />
            <img src="./bloom.jpg" alt="Logo" className="w-[20%] h-[20%]" />
          </div>

          {/* Social Icons */}
          <div className={`flex justify-center gap-4 text-2xl pt-10 `}>
            <a
              href="https://www.facebook.com/uniform.Egypt2020?locale=ar_AR"
              target="_blank"
              className="border border-transparent hover:border-[#0f204e] hover:bg-white hover:text-[#0f204e] text-white bg-[#0f204e] p-4 flex rounded-lg transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              target="_blank"
              className="border border-transparent hover:border-[#0f204e] hover:bg-white hover:text-[#0f204e] text-white bg-[#0f204e] p-4 flex rounded-lg transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              className="border border-transparent hover:border-[#0f204e] hover:bg-white hover:text-[#0f204e] text-white bg-[#0f204e] p-4 flex rounded-lg transition-all duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              target="_blank"
              className="border border-transparent hover:border-[#0f204e] hover:bg-white hover:text-[#0f204e] text-white bg-[#0f204e] p-4 flex rounded-lg transition-all duration-300"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center pt-6 md:pt-12">
          <div className="flex flex-col justify-center  items-center gap-y-6 md:pt-20">
            <h3 className="text-4xl font-bold text-center:w-[375px]">
              {lang === "en" ? "Contact Us" : "تواصل معنا"}
            </h3>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 w-full md:w-[70%] mx-auto"
            >
              <input
                dir={`${lang === "en" ? "ltr" : "rtl"}`}
                type="text"
                name="name"
                placeholder={`${lang === "en" ? "Name" : "الاسم"}`}
                className="p-3 rounded bg-[#0f204e] text-white placeholder:text-white placeholder:text-lg bg-text outline-none border-none"
              />
              <input
                dir={`${lang === "en" ? "ltr" : "rtl"}`}
                type="text"
                name="name"
                placeholder={`${lang === "en" ? "Email" : "ُالايميل"}`}
                className="p-3 rounded bg-[#0f204e] text-white placeholder:text-white placeholder:text-lg bg-text outline-none border-none"
              />
              <input
                dir={`${lang === "en" ? "ltr" : "rtl"}`}
                type="tel"
                name="message"
                placeholder={`${lang === "en" ? "Phone Number" : "رقم الهاتف"}`}
                className="p-3 rounded bg-[#0f204e] text-white placeholder:text-white placeholder:text-lg bg-text outline-none border-none"
              />
              <button
                type="submit"
                className="transition-colors p-2 rounded text-white w-[40%] text-lg bg-[#0f204e] cursor-pointer     hover:border-[#0f204e] hover:bg-white hover:text-[#0f204e]"
              >
                {lang === "en" ? "Submit" : "إرسال"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
