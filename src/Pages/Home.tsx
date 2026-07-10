
import PublicNavbar from '../components/Layout/PublicNavbar'
import React from 'react'
import { Button, buttonVariants } from '../components/ui/button'
import { DiaTextReveal } from "@/components/ui/dia-text-reveal"
import { TextReveal } from "@/components/ui/text-reveal"


const Home = () => {
  return (
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-start justify-between gap-8">
        {/* Left Side: Text Content */}
        <div className="w-1/2 pt-8">
          <div className="text-3xl font-light-bold text-gray-800">
            Smart, Reliable & Scalable
            <br />
            Scalable IT Solutions
            <br />
            for Your Business
            <div>
                <p className='mt-4 font-light text-gray-600'>
                Transforming Ideas into Digital Reality. Let's Build
                <br />
                Success Together!
                </p>

            </div>
            <div>
              <Button variant="default" className="mt-4 bg-[#0f407b]">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side: Window Mock */}
        <div className="w-1/2 max-w-lg rounded-xl border shadow-lg">
          <div className="flex justify-start gap-2 rounded-t-xl border-b bg-gray-50 p-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
           <div className="bg-white p-8 font-mono text-sm leading-8">
            <p>&gt; Initializing Project With Bross...</p>

              <p className="text-green-600">
                ✔ Brand Identity Assets ... Synchronized
              </p>

              <p className="text-green-600">
                ✔ Performance Optimization ... 100%
              </p>

              <p className="text-green-600">
                ✔ Scalable Infrastructure ... Active
              </p>

              <p className="text-green-600">
                ✔ Secure Client Portal ... Encrypted
              </p>

              <p className="text-green-600">
                ✔ Cloud System ... Deployed
              </p>

              <p className="text-gray-700">
                Installing dependencies...
              </p>

              <p className="text-blue-600">
                Initialized With Bross Repository.
              </p>

              <p className="font-semibold">
                Ready For Growth 🚀
              </p>

              <p className="text-gray-500">
                Your Digital Transformation Starts Now!
              </p>

              <p className="text-gray-500">
                Project Online!
              </p>

              <p className="text-gray-400">
                Elevating Your Brand
              </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home