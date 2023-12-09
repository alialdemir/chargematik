import CmCarousel from '../components/Carousel'
import SelectPlugSlider from '../assets/icons/SelectPlugSlider'
import SelectStationSlider from '../assets/icons/SelectStationSlider'
import SelectChargedSlider from '../assets/icons/SelectChargedSlider'

const sliders = [
  {
    id: 1,
    slider: <SelectStationSlider />,
  },
  {
    id: 2,
    slider: <SelectPlugSlider />,
  },
  {
    id: 3,
    slider: <SelectChargedSlider />,
  },
]
const Tutorial = () => <CmCarousel sliders={sliders} />

export default Tutorial
