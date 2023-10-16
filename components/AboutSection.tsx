import React from 'react'
import Image from 'next/image'
const skills = [
    {skill: "HTML"},
    {skill: "CSS"},
    {skill: "JavaScript"},
    {skill: "TypeScript"},
    {skill: "C++"},
    {skill: "Java"},
    {skill: "Git/Github"},
    {skill: "Tailwind CSS"},
    {skill: "React"},
    {skill: "Next.Js"},
    {skill: "Flutter"},
    {skill: "Kotlin"},
    {skill: "Node.js"},
    {skill: "mongo DB"},
    {skill:"Dart"}
]

const AboutSection = () => {
  return (
    <section id='about'>
        <div className="my-20  pb-12 md:pt-16 md:pb-48">
            <h1 className='text-center font-bold text-4xl'>About Me</h1>
            <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0' />
            <div className='flex flex-col space-y-10 md:flex-row items-stretch justify-center align-top md:text-left md:p-4 md:space-y-0 md:space-x-10  '>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Get to know me!</h1>
                    <p>
                        {" "}
                        Hi! my name is Mushraf Parwej and I am a {" "}
                        <span className='font-bold'>{"highly ambitious"}</span>,
                        <span className='font-bold'>{"self-motivated"}</span>, and
                        <span className='font-bold'>{" driven"}</span> 
                    </p>
                    <br />
                    <p>
                        I am currenlty studying in C.V Raman Global University, Odisha
                        pursuing B.Tech in Computer Science and Engineering.
                    </p>
                    <br />
                    <p>
                        I have a wide range of hobbies and passions that keep me busy,
                        from reading , playing sports , hitting gym to writting tech articles.
                        I am always seeking new experiences and love to keep myself egaged and
                        learning new things.
                    </p>
                    <br />
                    <p>
                        I believe we shoud {" "}
                        <span className='font-bol text-teal-500'>
                            never stop giving
                        </span> {" "}
                        and that&apos;s what i strive to do , I have a passion for
                        technology and a desire to always push the limits of what is possible.
                        I am excited to see where my career takes me and am always open to
                        new opportunities.
                    </p>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
                        My Skills
                    </h1>
                    <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                        {skills.map((item,idx) => {
                            return (
                                <p className=' hover:scale-105  cursor-pointer bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold' key={idx}>{item.skill}</p>
                            )
                        })}
                    </div>
                    <Image className='hidden md:block md:relative md:bottom-4 md:left-25 md:z-0 ' src="/skill.png" height={325} width={325} alt="skills" />

                    <p></p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default AboutSection