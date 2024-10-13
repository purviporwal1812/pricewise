import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PriceComparison = () => {
  const [comparisonData, setComparisonData] = useState([]);

  useEffect(() => {
    const fetchComparisonData = async () => {
      try {
        const response = await axios.get('http://your-api-url/compare');
        setComparisonData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComparisonData();
  }, []);

  return (
    <div>
      <h2>Price Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Store</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((item) => (
            <tr key={item.id}>
              <td>{item.productName}</td>
              <td>{item.store}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceComparison;
