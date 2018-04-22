import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <header className='header'>
                    <div className='header__text-box'>
                        <h1 className="heading-primary">
                            <span className="heading-primary--main">Beer</span>
                            <span className="heading-primary--sub">Catalogue</span>
                        </h1>
                    </div>
                </header>
                {this.props.children}
            </div>
        )
    }
}