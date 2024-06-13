import React, { Component } from 'react';

const LinkSection = ({ learnMoreLink, buyLink }) => {
  return (
    <div className="links-wrapper">
      <ul>
        <li><a href={learnMoreLink}>Learn more</a></li>
        <li><a href={buyLink}>Buy</a></li>
      </ul>
    </div>
  );
};

export default class PropsSection extends Component {
  render() {
    const { text, title, description, price, learnMoreLink, buyLink } = this.props;

    return (
      <div>
        
            <div className="new-alert">{text}</div>
            <div className="title-wraper bold black">{title}</div>
            {description && (
              <div className="description-wrapper black">
                {description}
              </div>
            )}
            {price && (
              <div className="price-wrapper grey">
                {price}
              </div>
            )}
            <LinkSection learnMoreLink={learnMoreLink} buyLink={buyLink} />

        
      </div>
    );
  }
}