import Meals from '@/components/Meals';
import style from './style.module.css'
import Image from 'next/image';
export const metadata = {
    title: {
        absolute: "Meals"
    },
    description: "Meals Page",
    keywords: ["about","about page"]
  };
const MealsPage = () => {
    
    return (
        <div className='my-12 w-5/6 mx-auto text-center'>
            <h1 className='text-basic'>Meals Page</h1>
            <p className='py-6'>Choose meals of your choice by searching...</p>
            <h4 className={style.text_yellow}>Modular Class/Style Display</h4>
            <div>
                {/* <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <Image width={500} height={500}src={"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}  alt="Shoes" ></Image>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div> */}
            </div>
            <Meals></Meals>
        </div>
    );
};

export default MealsPage;