import CityPageTemplate from '../../../components/CityPageTemplate';
import { getCityData } from '../../../config/cityData';

export default function CentervillePage() {
  const cityData = getCityData('centerville');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}