import React from 'react';

/*

 A FullStoryNode has the structure:
{
  id: xxx,
  url: xxx,
  timestamp: xx:xx,
}

*/
export const FullStoryNode = ({fullstory}) => {
  return (
    <tr className="fullstory-node">
      <th>{fullstory.date}</th>
      <td className="time">{fullstory.timestamp}</td>
      <td className="description">
        <h4>ID: {fullstory.id}</h4>
          <p>
            url: {fullstory.url}
          </p>
      </td>
    </tr>
  );
};

export default FullStoryNode;
