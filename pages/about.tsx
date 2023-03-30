import { useState } from "react"

const about = ()=>{
    const [selectedOptions,setSelectedOptions] = useState('skills'); //by default it is skills
    
    const handleSelectedOptions = (e:any)=>{
        console.log(e.target.value);
        setSelectedOptions(e.target.value)
    }
    return (
        <div className="max-w-[1320px] mx-10 py-[10%] md:py-[80] flex mx-auto space-x-11">
            <div className="basis-[35%]  flex items-center justify-center flex-col">
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem autem accusamus saepe nihil voluptates error commodi incidunt voluptas sequi, rem sed, possimus dicta quos optio non quia facilis, quae magnam!
                </p> */}
                <div className="px-5 py-5 w-3/5 rounded-lg">
                    <button className="block px-2 min-w-4/5 my- border border-purple-500 rounded-full my-3" value="skills" onClick={handleSelectedOptions}>Skills</button>
                    <button className="block px-2 min-w-4/5 my- border border-purple-500 rounded-full my-3" value="experiences" onClick={handleSelectedOptions}>Experiences</button>
                    <button className="block px-2 min-w-4/5 my- border border-purple-500 rounded-full my-3" value="projects" onClick={handleSelectedOptions}>Projects</button>
                </div>
            </div>
            <div className="basis-[65%]">
                <div>
                    <h3>Project Name: selected option is :{selectedOptions}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis aut harum quasi deserunt architecto impedit, totam reiciendis facilis? Enim inventore quis laboriosam atque velit? Ipsum, animi suscipit ex incidunt placeat molestiae officiis, eligendi odio vitae quo consectetur nisi impedit architecto sapiente voluptatem eum fugiat a. Ipsa rem corporis fuga?</p>
                </div>
            </div>
        </div>
    )
}

export default about