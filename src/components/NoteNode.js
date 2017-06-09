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
    if(note.id2 === 'sent') {
        return (
          <tr className="note-node">
            <th>{note.date}</th>
            <td className="time">{note.timestamp}</td>
            <td className="description">
              <h4>MESSAGE SENT ({note.author}) <span>&bull; {note.message}</span></h4>
            </td>
          </tr>
        );
    }
    else if (note.id2 === 'view') {
        return (
          <tr className="note-node">
            <th>{note.date}</th>
            <td className="time">{note.timestamp}</td>
            <td className="description">
              <h4>VIEWED PROFILE ({note.author})</h4>
            </td>
          </tr>
        );
    }
    else if (note.id2 === 'comment') {
        return (
          <tr className="note-node">
            <th>{note.date}</th>
            <td className="time">{note.timestamp}</td>
            <td className="description">
              <h4>AGENT NOTE ({note.author})</h4>
              <p className="comment">{note.message}</p>
            </td>
          </tr>
        );
    }
    else {
        return (
          <tr className="note-node">
            <th>{note.date}</th>
            <td className="time">{note.timestamp}</td>
            <td className="description">
              <h4>EVENT <span>&bull; ({note.author}) &bull; {note.message}</span></h4>
            </td>
          </tr>
        );
    }
};

export default NoteNode;
