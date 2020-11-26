import React from 'react';


function ActorCard(props) {
  return (
    <div className="actorscard">
      <table>
        <tbody>
          <tr>
            <td>
              <img className="image" src={props.img} />
            </td>
            <td>
              <p>{props.name}</p>
            </td>
            <td>
              <p>{props.popularity}</p>
            </td>
            <td>
              <button onClick={props.delete}>Delete me</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ActorCard;