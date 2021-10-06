import Button from '../components/Button';
import homeStyles from '../styles/Home.module.css';
import buttonStyles from '../styles/ButtonStyles.module.css';

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <Button className={buttonStyles.button} />
    </div>
  );
}
