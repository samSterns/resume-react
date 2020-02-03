import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        const { header, contacts, techStack } = data;
        return(
            <div>
                <Grid>
                    <Cell class="resume-left-col" col={3}>
                        <title>Sam Sterns</title>
                        <h1>Software Engineer</h1>
                    </Cell>
                    <Cell class="resume-right-col" col={5}>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;