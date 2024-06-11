import React, { useState, useEffect} from "react";
import axios from "axios";

const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrls, setShortUrls] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the long URL to the backend endpoint /api/shorten-url
      const response = await axios.post(
        "http://localhost:4000/api/shorten-url",
        { url }
      );

      console.log(response.data);

      if (response.status === 200) {
        const newShortUrl = response.data;
        // Add the new shortened URL to the list of short URLs in the state
        setShortUrls([...shortUrls, newShortUrl]);
        // Clear the input field
        setUrl("");
      } else {
        console.error("Error shortening the URL");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

   useEffect(() => {
     const fetchUrls = async () => {
       try {
         // Send the GET request to the backend endpoint /api/listurls
         const response = await axios.get("http://localhost:4000/api/listurls");

         if (response.status === 200) {
           // Update the state with the list of URLs
           setShortUrls(response.data);
         } else {
           console.error("Error fetching the URLs");
         }
       } catch (error) {
         console.error("Error:", error);
       }
     };

     // Fetch URLs when the component mounts
     fetchUrls();
   }, []);

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Shorten URL</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Count of URL clicks</th>
          </tr>
        </thead>
        <tbody>
          {shortUrls.map((shortUrl, index) => (
            <tr key={index}>
              <td>{shortUrl.originalUrl}</td>
              <td>
                <a
                  href={shortUrl.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {shortUrl.shortUrl}
                </a>
              </td>
            
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlShortener;
