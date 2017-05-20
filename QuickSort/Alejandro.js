function quickSort(a, left=0, right=a.length-1)   {  
   if (right > left){
    let i=left, j=right, tmp;    

    let v = a[right]; 
    do {
        while(a[i]<v)
          i++;
        while(a[j]>v) 
          j--;
        if( i <= j){            
           tmp = a[i];
           a[i] = a[j];
           a[j] = tmp;
           i++;            
           j--;
        }
   } while(i <= j);           

    if(left < j)  quickSort(a,left,j);
    if(i < right) quickSort(a,i,right);
  }
}

module.exports = quickSort;