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
    <div className="py-[4%] w-full h-full flex justify-center items-center">
      <div className="w-[85%] flex flex-col md:flex-row ">
        <div className="font-f-outfit z-10 w-[21%]">
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
        
        <div className="relative bg-extl-gray w-[85%] border border-yellow rounded-[80px] overflow-visible">
          <div className=" border border-red-800 h-full w-full reviews-bg">
            hello
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
