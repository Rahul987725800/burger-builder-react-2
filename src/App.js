import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route } from 'react-router-dom';
import Orders from './containers/Orders/Orders';
class App extends React.Component {
  // for testing withHandler unmount
  // state = {
  //     show: true,
  // };
  // componentDidMount() {
  //   setTimeout(()=>{
  //     this.setState({show: false});
  //   }, 5000);
  // }
  render() {
    return (
      <div className="App">
        <Layout>
          {/* {this.state.show ? <BurgerBuilder />: null} */}

          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
        </Layout>
      </div>
    );
  }
}
export default App;
