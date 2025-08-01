import React from "react";
import { Typography, Button, Row, Col } from "antd";
import { ArrowRightOutlined, CalendarOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Animated Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: 300,
          height: 300,
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: 200,
          height: 200,
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50%",
          animation: "float 4s ease-in-out infinite reverse",
        }}
      />

      <div style={{ width: "100%", padding: "0 20px" }}>
        <Row align="middle" justify="center" gutter={[20, 20]}>
          <Col xs={22} sm={20} md={12} lg={10}>
            <div className="hero-content">
              <Title
                style={{
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: 52,
                  lineHeight: 1.2,
                  marginBottom: 24,
                  textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                Your Perfect
                <br />
                <span
                  style={{
                    background: "linear-gradient(45deg, #12b3b6, #0ea5e9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Smile Awaits
                </span>
              </Title>
              <Paragraph
                style={{
                  fontSize: 20,
                  color: "rgba(255, 255, 255, 0.9)",
                  margin: "32px 0",
                  lineHeight: 1.6,
                }}
              >
                Experience world-class dental care with cutting-edge technology and a team
                that genuinely cares about your oral health journey.
              </Paragraph>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Button
                  type="primary"
                  size="large"
                  href="#appointment"
                  icon={<CalendarOutlined />}
                  style={{
                    borderRadius: 30,
                    height: 50,
                    fontSize: 16,
                    background: "linear-gradient(135deg, #12b3b6, #0ea5e9)",
                    border: "none",
                    boxShadow: "0 8px 30px rgba(18, 179, 182, 0.4)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow = "0 12px 40px rgba(18, 179, 182, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 8px 30px rgba(18, 179, 182, 0.4)";
                  }}
                >
                  Book Appointment
                </Button>
                <Button
                  size="large"
                  href="#services"
                  icon={<ArrowRightOutlined />}
                  style={{
                    borderRadius: 30,
                    height: 50,
                    fontSize: 16,
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "#fff",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Our Services
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={22} sm={20} md={12} lg={10} style={{ textAlign: "center" }}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: 32,
                padding: 40,
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div style={{ fontSize: 80, marginBottom: 20 }}>🦷</div>
              <Title level={3} style={{ color: "#fff", marginBottom: 16 }}>
                15+ Years of Excellence
              </Title>
              <Paragraph style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: 16 }}>
                Trusted by over 5,000 happy patients
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
