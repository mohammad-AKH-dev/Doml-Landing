 import React from 'react'
 
 function CopyRight() {
   return (
     <div className='copy-right__section container mx-auto mt-10'>
       <p className="pricing-section-outro text-[20px] font-sans text-center">
        Trusted by the world’s most ambitious teams.
      </p>
      <div className='w-full copy-right-border h-[1px] bg-white mt-32'></div>
      <div className='flex items-center justify-center sm:justify-between mt-4 flex-wrap'>
        <span>Copyright © 2022 DOML. All rights reserved.</span>
        <span>Terms of Use & Privacy Policy</span>
      </div>
     </div>
   )
 }
 
 export default CopyRight
 