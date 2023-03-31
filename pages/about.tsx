import { useState } from "react"


const about = ()=>{
    const [selectedOptions,setSelectedOptions] = useState('skills'); //by default it is skills
    
    const handleSelectedOptions = (e:any)=>{
        console.log(e.target.value);
        setSelectedOptions(e.target.value)
    }

    const skillsSection = (
        <div className="mr-10 flex items-center justify-center flex-wrap">
            {/* <h3>Project Name: selected option is :{selectedOptions}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis aut harum quasi deserunt architecto impedit, totam reiciendis facilis? Enim inventore quis laboriosam atque velit? Ipsum, animi suscipit ex incidunt placeat molestiae officiis, eligendi odio vitae quo consectetur nisi impedit architecto sapiente voluptatem eum fugiat a. Ipsa rem corporis fuga?</p> */}
            <div className="my-3 mx-2">
                <img src="/images/c++.png" alt="C++" className="h-20 mx-auto "/>
                <p className="text-center my-2">C++</p>
            </div>
            <div className="my-3 mx-2">
                <img src="/images/python.png" alt="Python" className="h-20 mx-auto "/>
                <p className="text-center my-2">Python</p>
            </div>
            <div className="my-3 mx-2">
                <img src="/images/javascript.png" alt="Javascript" className="h-20 mx-auto "/>
                <p className="text-center my-2">Javascript</p>
            </div>
            <div className="my-3 mx-2">
                <img src="/images/html.png" alt="HTML" className="h-20 mx-auto "/>
                <p className="text-center my-2">HTML</p>
            </div>
            <div className="my-3 mx-2">
                <img src="/images/css.png" alt="CSS" className="h-20 mx-auto "/>
                <p className="text-center my-2">CSS</p>
            </div>
            <div className="my-3 mx-2">
                <img src="/images/react.png" alt="React JS" className="h-20 mx-auto bg-gray-900"/>
                <p className="text-center my-2">React JS</p>
            </div>
            <div className="my-3 mx-2">
                <img src="/images/next.png" alt="React JS" className="h-20 mx-auto bg-gray-900"/>
                <p className="text-center my-2">Next JS</p>
            </div>
            <div className="my-3 mx-2">
                <img src="/images/nest.png" alt="Nest JS" className="h-20 mx-auto "/>
                <p className="text-center my-2">Nest JS</p>
            </div>
            <div className="my-3 mx-2">
                <img src="/images/mongodb.png" alt="Mongo DB" className="h-20 mx-auto "/>
                <p className="text-center my-2">Mongo DB</p>
            </div>
            <div className="my-3 mx-2">
                <img src="/images/postgresql.png" alt="PostgreSQL" className="h-20 mx-auto "/>
                <p className="text-center my-2">PostgreSQL</p>
            </div>
            
        </div>
    )
    const experienceSection =(
        <div className="mr-10 flex flex-col items-center justify-center">
            <div className="bg-[#F8F7E8] bg-gray-900 min-w-full rounded-lg text-white my-4">
                {/* Organizations */}
                <div className="my-2 mx-5 ">
                    <h3><a href="https://gain.solutions/" target="_blank" className="text-[#00df9a]">Gain Solutions</a></h3>
                    <h5 className="font-light">Backend Developer [ Feb,2023 to Present ]</h5>
                </div>
                {/* Work details */}
                <div className="my-2 mx-5">
                    <h3>Stacks:</h3>
                    <div className="mx-5">
                        <ul className="mx-2 list-disc">
                            <li>Express JS</li>
                            <li>MongoDB</li>
                            <li>Github</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <h3>What I do:</h3>
                    <div className="mx-5">
                        <ul className="mx-2 list-disc">
                            <li>Working on GraphQL API</li>
                            <li>Building new featuress</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#F8F7E8] bg-gray-900 min-w-full rounded-lg text-white">
                {/* Organizations */}
                <div className="my-2 mx-5 ">
                    <h3><a href="https://www.yotech.ltd/" target="_blank" className="text-[#00df9a]">Yo-Tech</a></h3>
                    <h5 className="font-light">Junior Backend Developer [August,2022 to Feb,2023]</h5>
                </div>
                {/* Work details */}
                <div className="my-2 mx-5">
                    <h3>Stacks:</h3>
                    <div className="mx-5">
                        <ul className="mx-2 list-disc">
                            <li className="font-light">Express JS</li>
                            <li className="font-light">MongoDB</li>
                            <li className="font-light">Bitbucket</li>
                            <li className="font-light">Git</li>
                        </ul>
                    </div>
                    <h3>What I did:</h3>
                    <div className="mx-5">
                        <ul className="mx-2 list-disc">
                            <li className="font-light">Worked on REST API</li>
                            <li className="font-light">Build a HRM system for existing Vendor Management System</li>
                            <li className="font-light">Identify various bugs and solved them with proper optimization</li>
                            <li className="font-light">Implement design pattern to build new features on the existing API</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

    const handleSelectionBar = (e:any)=>{
        let value = e.target.value;
        setSelectedOptions(value);
    }

    return (
        <div className="max-w-[1320px] mx-10 py-[10%] md:py-[80] flex flex-col mx-auto space-x-11 sm:flex-row">
            <div className="sm:hidden flex items-center justify-center my-5">
                <select className="rounded-lg rounded-gray-900 w-3/5 h-10 bg-gray-900 text-white text-center " defaultValue="skills" onChange={handleSelectionBar}>
                    <option value="skills" className="w-3/5 h-10">Skills</option>
                    <option value="experiences" className="w-3/5 h-10">Experiences</option>
                </select>
            </div>
            <div className="hidden basis-[35%]  sm:flex items-center justify-center flex-col fix">
                <div className="px-5 py-5 w-3/5 rounded-lg">
                    <button className="active acblock px-2 min-w-4/5 my- border border-green-900 hover:bg-green-900 hover:text-white rounded-full my-3" value="skills" onClick={handleSelectedOptions}>Skills</button>
                    <button className="block px-2 min-w-4/5 my- border border-green-900 hover:bg-green-900 hover:text-white rounded-full my-3" value="experiences" onClick={handleSelectedOptions}>Experiences</button>
                    <button className="hidden block px-2 min-w-4/5 my- border border-green-900 hover:bg-green-900 hover:text-white rounded-full my-3" value="projects" onClick={handleSelectedOptions}>Projects</button>
                </div>
            </div>
            <div className="basis-[65%]">
                { selectedOptions === 'skills' ? skillsSection : experienceSection  }
                {/* { checkSelectedOption() } */}
            </div>
        </div>
    )
}

export default about