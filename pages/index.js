import Button from '../components/Button';
import homeStyles from '../styles/Home.module.css';
import customButtonStyles from '../styles/CustomButtonStyles.module.css';

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <Button className={customButtonStyles.button} />
    </div>
  );
}
