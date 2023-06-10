
function convertMapToObj(strMap){
    let obj= Object.create(null);
    for (let[k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

function convertObjToMap(obj){
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
      strMap.set(k,obj[k]);
    }
    return strMap;
}

export default {
    mapToJson:function(map){  
        return JSON.stringify(convertMapToObj(map));
    },
    jsonToMap(jsonStr){
        return convertObjToMap(JSON.parse(jsonStr));
    }
}
