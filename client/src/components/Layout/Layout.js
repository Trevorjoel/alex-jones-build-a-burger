import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
  state ={
    showSideDrawer: false
  };
  sideDrawerClosedHandler = () =>{
    this.setState({
      showSideDrawer: false
    })
  };
  sideDrawerToggleHandler = () =>{
      this.setState((prevState) =>{
         return {showSideDrawer: !prevState.showSideDrawer}})
      // Clean way of setting the state when it depends on the old state
      
  };
  render() {
    return (<Aux>
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
          <SideDrawer open={this.state.showSideDrawer}
                      closed={this.sideDrawerClosedHandler}
          />
          <main className={Classes.Content}>
            {this.props.children}
          </main>
        </Aux>
    )
  }
}

export default Layout;