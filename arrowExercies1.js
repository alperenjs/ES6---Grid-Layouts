//select all list convert to array
const $items = Array.from($('[data-time]'));

//filter for only elemetn contain word 'flexbox'
const filtered = $items
    .filter(item => item.textContent.includes("Flexbox"))
    //map down to a list of time strings
    .map(item => item.dataset.time) //data-time
    //map to an array of seconds
    .map(timeCode => {
        const parts = timeCode.split(':').map(part => parseFloat(part))
        return (parts[0] * 60)  + parts[1];
    })

    //reduce to get total
    .reduce((runningTotal, seconds) => runningTotal + seconds ,0)


    console.log(filtered); // total video seconds for flexbox


/////////////////////////another reduce example
    let books = [
        "ali tevfik",
        "mosso",
        "kaşağı",
        "kaşağı",
        "ali ata bak",
        "kaşağı"
     ];
     const firstValue = {};

     const reducer = (obj, count) => {
        if (!obj[count]){
            obj[count] = 1;
         } else {
            obj[count] = obj[count] + 1;
         }
         return obj;
     }
     const result = books.reduce(reducer, firstValue);
     
     console.log("Okuduğum kitaplar:", result);
     
     
     //////reduce example
     const dizi = [1, 2, 3, 4,5,6];
     const baslangicDegeri= 4;
     const sonuc = dizi.reduce((accumulator, currentValue, currentIndex, array)=>{
    //    console.log("baslangicDegeri: "+ baslangicDegeri);
    //    console.log("accumulator: "+ accumulator);
    //    console.log("currentValue: "+ currentValue);
    //    console.log("currentIndex: "+ currentIndex);
    //    console.log("array: "+ array);
       
       return accumulator += currentValue;
     } ,baslangicDegeri)
     console.log("toplam sayı " + sonuc)
     

     //max min puan bulma
     const kisiler = [
        {id: 1, adi: 'Ahmet', soyadi: 'Yüksekseslekonuşma', yas: 15, cinsiyet: 'Erkek', unvan: 'Öğrenci', puan: 65},
        {id: 2, adi: 'Sultan', soyadi: 'Hayvanlarısev', yas: 32, cinsiyet: 'Kadın', unvan: 'Öğretmen', puan: 75},
        {id: 3, adi: 'Hatiçe', soyadi: 'Çimenlerebasma', yas: 26, cinsiyet: 'Kadın', unvan: 'Doktor', puan: 85},
        {id: 4, adi: 'Ali', soyadi: 'Yerleretükürme', yas: 26, cinsiyet: 'Erkek', unvan: 'İşçi', puan: 75},
        {id: 4, adi: 'Kamuran', soyadi: 'Kurallarauy', yas: 52, cinsiyet: 'Kadın', unvan: 'Hemşire', puan: 95}
      ];
       
      const min = kisiler.reduce((x, y) => x < y.puan? x: y.puan, +Infinity),
            max = kisiler.reduce((x, y) => x > y.puan? x: y.puan, -Infinity);
       
      console.log("min:" +min, "max:"+max)
       
      const toplamyas = kisiler.reduce((t, obj) =>  t + obj.yas ,0) ;
        console.log("toplamyas " + toplamyas)
        
        
        
        //
        let cinsiyeteGoreKisiler = Object.keys(kisiler).reduce((acc, k) => {
            let a = kisiler[k];   
            acc[a.cinsiyet] = [...(acc[a.cinsiyet] || []), a]; 
            return acc;
          },  {});
           
           
          console.log(cinsiyeteGoreKisiler);





          //object keys values
          let kullanici = {
            adi: "Ahmet",
            yasi: 30
          };
         console.log(Object.keys(kullanici)) 
          Object.values(kullanici)
          Object.entries(kullanici) 



          