const Reviews = () => {
   const reviews=[
    {
       img:"",
       name:"Gabrielle",
       writtenDate:"Mar.25,2019",
       stars:5,
       review:""
    },
    {
        img:"",
        name:"Gabrielle",
        writtenDate:"Mar.25,2019",
        stars:5,
        review:""
     }
     ,{
        img:"",
        name:"Gabrielle",
        writtenDate:"Mar.25,2019",
        stars:5,
        review:""
     },{
        img:"",
        name:"Gabrielle",
        writtenDate:"Mar.25,2019",
        stars:5,
        review:""
     },{
        img:"",
        name:"Gabrielle",
        writtenDate:"Mar.25,2019",
        stars:5,
        review:""
     },{
        img:"",
        name:"Gabrielle",
        writtenDate:"Mar.25,2019",
        stars:5,
        review:""
     },{
        img:"",
        name:"Gabrielle",
        writtenDate:"Mar.25,2019",
        stars:5,
        review:""
     },{
        img:"",
        name:"Gabrielle",
        writtenDate:"Mar.25,2019",
        stars:5,
        review:""
     },{
        img:"",
        name:"Gabrielle",
        writtenDate:"Mar.25,2019",
        stars:5,
        review:""
     },{
        img:"",
        name:"Gabrielle",
        writtenDate:"Mar.25,2019",
        stars:5,
        review:""
     }
   ]
  return (
    <div className="py-[4%] w-full h-full  overflow-hidden flex justify-center items-center">
      <div className="relative border   border-red-800 w-[85%] flex flex-col md:flex-row">
        <div className="border  border-pink-800 font-f-outfit z-10">
          <div>
            <h2 className="text-base text-yellow">Reviews</h2>
            <p className="text-5xl font-thin whitespace-nowrap">Clients Words</p>
            <p className="whitespace-nowrap text-8xl font-semibold text-t-blue">About us</p>
            <span className="flex gap-1 py-8">
                <p className="bg-gray h-[14px] w-[14px] p-2 rounded-full"></p>
                <p className="bg-gray h-[14px] w-[14px] p-2 rounded-full"></p>
                <p className="bg-gray h-[14px] w-[14px] p-2 rounded-full"></p>
                <p className="bg-gray h-[14px] w-[14px] p-2 rounded-full"></p>
            </span>
          </div>
          <div className="py-8">
            <button className="border border-light-gray text-black font-semibold px-8 py-4 rounded hover:bg-yellow hover:border-yellow">Check All Reviews</button>
          </div>
        </div>
        <div className="bg-extl-gray  absolute left-[19%] top-0 bottom-0 right-0 border border-yellow rounded-[80px] reviews-bg">
          <div>
            <p>Phasellus mollis tincidunt semper. Curabitur pharetra tortor nisi, ut consectetur risus faucibus in. Donec ac tortor luctus, condimentum neque.</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
