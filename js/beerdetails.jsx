import React from 'react';

export class BeerDetails extends React.Component {

    handleClick = () => {
        if (typeof this.props.closeModal() === 'function') {
            this.props.closeModal();
        }
    }

    render() {
        let best = this.props.best.map( (item, index) => {
            return <li key={index}>&ndash; {item}</li>
        });
        return (
            <div>
                <div className='details-box'>
                    <div className='btn btn--close-modal' onClick={this.handleClick}>Close</div>
                    <div className='details-box__img'>
                        <img src={this.props.img} alt={this.props.name}/>
                    </div>
                    <div className='details-box__about'>
                        <p className='details-box__name'>{this.props.name}</p>
                        <p className='details-box__tagline'>{this.props.tagline}</p>
                        <div className='details-box__line'/>
                        <div className='details-box__descr'>{this.props.description}</div>
                        <div className='details-box__qualities'>
                            <p><strong>IBU : </strong> {this.props.ibu}</p>
                            <p><strong>ABV : </strong> {this.props.abv}</p>
                            <p><strong>EBC : </strong> {this.props.ebc}</p>
                        </div>
                        <div className='details-box__serve'>
                            <strong>Best served with:</strong><br/>
                            <ul>
                                {best}
                            </ul>
                        </div>
                        <div className='details-box__tips'>
                            <strong>Brewers tips:</strong><br/>
                            {this.props.tips}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}