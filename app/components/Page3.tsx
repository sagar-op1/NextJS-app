import React from 'react'
import Image from 'next/image'

const Page3 = () => {
  return (
    <div className="page3-container">
      <div className='page3-box'>
        <div className="card1">
          <div className="pg3-img">
          <Image src="/project-plan.svg" alt="" width={50} height={50}/>
          </div>
          <div className='para-3'>
            <p>Completed Projects</p>
          </div>
          <div className="Number">
            100+
          </div>
          
        </div>
        <div className="card1">
          <div className="pg3-img">
          <Image src="/rating (1).svg" alt="" width={50} height={50}/>
          </div>
          <div className='para-3'>
            <p>Completed Projects</p>
          </div>
          <div className="Number">
            100+
          </div>
          
        </div>
        <div className="card1">
          <div className="pg3-img">
          <Image src="/raise.svg" alt="" width={50} height={50}/>
          </div>
          <div className='para-3'>
            <p>Completed Projects</p>
          </div>
          <div className="Number">
            100+
          </div>
          
        </div>
        <div className="card1">
          <div className="pg3-img">
          <Image src="/timeline 2.svg" alt="" width={50} height={50}/>
          </div>
          <div className='para-3'>
            <p>Completed Projects</p>
          </div>
          <div className="Number">
            100+
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Page3