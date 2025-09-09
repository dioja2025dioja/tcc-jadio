import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Header } from "../components/Header";
import PonteH from "../assets/PonteH.png"
import Servo from "../assets/Servo.png"
import Bateria from "../assets/Bateria.png"
import Esp from "../assets/Esp32.png"
import Fio from "../assets/Fio.png"
import Penera from "../assets/Penera.jpg"
import Usuario from "../assets/Usuario.png"
import { Link } from "react-router"

import BackgroundImg from "../assets/Background.png"


export function Materiais() {
  return (

    <main className="dark:bg-[var(--color-bg-grey)]">


      <header>

      <Header />
      </header>

      <h1 className="justify-center text-center font-semibold py-12 text-2xl text-[var(--color-grey)] ">Materiais usados no projeto jadio</h1>
      <div>
        <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        className="w-full max-w-lg h-125 rounded-2xl shadow-lg"
      >
        <SwiperSlide>
          <img className="items-center justify-center " src= {Esp} alt=""></img>
        </SwiperSlide>

        <SwiperSlide>
          <img src= {Servo} alt=""></img>
        </SwiperSlide>

        <SwiperSlide>
          <img src= {Bateria} alt=""></img>
        </SwiperSlide>

        <SwiperSlide>
          <img  src= {PonteH} alt=""></img>
        </SwiperSlide>

        <SwiperSlide>
          <img src= {Fio} alt=""></img>
        </SwiperSlide>

        <SwiperSlide>
          <img src= {Penera} alt=""></img>
        </SwiperSlide>

      </Swiper>
      </div>
      <p className="text-center font-semibold pt-15 text-sm text-[var(--color-lightgrey)] dark:text-[var(--color-white)]">Total: R$549,09</p>
    </main>
  );
}
