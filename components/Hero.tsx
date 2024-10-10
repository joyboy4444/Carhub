"use client"

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
    const handleScroll = () => {

    }

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x ">
            <h1 className="hero__title">
                สั่งจองรถยนต์ของท่านได้อย่างรวดเร็วและปลอดภัย
            </h1>

            <p className="hero__subtitle">
            ปรับปรุงประสบการณ์การเช่ารถของคุณกับเรา 
            ขั้นตอนการจองที่ง่ายดาย
            </p>

            <CustomButton 
                title="เช่าเลย"
                containerStyles="bg-primary-blue text-white
                rounded-full mt-10 text-md"
                handleClick={handleScroll}

            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero"
                fill className="object-contain"/>
            </div>
                <div className="hero__image-overlay"/>
            </div>
        </div>
    
  )
}

export default Hero