const insertionSort = (tab) => {
    for (let i = 1; i < tab.length; i++) {
    let x = tab[i] ;
        let j = i- 1;    
        while(j >= 0) {
            if (tab[j] > x) {
                tab[j + 1] = tab[j];
                tab[j] = x;
            }
            j = j - 1;
        }
    }
    return tab;
};

//console.log(insertionSort([5,3,11,-1]))
