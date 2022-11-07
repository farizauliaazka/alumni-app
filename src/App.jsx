import './index.css';
import Konsultasi from './components/Konsultasi/konsultasi'
import AddTraining from './components/TambahTraining/AddTraining';
import ListTraining from './components/TambahTraining/listTraining';
import Sidebar from './components/Sidebar/sidebar';
import Notifikasi from './components/notifikasi/notifikasi';
import DetailKonsultasi from './components/Konsultasi/detailKonsultasi';
import DetailTraining from './components/TambahTraining/detailTraining';
import DetailTraining2 from './components/TambahTraining/detailTraining2';
import DetailTraining3 from './components/TambahTraining/detailTraining3';
import ListPerusahaan from './components/Home/listPerusahaan';
import Pengaturan from './components/Akun/pengaturan';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <>
        <Sidebar />
        <Routes>
        <Route  exact path='/AddTraining' element={<AddTraining />} />
        <Route  exact path='/listTraining' element={<ListTraining />} />
        <Route  exact path='/detailTraining' element={<DetailTraining />} />
        <Route  exact path='/detailTraining2' element={<DetailTraining2 />} />
        <Route  exact path='/detailTraining3' element={<DetailTraining3 />} />
        <Route  exact path='/' element={<Notifikasi />} />
        <Route  exact path='/konsultasi' element={<Konsultasi />} />
        <Route  exact path='/detailKonsultasi' element={<DetailKonsultasi />} />
        <Route  exact path='/listPerusahaan' element={<ListPerusahaan />} />
        <Route  exact path='/pengaturan' element={<Pengaturan />} />
        </Routes>
      </>
      </Router>
    </>
  );
}

export default App;
