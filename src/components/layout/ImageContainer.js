//css
import classes from './ImageContainer.module.css';
//imports
import ExpBar from '../common/ExpBar';
import Characters from '../common/Characters';

const ImageContainer = ({ isStart, Number, Citizen }) => {
  return (
    <div className={classes['image-container']}>
      <div className={classes['background']}>
        <ExpBar isStart={isStart} />
        <Characters Number={Number} CitizenImage={Citizen} />
      </div>
    </div>
  );
};

export default ImageContainer;
