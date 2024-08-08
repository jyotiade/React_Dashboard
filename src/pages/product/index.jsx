function Product() {

const pro =[
    
    {
        name: 'Antler Chandelier',
        image:'https://www.whiteteak.com/media/catalog/product/h/l/hl127-10006_01-1__1.jpg?width=560&height=560&canvas=560,560&optimize=high&fit=bounds',
        price:'Rs. 140,550.0',
        rating:'4.5',
        id:'1'
    },
      
    {
        name: 'Peacock Antique Light ',
        image:'https://zugunu.com/wp-content/uploads/2021/09/In-Circle-Antique-Peacock-Wall-Decor-1.jpg.webp',
        price:'₹6,968',
        rating:'4',
        id:'2'
    },
      
    {
        name: 'Wall Art',
        image:'https://m.media-amazon.com/images/I/61HaynH9yHL._SX679_.jpg',
        price:' ₹2,999',
        rating:'4',
        id:'3'
    },
      
    {
        name: ' Maroon Buddha ',
        image:'https://m.media-amazon.com/images/I/81EEky13thL._SL1500_.jpg',
        price:' ₹2,849',
        rating:'4.6 ',
        id:'4'
    },
      
    {
        name: ' Brass Aladdin Chirag Lamp',
        image:'https://ashtok.com/cdn/shop/files/IMG20231104163306_50ff8593-ee63-448b-b60c-a0b5720e8fb6_800x.jpg?v=1699443124',
        price:' ₹ 3,129',
        rating:'3',
        id:'5'
    },
      
    {
        name: ' Pocket Watch',
        image:'https://videohive.img.customer.envatousercontent.com/files/148485392/clok4_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=a63bd000495e43cb467d90f4f6b55495',
        price:'$47.59',
        rating:'4',
        id:'6'
    },
      
    {
        name: 'God Idols',
        image:'https://cdnmedia-breeze.vaibhavjewellers.com/media/webp_image/catalog/product/cache/30d09bf8af51e4fea389519968dfdb4b/image/118390c9a/silver-antique-embossed-lakshmi-devi-face-351va7376-351va7376.webp',
        price:'₹5,516',
        rating:'3.9',
        id:'7'
    },
      
    {
        name: ' Tribal Art',
        image:'https://m.media-amazon.com/images/I/61kQay8DxsL._SL1100_.jpg',
        price:'₹2,625',
        rating:'4.5',
        id:'8'
    },
    {
        name: 'Tree Kalpvriksha Brass ',
        image:'https://kalarambhbybharathaat.com/wp-content/uploads/2022/06/BH05864-1.jpg',
        price:'₹27,181.00',
        rating:'4.5',
        id:'9'
    },
    {
        name: 'Resin Krishna',
        image:'https://m.media-amazon.com/images/I/71gFFrA7XdL._SX425_.jpg',
        price:'1,861',
        rating:'5',
        id:'10'
    },
    {
        name: ' Antique elephant Show Piece',
        image:'https://5.imimg.com/data5/DF/AA/SO/ANDROID-29707629/product-jpeg-1000x1000.jpg',
        price:'₹ 4,200',
        rating:'4.5',
        id:'11'
    },
    {
        name: 'Gautam Buddha Idol',
        image:'https://www.jiomart.com/images/product/original/rvlicejqus/jiyansh-creation-meditating-vastu-fangshui-religious-lord-gautam-buddha-idol-statue-big-size-idols-home-decorative-showpiece-figurines-orange-color-polyresin-22-cm-product-images-orvlicejqus-p596920592-0-202301041315.jpg?im=Resize=(420,420)',
        price:'₹345.00',
        rating:'5',
        id:'12'
    },
    {
        name: 'Antique Peacock Mother',
        image:'https://cdn.shopclues.com/images1/thumbnails/90865/320/320/140165762-90865637-1533498071.jpg',
        price:'₹345.00',
        rating:'5',
        id:'13'
    },
    {
        name: 'Wooden Antique Painting Elephant',
        image:'https://lavanshiarts.com/wp-content/uploads/2019/10/WA-012-768x1075.jpg',
        price:'₹1905.00',
        rating:'4.6',
        id:'14'
    },
    {
        name: 'Swan Pair ',
        image:'https://m.media-amazon.com/images/I/51LdHcvbrVL._SX300_SY300_QL70_FMwebp_.jpg',
        price:' ₹1,399',
        rating:'5',
        id:'15'
    },
    {
        name: 'BAKA Wing Statue of Goddess ISIS ',
        image:'https://m.media-amazon.com/images/I/81-g5EcsfPL._SY606_.jpg',
        price:' ₹949',
        rating:'5',
        id:'16'
    },
    {
        name: 'Iron Decorative ',
        image:'https://5.imimg.com/data5/SELLER/Default/2022/9/OI/NC/LB/114016618/iron-decorative-showpiece-figurine.jpg',
        price:'₹ 950',
        rating:'4.7',
        id:'17'
    },
    {
        name: 'Brass Narayan Shankh',
        image:'https://m.media-amazon.com/images/I/812B6F8vJwL._SX425_.jpg',
        price:'₹2,830',
        rating:'5',
        id:'18'
    },
    {
        name: 'Wild Reindeer Sculpture',
        image:'https://www.trulyearthy.com/cdn/shop/files/deerstatue_1_12af950a-3ce2-442e-951d-fa9f9663bc85_720x.jpg?v=1698661669',
        price:'Rs. 12,499.00',
        rating:'4.4',
        id:'19'
    },
    {
        name: 'antique ship',
        image:'https://4.imimg.com/data4/SH/OP/MY-10030471/brass-antique-ship-showpiece-500x500.jpg',
        price:'₹1,999',
        rating:'4.5',
        id:'20'
    },
    {
        name: 'The Royal Horse Sculpture',
        image:'https://www.trulyearthy.com/cdn/shop/files/horseshowpiece_3_720x.jpg?v=1701685012',
        price:'Rs4,699.00',
        rating:'4.5',
        id:'20'
    }
 
];
 return (
     <>
        <section id="cardouter">
        {pro.map(e=>{
          return <div key={e.id}>
               <div class="product-card">
        <div class="product-image">
            <img src={e.image} alt="Product Image"/>
        </div>
        <div class="product-details">
            <div class="product-name">{e.name}</div>
            <div class="product-price">{e.price}</div>
            
        </div>
    </div> 
          </div>
        })}
    
      </section>
     </>
    );
  }
  
  export default Product;
  