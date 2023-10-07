
const Banner = () => {
    return (
        <div className="">
            <div className="text-center h-[80vh] bg-no-repeat bg-cover bg-[url('./assets/istockphoto-637202406-170667a.jpg')]">
                <div className="pt-64">
                <h1 className="text-5xl font-semibold font-norican text-black">Social <span className="text-pink-400">Event Management</span></h1>
                <p className="text-lg mt-5 w-1/2 m-auto text-black font-semibold  ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsam corrupti officia facere omnis, natus beatae in neque porro, nihil maxime sunt. Dolores aut mollitia necessitatibus, sint ducimus maiores ut!</p>
                <button className="bg-pink-400 text-white py-3 px-7 text-lg font-semibold rounded-lg mt-5">See more</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;