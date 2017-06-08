import React from 'react';
import NoteNode from './NoteNode';
import FullStoryNode from './FullStoryNode';
import EventNode from './EventNode';

export const Timeline = ({data}) => {
  // Map through the todos
  const nodes = data.map((element) => {
    switch (element.type) {

      case 'fullstory':
        return (
          <FullStoryNode key={element.id} fullstory={element}/>
        );
        break;

      case 'note':
        return (
          <NoteNode key={element.id} note={element}/>
        );
        break;

      case 'event':
        return (
          <EventNode key={element.id} event={element}/>
        );
        break;
    }
  });

  return (<ul>{nodes}</ul>);
};

export default Timeline;
