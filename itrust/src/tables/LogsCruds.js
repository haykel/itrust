import React from 'react'

const LogsCruds = props => (
  <table className="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Time</th>
        <th>Action</th>
      </tr>
    </thead>
    
    <tbody>
      {props.logs.length > 0 ? (
        props.logs.map(log => (
          <tr key={log.id}>
            <td>{log.id}</td>
            <td>{log.time}</td>
            <td>{log.action}</td>         
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Logs</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default LogsCruds
