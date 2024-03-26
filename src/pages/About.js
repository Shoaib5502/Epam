import React from "react"
import Navbar from "../components/Navbar"

const people = [
  {
    name: 'Shoaib Shaik',
    role: 'Founder / CEO',
    info: 'Shoaib, the co-founder of BlogSite, is a tech enthusiast with a passion for innovation. With a background in computer science, Shoaib brings a wealth of knowledge and expertise to the table. His relentless curiosity and drive for excellence fuel his mission to create a platform that pushes the boundaries of creativity and technology.',
    imageUrl:
      '',
  },{
    name: 'Rohith Gude',
    role: 'Co-Founder / COO',
    info: 'Rohit, co-founder of BlogSite, is a master storyteller with a love for language and literature. With his captivating narratives and thought-provoking insights, Rohit weaves magic with words, captivating audiences and leaving them spellbound. His dedication to storytelling and his unique perspective make him an invaluable asset to the blog site.',
    imageUrl:
      '',
  },
    // More people...
  ]
  
  export default function About() {
    return (
    <div>
        <Navbar />
        <br /><br />
<h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-black">Welcome to  <span class="text-blue-600 dark:text-blue-500">the world's #1</span> Blog<sub>site</sub>.</h2>
<p className="mt-6 text-lg leading-8 text-gray-600" >At Blog<sub>Site</sub> , we believe in the power of words to transform lives and shape perspectives. Our vision is to create a vibrant online community where individuals can explore diverse ideas, engage in constructive dialogues, and find inspiration to pursue their passions.</p>

        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to Blog<sub>Site</sub>, your ultimate destination for insightful articles, captivating stories, and thought-provoking discussions. Founded by Shoaib and Rohit, two passionate individuals driven by their love for sharing knowledge and fostering meaningful connections, our platform aims to inspire, educate, and entertain readers from all walks of life.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-36 w-36 rounded-full" src={person.imageUrl} alt="Photo" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.info}</p>
                  </div>
                </div>
              </li>
              
            ))}
          </ul>
        </div>
      </div>
    </div>
      
    )
  }
  