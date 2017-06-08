import React from 'react';

/*

 A NoteNode has the structure:
{
  id: xxx,
  message: xxx,
  timestamp: xx:xx,
}

*/
export const NoteNode = ({note}) => {
  return (
    <div className="note-node">
        <h3>
          ID: {note.id}<br/>
          Time: {note.timestamp}
        </h3>
        <p>
          {note.message}
        </p>
    </div>
  );
};

export default NoteNode;
