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
        <h4>User Session <span>&bull; X min, Y events</span></h4>
          <p>
            <a href={fullstory.url}>Play session</a>
          </p>
      </td>
    </tr>
  );
};

export default FullStoryNode;
