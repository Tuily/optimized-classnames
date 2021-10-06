import cn from 'classnames';
import homeStyles from '../styles/Home.module.css';
import buttonStyles from '../styles/ButtonStyles.module.css';

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <button className={cn(homeStyles.button, buttonStyles.button)}> click me</button>
    </div>
  );
}
