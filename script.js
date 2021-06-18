var main=document.getElementById('main');

        var box=document.createElement('div');
        box.setAttribute('class','box');

        var form=document.createElement('form');
        form.setAttribute('name','form');

        var ip=document.createElement("input");
        ip.setAttribute('type','text');
        ip.setAttribute('class','textview');
        ip.setAttribute('name','textview');

        var table=document.createElement('table');
        var tbody=document.createElement('tbody');
        var tr=document.createElement('tr');
        var td=document.createElement("td");
        var input7=abc('span','btn','button',7,"insert(7)",'7','darkblue','white'); 
        var input8=abc('span','btn','button',8,"insert(8)",'8','darkblue','white');
        var input9=abc('span','btn','button',9,"insert(9)",'9','darkblue','white');
        var inputp=abc('span','btn','button','+',"insert('+')",'+','yellow','black');
        

        var tr1=document.createElement('tr');
        var td1=document.createElement("td");
        var input4=abc('span','btn','button',4,"insert(4)",'4','darkblue','white');
        var input5=abc('span','btn','button',5,"insert(5)",'5','darkblue','white');
        var input6=abc('span','btn','button',6,"insert(6)",'6','darkblue','white');
        var inputm=abc('span','btn','button','-',"insert('-')",'-','yellow','black');

        var tr2=document.createElement('tr');
        var td2=document.createElement("td");
        var input1=abc('span','btn','button',1,"insert(1)",'1','darkblue','white');
        var input2=abc('span','btn','button',2,"insert(2)",'2','darkblue','white');
        var input3=abc('span','btn','button',3,"insert(3)",'3','darkblue','white');
        var inputs=abc('span','btn','button','*',"insert('*')",'*','yellow','black');
        

        var tr3=document.createElement('tr');
        var td3=document.createElement("td");
        var inputc=abc('span','btn','button','C',"clean()",'C','rgb(247, 17, 93)','white');
        var input0=abc('span','btn','button',0,"insert(0)",'0','darkblue','white');
        var inpute=abc('span','btn','button','=',"equal('=')",'=','green','white');
        var inputd=abc('span','btn','button','/',"insert('/')",'/','yellow','black');
        // inputd.style.backgroundColor="yellow";
        // inputd.style.color="black";
        
        function abc(ele,cls,name,val="",a ="",num="",bg="",color=""){
        let rc=document.createElement(ele);
        rc.setAttribute('class',cls);
        rc.setAttribute('name',name);
        rc.setAttribute('value',val);
        rc.setAttribute('onclick',a);
        rc.innerHTML=num;
        rc.style.backgroundColor=bg;
        rc.style.color=color;
        return rc;
       } 
    td.append(input7,input8,input9,inputp);
    tr.append(td);

    td1.append(input4,input5,input6,inputm);
    tr1.append(td1)

    td2.append(input1,input2,input3,inputs);
    tr2.append(td2)

    td3.append(inputc,input0,inpute,inputd);
    tr3.append(td3)

    tbody.append(tr,tr1,tr2,tr3);
    // td.append(inputd);
    // tr.append(td);
    // tbody.append(tr);
    table.append(tbody);

    form.append(ip,table);
    box.append(form);
    main.append(box);
    document.body.append(main);

    function insert(num){
            document.form.textview.value+=num;
        }
        function equal(){
            var exp=form.textview.value;
            if(exp){
                document.form.textview.value=eval(exp);
            }
        }
        function clean(){
            document.form.textview.value="";
        }
