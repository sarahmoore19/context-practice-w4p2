function boundFuncTimer(obj, func, delay) {
  newFunc = func.bind(obj);
  setTimeout(newFunc, delay);

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
