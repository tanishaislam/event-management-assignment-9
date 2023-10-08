
const Banner = () => {
    return (
        <div className=" bg-no-repeat bg-cover bg-[url('./assets/banner-1.jpg')]">
            <div className="text-center h-[80vh] flex justify-center items-center flex-col bg-pink-300 bg-opacity-70">
                <div>
                <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold font-norican text-black">Social Event <span className="text-pink-500">Management</span></h1>
                <p className="text-lg mt-5 w-1/2 m-auto text-white font-semibold  ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsam corrupti officia facere omnis, natus beatae in neque porro, nihil maxime sunt. Dolores aut mollitia necessitatibus, sint ducimus maiores ut!</p>
                <button className="bg-pink-500 text-white py-3 px-7 text-lg font-semibold rounded-lg mt-5">See more</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;