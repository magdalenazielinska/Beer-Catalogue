import React from "react";
import { BarLoader } from 'react-spinners';
import InfiniteScroll from 'react-infinite-scroll-component';
import { BeerItem } from './beeritem.jsx';

export class BeerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            error: '',
            isLoading: false,
            index: 1,
            fetch: true
        }
    }

    fetchData = (url) => {
        fetch(url).then( results => {
            if (results.ok) {
                return results.json()
            } else {
                throw new Error('Error!');
            }
        }).then( data => {
            if (data.length > 0) {
                let beers = this.state.beers;
                let fetchBeers = data.map ( beer => {
                    return <BeerItem
                        key={beer.id}
                        img={beer.image_url}
                        name={beer.name}
                        tagline={beer.tagline}
                        ibu={beer.ibu}
                        abv={beer.abv}
                        ebc={beer.ebc}
                        description={beer.description}
                        best={beer.food_pairing}
                        tips={beer.brewers_tips}
                    />
                });
                beers.push(fetchBeers);
                this.setState({ beers, isLoading: false })
            } else {
                this.setState({fetch: false});
            }

        }).catch( error =>
            this.setState({ error, isLoading: false }));
    }

    componentDidMount = () => {
        this.setState({ isLoading: true });
        this.fetchData('https://api.punkapi.com/v2/beers?page=1&per_page=20');
    }

    fetchMoreData = () => {
        let newIndex = this.state.index + 1;
        this.setState({index: newIndex});
        let newUrl = 'https://api.punkapi.com/v2/beers?page=' + this.state.index + '&per_page=20';
        this.fetchData(newUrl);
    }

    refresh = () => {
        this.setState({beers: []});
    }

    render() {
        if (this.state.isLoading) {
            return (
                <main className='main'>
                    <div className='spinner'>
                        <BarLoader
                            color={'#88dbfd'}
                            loading={this.state.isLoading}
                        />
                    </div>
                </main>
            )
        } else if (this.state.error) {
            return (
                <main className='main'>
                    <p className='error-loading spinner'>Error!</p>
                </main>
            )
        } else {
            return (
                <main className='main'>
                    {this.state.beers}

                    <InfiniteScroll
                        pullDownToRefresh
                        dataLength={this.state.beers.length}
                        refreshFunction={this.refresh}
                        next={this.fetchMoreData}
                        hasMore={this.state.fetch}
                        loader={<div className='spinner'>
                            <BarLoader
                                color={'#88dbfd'}
                                loading={this.state.fetch}/>
                        </div>}
                        scrollThreshold={1}
                        endMessage={
                            <p style={{textAlign: 'center'}}>
                                No more beers! :(
                            </p>
                        }>
                    </InfiniteScroll>
                </main>
            )
        }
    }
}