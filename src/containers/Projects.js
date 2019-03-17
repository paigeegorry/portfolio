import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Projects from '../components/app/Projects';
import { getProjects } from '../selectors/projects';
import { fetchProjects } from '../actions/projects';

class AllProjects extends PureComponent {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Projects projects={this.props.projects} />
    );
  }
}

const mapStateToProps = state => ({
  projects: getProjects(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchProjects());
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AllProjects);
