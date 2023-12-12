import Accordion from "./Accordion"

const FAQs = () => {
    const list=[
        {
            question:"what is your name",
            answer:"amaar"
        },
        {
            question:"how are you",
            answer:"fine"
        }
    ]
  return (
    <div className="h-full w-full py-[6%] overflow-hidden flex justify-center items-center">
        <div className="w-[85%] grid gap-2 faqs-bg">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="flex">
            <div className="w-[60%]">
                {
                    list.map((item,index)=>{
                       return <Accordion key={index} datas={item}/>
                    })
                }
            </div>
            <div></div>
            </div>
        </div>
    </div>
  )
}

export default FAQs