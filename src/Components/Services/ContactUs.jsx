
const ContactUs = () => {
    return (
        <div>
            <div className="bg-pink-200  container mx-auto pb-10 pt-5 mt-16">
                <div className="lg:mx-14">
                <p className="text-center uppercase font-semibold py-4" >Contact us</p>
                <h1 className="text-4xl font-cormorant font-bold text-center pb-8">Leave a Feedback or <br /> Ask a Question</h1>
                <form action="" className="px-14">
                    <div className="flex gap-5 mb-10">
                    <input className=" w-full py-4 pl-3" type="text" placeholder="NAME*" />
                    <input className="w-full py-4 pl-3" type="email" placeholder="E-MAiL*" />
                    </div>
                    <textarea className="w-full py-4 pl-3 mb-3" name="textarea" placeholder="MESSAGE" id="" cols="30" rows="10"></textarea><br />
                    <input type="checkbox" value="1"/><span>  I agree that my submitted data is being collected and stored.</span><br />
                    <span className="uppercase flex justify-center text-center bg-cyan-500 text-white w-48 font-semibold m-auto py-3 my-8">send message</span>
                </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;