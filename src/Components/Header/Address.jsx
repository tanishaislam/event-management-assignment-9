import { AiFillHome , AiTwotonePhone} from 'react-icons/ai';
import { BsFillEnvelopeFill} from 'react-icons/bs';
const Address = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto mb-40 mt-20 gap-10 px-5">
                <div className='bg-pink-200 relative pt-24 pb-12 text-center flex justify-center mb-5'>
                    <h1 className='bg-blue-400 w-20 m-auto p-5 rounded-full absolute -top-10'>
                    <span className='text-4xl text-white'><AiFillHome></AiFillHome></span>
                    </h1>
                    <div>
                    <h1 className='text-5xl font-norican font-semibold pb-7'>Address</h1>
                    <p className='font-semibold'>194 New Lenox</p>
                    <p className='font-semibold'>Dhaka 1903873</p>
                    </div>
                </div>
                <div className='bg-pink-200 relative pt-24 pb-10 text-center flex justify-center mb-5'>
                    <h1 className='bg-blue-400 w-20 m-auto p-5 rounded-full absolute -top-10'>
                    <span className='text-4xl text-white'><AiTwotonePhone></AiTwotonePhone></span>
                    </h1>
                    <div>
                    <h1 className='text-5xl font-norican font-semibold pb-7'>Phone</h1>
                    <p className='font-semibold'>(820) 1224-4567</p>
                    </div>
                </div>
                <div className='bg-pink-200 relative pt-24 pb-10 text-center flex justify-center mb-5'>
                    <h1 className='bg-blue-400 w-20 m-auto p-5 rounded-full absolute -top-10'>
                    <span className='text-4xl text-white'><BsFillEnvelopeFill></BsFillEnvelopeFill></span>
                    </h1>
                    <div>
                    <h1 className='text-5xl font-norican font-semibold pb-7'>Email</h1>
                    <p className='font-semibold'>Contactinfo@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;