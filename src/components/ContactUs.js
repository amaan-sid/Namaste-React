const Contact = () => {
    return (
        <div className="">
           <h1 className="font-bold text-xl m-2 p-2 "> Contact Us Page </h1>  
           <form>
            <input type="text" placeholder="name" className=" p-1 m-1 border border-black rounded"  />
            <input type="text" placeholder="message" className=" p-1 m-1 border border-black rounded"  /> 
            <button className="rounded border border-black m-2 p-1 bg-slate-100 " >
                Submit
                </button>  
           </form>
        </div>
        
    )
}
export default Contact;