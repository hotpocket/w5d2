// import React from "react";
import { useState, useEffect } from "react";
import Website from "../../Components/Website/Website";
import { WebsiteType } from "../../lib/types";
import "./Website.css";

const WebsitePage = () => {
  const [websites, setWebsites] = useState<Array<WebsiteType>>([]);

  const fetchWebsites = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/hotpocket/w5d2/main/src/Data/websites.json"
      );
      const data = await response.json();
      if (data) {
        setWebsites(data);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      /* runs code regardless of success or failure */
    }
  };

  useEffect(() => {
    fetchWebsites();
  }, []);

  return (
    <div>
      <div className="title">My Super Awesome React Resources!</div>
      <div className="subtitle">Inspect the awesomeness and be awed!</div>
      <div className="eduResources">
        <div>
          <b className="center">Websites</b>
          {websites.map((website) => {
            return (
              <Website
                key={website.url}
                name={website.name}
                url={website.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WebsitePage;
