let num=345
let c=0

while(num>0){
    var b=num%10
    num=(num-b)/10
    c=(c*10)+b
}
document.write(c)
while(c>0){
    var d=c%10
    c=(c-d)/10
    if(d==0){
        document.write("Zero")
    }
    else if(d==1){
        document.write("One")
    }
    else if(d==2){
        document.write("Two")
    }
    else if(d==3){
        document.write("Three")
    }
    else if(d==4){
        document.write("Four")
    }
    else if(d==5){
        document.write("Five")
    }
    else if(d==6){
        document.write("Six")
    }
    else if(d==7){
        document.write("Seven")
    }
    else if(d==8){
        document.write("Eight")
    }
    else if(d==9){
        document.write("Nine")
    }
   
}