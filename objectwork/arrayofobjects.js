var products=[

 

        {id:1,title:"samasungs23ultra",price:130000,brand:"samsung"},
    
        {id:2,title:"m32",price:35000,brand:"samsung"},
    
        {id:3,title:"opporeno",price:27000,brand:"oppo"},
    
        {id:4,title:"mi21note",price:23000,brand:"mi"},
    
        {id:5,title:"moto edge 40",price:230000,brand:"moto"},
    
        {id:6,title:"moto ede40 neo",price:250000,brand:"moto"},
    
        {id:7,title:"iphone13",price:140000,brand:"apple"},
    
        {id:8,title:"iphone13pro",price:150000,brand:"apple"},
    
    ]

var productNames=products.map(p=>p.title)

console.log(productNames);

//print all mobiles mane available under rs 35k

var mobilepricefilter=products.filter(p=>p.price<35000).map(p=>p.title)

console.log(mobilepricefilter);

//print all samsung mobiles available under 50k

var samsungmobilefilter=products.filter(p=>p.brand=="samsung" && p.price<50000).map(p=>p.title)

console.log(samsungmobilefilter);

//product name available range of 25k -35k

products



//movie with highest runtime
//var higestruntimemovie=filims.reduce((m1,m2)=>number(m2.runtime)>m1:m2
//consol log(hightestrunstime)

//filter by year
//var yc={}
//filims.map(f=>f.year in yc ?yc[f.year]+=1:yc[f.year]=1)
//console.log(object.entries(yc).reduce((o1,o2)=>o1[1]>o2[1]o1:o2))






