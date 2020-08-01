import React, { Component } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import cities from "../../config/cities"
import { Button, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

class SearchWeather extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        if(!event.target.elements.cityname.value){
           alert("fill the city for weather")
        }else{
            this.props.searchWeatherBycity(event.target.elements.cityname.value)

        }
    }

    render() { 
        return ( 
            <Container className="mt-6">
            <Box
                boxShadow={2}
                bgcolor="background.paper"
                m={1}
                p={1}
            >
                 <form onSubmit={this.handleSubmit}>
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
                                    style={{background:"#e2ebf0"}}>Search</Button>
                        </Grid>
                    </Grid>
            </form>
            </Box>
            </Container>
         );
    }
}
export default SearchWeather;