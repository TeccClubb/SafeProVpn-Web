
import React from 'react'
import Section from '../sections/Section'
import Button from '../Button/button'

const UltimatePrivacy = () => {
  return (
    <Section className='bg-slate-50' heading={<>Advanced Features for <br></br><span className='text-primary'>Ultimate Privacy</span></>}
    description="SafePro VPN provides top-tier security features to keep your online activities private and your data protected, no matter where you are.">
    <div className='flex justify-center'>
     <Button>Get Free Trial</Button>
     <Button className='ml-4' variant='outline'>Learn More</Button>
    </div>
    </Section>
  )
}

export default UltimatePrivacy
