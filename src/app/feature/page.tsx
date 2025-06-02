
import AdvancedFeatureSecurity from '@/components/feature/advanced-feature-sec';
import ChooseSafeProVpn from '@/components/feature/choose-safepro-vpn';
import DownloadSafeVpn from '@/components/feature/download-safe-vpn';
import FrequentlyQuestionPartTwo from '@/components/feature/frequent-question-part2';
import KeyFeature from '@/components/feature/key-feature';
import UltimatePrivacy from '@/components/feature/ultimate';
import React from 'react'

const Feature = () => {
  return (
    <div>
      <UltimatePrivacy></UltimatePrivacy>
      <KeyFeature></KeyFeature>
      <AdvancedFeatureSecurity></AdvancedFeatureSecurity>
      <DownloadSafeVpn></DownloadSafeVpn>
      <ChooseSafeProVpn></ChooseSafeProVpn>
      <FrequentlyQuestionPartTwo></FrequentlyQuestionPartTwo>
    </div>
  )
}

export default Feature;
