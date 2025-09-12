import CityPageTemplate from '../../../components/CityPageTemplate';
import { getCityData } from '../../../config/cityData';

export default function AmericanForkPage() {
  const cityData = getCityData('american-fork');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}