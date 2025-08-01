import React from "react";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Doctor from "./components/Doctor";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import AppointmentForm from "./components/AppointmentForm";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";

const { Content } = Layout;

export default function App() {
  return (
    <Layout>
      <Navbar />
      <Content style={{ paddingTop: 64, minHeight: "100vh" }}>
        <div id="home"><Home /></div>
        <div id="why-choose-us"><WhyChooseUs /></div>
        <div id="doctor"><Doctor /></div>
        <div id="services"><Services /></div>
        <div id="gallery"><Gallery /></div>
        <div id="appointment"><AppointmentForm /></div>
      </Content>
      <Footer />
    </Layout>
  );
}
