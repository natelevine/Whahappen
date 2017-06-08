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
    <div className="fullstory-node">
        <h3>
          ID: {fullstory.id}<br/>
          Time: {fullstory.timestamp}
        </h3>
        <p>
          url: {fullstory.url}
        </p>
    </div>
  );
};

export default FullStoryNode;
