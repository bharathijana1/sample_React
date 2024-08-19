import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Create';
import Read from './Read';
import Update from './Update';

export const CRUDindex = () => {
    return (
        <BrowserRouter>

              <h2 className="text-center p-3">React Crud Operations</h2>
              <div>
                <Routes>
                  <Route path='/' element={<Create />} />
                </Routes>
                <div style={{ marginTop: 20 }}>
                  <Routes>
                    <Route exact path='/read' element={<Read />} />
                  </Routes>
                </div>
                <Routes>
                  <Route path='/update' element={<Update />} />
                </Routes>
              </div>

        </BrowserRouter>
    );
}

