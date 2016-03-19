/**
 * Created by a282993047 on 2016/3/19.
 */
var countNum = 0;
function count(){
    postMessage(countNum);
    countNum++;
    setTimeout(count,1000);
}
count();
