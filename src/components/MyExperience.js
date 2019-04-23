import React, { Component } from 'react'
import windowDimensions from 'react-window-dimensions'
import './MyExperience.scss'
import ImageCard from 'components/Common/ImageCard'

class MyExperience extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    const {state, props} = this

    return (
      <div className="MyExperience" id="experience">
        <div className="grid-container">
          <h1>Companies I've Worked For</h1>

          <ImageCard
            href='http://covera.ai/'
            header=''
            description={'Covera is a digital insurance brokerage designed to help users find the best and most cost effective insurance policies on a yearly basis.'}
            imagePath={require('images/covera-2-cropped.jpg')}
            imageClass='effect-left'
          />

          <ImageCard
            href='https://www.toptal.com/'
            header=''
            description={'Toptal is an agency that connects freelance software developers, designers and project managers to prospective clients.'}
            imagePath={require('images/toptal-2-cropped.png')}
            imageClass='effect-left'
          />

          <ImageCard
            href='https://www.reol.com/'
            header=''
            description='REOL Services is a consultancy that provices digital strategy and marketing solutions for the real estate industry.'
            imagePath={require('images/reol-services-2-cropped.png')}
            imageClass='effect-left'
          />

          <ImageCard
            href='https://www.nuance.com/index.html'
            header=''
            description='Nuance Communications is a multinational computer software company that specializes in voice recognition software.'
            imagePath={require('images/nuance-2-cropped.jpg')}
            imageClass=''
          />

          <ImageCard
            href='https://www.navori.com/'
            header=''
            description={'Navori Labs is a digital signage software company whose software is used in digital displays across over 100 countries.'}
            imagePath={require('images/navori-labs-2-cropped.jpg')}
            imageClass=''
          />
        </div>
      </div>
    )
  }
}

export default windowDimensions()(MyExperience)
