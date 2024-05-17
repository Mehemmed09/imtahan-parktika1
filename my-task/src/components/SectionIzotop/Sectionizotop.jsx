import React from 'react'
import "../SectionOne/Section.css"
function Sectionizotop  () {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Ürünler alınamadı:', error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Boş bağımlılık dizisi, sadece ilk render'da çalışması için

  return (
    <><section className='izotopSection'>
        <div className="portfolio-menu">
            <ul>
            <li data-filter='*' className='active'>Main</li>
            <li data-filter='desert' className='active'>Desert</li>
            <li data-filter='drinks' className='active'>Drinks</li>
              
            </ul>
        </div>
     <div className="grid">
     <div className="card1 desert">
        <div className="cardimage">
            <img src="https://preview.colorlib.com/theme/tasty/images/dessert-1.jpg.webp" alt="" />
        </div>
        <div class="cardtitle"><h3>Grilled Beef with potatoes</h3>
        <p><span>Meat</span>,<span>Potatoes</span>,<span>Rice</span></p></div>
        <div className="cardprice">29$</div>
      </div> <div className="card1 main">
        <div className="cardimage">
            <img src="https://preview.colorlib.com/theme/tasty/images/dessert-1.jpg.webp" alt="" />
        </div>
        <div class="cardtitle"><h3>Grilled Beef with potatoes</h3>
        <p><span>Meat</span>,<span>Potatoes</span>,<span>Rice</span></p></div>
        <div className="cardprice">29$</div>
      </div> <div className="card1 drinks">
        <div className="cardimage">
            <img src="https://preview.colorlib.com/theme/tasty/images/dessert-1.jpg.webp" alt="" />
        </div>
        <div class="cardtitle"><h3>Grilled Beef with potatoes</h3>
        <p><span>Meat</span>,<span>Potatoes</span>,<span>Rice</span></p></div>
        <div className="cardprice">29$</div>
      </div> <div className="card1 desert">
        <div className="cardimage">
            <img src="https://preview.colorlib.com/theme/tasty/images/dessert-1.jpg.webp" alt="" />
        </div>
        <div class="cardtitle"><h3>Grilled Beef with potatoes</h3>
        <p><span>Meat</span>,<span>Potatoes</span>,<span>Rice</span></p></div>
        <div className="cardprice">29$</div>
      </div> <div className="card1 desert">
        <div className="cardimage">
            <img src="https://preview.colorlib.com/theme/tasty/images/dessert-1.jpg.webp" alt="" />
        </div>
        <div class="cardtitle"><h3>Grilled Beef with potatoes</h3>
        <p><span>Meat</span>,<span>Potatoes</span>,<span>Rice</span></p></div>
        <div className="cardprice">29$</div>
      </div> <div className="card1 drinks">
        <div className="cardimage">
            <img src="https://preview.colorlib.com/theme/tasty/images/dessert-1.jpg.webp" alt="" />
        </div>
        <div class="cardtitle"><h3>Grilled Beef with potatoes</h3>
        <p><span>Meat</span>,<span>Potatoes</span>,<span>Rice</span></p></div>
        <div className="cardprice">29$</div>
      </div> <div className="card1 main">
        <div className="cardimage">
            <img src="https://preview.colorlib.com/theme/tasty/images/dessert-1.jpg.webp" alt="" />
        </div>
        <div class="cardtitle"><h3>Grilled Beef with potatoes</h3>
        <p><span>Meat</span>,<span>Potatoes</span>,<span>Rice</span></p></div>
        <div className="cardprice">29$</div>
      </div> <div className="card1 main">
        <div className="cardimage">
            <img src="https://preview.colorlib.com/theme/tasty/images/dessert-1.jpg.webp" alt="" />
        </div>
        <div class="cardtitle"><h3>Grilled Beef with potatoes</h3>
        <p><span>Meat</span>,<span>Potatoes</span>,<span>Rice</span></p></div>
        <div className="cardprice">29$</div>
      </div>
     </div>
     
    </section>
    </>
  )
}

export default Sectionizotop
