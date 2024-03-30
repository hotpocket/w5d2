import React from "react";
import PropTypes from "prop-types";

export interface WebsiteType {
  name: string;
  url: string;
}

const Website = ({ name, url }: WebsiteType) => {
  return (
    <div>
      name: {name}, url: {url}
    </div>
  );
};

Website.propTypes = {};

export default Website;
