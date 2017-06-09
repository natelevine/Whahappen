import React from 'react';

/*

 A NoteNode has the structure:
{
  type: 'note',
  id: xxx,
  message: 'xxx',
  timestamp: xx:xx, //TODO: make this an actual timestamp, not a string
}

*/
export const NoteNode = ({note}) => {
  return (
    <tr className="note-node">
      <th>June 8</th>
      <td className="time">{note.timestamp}</td>
      <td className="description">
        <h4>
          Something happened
          <p>
            {note.message}
          </p>
        </h4>
      </td>
    </tr>
  );
};

export default NoteNode;
