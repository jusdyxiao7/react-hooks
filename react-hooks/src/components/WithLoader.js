// high order component
import React from 'react'
import axios from 'axios'

const withLoader = (WrappedComponent, url) => {
  return class LoaderComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        isLoading: false
      }
    }
    componentDidMount() {
      this.setState({
        isLoading: true
      })
      axios.get(url).then((response) => {
        this.setState({
          data: response.data.data,
          isLoading: false
        })
      })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
  }
}

export default withLoader
