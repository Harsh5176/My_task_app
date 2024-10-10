import React from 'react'
import { Layout } from 'antd';
import Nav from './Nav';
import Allcards from './Allcards';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import Addtask from './Addtask';
  import Home from './Home';
  import About from './About';
const { Content } = Layout;
const Layoutpage = () => {
    
    return (
        <Layout>

            <Layout>
                <Router>
                <header>
                    <Nav />
                </header>
                <Content
                    style={{
                        margin: '24px 16px 0',
                        height: "100vh"
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                           
                        }}
                    >
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/addtask' element={<Addtask />} />
                            <Route path='/my_task' element={<Allcards />} />
                            <Route path='/about' element={<About />}/>
                        </Routes>
                       
                    </div>
                </Content>
                
                </Router>
            </Layout>
        </Layout>
    )
}
export default Layoutpage
