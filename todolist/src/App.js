import './App.css';
import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import CardShow from './components/CardShow';
import FormularioTarea from './components/FormularioTarea';

function App() {
  return (
    <div>
      <FormRegister/>
      <FormLogin/>
      <FormularioTarea/>
      <CardShow/>
    </div>
  );
}

export default App;
