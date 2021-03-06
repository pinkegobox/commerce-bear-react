import React, { Component } from 'react';
import Modal from "./Modal/Modal";
import AnnouncementBar from "./AnnouncementBar/AnnouncementBar";
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import Footer from './Footer/Footer';
import styles from './App.module.css'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isBarVisible: true,
      isModalVisible: true,
    };
  }

  //checks if string of false exists to indicate whether the user has visited the page & interacted with the bar and modal before
  //if the user has, then update state of isBarVisible and/or isModalVisible to false to prevent announcement bar & modal from appearing again
  componentDidMount() {
    if (localStorage.getItem("isBarVisible") === 'false') {
      this.setState({ isBarVisible: false });
    }

    if (localStorage.getItem("isModalVisible") === 'false') {
      this.setState({ isModalVisible: false });
    }
  }

  //once user clicks element, data about the user's visit is stored on their browser through localStorage
  handleModalClick = () => {
    this.setState({
      isModalVisible: false,
    });
    localStorage.setItem("isModalVisible", false);
  };

  handleBarClick = () => {
    this.setState({
      isBarVisible: false,
    });
    localStorage.setItem("isBarVisible", false);
  };

  render() {
    const { isModalVisible, isBarVisible } = this.state;

    // show transparent overlay effect over entire page if modal is visible
    // dismiss modal if user clicks outside of it
    const renderOverlay = isModalVisible ? <div className={styles.overlay} onClick={this.handleModalClick} /> : null;

    const renderModal = isModalVisible ? (
      <Modal close={this.handleModalClick} />
    ) : null;

    const renderBar = isBarVisible ? (
      <AnnouncementBar close={this.handleBarClick} />
    ) : null;

    return (
      <div className="App">
        {renderOverlay}
        {renderModal}
        {renderBar}
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
