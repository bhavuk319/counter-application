import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const NameTow ="surfexcelll";
  return (
    <div>
      <Item name="nirma"></Item>
      <ItemDate day="20" montj="june" year='2000'></ItemDate>

      <Item name={NameTow}></Item>
      <ItemDate day="25" month="septembr" year='2010'></ItemDate>
      <div className='App'>hello jee</div>
    </div>

  );
}

export default App;
