import React, { useState, useEffect } from "react";
import { Layout, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function Navbar() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isMobile = windowWidth < 1100;

  const menuItems = [
    { key: "home", label: "Home", href: "#home" },
    { key: "why-choose-us", label: "Why Choose Us", href: "#why-choose-us" },
    { key: "doctor", label: "Doctors", href: "#doctor" },
    { key: "services", label: "Services", href: "#services" },
    { key: "gallery", label: "Gallery", href: "#gallery" },
    { key: "appointment", label: "Appointment", href: "#appointment" },
  ];

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 100,
        width: "100%",
        background: scrolled ? "rgba(255, 255, 255, 0.95)" : "#fff",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.1)" : "0 4px 24px #e5ebfa",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 70,
        paddingLeft: 24,
        paddingRight: 24,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 48,
            height: 48,
            background: "linear-gradient(135deg, #12b3b6, #0ea5e9)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 16,
            boxShadow: "0 4px 20px rgba(18, 179, 182, 0.3)",
          }}
        >
          <span style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>S</span>
        </div>
        <div
          style={{
            fontWeight: 900,
            fontSize: 24,
            background: "linear-gradient(135deg, #12b3b6, #0ea5e9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-.03em",
            userSelect: "none",
          }}
        >
          Dr Srikars' Advanced Dental Care
        </div>
      </div>

      {!isMobile && (
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              style={{
                color: "#333",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#12b3b6";
                e.target.style.background = "rgba(18, 179, 182, 0.1)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#333";
                e.target.style.background = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {isMobile && (
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: 20, color: "#12b3b6" }} />}
          onClick={() => setDrawerVisible(true)}
          style={{ border: "none", height: 40, width: 40 }}
        />
      )}

      <Drawer
        title={<span style={{ color: "#12b3b6", fontWeight: 600 }}>Dr Srikars' Advanced Dental Care</span>}
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        width={280}
        styles={{ body: { padding: 20 } }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setDrawerVisible(false)}
              style={{
                color: "#333",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
                padding: "12px 0",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </Drawer>
    </Header>
  );
}
