//Greeter2,js
import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter2.css';//导入

class Greeter2 extends Component{
  render() {
    return (
      <div className={styles.root}>
        测试{config.greetText}
      </div>
    );
  }
}

export default Greeter2