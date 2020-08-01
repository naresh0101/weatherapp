import React, { Component } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import cities from "../../config/cities"
import { Button, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

class SearchWeather extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchWeatherBycity(event.target.elements.cityname.value)
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                    <Container className="mt-6">
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={9}>
                            <Autocomplete
                                freeSolo
                                id="free-solo-2-demo"
                                disableClearable
                                options={cities.cities.map((city) => city)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Search for the City..."
                                        variant="outlined"
                                        name='cityname'
                                        fullWidth
                                        size="small"
                                        InputProps={{ ...params.InputProps, type: 'search' }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Button fullWidth 
                                    type="submit"
                                    variant='outlined' className="glb-btn" color='primary'>Search</Button>
                        </Grid>
                    </Grid>
                    </Container>
            </form>
         );
    }
}
 
export default SearchWeather;