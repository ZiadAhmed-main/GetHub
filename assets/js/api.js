/**
 * @license MIT
 * @author Ziad Ahmed <ziadahmedcf@gmail.com>
 * @copyright Ziad Ahmed 2023
 */

"use strict";

/**
 * Fetch data from server
 * @param {*} url  API Url [required]
 * @param {*} successCallBack Success callback [required]
 * @param {*} errorCallBack Error callback [optional]
 */

export async function fetchData(url, successCallBack, errorCallBack) {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    successCallBack(data);
  } else {
    const error = await response.json();
    errorCallBack && errorCallBack(error.message);
  }
}
