/* eslint-env browser */

export function xhrequest(method, url, data) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(method, url, true);
    request.onload = (resp) => {
      resolve(resp.target.responseText);
    };
    request.onerror = (err) => {
      reject(err);
    };
    request.send(data);
  });
}

export function get(url) {
  return xhrequest('GET', url, null);
}
