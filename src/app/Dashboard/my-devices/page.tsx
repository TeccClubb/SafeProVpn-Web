

import DeviceDownloadSection from '@/components/dashboard/mydevices/DeviceDownloadSection';
import DeviceTable from '@/components/DeviceTable';
import React from 'react'

const Billing = () => {
  return (
    <div className='w-full'>
      <DeviceTable/>
      <DeviceDownloadSection/>
    </div>
  )
}

export default Billing;
