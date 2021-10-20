import FeatureBox from "../featureBox/FeatureBox";
import "./_feature.scss";

const Feature = () => {
  return (
    <div id='feature' className='featureWrapper'>
      <div className='feature'>
        <h2>OUR APP FEATURE</h2>

        <div className='feature__boxes'>
          <FeatureBox
            text='Cut out the clutter with curated content handpicked especially for you.'
            title='Selection'
            img='https://intrigd.co/assets/images/Selection.png'
          />
          <FeatureBox
            text='Differing opinions aggregated in an easy-to-consume fashion.'
            title='Aggregation'
            img='https://intrigd.co/assets/images/Aggregation.png'
          />
          <FeatureBox
            text='Diverse range of complex topics simplified for you.'
            title='Simplification'
            img='https://intrigd.co/assets/images/Simplification.png'
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
