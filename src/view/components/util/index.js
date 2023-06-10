let util = {};

util.levelArr = [0, 1, 2, 3];

util.oneOf = (item, arr) => {
    return arr.some(i => {
        return i === item;
    });
};
util.getIndex = (list, name) => {
    for (const i in list) {
        if (list[i] === name) {
            return i;
        }
    }
};
//重写for in循环,axios({...}).then((res)=>{ let array = util.forInArray(res) })重写取到的数组之后可以直接for in循环不会出bug
util.forInArray = (data)=> {
	let array = []
	for(let i in data){
		if(typeof(data[i]) == 'function' || data[i].hasOwnProperty()){
			continue
		}
		array.push(data[i])
	}
	return array
}
util.dataType = ['all', 'code', 'name'];

util.checkLevel = val => {
    return util.oneOf(val, util.levelArr);
};
util.setStorage = (key, value)=> {
  //对象必须序列化才能存入缓存
  localStorage.setItem(key, JSON.stringify(value));
}
util.getStorage = (key)=> {
  //反序列化
  return JSON.parse(localStorage.getItem(key));
}
util.removeStorage = (key)=> {
  localStorage.removeItem(key);
}
export default util;
