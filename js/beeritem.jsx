import React from 'react';
import Modal from 'react-modal';
import { BeerDetails } from './beerdetails.jsx';

export class BeerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    openModal = () => {
        this.setState({
            showModal: true
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false
        });
    }

    render() {
        return (
            <div className='main__item'>
                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    style={{overlay: {backgroundColor: 'rgba(115, 115, 115, 0.85)'}}}
                    contentLabel='Beer details'
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                    className='item-details'>
                    <BeerDetails
                        name={this.props.name}
                        tagline={this.props.tagline}
                        img={this.props.img}
                        ibu={this.props.ibu}
                        abv={this.props.abv}
                        ebc={this.props.ebc}
                        description={this.props.description}
                        best={this.props.best}
                        tips={this.props.tips}
                        closeModal={this.closeModal}
                    />
                </Modal>

                <div className='main__item-imgbox'>
                    <img className='item-img' src={this.props.img} alt={this.props.name} />
                </div>
                <div className='main__item-descrbox'>
                    <div className='item-name'>{this.props.name}</div>
                    <div className='item-description'>{this.props.description}</div>
                    <div className='btn btn--open-modal' onClick={this.openModal}>Read more...</div>
                </div>
            </div>
        )
    }
}