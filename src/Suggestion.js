import React from 'react'
export default function suggestion() {
  return (
<div className="suggestion-box position-absolute start-0 border border-1 border-secondary bg-white shadow p-3 z-index-1 w-100">
    <p className="p-1">Latest Trends</p>
   <div className="d-flex justify-content-between">
  
     <div className="suggestion-card">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8OfqlX6-VC5yKQ-_eaq6CIH24KaK4OFl2iA&usqp=CAU" alt="Product 1" />
       <span>Product 1</span>
     </div>
     <div className="suggestion-card">
       <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15508746/2021/10/8/76d93c26-46fa-4946-826c-8957e2ff173c1633676949601-SASSAFRAS-Women-Jumpsuit-9261633676949313-1.jpg" alt="Product 2" />
       <span>Product 2</span>
     </div>
     <div className="suggestion-card">
       <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24251476/2023/7/29/2fecdcb2-6eb0-47df-aec7-8109992610f21690621383817ClothingSet1.jpg" alt="Product 3" />
       <span>Product 3</span>
     </div>
     <div className="suggestion-card">
       <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12414994/2020/10/5/3ed22679-bb13-4132-81bf-1ee0574ffa331601888051173-Sangria-Women-Dresses-5081601888049484-1.jpg" alt="Product 4" />
       <span>Product 4</span>
     </div>
     <div className="suggestion-card">
       <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24283556/2023/8/1/bd9214e3-b2ee-4c5c-afe6-ef4ba6f7a8c51690894330669BAESDWomenBlackRelaxedStraightLegTrousers1.jpg" alt="Product 5" />
       <span>Product 5</span>
     </div>
     <div className="suggestion-card">
       <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18076128/2022/5/16/7c80524f-56e6-4425-a129-c43ddd039f9e1652677781758-Saree-mall-Black-Crepe-Ethnic-Digital-Print-Festive-Wear-Sar-1.jpg" alt="Product 6" />
       <span>Product 6</span>
     </div>
     <div className="suggestion-card ">
       <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/15598130/2021/10/11/00b95453-af40-4cfe-a8fb-51960607777e1633926686080-DILLINGER-Women-Tshirts-7421633926685543-1.jpg" alt="Product 7" />
       <span>Product 7</span>
     </div>
   </div>
   <div className="p-1">
     <span>Popular Suggestions:</span>
     <div className=" d-flex align-items-center p-2 border-bottom">Suggestion 1</div>
     <div className=" d-flex align-items-center p-2 border-bottom">Suggestion 2</div>
     <div className=" d-flex align-items-center p-2 border-bottom">Suggestion 3</div>
     <div className=" d-flex align-items-center p-2 border-bottom">Suggestion 4</div>
     <div className=" d-flex align-items-center p-2 border-bottom">Suggestion 5</div>
   </div>
 </div>
  )
}
