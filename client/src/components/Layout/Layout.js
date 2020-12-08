import React, {Component} from 'react';
import Aux from '../../hoc/AuxiliaryWrapper';
import Classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';


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
          <Toolbar
              isAuth={this.props.isAuthenticated}
              drawerToggleClicked={this.sideDrawerToggleHandler}
          />
          <SideDrawer
              isAuth={this.props.isAuthenticated}
              open={this.state.showSideDrawer}
              closed={this.sideDrawerClosedHandler}
          />
          <main className={Classes.Content}>
            {this.props.children}
          </main>
        </Aux>
    )
  }
}
const mapStateToProps = state =>{
    return {
        isAuthenticated: state.auth.token != null
    }
}
export default connect(mapStateToProps)(Layout);