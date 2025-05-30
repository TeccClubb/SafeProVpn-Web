
import AdvancedFeatureSecurity from '@/components/feature/advanced-feature-sec';
import ChooseSafeProVpn from '@/components/feature/choose-safepro-vpn';
import KeyFeature from '@/components/feature/key-feature';
import UltimatePrivacy from '@/components/feature/ultimate';
import React from 'react'

const Feature = () => {
  return (
    <div>
      <UltimatePrivacy></UltimatePrivacy>
      <KeyFeature></KeyFeature>
      <AdvancedFeatureSecurity></AdvancedFeatureSecurity>
      <ChooseSafeProVpn></ChooseSafeProVpn>
    </div>
  )
}

export default Feature;
