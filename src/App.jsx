import Profile from './components/Profile'

export default function App() {
  return( 
        <div>
          <Profile 
           img={'./nmu.jpg'}
           name={'Confeitaria da Cida'} 
           bio={'Faço bolos, salgados, docinhos.'} 
           whatsAppUrl={'https://wa.me/+5585992614079'}
           email={'auciliasousa12@gmail.com'} 
           instagramUrl={'https://www.instagram.com/_confeitariadacida'} 
           />
        </div> 
   
  )
}
