import axios from 'axios';

export function leaveRequest(data) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const dataJSON = JSON.stringify(data);

  return axios
    .post('https://hookb.in/eK160jgYJ6UlaRPldJ1P', dataJSON, config)
    .then((response) => response.data);
}
