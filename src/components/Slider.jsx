"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"

// ✅ Imported images from assets folder
import awt1 from "../assets/awt1.jpeg"
import awt2 from "../assets/awt2.jpeg"
import awt3 from "../assets/awt3.jpeg"
import awt4 from "../assets/awt4.jpeg"
import awt5 from "../assets/awt5.jpeg"

// ✅ Use imported image variables
const images = [awt1, awt2, awt3, awt4, awt5]

const Slider = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-50">
          Our Amazing Gallery
        </h2>

        <div className="w-full h-[50vh] overflow-hidden rounded-xl shadow-xl bg-gradient-to-r  to-blue-100 dark:bg-gray-800 p-4">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            freeMode={true}
            slidesPerView={1}
            spaceBetween={15}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            allowTouchMove={false}
            className="h-full w-full"
          >
            {Array(10)
              .fill(images)
              .flat()
              .map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full group cursor-pointer">
                    <img
                      src={imgSrc}
                      alt={`Gallery slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
                      <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                        Image {index + 1}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Slider
