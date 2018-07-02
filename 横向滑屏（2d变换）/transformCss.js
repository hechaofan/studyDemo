(function (w) {
    w.transformCss =function (node,name,value) {
      //检查是否有transform属性，没有就加上
      if(!node.transform){
        node.transform = {}
      };

      if(arguments.length>2){
        //写的操作
        //将name和value写到node的transform中
        node.transform[name] = value;
        var result = ''
        for (var a in node.transform) {
          switch(a){
            case 'rotate':
            case 'skew':
            case 'skewX':
            case 'skewY':
              result += a+'('+node.transform[a] +'deg)'
              break;
            case 'scale':
            case 'scaleX':
            case 'scaleY':
              result += a+'('+node.transform[a] +')'
              break;
            case 'translate':
            case 'translateX':
            case 'translateY':
              result += a+'('+node.transform[a] +'px)'
              break;
          }
        }
        node.style.transform = result;

      }else{
        //读的操作
        if(typeof node.transform[name] == 'undefined'){
          if(name == 'scale' || name == 'scaleX' || name == 'scaleY'){
            value = 1
          }else{
            value = 0
          }
        }else{
          //正常值
          value = node.transform[name]
        }
        return value
      }
    }
})(window)