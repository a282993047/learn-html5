/**
 * Created by a282993047 on 2016/3/19.
 */
var numDiv;
var work = null;
window.onload = function() {
    numDiv = document.getElementById("numdiv");
    document.getElementById('start').onclick = startWorker;
    document.getElementById('stop').onclick =function(){
        if(work){
            work.terminate();//ֹͣ �ͷ���Դ 
            work = null;//work���³�ʼ��
        }
    };

}

function startWorker(){
    if(work){
        return;
    }
    work = new Worker('./js/count.js');
    work.onmessage = function(event){
        numDiv.innerHTML = event.data;
    }
}