function callOnTarget(func, obj1, obj2) {
  return func.call(obj1, obj2);
}

const cat = {
  name: "Breakfast"
};

const mouse = {
  name: "Jerry"
};

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
