import React, { Component } from 'react'
import Subtitle from '../Subtitle';
import SectionHeading from '../SectionHeading';
import MainBox from '../MainBox';
import AboutBox from '../AboutBox';
import ContentBox from '../ContentBox';
import Project from '../Project';
import ProjectPage from '../ProjectPage'

// array of project info objects
import allProjects from "./projects.json";

export default class index extends Component {

    state = {
        projectView: "All",
        projects: allProjects
      };

      handlePageChange = page => {
        this.setState({ projectView: page });
      };
    
      // TODO: Implement this function
      // traverse the array
      // if this.state.projectView === this.state.projects.projectName
      // then render ProjectPage with info at that index
      // also want to pass in an event listener to go back
      conditionalRender = () => {
        if (this.state.projectView === "Vědomý") {
          return (<ProjectPage name={this.state.projects[0].projectName}
                              langs={this.state.projects[0].projectLangs}
                         deployLink={this.state.projects[0].deployLink}
                         githubLink={this.state.projects[0].githubLink}
                            imgLink={this.state.projects[0].imgLink}/>
          );
        } else if (this.state.projectView === "Pantrimonium") {
            return (<ProjectPage name={this.state.projects[1].projectName}
                                langs={this.state.projects[1].projectLangs}
                           deployLink={this.state.projects[1].deployLink}
                           githubLink={this.state.projects[1].githubLink}
                              imgLink={this.state.projects[1].imgLink}/>
            );
        } else if (this.state.projectView === "E-Commerce Back-End") {
            return (<ProjectPage name={this.state.projects[2].projectName}
                                langs={this.state.projects[2].projectLangs}
                           deployLink={this.state.projects[2].deployLink}
                           githubLink={this.state.projects[2].githubLink}
                              imgLink={this.state.projects[2].imgLink}/>
            );
        } else if (this.state.projectView === "Employee Tracker") {
            return (<ProjectPage name={this.state.projects[3].projectName}
                                langs={this.state.projects[3].projectLangs}
                           deployLink={this.state.projects[3].deployLink}
                           githubLink={this.state.projects[3].githubLink}
                              imgLink={this.state.projects[3].imgLink}/>
            );
        } else if (this.state.projectView === "Employee Directory") {
            return (<ProjectPage name={this.state.projects[4].projectName}
                                langs={this.state.projects[4].projectLangs}
                           deployLink={this.state.projects[4].deployLink}
                           githubLink={this.state.projects[4].githubLink}
                              imgLink={this.state.projects[4].imgLink}/>
            );
        } else if (this.state.projectView === "Weather Dashboard") {
            return (<ProjectPage name={this.state.projects[5].projectName}
                                langs={this.state.projects[5].projectLangs}
                           deployLink={this.state.projects[5].deployLink}
                           githubLink={this.state.projects[5].githubLink}
                              imgLink={this.state.projects[5].imgLink}/>
            );
        } else {
            return (

                <MainBox>

                <SectionHeading title="Work" id="work"/>

                    <ContentBox>
                        {this.state.projects.map(project=>
                        <Project key={project.projectName} 
                                name={project.projectName} 
                                langs={project.projectLangs} 
                                deployLink={project.deployLink} 
                                githubLink={project.githubLink} 
                                imgLink={project.imgLink}/>)}
                    </ContentBox>

                </MainBox>

            );
        }
      }

    render() {
        return (
            <main>

                <Subtitle/>

                <MainBox>
                    <SectionHeading title="About Me" id="about"/>
                    <ContentBox>
                        <AboutBox/>
                    </ContentBox>
                </MainBox>

                {/* TODO: implement event listeners */}
                {/* currently, */}
                {this.conditionalRender()}

            </main>
        )
    }
}
