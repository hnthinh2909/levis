import React from 'react';
import './Search.scss';
import Mark from '../../assets/img/mark.jpg';
import ArrowRight from '../../assets/icon/right.svg';

function Search() {
    return (
        <div className="search">
            <div className="search-grid">
                <div className="search-input">
                    <svg viewBox="0 0 17 17" id="search" className="searchIcon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7 6a4 4 0 108 0 4 4 0 00-8 0zm.524 4.89A6 6 0 106.11 9.477L.944 14.642a1 1 0 001.414 1.414l5.165-5.164z"></path>
                    </svg>
                    <input type="text"placeholder="What are you looking for?"/>
                    <img src={ArrowRight} alt="" className="iconRight"/>
                </div>
                <div className="search-recommend">
                    <div className="search-recommend--top">
                        <strong>TOP SEARCHES</strong>
                        <ul>
                            <li>Ribcage Jeans</li>
                            <li>Ribcage</li>
                            <li>Wedgie</li>
                            <li>511</li>
                            <li>Wedgie Jeans</li>
                        </ul>
                    </div>
                    <div className="search-recommend--popular">
                        <div className="list-popular">
                            <div className="popular-info">
                                <div className="info-img">
                                    <img src={Mark} alt=""/>
                                </div>
                                <p className="info-brand">
                                    Reusable Reversible Printed Face Mask (3 Pack) - <strong>$15</strong>
                                </p>
                            </div>
                        </div>
                        <div className="list-popular">
                            <div className="popular-info">
                                <div className="info-img">
                                    <img src={Mark} alt=""/>
                                </div>
                                <p className="info-brand">
                                    Reusable Reversible Printed Face Mask (3 Pack) - <strong>$15</strong>
                                </p>
                            </div>
                        </div>
                        <div className="list-popular">
                            <div className="popular-info">
                                <div className="info-img">
                                    <img src={Mark} alt=""/>
                                </div>
                                <p className="info-brand">
                                    Reusable Reversible Printed Face Mask (3 Pack) - <strong>$15</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Search
