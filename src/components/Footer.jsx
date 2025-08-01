import React from "react";
import { Row, Col, Typography, Button } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #23356f 0%, #1a2456 100%)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(18, 179, 182, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)`,
        }}
      />

      <div style={{ position: "relative", padding: "80px 20px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "auto" }}>
          <Row gutter={[40, 40]}>
            {/* Brand Section */}
            <Col xs={24} sm={12} md={6}>
              <div style={{ marginBottom: 30 }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      background: "linear-gradient(135deg, #12b3b6, #0ea5e9)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 16,
                      boxShadow: "0 4px 20px rgba(18, 179, 182, 0.3)",
                    }}
                  >
                    <span style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>S</span>
                  </div>
                  <Title level={4} style={{ color: "#fff", marginBottom: 0, fontSize: 24 }}>
                    Dr Srikars' Advanced Dental Care
                  </Title>
                </div>
                <Paragraph style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: 15, lineHeight: 1.6 }}>
                  Your trusted partner for comprehensive dental care, combining advanced technology 
                  with compassionate treatment for over 15 years.
                </Paragraph>
              </div>
            </Col>

            {/* Contact Info */}
            <Col xs={24} sm={12} md={6}>
              <Title level={5} style={{ color: "#fff", marginBottom: 20, fontSize: 18 }}>
                Contact Information
              </Title>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "rgba(18, 179, 182, 0.2)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <EnvironmentOutlined style={{ color: "#12b3b6", fontSize: 18 }} />
                  </div>
                  <span style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: 14 }}>
                    123 Smile Street, Happy Town, USA
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "rgba(18, 179, 182, 0.2)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PhoneOutlined style={{ color: "#12b3b6", fontSize: 18 }} />
                  </div>
                  <span style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: 14 }}>
                    +1 (555) 123-4567
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "rgba(18, 179, 182, 0.2)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MailOutlined style={{ color: "#12b3b6", fontSize: 18 }} />
                  </div>
                  <a
                    href="mailto:drsrikars.in"
                    style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: 14, textDecoration: "none" }}
                  >
                    drsrikars.in
                  </a>
                </div>
              </div>
            </Col>

            {/* Office Hours */}
            <Col xs={24} sm={12} md={6}>
              <Title level={5} style={{ color: "#fff", marginBottom: 20, fontSize: 18 }}>
                Office Hours
              </Title>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: 14 }}>Monday - Friday</span>
                  <span style={{ color: "#12b3b6", fontSize: 14, fontWeight: 600 }}>9:00 - 18:00</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: 14 }}>Saturday</span>
                  <span style={{ color: "#12b3b6", fontSize: 14, fontWeight: 600 }}>9:00 - 15:00</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: 14 }}>Sunday</span>
                  <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: 14 }}>Closed</span>
                </div>
                <div
                  style={{
                    marginTop: 16,
                    padding: 12,
                    background: "rgba(18, 179, 182, 0.2)",
                    borderRadius: 8,
                    border: "1px solid rgba(18, 179, 182, 0.3)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <ClockCircleOutlined style={{ color: "#12b3b6" }} />
                    <span style={{ color: "#12b3b6", fontSize: 13, fontWeight: 600 }}>
                      24/7 Emergency Care
                    </span>
                  </div>
                  <span style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: 12 }}>
                    Call us anytime for urgent dental needs
                  </span>
                </div>
              </div>
            </Col>

            {/* Social Media & CTA */}
            <Col xs={24} sm={12} md={6}>
              <Title level={5} style={{ color: "#fff", marginBottom: 20, fontSize: 18 }}>
                Stay Connected
              </Title>
              <Paragraph style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: 14, marginBottom: 20 }}>
                Follow us for dental tips, clinic updates, and oral health insights.
              </Paragraph>
              
              {/* Social Icons */}
              <div style={{ display: "flex", gap: 12, marginBottom: 30 }}>
                {[
                  { icon: FacebookOutlined, color: "#1877f2" },
                  { icon: TwitterOutlined, color: "#1da1f2" },
                  { icon: InstagramOutlined, color: "#e4405f" },
                  { icon: LinkedinOutlined, color: "#0077b5" },
                ].map(({ icon: Icon, color }, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: 44,
                      height: 44,
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = color;
                      e.target.style.transform = "translateY(-3px) scale(1.1)";
                      e.target.style.boxShadow = `0 8px 25px ${color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(255, 255, 255, 0.1)";
                      e.target.style.transform = "translateY(0) scale(1)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    <Icon style={{ color: "#fff", fontSize: 18 }} />
                  </div>
                ))}
              </div>

              {/* Emergency Button */}
              <Button
                type="primary"
                size="large"
                href="tel:+15551234567"
                style={{
                  width: "100%",
                  height: 50,
                  borderRadius: 25,
                  background: "linear-gradient(135deg, #12b3b6, #0ea5e9)",
                  border: "none",
                  fontSize: 16,
                  fontWeight: 600,
                  boxShadow: "0 8px 30px rgba(18, 179, 182, 0.4)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 12px 40px rgba(18, 179, 182, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 8px 30px rgba(18, 179, 182, 0.4)";
                }}
              >
                Emergency Call
              </Button>
            </Col>
          </Row>

          {/* Bottom Section */}
          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              marginTop: 60,
              paddingTop: 30,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: 14 }}>
              © {new Date().getFullYear()} Dr Srikars' Advanced Dental Care. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 13 }}>
              Designed with ❤️ for better smiles
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
