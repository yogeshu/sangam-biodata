import FeatureSection from 'components/FeatureSection/FeatureSection'
import HeroContainer from 'components/HeroContainer/HeroContainer'
import SuccessStorySection from 'components/SuccessStorySection/SuccessStorySection'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <HeroContainer/>
            <FeatureSection/>
            <SuccessStorySection/>
        </div>
    )
}

export default HomePage