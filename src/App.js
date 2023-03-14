import './App.css';
import  Header  from './components/Header'
import Card from './components/Card'
import data from './data'
// import swimsuit from '../'



const App = () => {
    const myData = data.map(data => {
        return ( <Card  
        key={data.id}
        {...data}
         />)
    })
    return (
            <div >
            <Header />
            <section 
            className='sect' 
            >
           {myData}
           </section>
            </div>

    )
}

export default App;
