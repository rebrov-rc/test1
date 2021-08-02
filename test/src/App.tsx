import React from 'react';
import bg1 from './img/bg1.jpg'
import './SASS/default.sass'
import OrderListContaiter from './Components/OrderList/OrderListContaiter';
import GoodsListContainer from './Components/GoodsList/GoodsListContainer';


const App : React.FC = ( ) => {


  const [ viewer, setViewer ] = React.useState<boolean>(false)

 const manageViewerFunction = (type : string) : void => {
  switch (type) {
    case 'open':
      setViewer(true);
      break;
    case 'close':
      setViewer(false);
       break;
  }
 }


  return (
    <div className="App">
        <img className='bg ' src={ bg1 } alt=""  />  
        <div className="content-app" >
              <OrderListContaiter manageViewer = {manageViewerFunction}/>
               { viewer &&  <GoodsListContainer manageViewer = {manageViewerFunction} />}
        </div>
    </div>
  );
}

export default App;
