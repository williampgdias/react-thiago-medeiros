import React from "react";

const Loading = ({ visible }) => {
  return (
    <div>
      { visible ? 'Loading...' : '' }
    </div>
  )
}

export default Loading;