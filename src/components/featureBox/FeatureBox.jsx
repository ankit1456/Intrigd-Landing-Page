import "./_featureBox.scss";

const FeatureBox = ({ title, text, img }) => {
  return (
    <div className='featureBox'>
      <img src={img} alt='' />

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
};

export default FeatureBox;
