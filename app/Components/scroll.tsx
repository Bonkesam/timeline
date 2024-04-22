'use client'
import React, { useEffect } from 'react'
import Image from "next/image";

import img1 from "../../public/images/img1.jpg"
import img2 from "../../public/images/img2.jpg"
import img3 from "../../public/images/img3.jpg"
import img4 from "../../public/images/img4.jpg"
import img5 from "../../public/images/img5.jpg"
import img6 from "../../public/images/img6.jpg"
import img7 from "../../public/images/img7.jpg"
import img8 from "../../public/images/img8.jpg"
import img9 from "../../public/images/img9.jpg"
import img10 from "../../public/images/img10.jpg"

const scroll = () => {

    useEffect(() => {
        const imagesContainer = document.querySelector<HTMLElement>("#images");
        const preview = document.querySelector<HTMLElement>("#preview");
        const minimap = document.querySelector<HTMLElement>("#minimap");
    
        function getElementTop(element: HTMLElement | null): number {
          let top = 0;
          while (element) {
            top += element.offsetTop;
            element = element.offsetParent as HTMLElement;
          }
          return top;
        }
    
        const imagesStart = getElementTop(imagesContainer);
        const imagesEnd = imagesStart + imagesContainer!.offsetHeight;
        const viewportHeight = window.innerHeight;
        const previewHeight = preview!.offsetHeight;
        const previewMaxTranslate = (minimap!.offsetHeight - previewHeight) * 2.84;
    
        function handleScroll() {
          const scrollPosition = window.scrollY;
          const scrollRange = imagesEnd - imagesStart - viewportHeight;
          const previewScrollRange = Math.min(previewMaxTranslate, scrollRange);
    
          if (
            scrollPosition >= imagesStart &&
            scrollPosition <= imagesEnd - viewportHeight
          ) {
            let scrollFraction = (scrollPosition - imagesStart) / scrollRange;
            let previewTranslateY = scrollFraction * previewScrollRange;
            preview!.style.transform = `translateX(-50%) translateY(${previewTranslateY}px)`;
          } else if (scrollPosition < imagesStart) {
            preview!.style.transform = "translateX(-50%) translateY(0px)";
          } else {
            preview!.style.transform = `translateX(-50%) translateY(${previewMaxTranslate}px)`;
          }
        }
    
        window.addEventListener("scroll", handleScroll);
    
        const togglePoint = window.innerHeight * 4;
        const wrapper = document.querySelector<HTMLElement>("#wrapper");
    
        function checkScroll() {
          if (window.scrollY >= togglePoint) {
            wrapper!.classList.add("dark-theme");
          } else {
            wrapper!.classList.remove("dark-theme");
          }
        }
    
        window.addEventListener("scroll", checkScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("scroll", checkScroll);
        };

      }, []);

  return (
    <section id='wrapper' className='w-full h-full transition-[0.5]'>
      <div id='gallery' className='relative w-full flex z-0'>
        <div id='minimap' className='sticky top-0 w-[25%] h-[100vh] pt-[300px] overflow-hidden bg-black transition-[0.5]'>
            <div id='preview' className='absolute left-[50%] transform translate-x-[-50%] w-full h-[1254px] flex flex-col items-center'>
                <div id='item-preview' className='relative w-[100px] h-[125px] p-3 overflow-hidden'>
                    <Image
                        src={img1}
                        alt="image"
                        placeholder='blur'
                    />
                </div>
                <div id='item-preview' className='relative w-[100px] h-[125px] p-3 overflow-hidden'>
                    <Image
                        src={img2}
                        alt="image"
                        placeholder='blur'
                    />
                </div>
                <div id='item-preview' className='relative w-[100px] h-[125px] p-3 overflow-hidden'>
                    <Image
                        src={img3}
                        alt="image"
                        placeholder='blur'
                    />
                </div>
                <div id='item-preview' className='relative w-[100px] h-[125px] p-3 overflow-hidden'>
                    <Image
                        src={img4}
                        alt="image"
                        placeholder='blur'
                    />
                </div>
                <div id='item-preview' className='relative w-[100px] h-[125px] p-3 overflow-hidden'>
                    <Image
                        src={img5}
                        alt="image"
                        placeholder='blur'
                    />
                </div>
                <div id='item-preview' className='relative w-[100px] h-[125px] p-3 overflow-hidden'>
                    <Image
                        src={img6}
                        alt="image"
                        placeholder='blur'
                    />
                </div>
                <div id='item-preview' className='relative w-[100px] h-[125px] p-3 overflow-hidden'>
                    <Image
                        src={img7}
                        alt="image"
                        placeholder='blur'
                    />
                </div>
                <div id='item-preview' className='relative w-[100px] h-[125px] p-3 overflow-hidden'>
                    <Image
                        src={img8}
                        alt="image"
                        placeholder='blur'
                    />
                </div>
                <div id='item-preview' className='relative w-[100px] h-[125px] p-3 overflow-hidden'>
                    <Image
                        src={img9}
                        alt="image"
                        placeholder='blur'
                    />
                </div>
                <div id='item-preview' className='relative w-[100px] h-[125px] p-3 overflow-hidden'>
                    <Image
                        src={img10}
                        alt="image"
                        placeholder='blur'
                    />
                </div>

            </div>
            <div id='active-img-inidcator' className='absolute top-[300px] left-[50%] w-[100px] h-[125px] border-[1.5px] border-white rounded-[4px] blend-difference z-2 transform translate-x-[-50%]'></div>
        </div>

        <div id='images' className='relative top-0 w-[75%] text-white'>
            <div id='item' className='relative w-[500px] h-[600px] overflow-hidden m-[50px] '>
                <div id='item-img' className='h-[550px] w-[500px]'>
                    <Image src={img1} alt="Image" />
                </div>
                <div id='item-copy' className='w-full flex justify-between p-1 uppercase'>
                    <p>Image one</p>
                    <p>01</p>
                </div>
            </div>
            <div id='item' className='relative w-[450px] h-[500px] overflow-hidden m-[50px] '>
                <div id='item-img' className='h-[500px] w-[450px]'>
                    <Image src={img2} alt="Image" />
                </div>
                <div id='item-copy' className='w-full flex justify-between p-1 uppercase'>
                    <p>Image Two</p>
                    <p>01</p>
                </div>
            </div>
            <div id='item' className='relative w-[500px] h-[600px] overflow-hidden m-[50px] '>
                <div id='item-img' className='h-[550px] w-[500px]'>
                    <Image src={img3} alt="Image"/>
                </div>
                <div id='item-copy' className='w-full flex justify-between p-1 uppercase'>
                    <p>Image one</p>
                    <p>01</p>
                </div>
            </div>
            <div id='item' className='relative w-[500px] h-[600px] overflow-hidden m-[50px] '>
                <div id='item-img' className='h-[550px] w-[500px]'>
                    <Image src={img4} alt="Image" />
                </div>
                <div id='item-copy' className='w-full flex justify-between p-1 uppercase'>
                    <p>Image one</p>
                    <p>01</p>
                </div>
            </div>
            <div id='item' className='relative w-[500px] h-[600px] overflow-hidden m-[50px] '>
                <div id='item-img' className='h-[550px] w-[500px]'>
                    <Image src={img5} alt="Image" />
                </div>
                <div id='item-copy' className='w-full flex justify-between p-1 uppercase'>
                    <p>Image one</p>
                    <p>01</p>
                </div>
            </div>
            <div id='item' className='relative w-[500px] h-[600px] overflow-hidden m-[50px] '>
                <div id='item-img' className='h-[550px] w-[500px]'>
                    <Image src={img6} alt="Image" />
                </div>
                <div id='item-copy' className='w-full flex justify-between p-1 uppercase'>
                    <p>Image one</p>
                    <p>01</p>
                </div>
            </div>
            <div id='item' className='relative w-[500px] h-[600px] overflow-hidden m-[50px] '>
                <div id='item-img' className='h-[550px] w-[500px]'>
                    <Image src={img7} alt="Image" />
                </div>
                <div id='item-copy' className='w-full flex justify-between p-1 uppercase'>
                    <p>Image one</p>
                    <p>01</p>
                </div>
            </div>
            <div id='item' className='relative w-[500px] h-[600px] overflow-hidden m-[50px] '>
                <div id='item-img' className='h-[550px] w-[500px]'>
                    <Image src={img8} alt="Image" />
                </div>
                <div id='item-copy' className='w-full flex justify-between p-1 uppercase'>
                    <p>Image one</p>
                    <p>01</p>
                </div>
            </div>
            <div id='item' className='relative w-[500px] h-[600px] overflow-hidden m-[50px] '>
                <div id='item-img' className='h-[550px] w-[500px]'>
                    <Image src={img9} alt="Image" />
                </div>
                <div id='item-copy'>
                    <p>Image one</p>
                    <p>01</p>
                </div>
            </div>
            <div id='item' className='relative w-[500px] h-[600px] overflow-hidden m-[50px] '>
                <div id='item-img' className='h-[550px] w-[500px]'>
                    <Image src={img10} alt="Image" />
                </div>
                <div id='item-copy' className='w-full flex justify-between p-1 uppercase'>
                    <p>Image one</p>
                    <p>01</p>
                </div>
            </div>
        </div>
      </div>
      <div id='container' className='w-full h-full p-20 md:p-10 flex flex-col gap-2'>
        <h1>
        Explore a world where every horizon promises new wonders and each
          journey is a tapestry of breathtaking landscapes and timeless moments.
          With us, your travel transcends into a utopian adventure.
        </h1>
        <div className='w-[500px] h-[500px] object-cover overflow-hidden'>
            <Image src={img1} alt="Image"/>
        </div>
        <h1>
        Discover the charm of hidden gems and cultural treasures on a voyage
          that delves deep into the heart of the world's most elusive
          destinations. Join us to transform the ordinary into the
          extraordinary.
        </h1>
        <h1>
        Venture beyond the conventional with our expertly curated expeditions
          that connect you with the pulse of distant locales through immersive
          experiences and local insights. Embark on a journey unlike any other.
        </h1>
      </div>
    </section>
  )
}

export default scroll;
